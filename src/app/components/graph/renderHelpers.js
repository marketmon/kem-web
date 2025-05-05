import React from 'react';
import { Expand, Menu, X, RefreshCw, ChevronUp, ChevronDown, Clock } from 'lucide-react';
import { colorMap } from './constants';
import { startTimeline, updateTimelineVisibility } from './timelineAnimation/timelineControlFunctions';

/**
 * Render mobile controls
 * @param {Object} props - Component props
 * @returns {JSX.Element|null} - Mobile controls component
 */
export const renderMobileControls = ({
    isMobile,
    showControls,
    toggleControls,
    setIsMenuOpen,
    selectedNode,
    setSelectedNode,
    isMobileAdditionalDetailsOn,
    setIsMobileAdditionalDetailsOn,
    focusOnNode,
    resetNodeHighlighting,
    handleZoomToFit,
    resetGraph,
    isMenuOpen,
    MobileNodeDetails,
    initialGraphData,
    timelineActive,
    setTimelineState,
    setTimelineActive,
    timelineState,
    timelineInterval,
    graphRef,
    graphState,
    nodeDates,
    isAIOn,
    setIsAIOn,
    AIButton
}) => {
    if (!isMobile) return null;

    return (
        <div className={`fixed bottom-0 left-0 right-0 transform transition-all duration-300 ease-out ${showControls ? 'translate-y-0' : 'translate-y-full'
            }`}>
            {/* Pull tab - more prominent and centered */}
            <div
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/90 hover:bg-black/95 px-8 py-2 rounded-t-xl cursor-pointer transition-colors"
                onClick={toggleControls}
            >
                <div className="flex items-center justify-center space-x-2">
                    <ChevronUp
                        size={20}
                        className={`transition-transform duration-300 ${showControls ? 'rotate-180' : ''}`}
                    />
                    <span className="text-sm text-gray-300">
                        {showControls ? 'Hide Controls' : 'Show Controls'}
                    </span>
                </div>
            </div>

            {/* Main controls container with better styling */}
            <div className={`bg-gradient-to-t from-black via-gray-900 to-gray-900 ${selectedNode && isMobileAdditionalDetailsOn ? 'rounded-t-2xl' : ''
                }`}>
                {selectedNode ? (
                    // Selected node view
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center flex-1 min-w-0">
                                <button
                                    className="p-2.5 bg-gray-800/80 hover:bg-gray-700/80 rounded-xl mr-3 transition-colors"
                                    onClick={() => setIsMenuOpen(true)}
                                    aria-label="Open Explorer Menu"
                                >
                                    <Menu size={20} />
                                </button>

                                <div className="flex items-center flex-1 min-w-0" onClick={() => {
                                    focusOnNode(selectedNode);
                                    setIsMobileAdditionalDetailsOn(prev => !prev);
                                }}>
                                    <div
                                        className="w-3 h-3 rounded-full mr-3 flex-shrink-0"
                                        style={{ backgroundColor: colorMap[selectedNode.group] || '#ccc' }}
                                    />
                                    <span className="text-white font-medium truncate">
                                        {selectedNode.name || selectedNode.title}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center ml-3 space-x-2">
                                <button
                                    className={`p-2.5 rounded-xl transition-all ${isMobileAdditionalDetailsOn
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-800/80 hover:bg-gray-700/80'
                                        }`}
                                    onClick={() => setIsMobileAdditionalDetailsOn(prev => !prev)}
                                    aria-label={isMobileAdditionalDetailsOn ? "Hide details" : "Show details"}
                                >
                                    {isMobileAdditionalDetailsOn ?
                                        <ChevronDown size={20} /> :
                                        <ChevronUp size={20} />
                                    }
                                </button>

                                <button
                                    className="p-2.5 bg-gray-800/80 hover:bg-red-600/20 hover:text-red-400 rounded-xl transition-all"
                                    onClick={() => resetNodeHighlighting()}
                                    aria-label="Close"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Node details with smooth animation */}
                        <div className={`transition-all duration-300 ease-out ${isMobileAdditionalDetailsOn ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
                            } overflow-hidden`}>
                            {isMobileAdditionalDetailsOn && !isMenuOpen && (
                                <MobileNodeDetails
                                    selectedNode={selectedNode}
                                    graphData={initialGraphData}
                                    colorMap={colorMap}
                                    setSelectedNode={setSelectedNode}
                                    focusOnNode={focusOnNode}
                                />
                            )}
                        </div>
                    </div>
                ) : (
                    // Default view with main controls
                    <div className="p-4">
                        <div className="flex justify-between items-center max-w-md mx-auto">
                            <button
                                className="p-3 bg-gray-800/80 hover:bg-gray-700/80 rounded-xl transition-all"
                                onClick={() => setIsMenuOpen(true)}
                                aria-label="Open Explorer Menu"
                            >
                                <Menu size={24} />
                            </button>

                            <div className="flex items-center space-x-3">
                                <button
                                    className="p-3 bg-gray-800/80 hover:bg-gray-700/80 rounded-xl transition-all"
                                    onClick={handleZoomToFit}
                                    aria-label="Zoom to Fit"
                                >
                                    <Expand size={24} />
                                </button>

                                <button
                                    className="p-3 bg-gray-800/80 hover:bg-gray-700/80 rounded-xl transition-all"
                                    onClick={resetGraph}
                                    aria-label="Reset Graph"
                                >
                                    <RefreshCw size={24} />
                                </button>

                                {!timelineActive && (
                                    <button
                                        onClick={() => {
                                            startTimeline(
                                                setTimelineActive,
                                                setTimelineState,
                                                timelineInterval,
                                                timelineState,
                                                graphRef,
                                                graphState,
                                                nodeDates
                                            )
                                        }}
                                        className="p-3 bg-gray-800/80 hover:bg-gray-700/80 rounded-xl transition-all"
                                        aria-label="Timeline View"
                                    >
                                        <Clock size={24} />
                                    </button>
                                )}

                                <AIButton
                                    isAIOn={isAIOn}
                                    setIsAIOn={setIsAIOn}
                                    className="p-3 bg-gray-800/80 hover:bg-blue-600/20 hover:text-blue-400 rounded-xl transition-all"
                                />
                            </div>
                        </div>

                        {/* Optional: Add labels below icons for better UX */}
                        <div className="flex justify-between items-center max-w-md mx-auto mt-2 text-xs text-gray-400">
                            <span className="w-12 text-center">Menu</span>
                            <div className="flex items-center space-x-3">
                                <span className="w-12 text-center">Zoom</span>
                                <span className="w-12 text-center">Reset</span>
                                {!timelineActive && <span className="w-12 text-center">Timeline</span>}
                                <span className="w-18 text-center">AI</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

/**
 * Render desktop controls
 * @param {Object} props - Component props
 * @returns {JSX.Element|null} - Desktop controls component
 */
export const renderDesktopControls = ({
    isMobile,
    isMenuOpen,
    setIsMenuOpen,
    handleZoomToFit,
    resetGraph,
    isAIOn,
    setIsAIOn,
    AIButton,
    timelineActive,
    setTimelineState,
    setTimelineActive,
    timelineState,
    timelineInterval,
    graphRef,
    graphState,
    nodeDates
}) => {
    if (isMobile || isMenuOpen) return null;

    return (
        <div className="absolute top-5 right-5 p-2 bg-black/40 border border-white rounded-lg flex flex-col justify-center gap-2">
            {!timelineActive && <button
                className="p-2 flex justify-center bg-black/60 rounded hover:bg-black/90 transition-colors"
                onClick={() => { setIsMenuOpen(true) }}
                title="Open Explorer Menu"
            >
                <div className="">
                    <Menu className="hover:scale-105 hover:cursor-pointer mx-auto" size={26} />
                    <p className="text-xs text-center">Menu</p>
                </div>
            </button>}
            <button
                className="p-2 flex justify-center bg-black/60 rounded hover:bg-black/90 transition-colors"
                onClick={handleZoomToFit}
                title="Zoom to Fit"
            >
                <div className="">
                    <Expand className="hover:scale-105 hover:cursor-pointer mx-auto" size={26} />
                    <p className="text-xs text-center">Zoom Fit</p>
                </div>
            </button>
            {!timelineActive && <button
                className="p-2 flex justify-center bg-black/60 rounded hover:bg-black/90 transition-colors"
                onClick={resetGraph}
                title="Reset Graph"
            >
                <div className="">

                    <RefreshCw className="hover:scale-105 hover:cursor-pointer mx-auto" size={26} />
                    <p className="text-xs text-center">Restart</p>
                </div>

            </button>}
            {!timelineActive && (
                <button
                    onClick={() => {
                        startTimeline(
                            setTimelineActive,
                            setTimelineState,
                            timelineInterval,
                            timelineState,
                            graphRef,
                            graphState,
                            nodeDates
                        )
                    }}
                    className="p-2 flex justify-center bg-black/60 rounded hover:bg-black/90 transition-colors"
                >
                    <div>
                        <Clock
                            title="Timeline View"
                            className="hover:scale-105 hover:cursor-pointer mx-auto" size={26}
                        />
                        <p className="text-xs text-center">Timeline</p>
                    </div>
                </button>
            )}

            {!timelineActive && <div>
                <AIButton isAIOn={isAIOn} setIsAIOn={setIsAIOn} />
            </div>}
        </div>
    );
};