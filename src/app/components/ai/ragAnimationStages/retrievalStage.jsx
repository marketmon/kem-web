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
    const animationRef = useRef(null);
    const nodeStateRef = useRef(new Map());
    const lastProgressRef = useRef(0);

    useEffect(() => {
        if (!graphRef?.current || !retrievedNodeIds?.length) return;

        const graph = graphRef.current;

        // Save original properties
        originalPropsRef.current = {
            nodeColor: graph.nodeColor(),
            nodeVal: graph.nodeVal(),
            linkWidth: graph.linkWidth()
        };

        // Initialize node states for animation
        initNodeStates();

        // Initial setup - dim all nodes
        dimAllNodes(graph);

        // Simple camera positioning
        focusCameraOnNodes(graph);

        return () => {
            // Cancel any ongoing animations
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            cleanup(graph);
        };
    }, [graphRef, retrievedNodeIds]);

    useEffect(() => {
        if (!graphRef?.current || !retrievedNodeIds?.length) return;

        const progressDelta = progress - lastProgressRef.current;

        // Only animate if progress is increasing
        if (progressDelta > 0) {
            lastProgressRef.current = progress;
            animateToProgress(progress);
        }
    }, [graphRef, retrievedNodeIds, progress]);

    const initNodeStates = () => {
        // Initialize animation state for all nodes
        nodeStateRef.current.clear();

        graphData.nodes.forEach(node => {
            nodeStateRef.current.set(node.id, {
                currentSize: node.val * nodeSize * 0.5,
                targetSize: node.val * nodeSize * 0.5,
                currentColor: new THREE.Color('#555555'),
                targetColor: new THREE.Color('#555555'),
                highlighted: false
            });
        });
    };

    const animateToProgress = (targetProgress) => {
        // Calculate how many nodes to highlight based on progress
        const numNodes = Math.ceil(targetProgress * retrievedNodeIds.length);
        const nodesToHighlight = retrievedNodeIds.slice(0, numNodes);

        // Update target states for all nodes
        graphData.nodes.forEach(node => {
            const nodeState = nodeStateRef.current.get(node.id);
            if (!nodeState) return;

            if (nodesToHighlight.includes(node.id)) {
                // Node should be highlighted
                nodeState.targetSize = node.val * nodeSize * 1.5;
                nodeState.targetColor = new THREE.Color(colorMap[node.group] || '#00aaff');
                nodeState.highlighted = true;
            } else {
                // Node should be dimmed
                nodeState.targetSize = node.val * nodeSize * 0.5;
                nodeState.targetColor = new THREE.Color('#555555');
                nodeState.highlighted = false;
            }
        });

        // Start animation if not already running
        if (!animationRef.current) {
            animateNodes();
        }
    };

    const animateNodes = () => {
        const graph = graphRef.current;
        if (!graph) return;

        // Flag to check if animation should continue
        let needsUpdate = false;

        // Update current state with interpolation
        nodeStateRef.current.forEach((state, nodeId) => {
            // Interpolate size
            if (Math.abs(state.currentSize - state.targetSize) > 0.01) {
                state.currentSize += (state.targetSize - state.currentSize) * 0.1;
                needsUpdate = true;
            } else {
                state.currentSize = state.targetSize;
            }

            // Interpolate color
            if (
                Math.abs(state.currentColor.r - state.targetColor.r) > 0.01 ||
                Math.abs(state.currentColor.g - state.targetColor.g) > 0.01 ||
                Math.abs(state.currentColor.b - state.targetColor.b) > 0.01
            ) {
                state.currentColor.r += (state.targetColor.r - state.currentColor.r) * 0.1;
                state.currentColor.g += (state.targetColor.g - state.currentColor.g) * 0.1;
                state.currentColor.b += (state.targetColor.b - state.currentColor.b) * 0.1;
                needsUpdate = true;
            } else {
                state.currentColor.copy(state.targetColor);
            }
        });

        // Apply current state to graph
        graph
            .nodeColor(node => {
                const state = nodeStateRef.current.get(node.id);
                return state ? state.currentColor.getStyle() : '#555555';
            })
            .nodeVal(node => {
                const state = nodeStateRef.current.get(node.id);
                return state ? state.currentSize : node.val * nodeSize * 0.5;
            })
            .linkWidth(link => {
                const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
                const targetId = typeof link.target === 'object' ? link.target.id : link.target;

                const sourceState = nodeStateRef.current.get(sourceId);
                const targetState = nodeStateRef.current.get(targetId);

                if (sourceState?.highlighted && targetState?.highlighted) {
                    // Smoothly increase link width based on nodes' highlight progress
                    const sourceHighlightProgress = (sourceState.currentSize - sourceState.targetSize * 0.5) / (sourceState.targetSize);
                    const targetHighlightProgress = (targetState.currentSize - targetState.targetSize * 0.5) / (targetState.targetSize);
                    const linkProgress = Math.min(sourceHighlightProgress, targetHighlightProgress);

                    return 0.5 + (1.5 * linkProgress);
                }
                return 0.5;
            })
            .refresh();

        // Continue animation if needed
        if (needsUpdate) {
            animationRef.current = requestAnimationFrame(animateNodes);
        } else {
            animationRef.current = null;
        }
    };

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

        // Position camera with a smooth transition
        const dist = 2 * extent;
        const camPos = { x: center.x, y: center.y, z: center.z + dist };

        graph.cameraPosition(camPos, center, 2000); // 2000ms transition
    };

    const dimAllNodes = (graph) => {
        graph
            .nodeColor(() => '#555555')
            .nodeVal(n => n.val * nodeSize * 0.5)
            .linkWidth(() => 0.5)
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