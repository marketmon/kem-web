import { Network } from "lucide-react";
import { useEffect, useState } from "react";
import { getGroupLabel, getCategoryLabel, getNodeIcon, getNodeTitle } from "./infoStyle";


export default function ShowConnectionsOfNode(props) {

    const {
        nodeId,
        graphData,
        colorMap,
        setSelectedNode,
        focusOnNode
    } = props;

    const [connectionsByCategory, setConnectionsByCategory] = useState({});

    // Process focused node connections
    useEffect(() => {
        if (!nodeId) return;

        const connections = findConnectedNodes(nodeId);
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
    }, [nodeId]);


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

    const sortByCategory = (catA, catB) => {
        // Handle null/undefined values
        if (!catA && !catB) return 0;
        if (!catA) return 1;
        if (!catB) return -1;

        // Get the labels
        const labelA = getCategoryLabel(catA);
        const labelB = getCategoryLabel(catB);

        // Manual string comparison instead of using localeCompare
        if (labelA < labelB) return -1;
        if (labelA > labelB) return 1;
        return 0;
    };

    // Explore node connections
    const exploreNodeConnections = (nodeId) => {
        const node = graphData.nodes.find(n => n.id === nodeId);
        if (node) {
            setSelectedNode(node);
            focusOnNode(node);
        }
    };


    return (
        <div>
            {/* Connections section */}
            <div className="mt-6">
                <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
                    <Network size={16} /> Connections
                    <span className="text-xs text-gray-400 ml-2">
                        {Object.values(connectionsByCategory).flat().length} total
                    </span>
                </h4>

                {Object.keys(connectionsByCategory).length === 0 ? (
                    <p className="text-gray-400 text-sm italic">No connections found</p>
                ) : (
                    <div className="space-y-4">
                        {Object.entries(connectionsByCategory)
                            .sort(([catA], [catB]) => sortByCategory(catA, catB))
                            .map(([category, nodes]) => (
                                <div key={category} className="mb-3">
                                    <div
                                        className="text-sm font-medium mb-2 flex items-center gap-2"
                                        style={{ color: colorMap[category] }}
                                    >
                                        <div
                                            className="w-3 h-3 rounded-full"
                                            style={{ backgroundColor: colorMap[category] }}
                                        ></div>
                                        {getGroupLabel(category)} ({nodes.length})
                                    </div>

                                    <div className="ml-4 space-y-2 bg-black/20 rounded-md p-2">
                                        {nodes.map(node => (
                                            <div
                                                key={node.id}
                                                className={`text-sm cursor-pointer hover:bg-black/30 p-2 rounded transition-colors ${nodeId === node.id ? 'bg-black/40' : ''
                                                    }`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    exploreNodeConnections(node.id);
                                                }}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg">
                                                        {getNodeIcon(node.group)}
                                                    </span>
                                                    <span className="hover:underline flex-1">
                                                        {getNodeTitle(node)}
                                                    </span>
                                                </div>

                                                <div className="flex gap-2 mt-2">
                                                    <button
                                                        className="text-xs px-2 py-1 bg-blue-900 hover:bg-blue-800 rounded transition-colors"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            exploreNodeConnections(node.id);
                                                        }}
                                                    >
                                                        Explore
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    )
}