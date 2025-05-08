import { colorMap } from './constants';

/**
 * Reset node highlighting
 * @param {Object} graphRef - Reference to the graph
 * @param {Function} setSelectedNode - State setter for selected node
 * @param {Function} setSelectedMenuNodeId - State setter for selected menu node ID
 * @param {boolean} isMobile - Whether the device is mobile
 * @param {number} nodeSize - Base node size
 */
export const resetNodeHighlighting = (graphRef, setSelectedNode, setSelectedMenuNodeId, isMobile, nodeSize) => {
    setSelectedNode(null);
    setSelectedMenuNodeId(null);

    if (!graphRef.current) return;

    // Reset link width to default
    const baseWidth = isMobile ? 2 : 1; // Thicker links on mobile
    graphRef.current.linkWidth((link) => {
        return link.value ? Math.sqrt(link.value) * 0.5 : baseWidth;
    });

    // Reset node colors to original
    graphRef.current.nodeColor((node) => colorMap[node.group] || '#cccccc');

    // Reset node sizes to original
    graphRef.current.nodeVal((node) => node.val * nodeSize);
};

/**
 * Highlight a node and its connections
 * @param {Object} node - The node to highlight
 * @param {Object} graphRef - Reference to the graph
 * @param {Object} graphState - Current graph state
 * @param {boolean} isMobile - Whether the device is mobile
 * @param {number} nodeSize - Base node size
 */
export const highlightNode = (node, graphRef, graphState, isMobile, nodeSize) => {
    if (!graphRef.current || !node) return;

    // Find connected links and nodes
    const highlightLinks = graphState.links.filter(link => {
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;
        return sourceId === node.id || targetId === node.id;
    });

    const connectedNodes = new Set();
    highlightLinks.forEach(link => {
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;
        connectedNodes.add(sourceId);
        connectedNodes.add(targetId);
    });

    // Update link styling
    graphRef.current.linkWidth((link) => {
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;
        const isConnected = sourceId === node.id || targetId === node.id;

        const baseWidth = isMobile ? 2 : 1; // Thicker links on mobile
        return isConnected
            ? (link.value ? Math.sqrt(link.value) * 1.5 : 3 * baseWidth)
            : (link.value ? Math.sqrt(link.value) * 0.5 : baseWidth);
    });

    // Update node styling
    graphRef.current.nodeColor((n) => {
        // If it's the selected node or connected to it, keep its original group color
        if (n.id === node.id || connectedNodes.has(n.id)) {
            return colorMap[n.group] || '#cccccc';
        }

        // Otherwise make it gray
        return '#aaaaaa';
    });

    // Update node size
    graphRef.current.nodeVal((n) => {
        const baseSize = n.val * nodeSize;

        // If it's the selected node, make it slightly larger
        if (n.id === node.id) return baseSize * (isMobile ? 2 : 1.5);

        // If it's connected to the selected node, keep normal size
        if (connectedNodes.has(n.id)) return baseSize;

        // Otherwise make it smaller
        return baseSize * 0.6;
    });
};

/**
 * Highlight nodes of a specific category
 * @param {Object} node - A representative node of the category
 * @param {Object} graphRef - Reference to the graph
 * @param {Object} graphState - Current graph state
 * @param {boolean} isMobile - Whether the device is mobile
 * @param {number} nodeSize - Base node size
 */
export const highlightCategoryNode = (node, graphRef, graphState, isMobile, nodeSize) => {
    if (!graphRef.current || !node) return;

    // Find connected links and nodes
    const highlightLinks = graphState.links.filter(link => {
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;
        return sourceId === node.id || targetId === node.id;
    });

    const connectedNodes = new Set();
    highlightLinks.forEach(link => {
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;
        connectedNodes.add(sourceId);
        connectedNodes.add(targetId);
    });

    // Update link styling
    graphRef.current.linkWidth((link) => {
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;
        const isConnected = sourceId === node.id || targetId === node.id;

        const baseWidth = isMobile ? 2 : 1; // Thicker links on mobile
        return isConnected
            ? (link.value ? Math.sqrt(link.value) * 1 : 2 * baseWidth)
            : (link.value ? Math.sqrt(link.value) * 0.2 : baseWidth);
    });

    // Update node styling
    graphRef.current.nodeColor((n) => {
        // If it's a node of the selected category or connected to one, keep its original group color
        if (n.group === node.group) {
            return colorMap[n.group] || '#cccccc';
        }

        // Otherwise make it gray
        return '#555555';
    });

    // Update node size
    graphRef.current.nodeVal((n) => {
        const baseSize = n.val * nodeSize;

        // If it's a node of the selected category, make it slightly larger
        if (n.group === node.group) return baseSize * (isMobile ? 2 : 1.5);

        // If it's connected to a node of the selected category, keep normal size
        if (connectedNodes.has(n.id)) return baseSize;

        // Otherwise make it smaller
        return baseSize * 0.6;
    });
};