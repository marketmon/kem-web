import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const FilteringStage = ({
    graphRef,
    graphData,
    retrievedNodeIds,
    filteredNodeIds,
    progress,
    isMobile,
    nodeSize = 1,
    colorMap
}) => {
    const originalPropsRef = useRef(null);
    const lastUpdateRef = useRef(0);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        if (!graphRef?.current || !retrievedNodeIds?.length) return;

        const graph = graphRef.current;

        // Save original properties
        originalPropsRef.current = {
            nodeColor: graph.nodeColor(),
            nodeVal: graph.nodeVal(),
            linkWidth: graph.linkWidth()
        };

        // Initial setup - highlight all retrieved nodes
        setupInitialState(graph);

        return () => {
            cleanup(graph);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [graphRef, retrievedNodeIds, filteredNodeIds]);

    useEffect(() => {
        if (!graphRef?.current || !retrievedNodeIds?.length) return;

        const graph = graphRef.current;

        // Use requestAnimationFrame for smoother updates
        const updateAnimation = () => {
            const now = Date.now();

            // Throttle updates on mobile to every 100ms (10 FPS)
            if (isMobile && now - lastUpdateRef.current < 100) {
                animationFrameRef.current = requestAnimationFrame(updateAnimation);
                return;
            }

            lastUpdateRef.current = now;

            // Update nodes and links with mobile-optimized settings
            if (isMobile) {
                updateNodeAppearanceMobile(graph, progress);
                updateLinkAppearanceMobile(graph, progress);
            } else {
                updateNodeAppearance(graph, progress);
                updateLinkAppearance(graph, progress);
            }
        };

        animationFrameRef.current = requestAnimationFrame(updateAnimation);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [graphRef, retrievedNodeIds, filteredNodeIds, progress, isMobile]);

    const setupInitialState = (graph) => {
        graph
            .nodeColor(node => {
                // All retrieved nodes start highlighted
                if (retrievedNodeIds.includes(node.id)) {
                    return '#ffaa00'; // Highlight color for retrieved nodes
                }
                return '#555555'; // Default color for other nodes
            })
            .nodeVal(node => {
                if (retrievedNodeIds.includes(node.id)) {
                    return node.val * nodeSize * 1.5; // Bigger size for retrieved nodes
                }
                return node.val * nodeSize * 0.5; // Smaller size for other nodes
            })
            .linkWidth(link => {
                const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
                const targetId = typeof link.target === 'object' ? link.target.id : link.target;

                const sourceRetrieved = retrievedNodeIds.includes(sourceId);
                const targetRetrieved = retrievedNodeIds.includes(targetId);

                if (sourceRetrieved && targetRetrieved) {
                    return 1.5; // Highlight links between retrieved nodes
                }
                return 0.5; // Default link width
            })
            .refresh();
    };

    // Simplified mobile version with fewer state changes
    const updateNodeAppearanceMobile = (graph, progress) => {
        // Calculate which node is currently being focused on
        const nodeCount = retrievedNodeIds.length;
        const focusIndex = Math.min(Math.floor(progress * (nodeCount + 1)), nodeCount - 1);
        const isFinished = progress >= 1;

        graph
            .nodeColor(node => {
                if (!retrievedNodeIds.includes(node.id)) {
                    return '#555555'; // Default color for non-retrieved nodes
                }

                const nodeIndex = retrievedNodeIds.indexOf(node.id);

                // Node currently being focused on
                if (!isFinished && nodeIndex === focusIndex) {
                    return '#ffff00'; // Focus color (yellow)
                }

                // Nodes that have been processed
                if (nodeIndex < focusIndex || isFinished) {
                    if (filteredNodeIds.includes(node.id)) {
                        return '#00ff00'; // Filtered node color (green)
                    } else {
                        return '#777777'; // Processed but not filtered (gray)
                    }
                }

                // Nodes not yet processed
                return '#ffaa00'; // Highlighted but not processed (orange)
            })
            .nodeVal(node => {
                const baseSize = node.val * nodeSize;

                if (!retrievedNodeIds.includes(node.id)) {
                    return baseSize * 0.5; // Smaller size for non-retrieved nodes
                }

                const nodeIndex = retrievedNodeIds.indexOf(node.id);

                // Node currently being focused on
                if (!isFinished && nodeIndex === focusIndex) {
                    return baseSize * 2.2; // Largest size for focused node
                }

                // Nodes that have been processed
                if (nodeIndex < focusIndex || isFinished) {
                    if (filteredNodeIds.includes(node.id)) {
                        return baseSize * 1.8; // Larger size for filtered nodes
                    } else {
                        return baseSize * 0.7; // Smaller size for processed but not filtered
                    }
                }

                // Nodes not yet processed
                return baseSize * 1.5; // Medium size for highlighted but not processed
            });

        // Only refresh every few updates on mobile for performance
        if (Math.random() < 0.2 || isFinished) {
            graph.refresh();
        }
    };

    // Simplified mobile version with fewer link updates
    const updateLinkAppearanceMobile = (graph, progress) => {
        // Update links less frequently on mobile
        if (progress < 0.3 || progress > 0.7 || progress === 1) {
            graph
                .linkWidth(link => {
                    const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
                    const targetId = typeof link.target === 'object' ? link.target.id : link.target;

                    const sourceFiltered = filteredNodeIds.includes(sourceId);
                    const targetFiltered = filteredNodeIds.includes(targetId);

                    if (sourceFiltered && targetFiltered) {
                        return 2; // Thicker links between filtered nodes
                    } else if (sourceFiltered || targetFiltered) {
                        return 1; // Medium links connected to filtered nodes
                    }

                    return 0.5; // Default link width
                });
        }
    };

    const updateNodeAppearance = (graph, progress) => {
        // Calculate which node is currently being focused on
        const nodeCount = retrievedNodeIds.length;
        const focusIndex = Math.min(Math.floor(progress * (nodeCount + 1)), nodeCount - 1);
        const isFinished = progress >= 1;

        graph
            .nodeColor(node => {
                if (!retrievedNodeIds.includes(node.id)) {
                    return '#555555'; // Default color for non-retrieved nodes
                }

                const nodeIndex = retrievedNodeIds.indexOf(node.id);

                // Node currently being focused on
                if (!isFinished && nodeIndex === focusIndex) {
                    return '#ffff00'; // Focus color (yellow)
                }

                // Nodes that have been processed
                if (nodeIndex < focusIndex || isFinished) {
                    if (filteredNodeIds.includes(node.id)) {
                        return '#00ff00'; // Filtered node color (green)
                    } else {
                        return '#777777'; // Processed but not filtered (gray)
                    }
                }

                // Nodes not yet processed
                return '#ffaa00'; // Highlighted but not processed (orange)
            })
            .nodeVal(node => {
                const baseSize = node.val * nodeSize;

                if (!retrievedNodeIds.includes(node.id)) {
                    return baseSize * 0.5; // Smaller size for non-retrieved nodes
                }

                const nodeIndex = retrievedNodeIds.indexOf(node.id);

                // Node currently being focused on
                if (!isFinished && nodeIndex === focusIndex) {
                    return baseSize * 2.5; // Largest size for focused node
                }

                // Nodes that have been processed
                if (nodeIndex < focusIndex || isFinished) {
                    if (filteredNodeIds.includes(node.id)) {
                        return baseSize * 2; // Larger size for filtered nodes
                    } else {
                        return baseSize * 0.7; // Smaller size for processed but not filtered
                    }
                }

                // Nodes not yet processed
                return baseSize * 1.5; // Medium size for highlighted but not processed
            });

        graph.refresh();
    };

    const updateLinkAppearance = (graph, progress) => {
        const nodeCount = retrievedNodeIds.length;
        const focusIndex = Math.min(Math.floor(progress * (nodeCount + 1)), nodeCount - 1);
        const isFinished = progress >= 1;

        graph
            .linkWidth(link => {
                const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
                const targetId = typeof link.target === 'object' ? link.target.id : link.target;

                const sourceRetrieved = retrievedNodeIds.includes(sourceId);
                const targetRetrieved = retrievedNodeIds.includes(targetId);

                if (!sourceRetrieved || !targetRetrieved) {
                    return 0.5; // Default width for links not connecting retrieved nodes
                }

                const sourceIndex = retrievedNodeIds.indexOf(sourceId);
                const targetIndex = retrievedNodeIds.indexOf(targetId);

                // Focus on links connected to the currently focused node
                if (!isFinished && (sourceIndex === focusIndex || targetIndex === focusIndex)) {
                    return 2.5; // Highlight links connected to focused node
                }

                // Links between processed nodes
                if ((sourceIndex < focusIndex && targetIndex < focusIndex) || isFinished) {
                    const sourceFiltered = filteredNodeIds.includes(sourceId);
                    const targetFiltered = filteredNodeIds.includes(targetId);

                    if (sourceFiltered && targetFiltered) {
                        return 3; // Thicker links between filtered nodes
                    } else if (sourceFiltered || targetFiltered) {
                        return 1.5; // Medium links connected to filtered nodes
                    } else {
                        return 0.3; // Thin links between non-filtered nodes
                    }
                }

                // Links connected to nodes not yet processed
                return 1; // Default width for retrieved but not processed
            });

        graph.refresh();
    };

    const cleanup = (graph) => {
        if (originalPropsRef.current) {
            graph
                .nodeColor(originalPropsRef.current.nodeColor)
                .nodeVal(originalPropsRef.current.nodeVal)
                .linkWidth(originalPropsRef.current.linkWidth)
                .refresh();
        }
    };

    return null;
};

FilteringStage.propTypes = {
    graphRef: PropTypes.object.isRequired,
    graphData: PropTypes.object.isRequired,
    retrievedNodeIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    filteredNodeIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    progress: PropTypes.number.isRequired,
    isMobile: PropTypes.bool,
    nodeSize: PropTypes.number,
    colorMap: PropTypes.object.isRequired
};

export default FilteringStage;