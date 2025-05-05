import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ThinkingAnimation = ({
    graphRef,
    graphData,
    isVisible,
    colorMap,
    isMobile
}) => {
    const animationFrameRef = useRef(null);
    const highlightTimerRef = useRef(null);
    const cameraAngleRef = useRef(0);

    useEffect(() => {
        if (!graphRef?.current || !isVisible) return;

        const graph = graphRef.current;

        // Function to highlight a random node
        const highlightRandomNode = () => {
            if (graphData.nodes.length === 0) return;

            // Select 4 unique random nodes
            const shuffledNodes = [...graphData.nodes].sort(() => 0.5 - Math.random());
            const selectedNodes = shuffledNodes.slice(0, 4);
            const selectedNodeIds = new Set(selectedNodes.map(node => node.id));

            // Find all connected links and nodes
            const highlightLinks = graphData.links.filter(link => {
                const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
                const targetId = typeof link.target === 'object' ? link.target.id : link.target;
                return selectedNodeIds.has(sourceId) || selectedNodeIds.has(targetId);
            });

            const connectedNodeIds = new Set();
            highlightLinks.forEach(link => {
                const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
                const targetId = typeof link.target === 'object' ? link.target.id : link.target;
                connectedNodeIds.add(sourceId);
                connectedNodeIds.add(targetId);
            });

            // Update node colors
            graph.nodeColor(node => {
                if (selectedNodeIds.has(node.id)) {
                    return '#ffcc00'; // Highlighted nodes
                } else if (connectedNodeIds.has(node.id)) {
                    return '#ff9900'; // Connected nodes
                } else {
                    return '#aaaaaa'; // Default color
                }
            });

            // Schedule next highlight
            highlightTimerRef.current = setTimeout(() => {
                highlightRandomNode();
            }, 500);
        };

        // Camera spin animation
        const animate = () => {
            if (!isVisible) return;

            // Increment camera angle for slow rotation
            cameraAngleRef.current += 0.0005;

            // Update camera position in a circle around the graph
            const radius = 800;
            const cameraX = radius * Math.cos(cameraAngleRef.current);
            const cameraZ = radius * Math.sin(cameraAngleRef.current);
            const cameraY = 100; // Slight elevation

            graph.cameraPosition(
                { x: cameraX, y: cameraY, z: cameraZ },
                { x: 0, y: 0, z: 0 },
                0
            );

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Start animations
        animate();
        highlightRandomNode();

        // Cleanup when component unmounts or isVisible becomes false
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (highlightTimerRef.current) {
                clearTimeout(highlightTimerRef.current);
            }

            // Reset graph to original state
            if (graph) {
                graph.linkOpacity(0.5)
                    .linkWidth(1)
                    .nodeColor(node => colorMap[node.group] || '#888888');
            }
        };
    }, [graphRef, isVisible, colorMap, isMobile, graphData]);

    return null;
};

ThinkingAnimation.propTypes = {
    graphRef: PropTypes.object.isRequired,
    graphData: PropTypes.object.isRequired,
    isVisible: PropTypes.bool.isRequired,
    colorMap: PropTypes.object.isRequired,
    isMobile: PropTypes.bool
};

export default ThinkingAnimation;