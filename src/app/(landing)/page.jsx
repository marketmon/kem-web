// pages/resume-graph.js (or appropriate file path)
"use client";

import { useState, useEffect } from 'react';
import ResumeGraphPage from "../components/graphPage";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Global variable to cache the data
let cachedGraphData = null;

// Constants for first time user detection
const FIRST_TIME_USER_KEY = 'hasVisitedResumeGraph';

// SIMPLE TEST MODE VARIABLE - Set to true to test the tutorial
const TEST_MODE = false; // Set to true when you want to test the tutorial

export default function Page() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter()

  // Effect to check if user is first time visitor
  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem(FIRST_TIME_USER_KEY) === 'true';

    // Show tutorial if it's test mode OR if user hasn't visited before
    if (TEST_MODE || !hasVisited) {
      router.push('./welcome')
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

  if (loading) return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#000',
      color: 'white',
      position: 'relative'
    }}>
      <FuturisticLoader>
        <Image src="/signature_animation.gif" width={100} height={100} alt="signature logo animation" />
      </FuturisticLoader>
    </div>
  );

  if (error) return <div>Error loading graph data. Please try again later.</div>;

  return (
    <>
      <ResumeGraphPage initialData={data} />
    </>
  );
}

// Futuristic animated loader component
function FuturisticLoader({ children }) {
  return (
    <div className="futuristic-loader">
      <div className="border-ring ring-1"></div>
      <div className="border-ring ring-2"></div>
      <div className="border-ring ring-3"></div>
      <div className="content">
        {children}
      </div>

      <style jsx>{`
        .futuristic-loader {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 180px;
          height: 180px;
        }
        
        .content {
          position: relative;
          z-index: 10;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .border-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.7);
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          box-sizing: border-box;
        }
        
        .ring-1 {
          animation: rotate 4s linear infinite;
          border-top-color: #4fc3f7;
          border-left-color: transparent;
          border-right-color: transparent;
        }
        
        .ring-2 {
          animation: rotate 3s linear infinite reverse;
          width: 120%;
          height: 120%;
          top: -10%;
          left: -10%;
          border-bottom-color: #f06292;
          border-right-color: #f06292;
          border-top-color: transparent;
          border-left-color: transparent;
        }
        
        .ring-3 {
          animation: pulsate 2s ease-in-out infinite;
          width: 110%;
          height: 110%;
          top: -5%;
          left: -5%;
          border-color: rgba(255, 255, 255, 0.3);
          border-width: 1px;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }
        
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulsate {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.03);
          }
        }
      `}</style>
    </div>
  );
}