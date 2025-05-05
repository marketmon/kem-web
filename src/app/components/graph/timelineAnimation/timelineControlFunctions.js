// Function to update visibility based on timeline position
export const updateTimelineVisibility = (index, graphRef, graphState, nodeDates) => {
    if (!graphRef.current) return;

    const visibleNodes = new Set();

    // Add all dated nodes up to current index
    for (let i = 0; i <= index; i++) {
        if (i < nodeDates.length) {
            visibleNodes.add(nodeDates[i].id);
        }
    }

    // Add connected nodes (skills, characteristics, etc.)
    graphState.links.forEach(link => {
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;

        if (visibleNodes.has(sourceId)) {
            const targetNode = graphState.nodes.find(n => n.id === targetId);
            if (targetNode && ['skill', 'characteristic', 'book', 'collaborator', 'class'].includes(targetNode.group)) {
                visibleNodes.add(targetId);
            }
        }
        if (visibleNodes.has(targetId)) {
            const sourceNode = graphState.nodes.find(n => n.id === sourceId);
            if (sourceNode && ['skill', 'characteristic', 'book', 'collaborator', 'class'].includes(sourceNode.group)) {
                visibleNodes.add(sourceId);
            }
        }
    });

    // Update node visibility
    graphRef.current.nodeVisibility(node => visibleNodes.has(node.id));

    // Update link visibility
    graphRef.current.linkVisibility(link => {
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;
        return visibleNodes.has(sourceId) && visibleNodes.has(targetId);
    });

    // HIGHLIGHT THE CURRENT NODE
    if (nodeDates[index]) {
        const currentNodeId = nodeDates[index].id;
        const currentNode = graphState.nodes.find(n => n.id === currentNodeId);

        if (currentNode) {
            // Reset all nodes to default color and size
            graphRef.current.nodeColor(node => {
                if (node.id === currentNodeId) {
                    // Highlight current node with a glowing white
                    return '#FFFFFF'; // Bright white for emphasis
                }
                // Return to default color based on group using your colorMap
                switch (node.group) {
                    case 'endeavor': return '#ff4500';      // Orange-red
                    case 'class': return '#1e90ff';         // Dodger blue
                    case 'artifact': return '#32cd32';      // Lime green
                    case 'skill': return '#ffd700';         // Gold
                    case 'characteristic': return '#ff69b4'; // Hot pink
                    case 'book': return '#fff';             // White
                    case 'collaborator': return '#008080';  // Teal
                    case 'knowledge': return '#9370db';     // Purple
                    default: return '#cccccc';
                }
            });

            // Update node sizes
            graphRef.current.nodeVal(node => {
                if (node.id === currentNodeId) {
                    // Make current node 50% larger for subtle emphasis
                    return (node.val || 4) * 1.5;
                }
                return node.val || 4;
            });

            // Create a pulsing animation for the current node
            const material = currentNode.__threeObj?.material;
            if (material) {
                // Use a white emissive glow
                material.emissive.setStyle('#FFFFFF');
                material.emissiveIntensity = 0.5;

                // Create pulsing animation
                let pulseDirection = 1;
                let currentIntensity = 0.5;

                const pulse = () => {
                    currentIntensity += 0.005 * pulseDirection; // Slower pulse
                    if (currentIntensity >= 0.7) {
                        pulseDirection = -1;
                    } else if (currentIntensity <= 0.3) {
                        pulseDirection = 1;
                    }
                    material.emissiveIntensity = currentIntensity;

                    if (currentNode.id === currentNodeId) {
                        requestAnimationFrame(pulse);
                    }
                };
                pulse();
            }


        }
    }
};

export const startTimeline = (
    setTimelineActive,
    setTimelineState,
    timelineInterval,
    timelineState,
    graphRef,
    graphState,
    nodeDates
) => {
    setTimelineActive(true);
    setTimelineState(prev => ({ ...prev, currentIndex: 0, playing: true }));
    updateTimelineVisibility(0, graphRef, graphState, nodeDates);

    timelineInterval.current = setInterval(() => {
        setTimelineState(prev => {
            const nextIndex = prev.currentIndex + 1;
            if (nextIndex >= nodeDates.length) {
                clearInterval(timelineInterval.current);
                return { ...prev, playing: false };
            }
            updateTimelineVisibility(nextIndex, graphRef, graphState, nodeDates);
            return { ...prev, currentIndex: nextIndex };
        });
    }, 1000 / timelineState.speed);
};