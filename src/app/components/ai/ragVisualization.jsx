// components/ai/ragVisualization.jsx
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Import animation stage components
import RetrievalStage from './ragAnimationStages/retrievalStage';
import FilteringStage from './ragAnimationStages/filteringStage';
import ExpansionStage from './ragAnimationStages/expansionStage';
import ResultStage from './ragAnimationStages/resultStage';

// Stage constants
const STAGES = {
    IDLE: -1,
    RETRIEVAL: 0,
    FILTERING: 1,
    EXPANSION: 2,
    RESULT: 3
};

// Simplified stage durations
const STAGE_DURATIONS = {
    [STAGES.RETRIEVAL]: 2000,
    [STAGES.FILTERING]: 4000,
    [STAGES.EXPANSION]: 4000,
    [STAGES.RESULT]: 2000
};

const RAGVisualization = ({
    ragResponse,
    graphRef,
    graphData,
    isVisible = true,
    onAnimationComplete,
    autoAdvance = true,
    isMobile = false,
    nodeSize = 1,
    colorMap
}) => {
    // Animation state
    const [currentStage, setCurrentStage] = useState(STAGES.IDLE);
    const [animationProgress, setAnimationProgress] = useState(0);

    // Store stage timing information
    const stageTimerRef = useRef(null);
    const progressTimerRef = useRef(null);

    // Extract node IDs from the RAG response
    const retrievedNodeIds = ragResponse?.retrieved_node_ids || [];
    const filteredNodeIds = ragResponse?.filtered_node_ids || [];
    const expandedNodeIds = ragResponse?.expanded_node_ids || [];

    // Initialize visualization when component mounts or ragResponse changes
    useEffect(() => {
        if (ragResponse && isVisible) {
            setCurrentStage(STAGES.RETRIEVAL);
            setAnimationProgress(0);
        }

        return () => {
            if (stageTimerRef.current) clearTimeout(stageTimerRef.current);
            if (progressTimerRef.current) clearInterval(progressTimerRef.current);
        };
    }, [ragResponse, isVisible]);

    // Handle stage progression
    useEffect(() => {
        if (!autoAdvance || currentStage === STAGES.IDLE) return;

        // Clear existing timers
        if (stageTimerRef.current) clearTimeout(stageTimerRef.current);
        if (progressTimerRef.current) clearInterval(progressTimerRef.current);

        const duration = STAGE_DURATIONS[currentStage];

        // Update progress periodically
        const progressInterval = 100; // Update every 100ms
        let elapsed = 0;

        progressTimerRef.current = setInterval(() => {
            elapsed += progressInterval;
            const progress = Math.min(elapsed / duration, 1);
            setAnimationProgress(progress);

            if (progress >= 1) {
                clearInterval(progressTimerRef.current);
            }
        }, progressInterval);

        // Move to next stage after duration
        if (currentStage < STAGES.RESULT) {
            stageTimerRef.current = setTimeout(() => {
                setCurrentStage(currentStage + 1);
                setAnimationProgress(0);
            }, duration);
        } else if (currentStage === STAGES.RESULT) {
            stageTimerRef.current = setTimeout(() => {
                onAnimationComplete?.();
            }, duration);
        }

        return () => {
            if (stageTimerRef.current) clearTimeout(stageTimerRef.current);
            if (progressTimerRef.current) clearInterval(progressTimerRef.current);
        };
    }, [currentStage, autoAdvance, onAnimationComplete]);

    // Skip animation
    const handleSkip = () => {
        if (stageTimerRef.current) clearTimeout(stageTimerRef.current);
        if (progressTimerRef.current) clearInterval(progressTimerRef.current);

        setCurrentStage(STAGES.RESULT);
        setAnimationProgress(1);

        setTimeout(() => {
            onAnimationComplete?.();
        }, 300);
    };

    // Render stage-specific visualization
    const renderCurrentStage = () => {
        if (!graphRef?.current) return null;

        const commonProps = {
            graphRef,
            graphData,
            progress: animationProgress,
            isMobile,
            nodeSize,
            colorMap
        };

        switch (currentStage) {
            case STAGES.RETRIEVAL:
                return <RetrievalStage {...commonProps} retrievedNodeIds={retrievedNodeIds} />;
            case STAGES.FILTERING:
                return <FilteringStage {...commonProps} retrievedNodeIds={retrievedNodeIds} filteredNodeIds={filteredNodeIds} />;
            case STAGES.EXPANSION:
                return <ExpansionStage {...commonProps} filteredNodeIds={filteredNodeIds} expandedNodeIds={expandedNodeIds} />;
            case STAGES.RESULT:
                return <ResultStage {...commonProps} filteredNodeIds={filteredNodeIds} expandedNodeIds={expandedNodeIds} />;
            default:
                return null;
        }
    };

    if (!isVisible || !ragResponse) return null;

    const getStageName = () => {
        switch (currentStage) {
            case STAGES.RETRIEVAL: return "Retrieving";
            case STAGES.FILTERING: return "Filtering";
            case STAGES.EXPANSION: return "Expanding";
            case STAGES.RESULT: return "Finalizing";
            default: return "";
        }
    };

    const getStageDescription = () => {
        switch (currentStage) {
            case STAGES.RETRIEVAL: return "Finding relevant docs...";
            case STAGES.FILTERING: return "Selecting best matches...";
            case STAGES.EXPANSION: return "Expanding context...";
            case STAGES.RESULT: return "Generating response...";
            default: return "";
        }
    };

    return (
        <div className="fixed inset-0 z-[49] pointer-events-none">
            {renderCurrentStage()}

            {/* Compact stage information overlay */}
            <div className={`fixed ${isMobile ? 'top-2 right-2' : 'top-4 right-4'} ${isMobile ? 'w-48' : 'w-56'} pointer-events-auto`}>
                <div className={`bg-black/80 backdrop-blur-md rounded-lg border border-white/10 shadow-xl ${isMobile ? 'p-2' : 'p-3'}`}>
                    {/* Compact header */}
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <div className={`${isMobile ? 'w-6 h-6' : 'w-7 h-7'} rounded-full bg-blue-500/20 flex items-center justify-center`}>
                                <div className={`${isMobile ? 'w-3 h-3' : 'w-3.5 h-3.5'} rounded-full bg-blue-400`} />
                            </div>
                            <div>
                                <h3 className={`text-white font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>
                                    {getStageName()}
                                </h3>
                                <div className={`text-white/50 ${isMobile ? 'text-[10px]' : 'text-xs'}`}>
                                    Stage {currentStage + 1}/4
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleSkip}
                            className={`text-white/60 hover:text-white ${isMobile ? 'text-[10px]' : 'text-xs'} hover:bg-white/10 px-1.5 py-0.5 rounded transition-colors`}
                        >
                            Skip
                        </button>
                    </div>

                    {/* Compact description */}
                    <div className={`text-white/70 ${isMobile ? 'text-[10px]' : 'text-xs'} mb-2`}>
                        {getStageDescription()}
                    </div>

                    {/* Compact stats */}
                    <div className="grid grid-cols-3 gap-1">
                        <div className={`bg-white/5 rounded ${isMobile ? 'p-1' : 'p-1.5'} text-center`}>
                            <div className={`text-blue-400 font-semibold ${isMobile ? 'text-xs' : 'text-sm'}`}>
                                {retrievedNodeIds.length}
                            </div>
                            <div className={`text-white/60 ${isMobile ? 'text-[8px]' : 'text-[10px]'}`}>Retrieved</div>
                        </div>
                        <div className={`bg-white/5 rounded ${isMobile ? 'p-1' : 'p-1.5'} text-center`}>
                            <div className={`text-purple-400 font-semibold ${isMobile ? 'text-xs' : 'text-sm'}`}>
                                {currentStage >= STAGES.FILTERING ? filteredNodeIds.length : '-'}
                            </div>
                            <div className={`text-white/60 ${isMobile ? 'text-[8px]' : 'text-[10px]'}`}>Filtered</div>
                        </div>
                        <div className={`bg-white/5 rounded ${isMobile ? 'p-1' : 'p-1.5'} text-center`}>
                            <div className={`text-green-400 font-semibold ${isMobile ? 'text-xs' : 'text-sm'}`}>
                                {currentStage >= STAGES.EXPANSION ? expandedNodeIds.length : '-'}
                            </div>
                            <div className={`text-white/60 ${isMobile ? 'text-[8px]' : 'text-[10px]'}`}>Expanded</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

RAGVisualization.propTypes = {
    ragResponse: PropTypes.shape({
        retrieved_node_ids: PropTypes.arrayOf(PropTypes.string),
        filtered_node_ids: PropTypes.arrayOf(PropTypes.string),
        expanded_node_ids: PropTypes.arrayOf(PropTypes.string)
    }),
    graphRef: PropTypes.object.isRequired,
    graphData: PropTypes.object.isRequired,
    isVisible: PropTypes.bool,
    onAnimationComplete: PropTypes.func,
    autoAdvance: PropTypes.bool,
    isMobile: PropTypes.bool,
    nodeSize: PropTypes.number,
    colorMap: PropTypes.object.isRequired
};

export default RAGVisualization;