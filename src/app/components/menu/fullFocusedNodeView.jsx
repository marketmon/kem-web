import React, { useState, useEffect } from 'react';
import { ArrowLeft, Network, ExternalLink } from 'lucide-react';
import { TruncatedText, getDateDisplay, getNodeIcon, getGroupLabel, getNodeTitle } from '../infoStyle';
import ShowConnectionsOfNode from '../showConnectionsOfNode'

export default function RenderFocusedNodeView({
    // Node and state data
    selectedNode,
    selectedNodeId,
    pinnedNodes,
    colorMap,
    graphData,
    setSelectedNode,
    focusOnNode,
    // State management functions
    returnToCategoryView,
    handleNodeClick,
    togglePinNode,
    setIsMenuOpen,

}) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [showFullReflection, setShowFullReflection] = useState(false);
    const [connectionsByCategory, setConnectionsByCategory] = useState({});


    if (!selectedNode) return null;

    // Process focused node connections
    useEffect(() => {
        if (!selectedNode) return;

        const connections = findConnectedNodes(selectedNode.id);
        const byCategory = {};

        connections.forEach(node => {
            if (!byCategory[node.group]) byCategory[node.group] = [];
            byCategory[node.group].push(node);
        });

        // Sort each category alphabetically
        Object.keys(byCategory).forEach(category => {
            byCategory[category].sort((a, b) => {
                const aName = a.name || a.title || '';
                const bName = b.name || b.title || '';
                return aName.localeCompare(bName);
            });
        });

        setConnectionsByCategory(byCategory);
    }, [selectedNode]);


    // Find connected nodes
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

    const { group } = selectedNode;
    const nodeTitle = getNodeTitle(selectedNode);

    return (
        <div className=" overflow-y-auto"
            style={{ borderColor: `${colorMap[group]}40` }}>
            {/* Header with back button and title */}
            <div className="flex items-center mb-4 gap-3 pb-3 border-b border-gray-700">
                <button
                    className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                    onClick={returnToCategoryView}
                    title="Back to categories"
                >
                    <ArrowLeft size={18} />
                </button>

                <div className="flex items-center flex-1">
                    <span className="text-2xl mr-3 bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
                        {getNodeIcon(group)}
                    </span>
                    <div>
                        <h3 className="font-bold text-xl m-0" style={{ color: colorMap[group] }}>
                            {nodeTitle}
                        </h3>
                        <span className="text-xs px-2 py-1 rounded font-semibold"
                            style={{
                                backgroundColor: `${colorMap[group]}30`,
                                color: colorMap[group]
                            }}>
                            {getGroupLabel(group)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Node details in card format */}
            <div className="mb-4 p-4 bg-gray-800/50 rounded">
                {selectedNode.title && selectedNode.name && (
                    <p className="my-2 text-lg">
                        <strong>{selectedNode.title}</strong>
                    </p>
                )}

                {selectedNode.entity && (
                    <div className="flex justify-between my-2 text-sm">
                        <strong>Organization:</strong> <span>{selectedNode.entity}</span>
                    </div>
                )}

                {(selectedNode.startDate || selectedNode.year || selectedNode.completionDate) && (
                    <div className="flex justify-between my-2 text-sm">
                        {selectedNode.completionDate ? <strong>Completed:</strong> : <strong>Period:</strong>}
                        <span>{getDateDisplay(selectedNode)}</span>
                    </div>
                )}

                {selectedNode.location && (
                    <div className="flex justify-between my-2 text-sm">
                        <strong>Location:</strong> <span>{selectedNode.location}</span>
                    </div>
                )}

                {selectedNode.institution && (
                    <div className="flex justify-between my-2 text-sm">
                        <strong>Institution:</strong> <span>{selectedNode.institution}</span>
                    </div>
                )}

                {selectedNode.term && (
                    <div className="flex justify-between my-2 text-sm">
                        <strong>Term:</strong> <span>{selectedNode.term}</span>
                    </div>
                )}

                {selectedNode.author && (
                    <div className="flex justify-between my-2 text-sm">
                        <strong>Author:</strong> <span>{selectedNode.author}</span>
                    </div>
                )}

                {selectedNode.reasonForReading && (
                    <div className="flex justify-between my-2 text-sm">
                        <strong>Read for:</strong> <span>{selectedNode.reasonForReading}</span>
                    </div>
                )}

                {selectedNode.readingOrder && (
                    <div className="flex justify-between my-2 text-sm">
                        <strong>Reading Order:</strong> <span>#{selectedNode.readingOrder}</span>
                    </div>
                )}
            </div>

            {/* Description section */}
            {selectedNode.description && (
                <div className="my-4 p-3 bg-gray-800/30 rounded border-l-3"
                    style={{ borderLeftColor: `${colorMap[group]}80` }}>
                    <p className="font-bold mb-2 flex items-center gap-1.5">
                        <span style={{ color: colorMap[group] }}>Description</span>
                    </p>
                    <TruncatedText
                        text={selectedNode.description}
                        isExpanded={showFullDescription}
                        toggleExpanded={() => setShowFullDescription(!showFullDescription)}
                    />
                </div>
            )}

            {/* Reflection section if available */}
            {selectedNode.reflection && (
                <div className="my-4 p-3 bg-gray-800/30 rounded border-l-3"
                    style={{ borderLeftColor: `${colorMap[group]}80` }}>
                    <p className="font-bold mb-2 flex items-center gap-1.5">
                        <span style={{ color: colorMap[group] }}>Reflection</span>
                    </p>
                    <TruncatedText
                        text={selectedNode.reflection}
                        isExpanded={showFullReflection}
                        toggleExpanded={() => setShowFullReflection(!showFullReflection)}
                    />
                </div>
            )}

            {/* Action buttons */}
            <div className="flex gap-2 mt-4 justify-between">
                <div className="flex gap-2">
                    <button
                        className="text-sm px-3 py-1.5 bg-blue-800 hover:bg-blue-700 rounded flex items-center gap-1.5 transition-colors"
                        onClick={() => {
                            handleNodeClick(selectedNode.id);
                            setIsMenuOpen(false);
                        }}
                    >
                        <Network size={16} /> Focus in graph
                    </button>

                    <button
                        className={`text-sm px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors ${pinnedNodes.has(selectedNode.id)
                            ? 'bg-yellow-800 hover:bg-yellow-700 text-yellow-100'
                            : 'bg-gray-700 hover:bg-gray-600'
                            }`}
                        onClick={(e) => togglePinNode(e, selectedNode.id)}
                    >
                        {pinnedNodes.has(selectedNode.id) ? '★ Unpin' : '☆ Pin'}
                    </button>
                </div>

                {selectedNode.link && (
                    <a
                        href={selectedNode.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-3 py-1.5 bg-blue-700 hover:bg-blue-600 rounded flex items-center gap-1.5 transition-colors"
                    >
                        <ExternalLink size={16} /> View Details
                    </a>
                )}
            </div>

            {/* Connections section */}
            <ShowConnectionsOfNode
                graphData={graphData}
                nodeId={selectedNodeId}
                colorMap={colorMap}
                setSelectedNode={setSelectedNode}
                focusOnNode={focusOnNode}
            />

        </div>
    );
};