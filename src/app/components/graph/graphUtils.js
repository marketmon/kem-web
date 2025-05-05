import { colorMap } from './constants';
import ForceGraph3D from '3d-force-graph';

/**
 * Initialize the 3D force graph
 * @param {Object} options - Configuration options
 * @returns {Object} - The initialized graph instance
 */
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
            console.log(node)
        })
        .onBackgroundClick(handleBackgroundClick);

    // Enable controls
    const controls = graph.controls();
    if (controls) {
        controls.enableDamping = false;
        controls.zoomSpeed = isMobile ? 1.5 : 2.5; // Lower zoom speed on mobile for better control
        controls.minDistance = 1;             // Allow getting very close
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