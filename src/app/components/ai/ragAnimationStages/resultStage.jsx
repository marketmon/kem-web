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

        return () => {
            cleanup(graph);
        };
    }, [graphRef, filteredNodeIds, expandedNodeIds]);


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