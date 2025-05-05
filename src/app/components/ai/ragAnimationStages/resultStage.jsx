import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ResultStage = ({
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

    useEffect(() => {
        if (!graphRef?.current) return;

        const graph = graphRef.current;

        // Save original properties
        originalPropsRef.current = {
            nodeColor: graph.nodeColor(),
            nodeVal: graph.nodeVal(),
            linkWidth: graph.linkWidth()
        };

        setupFinalAppearance(graph);
        focusCameraOnNodes(graph);

        return () => {
            cleanup(graph);
        };
    }, [graphRef, filteredNodeIds, expandedNodeIds]);

    const focusCameraOnNodes = (graph) => {
        const importantNodeIds = new Set([...filteredNodeIds, ...expandedNodeIds]);
        const nodes = graphData.nodes.filter(n => importantNodeIds.has(n.id));
        if (!nodes.length) return;

        const bounds = ['x', 'y', 'z'].reduce((acc, axis) => {
            const values = nodes.map(n => n[axis] || 0);
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

        const dist = 3 * extent;
        const camPos = { x: center.x, y: center.y, z: center.z + dist };

        graph.cameraPosition(camPos, center, 2000);
    };

    const setupFinalAppearance = (graph) => {
        const importantNodeIds = new Set([...filteredNodeIds, ...expandedNodeIds]);

        graph
            .nodeColor(node => {
                // Unimportant nodes stay gray
                if (!importantNodeIds.has(node.id)) {
                    return '#555555';
                }

                // Filtered nodes are green (primary results)
                if (filteredNodeIds.includes(node.id)) {
                    return '#00ff00';
                }

                // Expanded nodes are light blue (secondary results)
                if (expandedNodeIds.includes(node.id)) {
                    return '#66ccff';
                }

                return '#555555';
            })
            .nodeVal(node => {
                const base = node.val * nodeSize;

                // Unimportant nodes are small
                if (!importantNodeIds.has(node.id)) {
                    return base * 0.5;
                }

                // Filtered nodes are largest
                if (filteredNodeIds.includes(node.id)) {
                    return base * 2;
                }

                // Expanded nodes are medium
                if (expandedNodeIds.includes(node.id)) {
                    return base * 1.5;
                }

                return base;
            })
            .linkWidth(link => {
                const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
                const targetId = typeof link.target === 'object' ? link.target.id : link.target;

                const sourceImportant = importantNodeIds.has(sourceId);
                const targetImportant = importantNodeIds.has(targetId);

                // Links between important nodes are highlighted
                if (sourceImportant && targetImportant) {
                    // Strongest connection between filtered nodes
                    if (filteredNodeIds.includes(sourceId) && filteredNodeIds.includes(targetId)) {
                        return 4;
                    }
                    // Medium connection involving expanded nodes
                    return 2;
                }

                // Connection to at least one important node
                if (sourceImportant || targetImportant) {
                    return 1;
                }

                // Background connections
                return 0.3;
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

ResultStage.propTypes = {
    graphRef: PropTypes.object.isRequired,
    graphData: PropTypes.object.isRequired,
    filteredNodeIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    expandedNodeIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    progress: PropTypes.number.isRequired,
    isMobile: PropTypes.bool,
    nodeSize: PropTypes.number,
    colorMap: PropTypes.object.isRequired
};

export default ResultStage;