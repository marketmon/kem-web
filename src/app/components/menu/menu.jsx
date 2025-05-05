'use client'

import { X, ChevronRight, ChevronDown, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import RenderFocusedNodeView from './fullFocusedNodeView'
import { getCategoryLabel, getNodeTitle } from "../infoStyle";

export default function NavigationMenu({
    setIsMenuOpen,
    graphData,
    focusOnNode,
    activeCategory,
    selectedNode,
    setSelectedNode,
    toggleCategory,
    selectedNodeId,
    resetGraph,
    colorMap
}) {
    const [expandedInfo, setExpandedInfo] = useState(null);
    const [categoryStats, setCategoryStats] = useState({});
    const [sortOrder, setSortOrder] = useState('alphabetical');
    const [recentlyViewed, setRecentlyViewed] = useState([]);
    const [pinnedNodes, setPinnedNodes] = useState(new Set());
    const [nodesInCategory, setNodesInCategory] = useState([]);


    // Calculate category statistics
    useEffect(() => {
        if (!graphData?.nodes) return;

        const stats = {};
        const categories = ['characteristic', 'skill', 'endeavor', 'class', 'artifact', 'collaborator', 'book'];

        categories.forEach(category => {
            const nodesInCategory = graphData.nodes.filter(node => node.group === category);
            const connectionCount = graphData.links.filter(link => {
                const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
                const targetId = typeof link.target === 'object' ? link.target.id : link.target;
                const sourceNode = graphData.nodes.find(n => n.id === sourceId);
                const targetNode = graphData.nodes.find(n => n.id === targetId);

                return (sourceNode?.group === category || targetNode?.group === category);
            }).length;

            stats[category] = { count: nodesInCategory.length, connections: connectionCount };
        });

        setCategoryStats(stats);
    }, [graphData]);

    // Update nodes when category changes
    useEffect(() => {
        if (activeCategory === 'none' || selectedNode) return setNodesInCategory([]);

        const filtered = graphData.nodes.filter(node => node.group === activeCategory);
        const sorted = [...filtered].sort((a, b) => {
            if (sortOrder === 'alphabetical') {
                const aName = a.name || a.title || '';
                const bName = b.name || b.title || '';
                return aName.localeCompare(bName);
            } else {
                const aConnections = findConnectedNodes(a.id).length;
                const bConnections = findConnectedNodes(b.id).length;
                return bConnections - aConnections;
            }
        });

        setNodesInCategory(sorted);
        setExpandedInfo(null);
    }, [activeCategory, graphData.nodes, sortOrder, selectedNode]);

    const findConnectedNodes = (nodeId) => {
        const connectedNodeIds = new Set();

        graphData.links.forEach(link => {
            const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
            const targetId = typeof link.target === 'object' ? link.target.id : link.target;

            if (sourceId === nodeId) connectedNodeIds.add(targetId);
            else if (targetId === nodeId) connectedNodeIds.add(sourceId);
        });

        return Array.from(connectedNodeIds)
            .map(id => graphData.nodes.find(node => node.id === id))
            .filter(Boolean);
    };

    // Handle node click
    const handleNodeClick = (nodeId) => {
        const node = graphData.nodes.find(n => n.id === nodeId);
        if (!node) return;

        // Add to recently viewed (keeping last 5)
        setRecentlyViewed(prev => {
            const filtered = prev.filter(id => id !== nodeId);
            return [nodeId, ...filtered].slice(0, 5);
        });

        setExpandedInfo(null);
        focusOnNode(node);
    };

    // Return to category view
    const returnToCategoryView = () => {
        setSelectedNode(null);
    };

    // Toggle pin for a node
    const togglePinNode = (e, nodeId) => {
        e.stopPropagation();
        setPinnedNodes(prev => {
            const newPinned = new Set(prev);
            if (newPinned.has(nodeId)) newPinned.delete(nodeId);
            else newPinned.add(nodeId);
            return newPinned;
        });
    };

    const getNodeGroupAttribute = (node) => {
        switch (node.group) {
            case 'class': return node.term || 'Other';
            case 'endeavor': return node.category || 'Other';
            case 'book': return node.reasonForReading || 'Other';
            default: return 'Other';
        }
    };

    // Component rendering functions
    const renderNodeItem = (node, isPinned = false) => {
        const { id, group } = node;
        const isSelected = selectedNodeId === id;
        const isExpanded = expandedInfo === id;
        const nodeTitle = getNodeTitle(node);
        const nodeColor = colorMap[group] || "#6366f1";

        return (
            <div
                key={id}
                className={`mt-3 rounded-lg border ${isSelected
                    ? `border-2 border-${nodeColor}/70 shadow-md`
                    : 'border border-gray-700'
                    }`}
            >
                {/* Node header - always visible */}
                <div
                    className={`px-3 py-2 flex items-center justify-between ${isSelected ? 'bg-gray-800' : 'bg-gray-900'
                        } cursor-pointer hover:bg-gray-800 transition-colors`}
                    onClick={() => {
                        setExpandedInfo(isExpanded ? null : id)
                        setSelectedNode(node);
                        focusOnNode(node);
                    }}
                >
                    {/* Left side with node info */}
                    <div className="flex items-center gap-2 flex-grow">
                        {/* Color indicator for category */}
                        <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: nodeColor }}
                        />

                        {/* Node name */}
                        <div
                            className={`flex-grow text-sm ${isSelected ? 'font-medium' : ''}`}
                            style={{ color: isSelected ? nodeColor : 'inherit' }}
                        >
                            {nodeTitle}

                        </div>

                        {/* Pin button */}
                        <button
                            className={`ml-2 p-1 rounded-full ${pinnedNodes.has(id)
                                ? 'text-yellow-400'
                                : 'text-gray-500 hover:text-gray-300'
                                }`}
                            onClick={(e) => {
                                e.stopPropagation();
                                togglePinNode(e, id);
                            }}
                            title={pinnedNodes.has(id) ? "Unpin node" : "Pin node"}
                        >
                            {isPinned ? '★' : '☆'}
                        </button>
                    </div>

                    {/* Expand/collapse indicator */}
                    <div className="flex items-center text-gray-400">
                        {isExpanded
                            ? <ChevronDown size={18} />
                            : <ChevronRight size={18} className="animate-pulse" />
                        }
                    </div>
                </div>

            </div>
        );
    };

    // Group and render nodes by attribute
    const renderNodesInCategory = () => {
        if (nodesInCategory.length === 0) return null;

        // Group nodes by attribute
        const groupedNodes = nodesInCategory.reduce((acc, node) => {
            const groupKey = getNodeGroupAttribute(node);
            if (!acc[groupKey]) acc[groupKey] = [];
            acc[groupKey].push(node);
            return acc;
        }, {});

        // If only one group, show flat list
        if (Object.keys(groupedNodes).length <= 1) {
            return nodesInCategory.map(node => renderNodeItem(node));
        }

        // Show grouped list
        return Object.entries(groupedNodes).map(([groupName, nodes]) => (
            <div key={groupName} className="mt-2 mb-3">
                <div className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-2 mb-1">
                    {groupName}
                </div>
                {nodes.map(node => renderNodeItem(node))}
            </div>
        ));
    };

    // Render pinned nodes section
    const renderPinnedNodes = () => {
        if (pinnedNodes.size === 0) return null;

        const pinnedNodeObjects = Array.from(pinnedNodes)
            .map(id => graphData.nodes.find(n => n.id === id))
            .filter(Boolean);

        if (pinnedNodeObjects.length === 0) return null;

        return (
            <div className="mb-4 p-3 bg-gray-800/50 rounded">
                <h3 className="font-bold mb-2 text-yellow-400 text-sm">Pinned Nodes</h3>
                <div className="space-y-1">
                    {pinnedNodeObjects.map(node => renderNodeItem(node, true))}
                </div>
            </div>
        );
    };

    // Render recently viewed section
    const renderRecentlyViewed = () => {
        if (recentlyViewed.length === 0) return null;

        const recentNodeObjects = recentlyViewed
            .map(id => graphData.nodes.find(n => n.id === id))
            .filter(Boolean);

        if (recentNodeObjects.length === 0) return null;

        return (
            <div className="mb-4 p-3 bg-gray-800/50 rounded">
                <h3 className="font-bold mb-2 text-sm">Recently Viewed</h3>
                <div className="space-y-1">
                    {recentNodeObjects.map(node => (
                        <div key={node.id} className="flex items-center">
                            <div
                                className="w-2 h-2 rounded-full mr-2"
                                style={{ backgroundColor: colorMap[node.group] }}
                            ></div>
                            <span
                                className="text-sm cursor-pointer hover:underline"
                                onClick={() => handleNodeClick(node.id)}
                            >
                                {getNodeTitle(node)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };


    // Main render
    return (
        <div className="absolute top-0 right-0 h-[100vh] bg-black/80 w-[100vw] sm:w-[30vw] p-4 text-white overflow-y-scroll z-50">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">
                    {selectedNode ? 'Node Explorer' : 'Network Explorer'}
                </h2>
                <div className="flex items-center gap-3">
                    <button
                        className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-sm"
                        onClick={() => {
                            resetGraph();
                            if (selectedNode) returnToCategoryView();
                        }}
                        title="Reset graph view"
                    >
                        <RefreshCw size={16} />
                        <span>Reset</span>
                    </button>
                    <button onClick={() => setIsMenuOpen(false)}>
                        <X />
                    </button>
                </div>
            </div>


            {/* Content */}
            {selectedNode ? (
                <RenderFocusedNodeView
                    // Node and data props
                    selectedNode={selectedNode}
                    selectedNodeId={selectedNodeId}
                    pinnedNodes={pinnedNodes}
                    colorMap={colorMap}
                    graphData={graphData}

                    // Action functions
                    returnToCategoryView={returnToCategoryView}
                    handleNodeClick={handleNodeClick}
                    togglePinNode={togglePinNode}
                    focusOnNode={focusOnNode}
                    setSelectedNode={setSelectedNode}
                    setIsMenuOpen={setIsMenuOpen}

                    // Helper functions
                    getNodeTitle={getNodeTitle}
                    getCategoryLabel={getCategoryLabel}
                />
            ) : (
                <>
                    {/* Sort options */}
                    {activeCategory !== 'none' && nodesInCategory.length > 0 && (
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs text-gray-300">Sort by:</span>
                            <select
                                className="bg-gray-800 border border-gray-700 rounded p-1 text-xs ml-2"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="alphabetical">Alphabetical</option>
                                <option value="connections">Most connections</option>
                            </select>
                        </div>
                    )}

                    {/* Pinned nodes */}
                    {renderPinnedNodes()}

                    {/* Recently viewed */}
                    {renderRecentlyViewed()}

                    {/* Categories navigation */}
                    <div className="mb-6 space-y-1">
                        {Object.keys(colorMap)
                            .filter(category => category !== 'knowledge')
                            .map(category => {
                                const isCategoryActive = activeCategory === category;

                                return (
                                    <div
                                        key={category}
                                        className={`rounded transition-colors ${isCategoryActive ? 'bg-black/40' : ''}`}
                                    >
                                        <div
                                            className="flex items-center justify-between p-2 cursor-pointer hover:bg-black/30"
                                            onClick={() => toggleCategory(category)}
                                        >
                                            <div className="flex items-center">
                                                <div
                                                    className="w-3 h-3 rounded-full mr-2"
                                                    style={{ backgroundColor: colorMap[category] }}
                                                ></div>
                                                <span className={isCategoryActive ? 'font-bold' : ''}>
                                                    {getCategoryLabel(category)}
                                                </span>
                                            </div>
                                            <div className="text-xs opacity-70">
                                                {categoryStats[category]?.count || 0}
                                            </div>
                                        </div>

                                        {/* Show nodes if category is active */}
                                        {isCategoryActive && (
                                            <div className="px-2">
                                                {renderNodesInCategory()}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                    </div>
                </>
            )}
        </div>
    );
}