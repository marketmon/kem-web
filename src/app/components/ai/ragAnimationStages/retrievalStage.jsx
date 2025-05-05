import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';

const RetrievalStage = ({
    graphRef,
    graphData,
    retrievedNodeIds,
    progress,
    isMobile,
    nodeSize = 1,
    colorMap
}) => {
    const originalPropsRef = useRef(null);

    useEffect(() => {
        if (!graphRef?.current || !retrievedNodeIds?.length) return;

        const graph = graphRef.current;

        // Save original properties
        originalPropsRef.current = {
            nodeColor: graph.nodeColor(),
            nodeVal: graph.nodeVal(),
            linkWidth: graph.linkWidth()
        };

        // Initial setup - dim all nodes
        dimAllNodes(graph);

        // Simple camera positioning
        focusCameraOnNodes(graph);

        return () => {
            cleanup(graph);
        };
    }, [graphRef, retrievedNodeIds]);

    useEffect(() => {
        if (!graphRef?.current || !retrievedNodeIds?.length) return;

        const graph = graphRef.current;

        // Calculate how many nodes to highlight based on progress
        const numNodes = Math.ceil(progress * retrievedNodeIds.length);
        const nodesToHighlight = retrievedNodeIds.slice(0, numNodes);

        updateHighlighting(graph, nodesToHighlight);
    }, [graphRef, retrievedNodeIds, progress]);

    const focusCameraOnNodes = (graph) => {
        const nodes = graphData.nodes.filter(n => retrievedNodeIds.includes(n.id));
        if (!nodes.length) return;

        // Calculate center of retrieved nodes
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

        // Position camera
        const dist = 2 * extent;
        const camPos = { x: center.x, y: center.y, z: center.z + dist };

        graph.cameraPosition(camPos, center, 2000);
    };

    const dimAllNodes = (graph) => {
        graph
            .nodeColor(() => '#555555')
            .nodeVal(n => n.val * nodeSize * 0.5)
            .linkWidth(() => 0.5)
            .refresh();
    };

    const updateHighlighting = (graph, highlightedIds) => {
        graph
            .nodeColor(node => {
                if (highlightedIds.includes(node.id)) {
                    // Use a static color for highlighted nodes
                    return colorMap[node.group] || '#00aaff';
                }
                return '#555555';
            })
            .nodeVal(node => {
                if (highlightedIds.includes(node.id)) {
                    // Simple size increase for highlighted nodes
                    return node.val * nodeSize * 1.5;
                }
                return node.val * nodeSize * 0.5;
            })
            .linkWidth(link => {
                const sourceHighlighted = highlightedIds.includes(
                    typeof link.source === 'object' ? link.source.id : link.source
                );
                const targetHighlighted = highlightedIds.includes(
                    typeof link.target === 'object' ? link.target.id : link.target
                );

                if (sourceHighlighted && targetHighlighted) {
                    return 2;
                }
                return 0.5;
            })
            .refresh();
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

RetrievalStage.propTypes = {
    graphRef: PropTypes.object.isRequired,
    graphData: PropTypes.object.isRequired,
    retrievedNodeIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    progress: PropTypes.number.isRequired,
    isMobile: PropTypes.bool,
    nodeSize: PropTypes.number,
    colorMap: PropTypes.object.isRequired
};

export default RetrievalStage;