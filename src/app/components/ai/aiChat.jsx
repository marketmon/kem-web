import { useState } from 'react';
import Typewriter from './typingEffect';
import { Send, Sparkles, Loader2, X, MessageCirclePlus } from 'lucide-react';
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!question.trim() || isLoading) return;

        setIsLoading(true);
        setStage('processing');
        setAnswer(null);
        setShowThinking(true);

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

    const handleTypingDone = () => {
        setIsTyping(false);
    };

    const handleAnimationComplete = () => {
        // Show the pending response when visualization completes
        if (pendingResponse) {
            setAnswer(pendingResponse);
            setIsTyping(true);
            setStage('result');
            setPendingResponse(null);
        }
    };

    const handleCloseVisualization = () => {
        setShowVisualization(false);
    };

    const resetChat = () => {
        setQuestion('');
        setAnswer(null);
        setIsLoading(false);
        setRagResponse(null);
        setShowVisualization(false);
        setShowThinking(false);
        setPendingResponse(null);
        setStage('initial');
        setIsTyping(false);
    };

    return (
        <>
            {/* Main Container */}
            <div className={`fixed z-[999] transition-all duration-300 ease-in-out ${stage === 'result'
                ? 'inset-0 m-4'
                : 'bottom-4 right-4 left-4 w-auto h-auto sm:left-auto sm:w-96'}`}>

                <div className={`h-full flex flex-col bg-black/80 backdrop-blur-md rounded-xl border border-white/10 shadow-lg overflow-hidden`}>
                    {/* Header */}
                    <div className="flex justify-between items-center p-3 bg-white/5">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <h3 className="text-white text-sm font-medium">RAGgy</h3>
                            {stage === 'result' && (
                                <span className="text-xs text-white/50 bg-white/10 px-2 py-0.5 rounded-full">
                                    Result
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            {stage === 'result' && (
                                <button
                                    className="text-white/60 hover:text-white transition-colors"
                                    onClick={resetChat}
                                    title="New query"
                                >
                                    <MessageCirclePlus size={25} />
                                </button>
                            )}
                            <button
                                className="text-white/60 hover:text-white transition-colors"
                                onClick={() => setIsAIOn(false)}
                            >
                                <X size={25} />
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 overflow-y-auto">
                        {stage === 'initial' && (
                            <div className="p-6 space-y-4">
                                <h2 className="text-xl text-white font-medium">Ask about Ethan</h2>
                                <p className="text-white/70">
                                    Ask me anything about Ethan's experience, skills, projects, or background.
                                </p>
                            </div>
                        )}

                        {stage === 'processing' && showThinking && (
                            <div className="p-6 flex items-center justify-center">
                                <div className="flex items-center gap-3">
                                    <Loader2 className="w-6 h-6 animate-spin text-blue-400" />
                                    <span className="text-white/70">Thinking...</span>
                                </div>
                            </div>
                        )}

                        {showVisualization && (
                            <div className="p-6 flex items-center justify-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                                    <span className="text-white/70">
                                        {pendingResponse ? 'Processing your query...' : 'Analysis complete!'}
                                    </span>
                                </div>
                            </div>
                        )}

                        {stage === 'result' && answer && (
                            <div className="p-2 sm:p-6">
                                <div className="bg-black/40 rounded-lg p-4 mb-4">
                                    <h3 className="text-sm text-white/60 font-medium mb-2">Your Question:</h3>
                                    <p className="text-white">{question}</p>
                                </div>

                                <div className="bg-white/5 rounded-lg p-1 sm:p-4">
                                    <h3 className="text-sm text-white/60 font-medium mb-3">Answer:</h3>
                                    <div className="prose prose-invert max-w-none">
                                        {isTyping ? (
                                            <Typewriter
                                                text={answer}
                                                speed={10}
                                                onDone={handleTypingDone}
                                            />
                                        ) : (
                                            <div className="text-white/90 prose-headings:text-white prose-strong:text-white prose-code:text-blue-400 prose-code:bg-black/50 prose-pre:bg-black/50 prose-a:text-blue-400">

                                                <ReactMarkdown
                                                    remarkPlugins={[remarkGfm]}
                                                    children={answer}
                                                >

                                                </ReactMarkdown>
                                            </div>

                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input form - Only show if not in result stage */}
                    {stage !== 'result' && (
                        <div className="p-3 bg-white/5">
                            <form onSubmit={handleSubmit} className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <input
                                        className="flex-1 bg-white/10 text-white px-3 py-1.5 rounded-lg border border-white/20 
                                                focus:outline-none focus:border-blue-400 placeholder-white/50 text-sm"
                                        type="text"
                                        placeholder="Ask about Ethan..."
                                        value={question}
                                        onChange={(e) => setQuestion(e.target.value)}
                                        disabled={isLoading}
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
            </div>

            {/* Thinking Animation */}
            {showThinking && !showVisualization && (
                <div>
                    <div className="fixed top-0 left-0 w-full h-full bg-black/10">

                    </div>
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