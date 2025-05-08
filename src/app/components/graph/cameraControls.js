/**
 * Focus camera on a specific node
 * @param {Object} node - The node to focus on
 * @param {Object} graphRef - Reference to the graph
 * @param {boolean} isMobile - Whether the device is mobile
 * @param {boolean} isAlreadySelected - Whether the node is already selected
 */
export const focusOnNode = (node, graphRef, isMobile, isAlreadySelected = false) => {
    if (!graphRef.current || !node) return;

    // Calculate camera position for focusing
    const distance = isMobile ? 150 : 100; // Further away on mobile
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

    const newPos = node.x || node.y || node.z
        ? { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }
        : { x: 0, y: 0, z: distance }; // special case if node is in (0,0,0)

    // If it's already selected, add a visual cue that we're refocusing the camera
    if (isAlreadySelected) {
        // Add a subtle bounce animation by moving slightly out then in
        const tempDistance = distance * 1.2;
        const tempDistRatio = 1 + tempDistance / Math.hypot(node.x, node.y, node.z);

        const tempPos = node.x || node.y || node.z
            ? { x: node.x * tempDistRatio, y: node.y * tempDistRatio, z: node.z * tempDistRatio }
            : { x: 0, y: 0, z: tempDistance };

        // First move slightly out
        graphRef.current.cameraPosition(
            tempPos,
            node,
            700
        );

        // Then move to final position
        setTimeout(() => {
            graphRef.current.cameraPosition(
                newPos,
                node,
                1000
            );
        }, 700);
    } else {
        // First time selection, just move camera directly
        graphRef.current.cameraPosition(
            newPos,
            node,
            2000
        );
    }
};

/**
 * Zoom to fit all nodes in view
 * @param {Object} graphRef - Reference to the graph
 * @param {boolean} isMobile - Whether the device is mobile
 * @param {function} [nodesToFit] - Optional filter function for nodes to fit
 */
export const zoomToFit = (graphRef, isMobile, nodesToFit = null) => {
    if (graphRef.current) {
        // Apply filter function only if it's provided
        if (nodesToFit) {
            graphRef.current.zoomToFit(400, isMobile ? 50 : 30, nodesToFit);
        } else {
            graphRef.current.zoomToFit(400, isMobile ? 50 : 30);
        }
    }
};

/**
 * Zoom in function for the 3D Force-Directed Graph
 * @param {Object} graphRef - Reference to the graph instance
 * @param {number} zoomFactor - The amount to zoom in (default: 1.5)
 * @param {number} duration - Animation duration in milliseconds (default: 1000)
 */
export function zoomIn(graphRef, zoomFactor = 1.5, duration = 1000) {
    // Get current camera position
    const currentPosition = graphRef.current.camera().position;
    const currentLookAt = graphRef.current.camera().lookAt;

    // Calculate new zoom position (closer to the center)
    const newPosition = {
        x: currentPosition.x / zoomFactor,
        y: currentPosition.y / zoomFactor,
        z: currentPosition.z / zoomFactor
    };

    // Animate camera to new position
    graphRef.current.cameraPosition(
        newPosition,
        currentLookAt,
        duration
    );
}

/**
 * Zoom out function for the 3D Force-Directed Graph
 * @param {Object} graphRef - Reference to the graph instance
 * @param {number} zoomFactor - The amount to zoom out (default: 1.5)
 * @param {number} duration - Animation duration in milliseconds (default: 1000)
 */
export function zoomOut(graphRef, zoomFactor = 1.5, duration = 1000) {
    // Get current camera position
    const currentPosition = graphRef.current.camera().position;
    const currentLookAt = graphRef.current.camera().lookAt;

    // Calculate new zoom position (farther from the center)
    const newPosition = {
        x: currentPosition.x * zoomFactor,
        y: currentPosition.y * zoomFactor,
        z: currentPosition.z * zoomFactor
    };

    // Animate camera to new position
    graphRef.current.cameraPosition(
        newPosition,
        currentLookAt,
        duration
    );
}

/**
 * Handle node click event
 * @param {Object} node - The clicked node
 * @param {Object} graph - The graph instance
 * @param {Object} selectedNode - Currently selected node
 * @param {Function} setSelectedNode - State setter for selected node
 * @param {Function} setSelectedMenuNodeId - State setter for selected menu node ID
 * @param {boolean} isMobile - Whether the device is mobile
 * @param {Function} setShowControls - State setter for showing controls
 * @param {boolean} isMenuOpen - Whether the menu is open
 * @param {Function} setActiveCategory - State setter for active category
 * @param {Function} highlightNode - Function to highlight node
 */
export const handleNodeClick = (
    node,
    graph,
    selectedNode,
    setSelectedNode,
    setSelectedMenuNodeId,
    isMobile,
    setShowControls,
    isMenuOpen,
    activeCategory,
    setActiveCategory,
    highlightNodeFn,
    isAIOn,
) => {
    // Check if the node is already selected
    const isAlreadySelected = selectedNode && selectedNode.id === node.id;

    // Update selected node state
    setSelectedNode(node);

    // Update menu selection state
    setSelectedMenuNodeId(node.id);

    // If the menu is open, make sure the category is set
    if (isMenuOpen && node.group && node.group !== activeCategory) {
        setActiveCategory(node.group);
    }

    // Highlight the node and connections
    highlightNodeFn(node);

    // On mobile, always show controls when selecting a node
    if (isMobile) {
        setShowControls(true);
    }
};

