'use client'

import React, { useEffect, useRef, useState } from 'react';
import NodeDetails from '../renderNodeDetails';
import MobileNodeDetails from '../mobileNodeDetails';
import NavigationMenu from '../menu/menu.jsx';
import AIButton from '../ai/queryButton';
import AIChat from '../ai/aiChat';
// Import functions from modular files
import { colorMap, getGraphSettings } from './constants';
import { initializeGraph, updateGraphData, handleResize } from './graphUtils';
import {
    resetNodeHighlighting,
    highlightNode,
    highlightCategoryNode
} from './nodeInteractions';
import {
    focusOnNode,
    zoomToFit,
    handleNodeClick
} from './cameraControls';
import {
    renderMobileControls,
    renderDesktopControls
} from './renderHelpers';
import TimelineControls from './timelineAnimation/TimelineControls'



const NewGraph = ({ graphData: initialGraphData }) => {
    const containerRef = useRef(null);
    const graphRef = useRef(null);
    const [selectedNode, setSelectedNode] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [isMobileAdditionalDetailsOn, setIsMobileAdditionalDetailsOn] = useState(false);
    const [isAIOn, setIsAIOn] = useState(false)

    // Add state for nodes and links
    const [graphState, setGraphState] = useState({
        nodes: initialGraphData?.nodes || [],
        links: initialGraphData?.links || []
    });

    // Add state for active category and selected node in menu
    const [activeCategory, setActiveCategory] = useState('none');
    const [selectedMenuNodeId, setSelectedMenuNodeId] = useState(null);

    const [timelineActive, setTimelineActive] = useState(false);
    const [timelineState, setTimelineState] = useState({
        playing: false,
        currentIndex: 0,
        speed: 1
    });
    const [nodeDates, setNodeDates] = useState([]);
    const timelineInterval = useRef(null);

    // Using fixed settings instead of configurable ones
    const graphSettings = getGraphSettings(isMobile);

    // Detect mobile on mount and window resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkMobile();

        // Add resize listener
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    // Initialize the graph only once
    useEffect(() => {
        if (!containerRef.current || !graphState.nodes.length) return;

        // Initialize the 3D force graph
        const graph = initializeGraph({
            containerRef,
            graphState,
            graphSettings,
            isMobile,
            handleNodeClick: (node, graph) => {
                handleNodeClickWrapper(node, graph);
            },
            handleBackgroundClick: handleBackgroundClick
        });

        // Save reference to graph
        graphRef.current = graph;

        // Add window resize handler
        window.addEventListener('resize', () => handleResize(containerRef, graph));

        // Set initial size
        handleResize(containerRef, graph);

        return () => {
            window.removeEventListener('resize', () => handleResize(containerRef, graph));
            if (graph && typeof graph._destructor === 'function') {
                graph._destructor();
            }
        };
    }, [graphState, isMobile, graphSettings.nodeSize]); // Include isMobile in deps

    // Update graphState when initialGraphData changes
    useEffect(() => {
        if (initialGraphData) {
            setGraphState({
                nodes: initialGraphData.nodes || [],
                links: initialGraphData.links || []
            });
        }
    }, [initialGraphData]);

    useEffect(() => {
        if (graphState.nodes.length > 0) {
            const datedNodes = [];

            graphState.nodes.forEach(node => {
                let date = null;

                if (node.group === 'endeavor' && node.startDate) {
                    date = new Date(node.startDate);
                } else if (node.group === 'knowledge' && node.year) {
                    date = new Date(node.year, 0, 1); // January 1st of that year
                } else if (node.group === 'artifact' && node.completionDate) {
                    date = new Date(node.completionDate);
                }

                if (date) {
                    datedNodes.push({ id: node.id, date, group: node.group });
                }
            });

            // Sort by date
            datedNodes.sort((a, b) => a.date - b.date);
            setNodeDates(datedNodes);
        }
    }, [graphState.nodes]);

    // Wrapper function to handle node click from graph
    const handleNodeClickWrapper = (node, graph) => {
        handleNodeClick(
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
            (node) => highlightNode(node, graphRef, graphState, isMobile, graphSettings.nodeSize)
        );
    };

    // Handle background click
    const handleBackgroundClick = () => {
        resetNodeHighlighting(graphRef, setSelectedNode, setSelectedMenuNodeId, isMobile, graphSettings.nodeSize);

        // On mobile, hide the floating controls when clicking elsewhere (toggle behavior)
        if (isMobile) {
            setShowControls(!showControls);
        }
    };

    // Function to update the graph data - wrapper around imported function
    const updateGraphDataWrapper = (newNodes, newLinks) => {
        updateGraphData(newNodes, newLinks, graphRef, setGraphState);
    };

    // Function to focus on a specific node - wrapper around imported function
    const focusOnNodeWrapper = (node) => {
        if (!graphRef.current || !node) return;

        // Set as selected node to show details
        setSelectedNode(node);

        // Update menu selection state
        setSelectedMenuNodeId(node.id);

        // If the menu is open and we have a category filter, make sure it's the right one
        if (isMenuOpen && node.group && node.group !== activeCategory) {
            setActiveCategory(node.group);
        }

        // Apply the same highlighting logic as in handleNodeClick
        highlightNode(node, graphRef, graphState, isMobile, graphSettings.nodeSize);

        // Use the imported focusOnNode function
        focusOnNode(node, graphRef, isMobile);
    };

    // Function to zoom to fit
    const handleZoomToFit = () => {
        zoomToFit(graphRef, isMobile);
    };

    // Reset the graph to its initial state
    const resetGraph = () => {
        // Reset category and selection
        setActiveCategory('none');
        setSelectedNode(null);
        setSelectedMenuNodeId(null);

        // Restore full graph data
        updateGraphDataWrapper(initialGraphData.nodes, initialGraphData.links);

        // Reset node highlighting
        resetNodeHighlighting(graphRef, setSelectedNode, setSelectedMenuNodeId, isMobile, graphSettings.nodeSize);
    };

    // Toggle the control panel visibility on mobile
    const toggleControls = () => {
        setShowControls(!showControls);
    };

    // Function to toggle category in menu
    const toggleCategory = (category) => {
        if (activeCategory !== category) {
            // Set the new active category
            setActiveCategory(category);

            // Get nodes of the selected category
            const categoryNodes = initialGraphData.nodes.filter(node =>
                node.group === category
            );

            // Apply highlighting for each node in the category
            categoryNodes.forEach(node => {
                highlightCategoryNode(node, graphRef, graphState, isMobile, graphSettings.nodeSize);
            });

            // Zoom to fit the category nodes
            setTimeout(() => {
                if (graphRef.current) {
                    const nodesToFit = n => n.group === category;
                    zoomToFit(graphRef, isMobile, nodesToFit);
                }
            }, 100);
        } else {
            // Reset active category
            setActiveCategory('none');

            // Reset node highlighting
            resetNodeHighlighting(graphRef, setSelectedNode, setSelectedMenuNodeId, isMobile, graphSettings.nodeSize);

            // Zoom to fit the entire graph
            setTimeout(() => {
                handleZoomToFit();
            }, 100);
        }
    };

    return (
        <div className="resume-graph-container" style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <div ref={containerRef} style={{ width: '100%', height: '100%', }}></div>

            {isAIOn && (
                <AIChat
                    graphRef={graphRef}
                    graphData={graphState}
                    setIsAIOn={setIsAIOn}
                    colorMap={colorMap}
                    isMobile={isMobile}
                />
            )}


            {!isAIOn &&
                <div>
                    {/* Info panel for selected node - only show on desktop */}

                    {isMenuOpen ? (
                        <NavigationMenu
                            setIsMenuOpen={setIsMenuOpen}
                            graphData={initialGraphData}
                            setSelectedNode={setSelectedNode}
                            selectedNode={selectedNode}
                            updateGraphData={updateGraphDataWrapper}
                            focusOnNode={focusOnNodeWrapper}
                            activeCategory={activeCategory}
                            toggleCategory={toggleCategory}
                            selectedNodeId={selectedMenuNodeId}
                            resetGraph={resetGraph}
                            colorMap={colorMap}
                        />
                    ) : (
                        <>
                            {renderDesktopControls({
                                isMobile,
                                isMenuOpen,
                                setIsMenuOpen,
                                handleZoomToFit,
                                resetGraph,
                                isAIOn,
                                setIsAIOn,
                                AIButton,
                                timelineActive,
                                timelineInterval,
                                setTimelineState,
                                setTimelineActive,
                                timelineState,
                                graphState,
                                graphRef,
                                nodeDates,
                            })}

                            {renderMobileControls({
                                isMobile,
                                showControls,
                                toggleControls,
                                setIsMenuOpen,
                                selectedNode,
                                setSelectedNode,
                                isMobileAdditionalDetailsOn,
                                setIsMobileAdditionalDetailsOn,
                                focusOnNode: focusOnNodeWrapper,
                                resetNodeHighlighting: () => resetNodeHighlighting(graphRef, setSelectedNode, setSelectedMenuNodeId, isMobile, graphSettings.nodeSize),
                                handleZoomToFit,
                                resetGraph,
                                isMenuOpen,
                                MobileNodeDetails,
                                initialGraphData,
                                setSelectedNode,
                                timelineActive,
                                timelineInterval,
                                setTimelineState,
                                setTimelineActive,
                                timelineState,
                                graphState,
                                graphRef,
                                nodeDates,
                                setIsAIOn,
                                isAIOn,
                                AIButton
                            })}
                        </>
                    )}
                    {timelineActive && (
                        <TimelineControls
                            graphRef={graphRef}
                            nodeDates={nodeDates}
                            graphState={graphState}
                            setTimelineActive={setTimelineActive}
                            setTimelineState={setTimelineState}
                            timelineState={timelineState}
                            timelineInterval={timelineInterval}
                            setSelectedNode={setSelectedNode}
                            focusOnNode={focusOnNode}
                            graphData={initialGraphData}
                        />
                    )}
                </div>
            }
            {selectedNode && !isMobile && !isMenuOpen && (
                <NodeDetails
                    graphData={initialGraphData}
                    selectedNode={selectedNode}
                    colorMap={colorMap}
                    setSelectedNode={setSelectedNode}
                    focusOnNode={focusOnNodeWrapper}
                    onClose={() => {
                        setSelectedNode(null);
                        setSelectedMenuNodeId(null);
                        resetNodeHighlighting(graphRef, setSelectedNode, setSelectedMenuNodeId, isMobile, graphSettings.nodeSize);
                    }}
                />
            )}
        </div>
    );
};

export default NewGraph;