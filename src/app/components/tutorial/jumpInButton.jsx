import React, { useState } from 'react';

export const NextButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-200 font-light hover:cursor-pointer"
    >
        Next
    </button>
);

export const JumpInButton = ({ onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
                relative
                px-6 py-3
                bg-black text-white rounded-lg
                font-medium transition-all duration-300
                border border-gray-600 shadow-md
                overflow-hidden group cursor-pointer
            `}
        >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-white/5 pointer-events-none animate-glow" />

            {/* Moving light line */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-slide-slow pointer-events-none" />

            {/* Button Text */}
            <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-lg">JUMP IN</span>

            </span>
        </button>
    );
};
