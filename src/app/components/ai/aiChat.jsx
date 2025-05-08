import { useState, useEffect, useRef, useCallback, memo } from 'react';
import Typewriter from './typingEffect';
import { Send, Sparkles, Loader2, X, MessageCirclePlus, Minimize, Maximize, ArrowLeftRight, ChevronUp, ChevronDown } from 'lucide-react';
import queryRAG from '../../db/query/RAGquery';
import RAGVisualization from './ragVisualization';
import ThinkingAnimation from './ragAnimationStages/thinkingStage';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function AIChat({ setIsAIOn, graphRef, graphData, colorMap, isMobile }) {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [ragResponse, setRagResponse] = useState(null);
    const [showVisualization, setShowVisualization] = useState(false);
    const [showThinking, setShowThinking] = useState(false);
    const [pendingResponse, setPendingResponse] = useState(null);
    const [stage, setStage] = useState('initial'); // 'initial', 'processing', 'result'
    const [isTyping, setIsTyping] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // Window state management
    const [isMinimized, setIsMinimized] = useState(false);
    const [windowPosition, setWindowPosition] = useState('right');
    const containerRef = useRef(null);

    // For mobile-specific features
    const [showFullscreen, setShowFullscreen] = useState(false);
    const [contentScrolled, setContentScrolled] = useState(false);
    const contentRef = useRef(null);

    // Create a stable scroll handler ref
    const scrollHandlerRef = useRef(() => { });
    scrollHandlerRef.current = () => {
        if (contentRef.current) {
            const scrollTop = contentRef.current.scrollTop;
            if ((scrollTop > 20) !== contentScrolled) {
                setContentScrolled(scrollTop > 20);
            }
        }
    };

    // Handle scroll detection for content area with stable reference
    useEffect(() => {
        const handleScroll = (e) => scrollHandlerRef.current(e);

        const contentElement = contentRef.current;
        if (contentElement) {
            contentElement.addEventListener('scroll', handleScroll, { passive: true });
            return () => contentElement.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // Adjust sizing when on mobile
    useEffect(() => {
        if (isMobile) {
            setWindowPosition('bottom');
        }
    }, [isMobile]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!question.trim() || isLoading) return;

        setIsLoading(true);
        setStage('processing');
        setAnswer(null);
        setShowThinking(true);
        setIsMinimized(false);
        setShowFullscreen(false);

        try {
            const response = await queryRAG(question);
            let responseContent = "I couldn't find specific information about that. Try asking about Ethan's experience, skills, or projects.";

            if (response) {
                responseContent = response.answer.results_collector.final_result.replies[0]._content[0].text;
                setRagResponse(response.answer.results_collector.final_result);
                // Transition from thinking to visualization
                setShowThinking(false);
                setShowVisualization(true);
                setPendingResponse(responseContent);
            } else {
                setShowThinking(false);
                setAnswer(responseContent);
                setIsTyping(true);
                setStage('result');
            }

        } catch (error) {
            console.error('Error querying RAG:', error);
            setShowThinking(false);

            // Provide more specific error messages based on the error type
            let errorMessage = "Sorry, I encountered an error. Please try again.";

            if (error.message.includes('timeout')) {
                errorMessage = "The request took too long. Please check your connection and try again.";
            } else if (error.message.includes('Network error')) {
                errorMessage = "Network error. Please check your internet connection and try again.";
            } else if (error.message.includes('Invalid response structure')) {
                errorMessage = "Received an unexpected response format. Please try again.";
            }

            setAnswer(errorMessage);
            setIsTyping(true);
            setStage('result');
        } finally {
            setIsLoading(false);
        }
    };

    const handleTypingDone = useCallback(() => {
        setIsTyping(false);
    }, []);

    // Memoize animation complete handler to prevent recreation
    const handleAnimationComplete = useCallback(() => {
        // Show the pending response when visualization completes
        if (pendingResponse) {
            setAnswer(pendingResponse);
            setIsTyping(true);
            setStage('result');
            setPendingResponse(null);
        }
    }, [pendingResponse]);

    const handleCloseVisualization = useCallback(() => {
        setShowVisualization(false);
    }, []);

    const resetChat = useCallback(() => {
        setQuestion('');
        setAnswer(null);
        setIsLoading(false);
        setRagResponse(null);
        setShowVisualization(false);
        setShowThinking(false);
        setPendingResponse(null);
        setStage('initial');
        setIsTyping(false);
        setIsMinimized(false);
        setShowFullscreen(false);
    }, []);

    // Toggle window minimized state
    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
        setShowFullscreen(false);
    };

    // Toggle window position
    const togglePosition = () => {
        if (isMobile) {
            return; // On mobile, position is always bottom
        }
        setWindowPosition(windowPosition === 'right' ? 'left' : 'right');
    };

    // Toggle fullscreen mode (mobile)
    const toggleFullscreen = () => {
        setShowFullscreen(!showFullscreen);
        setIsMinimized(false);
    };

    // Determine window position classes
    const getPositionClasses = () => {
        if (showFullscreen) {
            return 'inset-0 m-0';
        }

        const basePositionClass = isMobile
            ? 'bottom-4 left-4 right-4'
            : windowPosition === 'right'
                ? 'bottom-4 right-4 w-96 max-w-[500px]'
                : 'bottom-4 left-4 w-96 max-w-[500px]';

        // For minimized state
        if (isMinimized && stage === 'result') {
            return isMobile
                ? `${basePositionClass} h-auto max-h-32`
                : `${basePositionClass.replace('w-96', 'w-64')} h-auto`;
        }

        // For normal state, ensure it stays within viewport bounds
        return `${basePositionClass} max-h-[80vh]`;
    };

    return (
        <>
            {/* Main Container */}
            <div
                ref={containerRef}
                className={`fixed z-[999] transition-all duration-300 ease-in-out ${getPositionClasses()} overscroll-contain`}
                style={{ maxHeight: showFullscreen ? '100vh' : '80vh' }}
            >
                <div className="flex flex-col bg-black/80 backdrop-blur-md rounded-xl border border-white/10 shadow-lg overflow-hidden max-h-full">
                    {/* Header */}
                    <div className={`flex justify-between items-center p-3 bg-white/5 ${contentScrolled ? 'shadow-md' : ''} flex-shrink-0 sticky top-0 z-10`}>
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <h3 className="text-white text-sm font-medium">RAGgy</h3>
                            {stage === 'result' && (
                                <span className="text-xs text-white/50 bg-white/10 px-2 py-0.5 rounded-full">
                                    Result
                                </span>
                            )}
                        </div>

                        <div className="flex items-center gap-1">
                            {stage === 'result' && (
                                <>
                                    {/* Toggle position button (desktop only) */}
                                    {!isMobile && (
                                        <button
                                            className="p-1.5 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                                            onClick={togglePosition}
                                            title={`Move to ${windowPosition === 'right' ? 'left' : 'right'} side`}
                                        >
                                            <ArrowLeftRight size={16} />
                                        </button>
                                    )}

                                    {/* Fullscreen toggle (mobile only) */}
                                    {isMobile && !isMinimized && !showFullscreen && (
                                        <button
                                            className="p-1.5 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                                            onClick={toggleFullscreen}
                                            title="Expand fullscreen"
                                        >
                                            <ChevronUp size={16} />
                                        </button>
                                    )}

                                    {/* Exit fullscreen (mobile only) */}
                                    {isMobile && showFullscreen && (
                                        <button
                                            className="p-1.5 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                                            onClick={toggleFullscreen}
                                            title="Exit fullscreen"
                                        >
                                            <ChevronDown size={16} />
                                        </button>
                                    )}

                                    {/* Minimize/Maximize button */}
                                    {!showFullscreen && (
                                        <button
                                            className="p-1.5 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                                            onClick={toggleMinimize}
                                            title={isMinimized ? "Expand" : "Minimize"}
                                        >
                                            {isMinimized ? <Maximize size={16} /> : <Minimize size={16} />}
                                        </button>
                                    )}

                                    {/* New query button */}
                                    <button
                                        className="p-1.5 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                                        onClick={resetChat}
                                        title="New query"
                                    >
                                        <MessageCirclePlus size={16} />
                                    </button>
                                </>
                            )}

                            {/* Close button */}
                            <button
                                className="p-1.5 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                                onClick={() => setIsAIOn(false)}
                            >
                                <X size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Content Area - The key area that needs scroll improvement */}
                    <div
                        ref={contentRef}
                        className={`flex-1 overflow-y-auto overscroll-contain transition-all duration-300 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent
                            ${isMinimized && stage === 'result' ? 'max-h-24 overflow-hidden' : 'max-h-[calc(80vh-110px)]'}`}
                    >
                        {stage === 'initial' && (
                            <div className="p-6 space-y-4 min-h-[200px] flex flex-col justify-center">
                                <h2 className="text-xl text-white font-medium">Ask about Ethan</h2>
                                <p className="text-white/70">
                                    Ask me anything about Ethan's experience, skills, projects, or background.
                                </p>
                            </div>
                        )}

                        {stage === 'processing' && showThinking && (
                            <div className="p-6 flex items-center justify-center min-h-[200px]">
                                <div className="flex items-center gap-3">
                                    <Loader2 className="w-6 h-6 animate-spin text-blue-400" />
                                    <span className="text-white/70">Thinking...</span>
                                </div>
                            </div>
                        )}

                        {showVisualization && (
                            <div className="p-6 flex items-center justify-center min-h-[200px]">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                                    <span className="text-white/70">
                                        {pendingResponse ? 'Processing your query...' : 'Analysis complete!'}
                                    </span>
                                </div>
                            </div>
                        )}

                        {stage === 'result' && answer && (
                            <div className="p-3 sm:p-4 w-full pb-6">
                                {!isMinimized && (
                                    <div className="bg-black/40 rounded-lg p-3 mb-3">
                                        <h3 className="text-sm text-white/60 font-medium mb-1">Your Question:</h3>
                                        <p className="text-white text-sm break-words">{question}</p>
                                    </div>
                                )}

                                <div className="bg-white/5 rounded-lg p-2 sm:p-3 overflow-x-auto">
                                    {!isMinimized && (
                                        <h3 className="text-sm text-white/60 font-medium mb-2">Answer:</h3>
                                    )}
                                    <div className="prose prose-invert max-w-none prose-sm break-words">
                                        {isTyping ? (
                                            <Typewriter
                                                text={answer}
                                                speed={10}
                                                onDone={handleTypingDone}
                                                key="typewriter-animation" // Add stable key to prevent re-rendering
                                            />
                                        ) : (
                                            <MemoizedMarkdown
                                                content={answer}
                                                isMinimized={isMinimized}
                                                isMobile={isMobile}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input form - Only show if not in result stage */}
                    {stage !== 'result' && (
                        <div className="p-3 bg-white/5 flex-shrink-0 sticky bottom-0 z-10">
                            <form onSubmit={handleSubmit} className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <input
                                        className={`flex-1 bg-white/10 text-white px-3 py-1.5 rounded-lg border
                                            ${isFocused ? 'border-blue-400 ring-1 ring-blue-400' : 'border-white/20'}
                                            focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400
                                            placeholder-white/50 transition-all duration-150
                                            ${isMobile ? 'text-base' : 'text-sm'}`}
                                        type="text"
                                        placeholder="Ask about Ethan..."
                                        value={question}
                                        onChange={(e) => setQuestion(e.target.value)}
                                        onFocus={(e) => {
                                            setIsFocused(true);
                                            const val = e.target.value;
                                            e.target.value = '';
                                            e.target.value = val;
                                        }}
                                        onBlur={() => setIsFocused(false)}
                                        disabled={isLoading}
                                        autoComplete="off"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                        spellCheck="false"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading || !question.trim()}
                                        className={`p-1.5 rounded-lg transition-all duration-200 ${!question.trim()
                                            ? 'bg-white/10 text-white/30 cursor-not-allowed'
                                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                                            }`}
                                    >
                                        <Send size={16} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>

                {/* Scroll indicator (when content is scrollable in non-minimized mode) */}
                {stage === 'result' && !isMinimized && !contentScrolled && answer && answer.length > 500 && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
                        <ChevronDown size={16} />
                    </div>
                )}
            </div>

            {/* Minimized indicator - shows when minimized in hover state */}
            {isMinimized && stage === 'result' && (
                <div
                    className={`fixed ${windowPosition === 'right' ? 'right-4' : 'left-4'} bottom-20 
                        bg-blue-500/10 text-blue-400 text-xs py-1 px-2 rounded-full border border-blue-500/20 
                        cursor-pointer hover:bg-blue-500/20 transition-all duration-300`}
                    onClick={toggleMinimize}
                >
                    Click to expand
                </div>
            )}

            {/* Backdrop for fullscreen mode on mobile */}
            {showFullscreen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]" onClick={toggleFullscreen} />
            )}

            {/* Thinking Animation */}
            {showThinking && !showVisualization && (
                <div>
                    <div className="fixed top-0 left-0 w-full h-full bg-black/10"></div>
                    <ThinkingAnimation
                        graphRef={graphRef}
                        graphData={graphData}
                        isVisible={showThinking}
                        colorMap={colorMap}
                        isMobile={isMobile}
                    />
                </div>
            )}

            {/* RAG Visualization Modal */}
            {showVisualization && ragResponse && (
                <RAGVisualization
                    ragResponse={ragResponse}
                    graphRef={graphRef}
                    graphData={graphData}
                    isVisible={showVisualization}
                    onAnimationComplete={handleAnimationComplete}
                    onClose={handleCloseVisualization}
                    colorMap={colorMap}
                    isMobile={isMobile}
                />
            )}
        </>
    );
}

// Memoize the ReactMarkdown component to prevent re-renders during scrolling
const MemoizedMarkdown = memo(({ content, isMinimized, isMobile }) => {
    const truncatedContent = isMinimized ? truncateAnswer(content, isMobile ? 80 : 120) : content;

    return (
        <div className="text-white/90 prose-headings:text-white prose-strong:text-white prose-code:text-blue-400 prose-code:bg-black/50 prose-pre:bg-black/50 prose-a:text-blue-400">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                children={truncatedContent}
            />
            {isMinimized && content.length > (isMobile ? 80 : 120) && (
                <p className="text-blue-400 text-xs mt-1 italic">Expand to see more...</p>
            )}
        </div>
    );
});

// Helper function to truncate answer for minimized view
function truncateAnswer(text, maxLength) {
    if (text.length <= maxLength) return text;

    // Find the last space before maxLength to avoid cutting words
    const lastSpace = text.substring(0, maxLength).lastIndexOf(' ');
    const truncated = text.substring(0, lastSpace > 0 ? lastSpace : maxLength);

    return truncated + '...';
}