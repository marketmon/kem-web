import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ExpansionStage = ({
    graphRef,
    graphData,
    filteredNodeIds,
    expandedNodeIds,
    progress,
    isMobile,
    nodeSize = 1,
    colorMap
}) => {
    const originalPropsRef = useRef(null);
    const activationSequenceRef = useRef(null);

    useEffect(() => {
        if (!graphRef?.current || !expandedNodeIds?.length) return;

        const graph = graphRef.current;

        // Save original properties
        originalPropsRef.current = {
            nodeColor: graph.nodeColor(),
            nodeVal: graph.nodeVal(),
            linkWidth: graph.linkWidth()
        };

        setupInitialState(graph);
        determineActivationSequence();
        focusCameraOnExpansion(graph);

        return () => {
            cleanup(graph);
        };
    }, [graphRef, filteredNodeIds, expandedNodeIds]);

    useEffect(() => {
        if (!graphRef?.current || !expandedNodeIds?.length) return;

        const graph = graphRef.current;
        updateExpansionHighlighting(graph, progress);
    }, [graphRef, filteredNodeIds, expandedNodeIds, progress]);

    const focusCameraOnExpansion = (graph) => {
        const allNodes = graphData.nodes.filter(n =>
            filteredNodeIds.includes(n.id) || expandedNodeIds.includes(n.id)
        );
        if (!allNodes.length) return;

        const bounds = ['x', 'y', 'z'].reduce((acc, axis) => {
            const values = allNodes.map(n => n[axis] || 0);
            acc.min[axis] = Math.min(...values);
            acc.max[axis] = Math.max(...values);
            return acc;
        }, { min: {}, max: {} });

        const center = {
            x: (bounds.min.x + bounds.max.x) / 2,
            y: (bounds.min.y + bounds.max.y) / 2,
            z: (bounds.min.z + bounds.max.z) / 2
        };

        const extent = Math.max(
            bounds.max.x - bounds.min.x,
            bounds.max.y - bounds.min.y,
            bounds.max.z - bounds.min.z
        );

        const dist = 2 * extent;
        const camPos = { x: center.x, y: center.y, z: center.z + dist };

        graph.cameraPosition(camPos, center, 2000);
    };

    const setupInitialState = (graph) => {
        graph
            .nodeColor(node => {
                if (filteredNodeIds.includes(node.id)) {
                    return '#00ff00'; // Green for filtered nodes
                }
                return '#555555'; // Gray for others
            })
            .nodeVal(node => {
                const base = node.val * nodeSize;
                if (filteredNodeIds.includes(node.id)) {
                    return base * 2;
                }
                return base * 0.5;
            })
            .linkWidth(link => {
                const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
                const targetId = typeof link.target === 'object' ? link.target.id : link.target;

                if (filteredNodeIds.includes(sourceId) && filteredNodeIds.includes(targetId)) {
                    return 3;
                }
                return 0.5;
            })
            .refresh();
    };

    const determineActivationSequence = () => {
        // Create simple activation order based on node index
        const sequence = expandedNodeIds.map((nodeId, index) => ({
            nodeId,
            delay: index / expandedNodeIds.length
        }));

        activationSequenceRef.current = sequence;
    };

    const updateExpansionHighlighting = (graph, progress) => {
        const activatedNodes = new Set(filteredNodeIds);

        // Add expanded nodes based on progress
        if (activationSequenceRef.current) {
            activationSequenceRef.current.forEach(({ nodeId, delay }) => {
                if (progress >= delay) {
                    activatedNodes.add(nodeId);
                }
            });
        }

        // Update node styles
        graph
            .nodeColor(node => {
                if (filteredNodeIds.includes(node.id)) {
                    return '#00ff00'; // Stay green
                }

                if (expandedNodeIds.includes(node.id)) {
                    const sequence = activationSequenceRef.current;
                    const activation = sequence?.find(item => item.nodeId === node.id);

                    if (activation && progress >= activation.delay) {
                        return '#66ccff'; // Light blue for expanded nodes
                    }
                    return '#555555'; // Gray if not yet activated
                }

                return '#555555'; // Gray for other nodes
            })
            .nodeVal(node => {
                const base = node.val * nodeSize;

                if (filteredNodeIds.includes(node.id)) {
                    return base * 2;
                }

                if (expandedNodeIds.includes(node.id)) {
                    const sequence = activationSequenceRef.current;
                    const activation = sequence?.find(item => item.nodeId === node.id);

                    if (activation && progress >= activation.delay) {
                        return base * 1.5; // Enlarged when activated
                    }
                    return base * 0.5;
                }

                return base * 0.5;
            })
            .linkWidth(link => {
                const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
                const targetId = typeof link.target === 'object' ? link.target.id : link.target;

                const sourceActive = activatedNodes.has(sourceId);
                const targetActive = activatedNodes.has(targetId);

                if (sourceActive && targetActive) {
                    return 3; // Strong link between active nodes
                }
                if (sourceActive || targetActive) {
                    return 1.5; // Medium link if one node is active
                }
                return 0.5; // Weak link otherwise
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

ExpansionStage.propTypes = {
    graphRef: PropTypes.object.isRequired,
    graphData: PropTypes.object.isRequired,
    filteredNodeIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    expandedNodeIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    progress: PropTypes.number.isRequired,
    isMobile: PropTypes.bool,
    nodeSize: PropTypes.number,
    colorMap: PropTypes.object.isRequired
};

export default ExpansionStage;