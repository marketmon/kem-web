'use client';

import { useState, useEffect } from 'react';
import ResumeGraphPage from "../components/graphPage";
import WelcomeTutorial from "../components/tutorial/tutorialComponent";

export function ResumeGraphWrapper() {

    const {
        initialData,
    } = props;

    const [showTutorial, setShowTutorial] = useState(false);

    // Constants for first time user detection
    const FIRST_TIME_USER_KEY = 'hasVisitedResumeGraph';
    // SIMPLE TEST MODE VARIABLE - Set to true to test the tutorial
    const TEST_MODE = true; // Set to true when you want to test the tutorial

    // Effect to check if user is first time visitor
    useEffect(() => {
        // Check if user has visited before
        const hasVisited = localStorage.getItem(FIRST_TIME_USER_KEY) === 'true';

        // Show tutorial if it's test mode OR if user hasn't visited before
        if (TEST_MODE || !hasVisited) {
            setShowTutorial(true);
        }

        // Mark user as having visited (unless in test mode)
        if (!TEST_MODE) {
            localStorage.setItem(FIRST_TIME_USER_KEY, 'true');
        }
    }, []);

    // Handle tutorial completion
    const handleTutorialComplete = () => {
        setShowTutorial(false);
    };

    return (
        <>
            {showTutorial && <WelcomeTutorial onComplete={handleTutorialComplete} />}
            {!showTutorial && <ResumeGraphPage initialData={initialData} />}
        </>
    );
}