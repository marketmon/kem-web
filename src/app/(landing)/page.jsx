// pages/resume-graph.js (or appropriate file path)
"use client";

import { useState, useEffect } from 'react';
import { getResumeGraphData } from "../db/query/graphDataFetch";
import ResumeGraphPage from "../components/graphPage";
import WelcomeTutorial from "../components/tutorial/tutorialComponent"; // Import the tutorial component
import Image from 'next/image';

// Global variable to cache the data
let cachedGraphData = null;

// Constants for first time user detection
const FIRST_TIME_USER_KEY = 'hasVisitedResumeGraph';

// SIMPLE TEST MODE VARIABLE - Set to true to test the tutorial
const TEST_MODE = true; // Set to true when you want to test the tutorial

export default function Page() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showTutorial, setShowTutorial] = useState(false);

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

  useEffect(() => {
    async function loadData() {
      // If we already have cached data, use it
      if (cachedGraphData) {
        setData(cachedGraphData);
        setLoading(false);
        return;
      }

      // Otherwise fetch the data
      try {
        const response = await fetch('/api/graph-data');
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        const fetchedData = await response.json();

        // Store in our global cache
        cachedGraphData = fetchedData;
        setData(fetchedData);
      } catch (err) {
        console.error("Error fetching graph data:", err);
        setError(err);
        // Provide fallback data
        setData({ nodes: [], links: [] });
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Handle tutorial completion
  const handleTutorialComplete = () => {
    setShowTutorial(false);
  };

  if (loading) return (
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
  );

  if (error) return <div>Error loading graph data. Please try again later.</div>;

  return (
    <>
      {showTutorial && <WelcomeTutorial onComplete={handleTutorialComplete} />}
      {!showTutorial && <ResumeGraphPage initialData={data} />}
    </>
  );
}