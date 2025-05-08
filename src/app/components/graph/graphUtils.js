import { colorMap } from './constants';
import ForceGraph3D from '3d-force-graph';

const setupAutoOrbit = (graph, containerElement) => {
    if (!graph || !containerElement) return null;

    // Disable standard controls temporarily to prevent interference
    const controls = graph.controls();
    const originalControlsEnabled = controls.enabled;
    controls.enabled = false;

    // State for the auto-orbit animation
    let isOrbiting = true;
    let animationFrameId = null;
    let angle = 0;
    let startTime = Date.now();
    let verticalPhase = 0;
    let autoStopTimer = null;

    // Auto-orbit configuration
    const config = {
        speed: 0.1,               // Rotation speed in degrees per frame
        verticalTilt: 0.2,        // Amount of vertical oscillation
        verticalPeriod: 15000,    // Time for one complete vertical oscillation in ms
        initialDistance: null,    // Set during initialization
        autoStopDelay: 10000,     // Stop auto-orbit after 10 seconds
    };

    // Get initial camera position and distance
    const cameraPosition = graph.cameraPosition();
    const cameraPos = graph.camera().position;
    config.initialDistance = Math.sqrt(
        cameraPos.x * cameraPos.x +
        cameraPos.y * cameraPos.y +
        cameraPos.z * cameraPos.z
    );

    // The animation function for auto-orbit
    const orbitAnimation = () => {
        if (!isOrbiting) return;

        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;

        // Update angle based on elapsed time
        angle += config.speed;
        if (angle >= 360) angle = 0;

        // Calculate vertical position with sine wave
        verticalPhase = (elapsedTime % config.verticalPeriod) / config.verticalPeriod;
        const verticalPos = Math.sin(verticalPhase * Math.PI * 2) * config.verticalTilt;

        // Calculate new camera position
        const rads = angle * Math.PI / 180;
        const x = Math.sin(rads) * config.initialDistance;
        const z = Math.cos(rads) * config.initialDistance;
        const y = verticalPos * config.initialDistance;

        // Update camera position
        graph.cameraPosition({
            x,
            y,
            z,
            lookAt: { x: 0, y: 0, z: 0 } // Always look at center
        });

        // Request next frame
        animationFrameId = requestAnimationFrame(orbitAnimation);
    };

    // Start the orbit animation
    setTimeout(() => {
        if (isOrbiting) {
            animationFrameId = requestAnimationFrame(orbitAnimation);

            // Set up auto-stop timer to stop orbit after 10 seconds
            autoStopTimer = setTimeout(() => {
                stopOrbit();
            }, config.autoStopDelay);
        }
    }, 2000); // Start after 2 seconds to let the graph stabilize

    // Add event listeners to stop orbiting on user interaction
    const stopOrbit = () => {
        if (isOrbiting) {
            isOrbiting = false;

            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }

            // Clear the auto-stop timer if it's still active
            if (autoStopTimer) {
                clearTimeout(autoStopTimer);
                autoStopTimer = null;
            }

            // Re-enable standard controls
            controls.enabled = originalControlsEnabled;

            // Animate to a slightly nicer viewing angle when stopping

        }
    };

    // Events that should stop the auto-orbit
    const interactionEvents = ['click', 'touchstart', 'mousedown', 'wheel'];

    // Add listeners for interaction events
    interactionEvents.forEach(eventType => {
        containerElement.addEventListener(eventType, stopOrbit, { passive: true });
    });

    // Return a cleanup function
    return () => {
        stopOrbit();
        interactionEvents.forEach(eventType => {
            containerElement.removeEventListener(eventType, stopOrbit);
        });
    };
};

export const initializeGraph = ({
    containerRef,
    graphState,
    graphSettings,
    isMobile,
    handleNodeClick,
    handleBackgroundClick
}) => {
    if (!containerRef.current || !graphState.nodes.length) return null;

    const elem = containerRef.current;

    // Initialize the 3D force graph
    const graph = ForceGraph3D({ controlType: 'orbit' })(elem)
        .graphData(graphState)
        .nodeLabel((node) => `${node.group}: ${node.name || node.title}`)
        .nodeColor((node) => colorMap[node.group] || '#cccccc')
        .nodeVal((node) => node.val * graphSettings.nodeSize)
        .backgroundColor('#000000')
        .nodeResolution(isMobile ? 6 : 8) // Lower resolution on mobile for performance
        .nodeOpacity(0.9)
        .enableNodeDrag(false)
        .linkWidth((link) => link.value ? Math.sqrt(link.value) * 0.5 : 1)
        .linkOpacity(graphSettings.linkOpacity)
        .onNodeClick((node) => {
            // Using callback function to avoid dependency on selectedNode
            handleNodeClick(node, graph);
            console.log(node);
        })
        .onBackgroundClick(() => {
            if (handleBackgroundClick) handleBackgroundClick();
        });

    // Enable controls
    const controls = graph.controls();
    if (controls) {
        controls.enableDamping = false;
        controls.zoomSpeed = isMobile ? 1.5 : 2.5; // Lower zoom speed on mobile for better control
        controls.minDistance = 1;         // Allow getting very close
        controls.screenSpacePanning = true;
        controls.rotateSpeed = isMobile ? 0.7 : 1.0; // Slower rotation on mobile for better control
        controls.update();
    }

    // For mobile: optimize performance by reducing physics iterations
    if (isMobile) {
        graph.d3Force('charge').strength(-50); // Weaker charge force on mobile
        graph.d3AlphaDecay(0.03); // Faster simulation convergence on mobile
        graph.cooldownTime(5000); // Shorter cooldown time on mobile
    }

    // Wait for the graph to stabilize before starting auto-orbit
    setTimeout(() => {
        if (graph) {
            // Setup auto-orbit (will return cleanup function)
            const cleanupOrbit = setupAutoOrbit(graph, elem);

            // Store cleanup function on the graph object for later use
            graph.__cleanupAutoOrbit = cleanupOrbit;
        }
    }, 3000);

    return graph;
};

/**
 * Update the graph data
 * @param {Array} newNodes - New nodes data
 * @param {Array} newLinks - New links data
 * @param {Object} graphRef - Reference to the graph
 * @param {Function} setGraphState - State setter function
 */
export const updateGraphData = (newNodes, newLinks, graphRef, setGraphState) => {
    const newGraphState = {
        nodes: newNodes,
        links: newLinks
    };

    setGraphState(newGraphState);

    // Update the graph visualization if already initialized
    if (graphRef.current) {
        graphRef.current.graphData(newGraphState);
    }
};

/**
 * Handle window resize events for the graph
 * @param {Object} containerRef - Reference to the container
 * @param {Object} graph - The graph instance
 */
export const handleResize = (containerRef, graph) => {
    if (containerRef.current) {
        graph.width(containerRef.current.clientWidth);
        graph.height(containerRef.current.clientHeight);
    }
};