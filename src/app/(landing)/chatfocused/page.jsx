'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Network } from 'lucide-react';

export default function Page() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            content: "Hello, my name is Hermann. I am here to help you get to know Ethan Markwalter professionally. Feel free to ask me anything that relates to his career.",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const simulateAIResponse = (userMessage) => {
        const responses = [
            "That's a great question about my background! Let me share some insights about that.",
            "I'd be happy to tell you more about that aspect of my professional journey.",
            "Interesting question! Here's what I can share about my experience in that area.",
            "Thanks for asking! That's an important part of my career development.",
            "Great inquiry! Let me explain how that fits into my professional story."
        ];

        return responses[Math.floor(Math.random() * responses.length)] + " " +
            "This is a demonstration of how I would discuss my professional background. " +
            "In the full implementation, I would provide detailed insights about my skills, projects, education, and career journey based on your specific questions.";
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage = {
            id: Date.now(),
            type: 'user',
            content: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI processing time
        setTimeout(() => {
            const aiResponse = {
                id: Date.now() + 1,
                type: 'bot',
                content: simulateAIResponse(userMessage.content),
                timestamp: new Date()
            };

            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1000 + Math.random() * 2000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const formatTime = (timestamp) => {
        return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="bg-black w-full h-screen flex flex-col relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-800/20" />

            {/* Header */}
            <div className="relative z-10 border-b border-gray-800/50 bg-black/80 backdrop-blur-sm">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-white font-semibold text-lg">Hermann</h1>
                            <p className="text-gray-400 text-sm">Online • Ready to discuss my journey</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <div className="mx-auto">
                            <Network />
                        </div>
                        <div className="mx-auto text-xs">
                            explore the back
                        </div>
                    </div>
                </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 relative z-10">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex items-start space-x-3 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                            }`}
                    >
                        {/* Avatar */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.type === 'user'
                            ? 'bg-gradient-to-r from-gray-600 to-gray-700 border border-gray-600'
                            : 'bg-gradient-to-r from-gray-600 to-gray-800 border border-gray-700'
                            }`}>
                            {message.type === 'user' ? (
                                <User className="w-4 h-4 text-white" />
                            ) : (
                                <Bot className="w-4 h-4 text-white" />
                            )}
                        </div>

                        {/* Message Bubble */}
                        <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${message.type === 'user' ? 'items-end' : 'items-start'
                            } space-y-1`}>
                            <div className={`px-4 py-3 rounded-2xl ${message.type === 'user'
                                ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-br-md border border-gray-600'
                                : 'bg-gray-800/80 text-gray-100 rounded-bl-md border border-gray-700/50'
                                } backdrop-blur-sm shadow-lg`}>
                                <p className="text-sm leading-relaxed">{message.content}</p>
                            </div>
                            <p className={`text-xs text-gray-500 px-2 ${message.type === 'user' ? 'text-right' : 'text-left'
                                }`}>
                                {formatTime(message.timestamp)}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                    <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 border border-gray-700 flex items-center justify-center">
                            <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-800/80 text-gray-100 px-4 py-3 rounded-2xl rounded-bl-md border border-gray-700/50 backdrop-blur-sm">
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="relative z-10 border-t border-gray-800/50 bg-black/80 backdrop-blur-sm p-4">
                <div className="flex items-end space-x-3">
                    <div className="flex-1 relative">
                        <textarea
                            ref={inputRef}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask me about my professional journey..."
                            className="w-full bg-gray-800/50 text-white placeholder-gray-400 border border-gray-700/50 rounded-xl px-4 py-3 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500/50 transition-all duration-200 backdrop-blur-sm"
                            rows="1"
                            style={{
                                minHeight: '48px',
                                maxHeight: '120px',
                            }}
                        />
                    </div>
                    <button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isTyping}
                        className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 disabled:from-gray-700 disabled:to-gray-800 text-white p-3 rounded-xl transition-all duration-200 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none border border-gray-600"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
                <div className="mt-2 text-xs text-gray-500 text-center">
                    Press Enter to send • Shift + Enter for new line
                </div>
            </div>
        </div>
    );
}