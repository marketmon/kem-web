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
    const particlesRef = useRef([]);
    const queryNodeRef = useRef(null);
    const originalPropsRef = useRef(null);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        if (!graphRef?.current || !retrievedNodeIds?.length) return;

        const graph = graphRef.current;
        originalPropsRef.current = {
            nodeColor: graph.nodeColor(),
            nodeVal: graph.nodeVal(),
            linkWidth: graph.linkWidth(),
            linkDirectionalParticles: graph.linkDirectionalParticles(),
            linkDirectionalParticleSpeed: graph.linkDirectionalParticleSpeed()
        };

        createQueryNode(graph);
        dimAllNodes(graph);
        focusCameraOnNodes(graph);

        return () => {
            cleanup(graph);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [graphRef, retrievedNodeIds]);

    useEffect(() => {
        if (!graphRef?.current || !retrievedNodeIds?.length) return;

        const graph = graphRef.current;
        const slowProgress = Math.min(1, progress);
        const numNodes = Math.ceil(slowProgress * retrievedNodeIds.length);
        const nodesToHighlight = retrievedNodeIds.slice(0, numNodes);

        updateHighlighting(graph, nodesToHighlight);
        if (!isMobile) updateParticleEffects(graph, slowProgress, nodesToHighlight);
        pulseQueryNode(slowProgress);
    }, [graphRef, retrievedNodeIds, progress, isMobile]);

    const focusCameraOnNodes = (graph) => {
        const nodes = graphData.nodes.filter(n => retrievedNodeIds.includes(n.id));
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

        // Optimized camera positioning for mobile
        const dist = (isMobile ? 2.5 : 1.8) * extent;
        const ratio = 1 + dist / Math.hypot(center.x, center.y, center.z);
        const camPos = center.x || center.y || center.z
            ? { x: center.x * ratio, y: center.y * ratio, z: center.z * ratio }
            : { x: 0, y: 0, z: dist };

        // Faster transition for mobile
        graph.cameraPosition(camPos, center, isMobile ? 1500 : 3000);
    };

    const createQueryNode = (graph) => {
        const nodes = graphData.nodes.filter(n => retrievedNodeIds.includes(n.id));
        if (!nodes.length) return;

        const centroid = nodes.reduce(
            (acc, n) => ({ x: acc.x + (n.x || 0), y: acc.y + (n.y || 0), z: acc.z + (n.z || 0) }),
            { x: 0, y: 0, z: 0 }
        );
        Object.keys(centroid).forEach(k => centroid[k] /= nodes.length);

        // Slightly reduced size for mobile performance
        const size = nodeSize * (isMobile ? 3 : 4);
        const geometry = new THREE.SphereGeometry(size, isMobile ? 16 : 32, isMobile ? 16 : 32);
        const material = new THREE.MeshLambertMaterial({
            color: 0x00aaff, transparent: true, opacity: 0.8, emissive: 0x0088cc
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(centroid.x, centroid.y, centroid.z);
        graph.scene().add(mesh);
        queryNodeRef.current = mesh;
    };

    const dimAllNodes = (graph) => {
        graph.nodeColor(() => '#555')
            .nodeVal(n => n.val * nodeSize * 0.4)
            .linkWidth(() => isMobile ? 0.5 : 0.1)
            .linkDirectionalParticles(() => 0) // Always 0 to start
            .refresh();
    };

    const updateHighlighting = (graph, highlights) => {
        const includes = id => highlights.includes(typeof id === 'object' ? id.id : id);

        graph.linkWidth(l => {
            const connected = includes(l.source) && includes(l.target);
            return connected ? (l.value ? Math.sqrt(l.value) : (isMobile ? 6 : 3)) : 0.2;
        });

        if (!isMobile) {
            // Reduced particle count for all platforms
            graph.linkDirectionalParticles(l => includes(l.source) && includes(l.target) ? 2 : 0);
            graph.linkDirectionalParticleSpeed(() => 0.008); // Slightly faster
        } else {
            // Absolutely no particles on mobile
            graph.linkDirectionalParticles(() => 0);
        }

        graph.nodeColor(n => {
            if (!includes(n.id)) return '#333';
            const pulse = (Math.sin(progress * 10) + 1) * 0.2;
            const base = new THREE.Color(colorMap[n.group] || '#ccc');
            const highlight = new THREE.Color(0xffdd00);
            return '#' + base.lerp(highlight, pulse).getHexString();
        });

        graph.nodeVal(n => {
            const base = n.val * nodeSize;
            if (!includes(n.id)) return base * 0.3;

            const idx = highlights.indexOf(n.id);
            const delay = (idx / highlights.length) * 0.2;
            const swellProgress = Math.max(0, Math.min(1, (progress - delay) * 3));
            const swell = 1 + Math.sin(swellProgress * Math.PI) * 0.6;
            return base * (isMobile ? 3 : 2.5) * swell;
        });

        graph.refresh();
    };

    const updateParticleEffects = (graph, progress, targets) => {
        if (isMobile || !queryNodeRef.current) return; // Skip entirely on mobile

        const targetNodes = graphData.nodes.filter(n => targets.includes(n.id));

        if (progress < 0.95) {
            // Create fewer particles
            for (let i = 0; i < Math.floor(progress * 4); i++) {
                if (Math.random() > 0.1) continue; // Higher threshold to create fewer particles
                const target = targetNodes[Math.floor(Math.random() * targetNodes.length)];
                if (target) createParticle(graph, queryNodeRef.current.position, target);
            }
        }

        const loop = () => {
            updateParticles(graph);
            animationFrameRef.current = requestAnimationFrame(loop);
        };
        if (!animationFrameRef.current) animationFrameRef.current = requestAnimationFrame(loop);
    };

    const createParticle = (graph, start, target) => {
        // Smaller particles for better performance
        const geometry = new THREE.SphereGeometry(nodeSize * 0.3, 6, 6);
        const material = new THREE.MeshBasicMaterial({ color: 0x00aaff, transparent: true, opacity: 0.9 });
        const particle = new THREE.Mesh(geometry, material);

        particle.position.copy(start);
        particle.userData = {
            startPos: start.clone(),
            targetPos: new THREE.Vector3(target.x || 0, target.y || 0, target.z || 0),
            progress: 0,
            speed: 0.008 + Math.random() * 0.01 // Faster particles
        };

        graph.scene().add(particle);
        particlesRef.current.push(particle);
    };

    const updateParticles = (graph) => {
        const toRemove = [];

        particlesRef.current.forEach((p, i) => {
            p.userData.progress += p.userData.speed;
            const arc = Math.sin(p.userData.progress * Math.PI);
            const pos = new THREE.Vector3().lerpVectors(p.userData.startPos, p.userData.targetPos, p.userData.progress);
            pos.y += nodeSize * 8 * arc; // Reduced arc height
            p.position.copy(pos);
            p.material.opacity = 0.9 * arc;

            if (p.userData.progress >= 1) toRemove.push(i);
        });

        toRemove.reverse().forEach(i => {
            graph.scene().remove(particlesRef.current[i]);
            particlesRef.current.splice(i, 1);
        });
    };

    const pulseQueryNode = (progress) => {
        const qNode = queryNodeRef.current;
        if (!qNode) return;

        // Simplified pulse for mobile
        if (isMobile) {
            const scale = 1 + 0.1 * Math.sin(progress * 5);
            qNode.scale.set(scale, scale, scale);
            qNode.material.opacity = progress < 0.2 ? progress * 4 : 0.8;
        } else {
            const scale = 1 + 0.2 * Math.sin(progress * 10);
            qNode.scale.set(scale, scale, scale);
            qNode.material.opacity = progress < 0.2 ? progress * 4 : progress > 0.9 ? (1 - progress) * 10 : 0.8;
        }
    };

    const cleanup = (graph) => {
        if (queryNodeRef.current) {
            graph.scene().remove(queryNodeRef.current);
            queryNodeRef.current = null;
        }

        particlesRef.current.forEach(p => graph.scene().remove(p));
        particlesRef.current = [];

        if (originalPropsRef.current) {
            graph
                .nodeColor(originalPropsRef.current.nodeColor)
                .nodeVal(originalPropsRef.current.nodeVal)
                .linkWidth(originalPropsRef.current.linkWidth)
                .linkDirectionalParticles(originalPropsRef.current.linkDirectionalParticles)
                .linkDirectionalParticleSpeed(originalPropsRef.current.linkDirectionalParticleSpeed)
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