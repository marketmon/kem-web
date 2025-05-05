import { useState } from 'react';
import Image from 'next/image';
import { Bot, Clock, Menu } from 'lucide-react';
import { JumpInButton, NextButton } from './jumpInButton'

export default function WelcomeTutorial({ onComplete }) {
    const [step, setStep] = useState(0);

    const tutorialSteps = [
        {
            title: "Welcome to my website",
            content: "I'm Ethan Markwalter and throughout the course of my life I've done a lot of different things. This website is meant to be a tool to decipher it.",
            animation: (
                <div className="w-full h-48 sm:h-64 flex items-center justify-center bg-black border border-white/10 relative overflow-hidden">
                    <Image
                        src="/signature_animation.gif"
                        width={120}
                        height={120}
                        alt="signature animation"
                        className="rounded-lg shadow-lg shadow-white/10 animate-fade-in w-20 h-20 sm:w-[120px] sm:h-[120px]"
                    />
                    {/* Spotlight effect */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute w-24 h-24 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    </div>
                </div>
            )
        },
        {
            title: "Navigate the Graph",
            content: "After this intro, you will be placed within a 3D Force Directed Graph. Each node represents different aspects of my experience - skills, projects, education, and collaborations.",
            animation: (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {[
                        { icon: "🖱️ Left Click + Drag", desc: "Rotate the graph", delay: "0ms" },
                        { icon: "🖱️ Mouse Wheel", desc: "Zoom in/out", delay: "100ms" },
                        { icon: "🖱️ Right Click + Drag", desc: "Pan the view", delay: "200ms" },
                        { icon: "🖱️ Click Node", desc: "Highlight related items", delay: "300ms" }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="p-3 sm:p-4 bg-gradient-to-br from-black to-gray-900 rounded-lg border border-white/10 animate-control-card"
                            style={{ animationDelay: item.delay }}
                        >
                            <div className="text-white font-light mb-1 sm:mb-2 text-sm sm:text-base">{item.icon}</div>
                            <div className="text-xs sm:text-sm text-gray-400">{item.desc}</div>
                        </div>
                    ))}
                </div>
            )
        },
        {
            title: "Navigation Aids",
            content: "Naturally operating a 3d program can be daunting. I've added a couple of features to help.",
            animation: (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {[
                        { icon: <Clock size={16} className="mr-2" />, title: "Timeline", desc: "Guides you through the graph chronologically" },
                        { icon: <Menu size={16} className="mr-2" />, title: "Menu", desc: "See all of the graph nodes written in one place organized by category" },
                        { icon: <Bot size={16} className="mr-2" />, title: "AI Assistant", desc: "Ask questions about me and the AI bot will use the graph to answer your question" },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="p-3 sm:p-4 bg-gradient-to-br from-black to-gray-900 rounded-lg border border-white/10 animate-nav-card hover:scale-105 transition-transform"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <div className="flex items-center text-white font-light mb-1 sm:mb-2 text-sm sm:text-base">
                                {item.icon}
                                {item.title}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-400">{item.desc}</div>
                        </div>
                    ))}
                </div>
            )
        },
        {
            title: "Enjoy the ride",
            content: "",
            animation: (
                <div className="font-light text-center">
                    <div className="inline-block animate-gradient-text bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent bg-[length:200%_auto] text-lg sm:text-xl">
                        Everything I ever was makes what I could be
                    </div>
                    {/* Shooting stars effect */}
                    <div className="relative mt-8 h-32 overflow-hidden">
                        <div className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star-1"></div>
                        <div className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star-2"></div>
                        <div className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star-3"></div>
                    </div>
                </div>
            )
        }
    ];

    const currentStep = tutorialSteps[step];
    const isLastStep = step === tutorialSteps.length - 1;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-0">
            <AnimationStyles />
            <div className="max-w-2xl w-full mx-auto bg-black border border-white/10 rounded-xl shadow-2xl shadow-white/10 overflow-hidden animate-scale-fade-in">
                {/* Progress bar */}
                <div className="w-full h-0.5 bg-gray-800">
                    <div
                        className="h-full bg-white transition-all duration-300 ease-in-out"
                        style={{ width: `${((step + 1) / tutorialSteps.length) * 100}%` }}
                    />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-extralight text-white mb-3 sm:mb-4 tracking-wide animate-slide-down">
                        {currentStep.title}
                    </h2>

                    <div className="mb-4 sm:mb-6 animate-fade-in-up">
                        {currentStep.animation}
                    </div>

                    <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 font-light animate-fade-in-up delay-100">
                        {currentStep.content}
                    </p>

                    {/* Navigation */}
                    <div className="flex justify-between items-center animate-fade-in-up delay-200">
                        <button
                            onClick={() => setStep(Math.max(0, step - 1))}
                            className={`px-3 sm:px-4 py-2 rounded-lg border transition-all duration-200 animate-pulse-subtle text-sm sm:text-base ${step === 0
                                ? 'text-gray-600 border-gray-600 cursor-not-allowed'
                                : 'text-white border-white/30 hover:border-white hover:bg-white/5'
                                }`}
                            disabled={step === 0}
                        >
                            Previous
                        </button>

                        <div className="flex gap-1.5 sm:gap-2">
                            {tutorialSteps.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-200 ${index === step ? 'bg-white w-3 sm:w-4 animate-pulse' : 'bg-gray-600 w-1.5 sm:w-2'
                                        }`}
                                />
                            ))}
                        </div>

                        {isLastStep ? (
                            <JumpInButton
                                onClick={() => {
                                    onComplete()
                                }}
                                className="animate-bounce-gentle"
                            />
                        ) : (
                            <NextButton
                                onClick={() => {
                                    setStep(step + 1);
                                }}
                                className="animate-pulse-subtle"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Enhanced animation styles
export const AnimationStyles = () => (
    <style jsx global>{`
    @keyframes scan {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(200%); }
    }
    
    @keyframes slide {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes fadeInUp {
      from { 
        opacity: 0;
        transform: translateY(20px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideDown {
      from { 
        opacity: 0;
        transform: translateY(-20px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes scaleFadeIn {
      from { 
        opacity: 0;
        transform: scale(0.95);
      }
      to { 
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes controlCard {
      from { 
        opacity: 0;
        transform: translateY(10px) scale(0.95);
      }
      to { 
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    @keyframes navCard {
      from { 
        opacity: 0;
        transform: translateX(-20px);
      }
      to { 
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes gradientMove {
      0% { background-position: 0% center; }
      100% { background-position: 200% center; }
    }
    
    @keyframes shootingStar1 {
      0% { 
        transform: translate(-10px, -10px);
        opacity: 0;
      }
      50% { opacity: 1; }
      100% { 
        transform: translate(300px, 130px);
        opacity: 0;
      }
    }
    
    @keyframes shootingStar2 {
      0% { 
        transform: translate(-10px, 50px);
        opacity: 0;
      }
      50% { opacity: 1; }
      100% { 
        transform: translate(300px, 170px);
        opacity: 0;
      }
    }
    
    @keyframes shootingStar3 {
      0% { 
        transform: translate(-10px, 90px);
        opacity: 0;
      }
      50% { opacity: 1; }
      100% { 
        transform: translate(300px, 210px);
        opacity: 0;
      }
    }
    
    @keyframes pulseSoft {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    
    @keyframes bounceGentle {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    
    .animate-scan {
      animation: scan 1.5s linear infinite;
    }
    
    .animate-slide {
      animation: slide 2s ease-in-out infinite;
    }
    
    .animate-fade-in {
      animation: fadeIn 0.7s ease-out;
    }
    
    .animate-fade-in-up {
      animation: fadeInUp 0.7s ease-out;
    }
    
    .animate-slide-down {
      animation: slideDown 0.7s ease-out;
    }
    
    .animate-scale-fade-in {
      animation: scaleFadeIn 0.7s ease-out;
    }
    
    .animate-control-card {
      animation: controlCard 0.7s ease-out;
    }
    
    .animate-nav-card {
      animation: navCard 0.7s ease-out;
    }
    
    .animate-gradient-text {
      animation: gradientMove 3s linear infinite;
    }
    
    .animate-shooting-star-1 {
      animation: shootingStar1 2s ease-out infinite;
    }
    
    .animate-shooting-star-2 {
      animation: shootingStar2 2.5s ease-out infinite;
      animation-delay: 0.5s;
    }
    
    .animate-shooting-star-3 {
      animation: shootingStar3 3s ease-out infinite;
      animation-delay: 1s;
    }
    
    .animate-pulse-subtle {
      animation: pulseSoft 2s ease-in-out infinite;
    }
    
    .animate-bounce-gentle {
      animation: bounceGentle 2s ease-in-out infinite;
    }
    
    .delay-100 { animation-delay: 100ms; }
    .delay-200 { animation-delay: 200ms; }
    .delay-300 { animation-delay: 300ms; }
  `}</style>
);