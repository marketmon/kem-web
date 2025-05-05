// pages/resume-graph.js (or appropriate file path)
"use client";  // If using the App Router

import { useState, useEffect } from 'react';
import { getResumeGraphData } from "../../db/query/graphDataFetch";
import Image from 'next/image';
import doc_store from './data/documentStore.json'

export default function Page() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                const fetchedData = await getResumeGraphData();
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
            color: 'white'
        }}>
            <Image src="/signature_animation.gif" width={100} height={100} alt="signature logo animation" />
        </div>);
    if (error) return <div>
        Error loading graph data. Please try again later.
    </div>;

    // Pass the data to the client component
    return (
        <div className="bg-black">
            Hey How goes it
        </div>
    )
}