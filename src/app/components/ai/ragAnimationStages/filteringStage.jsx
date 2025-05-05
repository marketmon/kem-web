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
        if (!graphRef?.current || !filteredNodeIds?.length || !retrievedNodeIds?.length) return;

        const graph = graphRef.current;

        // Save original properties
        originalPropsRef.current = {
            nodeColor: graph.nodeColor(),
            nodeVal: graph.nodeVal(),
            linkWidth: graph.linkWidth()
        };

        // Initial setup - all retrieved nodes start in neutral state
        setupInitialState(graph);

        return () => {
            cleanup(graph);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [graphRef, retrievedNodeIds, filteredNodeIds]);

    useEffect(() => {
        if (!graphRef?.current || !filteredNodeIds?.length || !retrievedNodeIds?.length) return;

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
                if (retrievedNodeIds.includes(node.id)) {
                    return '#777777';
                }
                return '#555555';
            })
            .nodeVal(node => {
                if (retrievedNodeIds.includes(node.id)) {
                    return node.val * nodeSize * 1.2;
                }
                return node.val * nodeSize * 0.5;
            })
            .linkWidth(0.5)
            .refresh();
    };

    // Simplified mobile version with fewer state changes
    const updateNodeAppearanceMobile = (graph, progress) => {
        // Process fewer nodes at once on mobile
        const nodesPerStep = Math.max(1, Math.floor(retrievedNodeIds.length / 10));
        const nodesProcessed = Math.floor(progress * retrievedNodeIds.length);

        graph
            .nodeColor(node => {
                if (!retrievedNodeIds.includes(node.id)) {
                    return '#555555';
                }

                const nodeIndex = retrievedNodeIds.indexOf(node.id);

                // Simplified evaluation state
                if (nodeIndex < nodesProcessed) {
                    if (filteredNodeIds.includes(node.id)) {
                        return '#00ff00';
                    } else {
                        return '#555555';
                    }
                }

                return '#555555';
            })
            .nodeVal(node => {
                const baseSize = node.val * nodeSize;

                if (!retrievedNodeIds.includes(node.id)) {
                    return baseSize * 0.5;
                }

                const nodeIndex = retrievedNodeIds.indexOf(node.id);

                if (nodeIndex < nodesProcessed) {
                    if (filteredNodeIds.includes(node.id)) {
                        return baseSize * 1.8; // Less dramatic size change
                    } else {
                        return baseSize * 0.6;
                    }
                }

                return baseSize * 1.2;
            });

        // Only refresh every few updates on mobile
        if (nodesProcessed % nodesPerStep === 0 || progress === 1) {
            graph.refresh();
        }
    };

    // Simplified mobile version with fewer link updates
    const updateLinkAppearanceMobile = (graph, progress) => {
        if (progress < 0.5 || progress === 1) { // Only update links at key points
            graph
                .linkWidth(link => {
                    const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
                    const targetId = typeof link.target === 'object' ? link.target.id : link.target;

                    if (progress === 1) {
                        const sourceFiltered = filteredNodeIds.includes(sourceId);
                        const targetFiltered = filteredNodeIds.includes(targetId);

                        if (sourceFiltered && targetFiltered) {
                            return 2.5;
                        } else if (sourceFiltered || targetFiltered) {
                            return 1;
                        }
                    }

                    return 0.5;
                });
        }
    };

    const updateNodeAppearance = (graph, progress) => {
        // Original desktop version - unchanged
        const nodesProcessed = Math.floor(progress * retrievedNodeIds.length);
        const currentProcessingIndex = Math.min(nodesProcessed, retrievedNodeIds.length - 1);
        const isProcessing = progress < 1;

        graph
            .nodeColor(node => {
                if (!retrievedNodeIds.includes(node.id)) {
                    return '#555555';
                }

                const nodeIndex = retrievedNodeIds.indexOf(node.id);

                if (isProcessing && nodeIndex === currentProcessingIndex) {
                    return '#ffff00';
                }

                if (nodeIndex < nodesProcessed) {
                    if (filteredNodeIds.includes(node.id)) {
                        return '#00ff00';
                    } else {
                        return '#555555';
                    }
                }

                return '#555555';
            })
            .nodeVal(node => {
                const baseSize = node.val * nodeSize;

                if (!retrievedNodeIds.includes(node.id)) {
                    return baseSize * 0.5;
                }

                const nodeIndex = retrievedNodeIds.indexOf(node.id);

                if (isProcessing && nodeIndex === currentProcessingIndex) {
                    return baseSize * 2.5;
                }

                if (nodeIndex < nodesProcessed) {
                    if (filteredNodeIds.includes(node.id)) {
                        return baseSize * 2;
                    } else {
                        return baseSize * 0.5;
                    }
                }

                return baseSize * 1.2;
            });

        graph.refresh();
    };

    const updateLinkAppearance = (graph, progress) => {
        // Original desktop version - unchanged
        const nodesProcessed = Math.floor(progress * retrievedNodeIds.length);

        graph
            .linkWidth(link => {
                const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
                const targetId = typeof link.target === 'object' ? link.target.id : link.target;

                const sourceRetrieved = retrievedNodeIds.includes(sourceId);
                const targetRetrieved = retrievedNodeIds.includes(targetId);

                if (!sourceRetrieved || !targetRetrieved) {
                    return 0.5;
                }

                const sourceIndex = retrievedNodeIds.indexOf(sourceId);
                const targetIndex = retrievedNodeIds.indexOf(targetId);

                if (sourceIndex < nodesProcessed && targetIndex < nodesProcessed) {
                    const sourceFiltered = filteredNodeIds.includes(sourceId);
                    const targetFiltered = filteredNodeIds.includes(targetId);

                    if (sourceFiltered && targetFiltered) {
                        return 3;
                    } else if (sourceFiltered || targetFiltered) {
                        return 1;
                    } else {
                        return 0.3;
                    }
                }

                return 1.5;
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