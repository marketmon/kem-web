import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Calendar, ChevronLeft, ChevronRight, SkipBack, SkipForward, FastForward, LocateFixed, Navigation, Maximize2, Minimize2 } from 'lucide-react';
import { updateTimelineVisibility } from './timelineControlFunctions';
import { getNodeColor } from '../../infoStyle';

export default function TimelineControls(props) {
    const {
        graphRef,
        nodeDates,
        graphState,
        setTimelineActive,
        setTimelineState,
        timelineState,
        timelineInterval,
        setSelectedNode,
        focusOnNode,
        graphData
    } = props;

    const [newlyAddedNodes, setNewlyAddedNodes] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startOffset, setStartOffset] = useState(0);
    const [scrollOffset, setScrollOffset] = useState(0);
    const [targetOffset, setTargetOffset] = useState(0);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [yearOptions, setYearOptions] = useState([]);
    const dialRef = useRef(null);
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    const [currentNodeDetails, setCurrentNodeDetails] = useState(null);
    const [isCompact, setIsCompact] = useState(true);
    const [touchStartX, setTouchStartX] = useState(0);
    const [isTouchDragging, setIsTouchDragging] = useState(false);



    // Extract years from nodeDates for quick selection
    useEffect(() => {
        if (nodeDates && nodeDates.length > 0) {
            const years = nodeDates.map(node => new Date(node.date).getFullYear());
            const uniqueYears = [...new Set(years)].sort((a, b) => a - b);
            setYearOptions(uniqueYears);
        }
    }, [nodeDates]);

    useEffect(() => {
        if (timelineState.currentIndex >= 0 && nodeDates[timelineState.currentIndex]) {
            const currentNode = nodeDates[timelineState.currentIndex];
            const nodeData = graphState.nodes.find(n => n.id === currentNode.id);
            if (nodeData) {
                setCurrentNodeDetails(nodeData);
            }
        }
    }, [timelineState.currentIndex, nodeDates, graphState]);

    useEffect(() => {
        const animate = () => {
            if (!isDragging) {
                const diff = targetOffset - scrollOffset;
                if (Math.abs(diff) > 0.1) {
                    setScrollOffset(current => current + diff * 0.15);
                }
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current);
    }, [targetOffset, scrollOffset, isDragging]);

    useEffect(() => {
        if (timelineState.currentIndex > 0) {
            const currentNode = nodeDates[timelineState.currentIndex];
            const previousNode = nodeDates[timelineState.currentIndex - 1];

            if (currentNode && (!previousNode || currentNode.date > previousNode.date)) {
                const nodeData = graphState.nodes.find(n => n.id === currentNode.id);
                if (nodeData) {
                    setNewlyAddedNodes([nodeData.name]);
                    setShowPopup(true);
                    setTimeout(() => setShowPopup(false), 2000);
                }
            }
        }
    }, [timelineState.currentIndex]);

    // Modified handlers for desktop
    const handleMouseDown = (e) => {
        if (e.type === 'mousedown') {
            e.preventDefault();
            setIsDragging(true);
            setStartX(e.clientX);
            setStartOffset(scrollOffset);
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging || e.type !== 'mousemove') return;
        const deltaX = e.clientX - startX;
        setScrollOffset(startOffset + deltaX);
        updateIndexFromScroll(startOffset + deltaX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        snapToNearestTick();
    };

    // New handlers for mobile touch events
    const handleTouchStart = (e) => {
        setIsTouchDragging(true);
        setTouchStartX(e.touches[0].clientX);
        setStartOffset(scrollOffset);
    };

    const handleTouchMove = (e) => {
        if (!isTouchDragging) return;
        e.preventDefault(); // Prevent default scrolling
        const deltaX = e.touches[0].clientX - touchStartX;
        setScrollOffset(startOffset + deltaX);
        updateIndexFromScroll(startOffset + deltaX);
    };

    const handleTouchEnd = () => {
        setIsTouchDragging(false);
        snapToNearestTick();
    };

    // Helper function to update index based on scroll position
    const updateIndexFromScroll = (currentOffset) => {
        const containerWidth = containerRef.current?.offsetWidth || 800;
        const tickSpacing = 60;
        const totalWidth = nodeDates.length * tickSpacing;
        const centerPos = -currentOffset + containerWidth / 2;
        let newIndex = Math.round((nodeDates.length - 1) * (centerPos / totalWidth));
        newIndex = Math.max(0, Math.min(nodeDates.length - 1, newIndex));

        if (newIndex !== timelineState.currentIndex) {
            setTimelineState(prev => ({ ...prev, currentIndex: newIndex }));
            updateTimelineVisibility(newIndex, graphRef, graphState, nodeDates);
        }
    };

    // Helper function to snap to nearest tick
    const snapToNearestTick = () => {
        const containerWidth = containerRef.current?.offsetWidth || 800;
        const tickSpacing = 60;
        const totalWidth = nodeDates.length * tickSpacing;
        const centerPosition = (timelineState.currentIndex / (nodeDates.length - 1)) * totalWidth;
        const newOffset = (containerWidth / 2) - centerPosition;
        setTargetOffset(newOffset);
    };

    // Modified fast forward function
    const handleFastForward = () => {
        clearInterval(timelineInterval.current);

        // Cycle through speeds: 1 -> 2 -> 3 -> 5 -> 1
        const newSpeed = timelineState.speed === 1 ? 2 :
            timelineState.speed === 2 ? 3 :
                timelineState.speed === 3 ? 5 : 1;

        setTimelineState(prev => ({ ...prev, speed: newSpeed, playing: true }));

        // Start playing with new speed
        timelineInterval.current = setInterval(() => {
            setTimelineState(prev => {
                const nextIndex = prev.currentIndex + 1;
                if (nextIndex >= nodeDates.length) {
                    clearInterval(timelineInterval.current);
                    return { ...prev, playing: false };
                }
                updateTimelineVisibility(nextIndex, graphRef, graphState, nodeDates);
                return { ...prev, currentIndex: nextIndex };
            });
        }, 1500 / newSpeed);
    };

    // Detect if mobile
    const isMobile = window.innerWidth < 640;

    const pauseTimeline = () => {
        clearInterval(timelineInterval.current);
        setTimelineState(prev => ({ ...prev, playing: false }));
    };

    const resumeTimeline = () => {
        if (timelineState.currentIndex >= nodeDates.length - 1) {
            setTimelineState(prev => ({ ...prev, currentIndex: 0 }));
            updateTimelineVisibility(0, graphRef, graphState, nodeDates);
        }
        setTimelineState(prev => ({ ...prev, playing: true }));

        timelineInterval.current = setInterval(() => {
            setTimelineState(prev => {
                const nextIndex = prev.currentIndex + 1;
                if (nextIndex >= nodeDates.length) {
                    clearInterval(timelineInterval.current);
                    return { ...prev, playing: false };
                }
                updateTimelineVisibility(nextIndex, graphRef, graphState, nodeDates);
                return { ...prev, currentIndex: nextIndex };
            });
        }, 1500 / timelineState.speed);
    };

    const exitTimeline = () => {
        clearInterval(timelineInterval.current);
        setTimelineActive(false);
        setTimelineState({ playing: false, currentIndex: 0, speed: 1 });
        if (graphRef.current) {
            graphRef.current.nodeVisibility(true);
            graphRef.current.linkVisibility(true);
        }
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const jumpToDate = (targetDate) => {
        const targetTimestamp = new Date(targetDate).getTime();
        let closestIndex = 0;
        let closestDiff = Infinity;

        nodeDates.forEach((node, index) => {
            const diff = Math.abs(new Date(node.date).getTime() - targetTimestamp);
            if (diff < closestDiff) {
                closestDiff = diff;
                closestIndex = index;
            }
        });

        setTimelineState(prev => ({ ...prev, currentIndex: closestIndex }));
        updateTimelineVisibility(closestIndex, graphRef, graphState, nodeDates);
    };

    const jumpToYear = (year) => {
        const index = nodeDates.findIndex(node => new Date(node.date).getFullYear() === parseInt(year));
        if (index !== -1) {
            setTimelineState(prev => ({ ...prev, currentIndex: index }));
            updateTimelineVisibility(index, graphRef, graphState, nodeDates);
        }
    };

    const jumpToStart = () => {
        setTimelineState(prev => ({ ...prev, currentIndex: 0 }));
        updateTimelineVisibility(0, graphRef, graphState, nodeDates);
    };

    const jumpToEnd = () => {
        const lastIndex = nodeDates.length - 1;
        setTimelineState(prev => ({ ...prev, currentIndex: lastIndex }));
        updateTimelineVisibility(lastIndex, graphRef, graphState, nodeDates);
    };

    const jumpSteps = (steps) => {
        const newIndex = Math.max(0, Math.min(nodeDates.length - 1, timelineState.currentIndex + steps));
        setTimelineState(prev => ({ ...prev, currentIndex: newIndex }));
        updateTimelineVisibility(newIndex, graphRef, graphState, nodeDates);
    };

    const handleWheel = (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 1 : -1;
        const newIndex = Math.max(0, Math.min(nodeDates.length - 1, timelineState.currentIndex + delta));
        if (newIndex !== timelineState.currentIndex) {
            setTimelineState(prev => ({ ...prev, currentIndex: newIndex }));
            updateTimelineVisibility(newIndex, graphRef, graphState, nodeDates);
        }
    };

    useEffect(() => {
        const containerWidth = containerRef.current?.offsetWidth || 800;
        const tickSpacing = 60;
        const totalWidth = nodeDates.length * tickSpacing;
        const centerPosition = (timelineState.currentIndex / (nodeDates.length - 1)) * totalWidth;
        const newOffset = (containerWidth / 2) - centerPosition;
        setTargetOffset(newOffset);
    }, [timelineState.currentIndex, nodeDates.length]);

    const exploreNodeConnections = (nodeId) => {
        const node = graphData.nodes.find(n => n.id === nodeId);
        if (node) {
            setSelectedNode(node);
            focusOnNode(node, graphRef);
        }
    };

    return (
        <div
            ref={containerRef}
            className={`fixed bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-black via-gray-900/95 to-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-xl z-50 w-11/12 max-w-4xl transition-all duration-300 ${isCompact ? 'p-2 sm:p-3' : 'p-3 sm:p-5'
                }`}
        >
            {/* Resize button in top-right corner */}
            <button
                onClick={() => setIsCompact(!isCompact)}
                className="absolute top-2 right-12 p-1.5 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all"
                title={isCompact ? "Expand" : "Compact"}
            >
                {isCompact ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
            </button>

            {/* Top controls with mobile-optimized layout */}
            <div className={`flex justify-between items-center ${isCompact ? 'mb-2' : 'mb-4'}`}>
                <button
                    onClick={exitTimeline}
                    className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all"
                    title="Exit Timeline"
                >
                    <X size={18} />
                </button>

                <div className={`flex flex-col items-center flex-grow mx-2 sm:mx-4 bg-gray-800/50 rounded-xl border border-gray-700/50 ${isCompact ? 'p-2' : 'p-3'
                    }`}>
                    {!isCompact && (
                        <div className="text-gray-400 text-xs font-medium mb-1">
                            Timeline Position
                        </div>
                    )}
                    <div className={`text-white font-semibold ${isCompact ? 'text-xs' : 'text-sm mb-1'}`}>
                        {nodeDates[timelineState.currentIndex] && formatDate(new Date(nodeDates[timelineState.currentIndex].date))}
                    </div>
                    {currentNodeDetails && (
                        <div
                            className={`text-center group cursor-pointer hover:bg-gray-700/50 rounded-lg transition-all ${isCompact ? 'p-1' : 'p-2'
                                }`}
                            onClick={(e) => {
                                e.stopPropagation();
                                exploreNodeConnections(currentNodeDetails.id);
                            }}
                        >
                            <div className={`text-white font-medium truncate max-w-[180px] sm:max-w-sm group-hover:text-blue-400 transition-colors ${isCompact ? 'text-xs' : 'text-sm'
                                }`}>
                                {currentNodeDetails.name}
                            </div>
                            {!isCompact && (
                                <div className="text-gray-500 text-xs flex items-center justify-center gap-1 group-hover:text-gray-400">
                                    <div
                                        className="w-2 h-2 rounded-full"
                                        style={{ backgroundColor: getNodeColor(currentNodeDetails.group) }}
                                    />
                                    {currentNodeDetails.group.charAt(0).toUpperCase() + currentNodeDetails.group.slice(1)}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Stacked controls for mobile */}
                <div className={`flex ${isMobile ? 'flex-col gap-1' : 'gap-2'}`}>
                    <button
                        onClick={timelineState.playing ? pauseTimeline : resumeTimeline}
                        className={`${isCompact ? 'p-1.5' : 'p-2'} rounded-lg transition-all ${timelineState.playing
                            ? 'text-blue-400 bg-blue-500/20 hover:bg-blue-500/30'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                            }`}
                        title={timelineState.playing ? "Pause" : "Play"}
                    >
                        {timelineState.playing ? <Pause size={isCompact ? 16 : 18} /> : <Play size={isCompact ? 16 : 18} />}
                    </button>
                    <button
                        onClick={handleFastForward}
                        className={`${isCompact ? 'p-1.5' : 'p-2'} rounded-lg transition-all ${timelineState.speed > 1
                            ? 'text-orange-400 bg-orange-500/20 hover:bg-orange-500/30'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                            } relative`}
                        title={`Speed: ${timelineState.speed}x`}
                    >
                        <FastForward size={isCompact ? 16 : 18} />
                        {timelineState.speed > 1 && (
                            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                                {timelineState.speed}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Quick navigation controls - responsive layout */}
            {!isCompact && (
                <div className="flex flex-wrap justify-between items-center gap-2 mb-4 bg-gray-800/30 p-2 rounded-xl border border-gray-700/30">
                    <div className="flex items-center gap-1 sm:gap-2">
                        <button
                            onClick={jumpToStart}
                            className="p-1.5 sm:p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all"
                            title="Go to start"
                        >
                            <SkipBack size={16} />
                        </button>
                        <button
                            onClick={() => jumpSteps(-10)}
                            className="p-1.5 sm:p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all"
                            title="Back 10 steps"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={() => jumpSteps(-1)}
                            className="px-2 sm:px-3 py-1 sm:py-1.5 text-white bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-all text-sm font-medium"
                        >
                            -1
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <select
                            value={yearOptions[0] && new Date(nodeDates[timelineState.currentIndex]?.date || '').getFullYear()}
                            onChange={(e) => jumpToYear(e.target.value)}
                            className="bg-gray-800/50 text-white border border-gray-600/50 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 text-sm focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30"
                        >
                            {yearOptions.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                        <button
                            onClick={() => setShowDatePicker(!showDatePicker)}
                            className={`p-1.5 sm:p-2 rounded-lg transition-all ${showDatePicker
                                ? 'text-blue-400 bg-blue-500/20'
                                : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                }`}
                            title="Jump to date"
                        >
                            <Calendar size={16} />
                        </button>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-2">
                        <button
                            onClick={() => jumpSteps(1)}
                            className="px-2 sm:px-3 py-1 sm:py-1.5 text-white bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-all text-sm font-medium"
                        >
                            +1
                        </button>
                        <button
                            onClick={() => jumpSteps(10)}
                            className="p-1.5 sm:p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all"
                            title="Forward 10 steps"
                        >
                            <ChevronRight size={16} />
                        </button>
                        <button
                            onClick={jumpToEnd}
                            className="p-1.5 sm:p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all"
                            title="Go to end"
                        >
                            <SkipForward size={16} />
                        </button>
                    </div>
                </div>
            )}

            {/* Date picker popup */}
            {showDatePicker && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-gray-800/95 backdrop-blur-md border border-gray-600/50 rounded-xl p-4 shadow-xl z-50">
                    <div className="text-white text-sm font-medium mb-3">Jump to specific date</div>
                    <div className="flex items-center gap-2">
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="bg-gray-700/50 text-white border border-gray-600/50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30"
                        />
                        <button
                            onClick={() => {
                                if (selectedDate) {
                                    jumpToDate(selectedDate);
                                    setShowDatePicker(false);
                                    setSelectedDate('');
                                }
                            }}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all text-sm font-medium"
                        >
                            Jump
                        </button>
                        <button
                            onClick={() => setShowDatePicker(false)}
                            className="px-4 py-2 bg-gray-600/50 hover:bg-gray-500/50 text-white rounded-lg transition-all text-sm font-medium"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Enhanced dial with touch support */}
            <div className={`relative bg-gray-800/20 rounded-xl ${isCompact ? 'p-1 mb-2' : 'p-2 mb-3'}`}>
                <div
                    className={`relative overflow-hidden cursor-grab active:cursor-grabbing rounded-lg ${isCompact ? 'h-12 sm:h-14' : 'h-16 sm:h-20'
                        }`}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onWheel={handleWheel}
                >
                    <div
                        ref={dialRef}
                        className="absolute top-0 left-0 right-0 flex items-center h-full transition-transform ease-out"
                        style={{ transform: `translateX(${scrollOffset}px)` }}
                    >
                        {/* Center marker with enhanced glow */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                            <div className={`w-1 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 ${isCompact ? 'h-8' : 'h-12'
                                }`} />
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-1">
                                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                            </div>
                        </div>

                        {/* Ticks */}
                        {nodeDates.map((node, index) => {
                            const isActive = index === timelineState.currentIndex;
                            const year = new Date(node.date).getFullYear();
                            const previousYear = index > 0 ? new Date(nodeDates[index - 1].date).getFullYear() : null;
                            const showYearLabel = index === 0 || year !== previousYear || index % 10 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`absolute flex flex-col items-center cursor-pointer transition-all duration-300 ${isActive ? 'scale-110' : 'hover:scale-105'
                                        }`}
                                    style={{
                                        left: `${index * 60}px`,
                                        transform: 'translateX(-50%)'
                                    }}
                                    onClick={() => {
                                        setTimelineState(prev => ({ ...prev, currentIndex: index }));
                                        updateTimelineVisibility(index, graphRef, graphState, nodeDates);
                                    }}
                                >
                                    <div className={`
                                        w-0.5 transition-all duration-300 rounded-full
                                        ${isActive
                                            ? `${isCompact ? 'h-8' : 'h-10'} bg-white shadow-lg shadow-white/20`
                                            : `${isCompact ? 'h-4' : 'h-6'} bg-gray-600 hover:bg-gray-500`
                                        }
                                    `} />
                                    {showYearLabel && !isCompact && (
                                        <span className={`
                                            text-xs mt-1 transition-all duration-300
                                            ${isActive
                                                ? 'text-white font-bold'
                                                : 'text-gray-500 hover:text-gray-400'
                                            }
                                        `}>
                                            {year}
                                        </span>
                                    )}
                                </div>
                            );
                        })}

                        {/* Popup for newly added nodes */}
                        {showPopup && newlyAddedNodes.length > 0 && (
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg pointer-events-none"
                                style={{ animation: 'fadeInOut 2s ease-in-out' }}
                            >
                                <div className="font-medium">New Node Added</div>
                                <div className="text-blue-100">{newlyAddedNodes.join(', ')}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Enhanced instructions */}
            {!isCompact && (
                <div className="text-center text-gray-500 text-xs bg-gray-800/20 rounded-lg p-2">
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                        <span className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-gray-700 rounded" />
                            Scroll/drag timeline
                        </span>
                        <span className="text-gray-600">•</span>
                        <span>Click ticks to jump</span>
                        <span className="text-gray-600">•</span>
                        <span>Use controls for navigation</span>
                    </div>
                </div>
            )}

            {/* Enhanced animations */}
            <style jsx>{`
                @keyframes fadeInOut {
                    0% { opacity: 0; transform: translate(-50%, -10px) scale(0.9); }
                    10% { opacity: 1; transform: translate(-50%, 0) scale(1); }
                    90% { opacity: 1; transform: translate(-50%, 0) scale(1); }
                    100% { opacity: 0; transform: translate(-50%, -10px) scale(0.9); }
                }
            `}</style>
        </div>
    );
}

