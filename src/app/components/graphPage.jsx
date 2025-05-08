'use client'

import React, { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import NewGraph with SSR disabled
const NewGraph = dynamic(() => import('./graph/main'), {
    ssr: false,
    loading: () => null // We'll handle loading state in parent component
});

// Enhanced loading component with completion state
function GraphLoader({ onEnter }) {
    const [loadingState, setLoadingState] = useState('loading'); // 'loading', 'complete'
    const [dots, setDots] = useState('.');
    const [fadeOut, setFadeOut] = useState(false);

    // Simulate loading completion
    useEffect(() => {
        // Simulate loading process
        const loadingTimer = setTimeout(() => {
            setLoadingState('complete');
        }, 3000); // Simulate 3 seconds of loading

        return () => clearTimeout(loadingTimer);
    }, []);

    // Animated dots during loading
    useEffect(() => {
        if (loadingState === 'loading') {
            const interval = setInterval(() => {
                setDots(prev => prev.length < 3 ? prev + '.' : '.');
            }, 500);

            return () => clearInterval(interval);
        }
    }, [loadingState]);

    // Handle the enter button click
    const handleEnterClick = () => {
        setFadeOut(true);
        // Wait for fade animation to complete before triggering the callback
        setTimeout(() => {
            onEnter();
        }, 800);
    };

    return (
        <div className={`graph-loading-container ${fadeOut ? 'fade-out' : ''}`}>
            <div className="loading-content">
                {loadingState === 'loading' ? (
                    <div className="loading-indicator">
                        <div className="node-ring"></div>
                        <p className="loading-text">Initializing Graph<span className="dots">{dots}</span></p>
                    </div>
                ) : (
                    <div className="enter-container">
                        <h2 className="complete-text">Loading Complete</h2>
                        <button
                            className="enter-button"
                            onClick={handleEnterClick}
                        >
                            <span className="button-text">Explore</span>
                            <span className="button-icon">→</span>
                        </button>
                    </div>
                )}
            </div>

            <style jsx>{`
                .graph-loading-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 100vh;
                    width: 100vw;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #000;
                    color: white;
                    z-index: 1000;
                    transition: opacity 0.8s ease-in-out;
                }
                
                .fade-out {
                    opacity: 0;
                }
                
                .loading-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
                
                .loading-indicator {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                
                .node-ring {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    border: 2px solid transparent;
                    border-top-color: #4fc3f7;
                    border-bottom-color: #f06292;
                    animation: spin 1.5s linear infinite;
                    margin-bottom: 20px;
                }
                
                .loading-text {
                    font-family: sans-serif;
                    font-size: 16px;
                    letter-spacing: 0.5px;
                }
                
                .dots {
                    display: inline-block;
                    min-width: 24px;
                    text-align: left;
                }
                
                .enter-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    animation: fadeIn 0.5s ease-in-out forwards;
                }
                
                .complete-text {
                    font-family: sans-serif;
                    font-size: 24px;
                    margin-bottom: 30px;
                    font-weight: 300;
                    letter-spacing: 1px;
                }
                
                .enter-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 12px 28px;
                    background: transparent;
                    color: white;
                    border: 1px solid rgba(79, 195, 247, 0.6);
                    border-radius: 4px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                
                .enter-button:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg, 
                        transparent, 
                        rgba(79, 195, 247, 0.2), 
                        transparent
                    );
                    transition: all 0.6s ease;
                }
                
                .enter-button:hover {
                    background: rgba(79, 195, 247, 0.1);
                    box-shadow: 0 0 15px rgba(79, 195, 247, 0.5);
                    transform: translateY(-2px);
                }
                
                .enter-button:hover:before {
                    left: 100%;
                }
                
                .button-text {
                    margin-right: 8px;
                    letter-spacing: 0.5px;
                }
                
                .button-icon {
                    font-size: 20px;
                    transition: transform 0.3s ease;
                }
                
                .enter-button:hover .button-icon {
                    transform: translateX(4px);
                }
                
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                
                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}

export default function ResumeGraphPage({ initialData }) {
    const [showLoader, setShowLoader] = useState(true);
    const [graphReady, setGraphReady] = useState(false);

    const handleEnterBrain = () => {
        setShowLoader(false);
        // Set a small delay before showing the graph to ensure smooth transition
        setTimeout(() => setGraphReady(true), 100);
    };

    return (
        <main style={{
            height: '100vh',
            width: '100vw',
            padding: 0,
            margin: 0,
            overflow: 'hidden',
            background: '#000'
        }}>
            {/* Show loader until user clicks enter */}
            {showLoader && (
                <GraphLoader onEnter={handleEnterBrain} />
            )}

            {/* Main content that appears after entering */}
            <div className={`graph-container ${graphReady ? 'visible' : ''}`}>
                <div className="capitalize fixed top-5 left-5 z-50">
                    <Image src="/signature_logo.png" width={50} height={50} alt="Ethan Signature Logo" />
                </div>
                <Suspense fallback={
                    <div style={{
                        height: '100vh',
                        width: '100vw',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#000',
                        color: 'white'
                    }}>
                        <Image src="/signature_animation.gif" width={100} height={100} alt="signature logo animation" />
                    </div>
                }>
                    <NewGraph graphData={initialData} />
                </Suspense>
            </div>

            <style jsx>{`
                .graph-container {
                    height: 100%;
                    width: 100%;
                    opacity: 0;
                    transition: opacity 1s ease-in-out;
                }
                
                .graph-container.visible {
                    opacity: 1;
                }
            `}</style>
        </main>
    );
}