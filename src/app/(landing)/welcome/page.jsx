'use client'
import React, { useRef, useState, useEffect } from 'react';
import GraphTutorial from '../../components/welcome/GraphTutorial';
import { colorMap } from '../../components/graph/constants';
import { useRouter } from 'next/navigation';

const WelcomePage = () => {
    const graphContainerRef = useRef(null);
    const graphRef = useRef(null);
    const [tutorialComplete, setTutorialComplete] = useState(false);
    const [fullGraphData, setFullGraphData] = useState(null);
    const [mounted, setMounted] = useState(false);
    const [graphLoaded, setGraphLoaded] = useState(false);

    const router = useRouter();

    // Mark component as mounted and load data
    useEffect(() => {
        setMounted(true);



        // Mock function to fetch full graph data
        const fetchFullGraphData = async () => {
            // Sample data
            return {
                nodes: [
                    { id: 'n1', name: 'Software Development', group: 'endeavor', val: 30, color: colorMap['endeavor'] },
                    { id: 'n2', name: 'React.js', group: 'skill', val: 25, color: colorMap['skill'] },
                    { id: 'n3', name: 'Portfolio Website', group: 'artifact', val: 20, color: colorMap['artifact'] },
                    { id: 'n4', name: 'Computer Science', group: 'knowledge', val: 28, color: colorMap['knowledge'] },
                    { id: 'n5', name: 'Problem Solving', group: 'characteristic', val: 22, color: colorMap['characteristic'] },
                    { id: 'n6', name: 'Web Development Course', group: 'class', val: 18, color: colorMap['class'] },
                    { id: 'n7', name: 'Professor Smith', group: 'collaborator', val: 15, color: colorMap['collaborator'] },
                    { id: 'n8', name: 'Clean Code', group: 'book', val: 15, color: colorMap['book'] }
                ],
                links: [
                    { source: 'n1', target: 'n2', value: 5 },
                    { source: 'n1', target: 'n3', value: 4 },
                    { source: 'n1', target: 'n5', value: 3 },
                    { source: 'n2', target: 'n3', value: 5 },
                    { source: 'n4', target: 'n6', value: 4 },
                    { source: 'n6', target: 'n7', value: 3 },
                    { source: 'n1', target: 'n4', value: 2 },
                    { source: 'n4', target: 'n8', value: 2 }
                ]
            };
        };

        // Load full graph data for later use
        fetchFullGraphData().then(data => {
            setFullGraphData(data);
        });
    }, []);

    // Initialize the graph after component is mounted client-side
    useEffect(() => {
        if (!mounted || !graphContainerRef.current) return;

        // Import the script dynamically only on client side
        const script = document.createElement('script');
        script.src = '//cdn.jsdelivr.net/npm/3d-force-graph';
        script.async = true;

        // Initialize the graph after the script loads
        script.onload = () => {
            // Now we can access the global ForceGraph3D constructor
            if (typeof ForceGraph3D !== 'undefined') {
                // Initialize the 3D force graph with futuristic dark theme
                const Graph = ForceGraph3D()(graphContainerRef.current)
                    .backgroundColor('#000000')  // Pure black background
                    .nodeLabel('name')
                    .nodeRelSize(4)
                    .nodeColor((node) => colorMap[node.group] || '#cccccc')
                    .nodeOpacity(0.9)
                    .linkColor(() => 'rgba(255,255,255,0.2)')  // Subtle white links
                    .linkWidth(link => link.value || 1)
                    .linkOpacity(0.6)
                    .linkDirectionalParticles(2)
                    .linkDirectionalParticleWidth(1.5)
                    .linkDirectionalParticleColor(() => '#FFFFFF')  // White particles
                    .onNodeClick(node => {
                        // Focus on the node when clicked
                        const distance = 80;
                        const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
                        Graph.cameraPosition(
                            { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
                            node, // lookAt
                            2000  // transition duration
                        );
                    });

                // Store the graph reference
                graphRef.current = Graph;
                setGraphLoaded(true);

                // Apply full graph data if tutorial is already complete
                if (tutorialComplete && fullGraphData) {
                    Graph.graphData(fullGraphData);
                    setTimeout(() => {
                        Graph.zoomToFit(1000);
                    }, 500);
                }

                // Handle window resize
                const handleResize = () => {
                    Graph.width(graphContainerRef.current.clientWidth);
                    Graph.height(graphContainerRef.current.clientHeight);
                };

                window.addEventListener('resize', handleResize);
                // Set initial size
                handleResize();

                return () => {
                    window.removeEventListener('resize', handleResize);
                };
            }
        };

        // Add the script to the document
        document.body.appendChild(script);

        // Cleanup function
        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [mounted, tutorialComplete, fullGraphData]);

    // Effect to apply full graph data when tutorial completes
    useEffect(() => {
        if (tutorialComplete && graphRef.current && fullGraphData) {
            graphRef.current.graphData(fullGraphData);

            // Give time for data to be applied before zooming
            setTimeout(() => {
                graphRef.current.zoomToFit(1000);
            }, 500);
        }
    }, [tutorialComplete, fullGraphData]);

    // Function to reset view
    const resetView = () => {
        if (graphRef.current) {
            graphRef.current.zoomToFit(1000);
        }
    };

    // Handle tutorial completion
    const handleTutorialComplete = () => {
        router.push('/')
    };

    return (
        <div className="relative w-full h-screen bg-black">
            {/* Graph container */}
            <div ref={graphContainerRef} className="w-full h-full" />

            {/* Tutorial overlay - only shown if graph is loaded and tutorial not completed */}
            {mounted && graphLoaded && !tutorialComplete && (
                <GraphTutorial
                    onComplete={handleTutorialComplete}
                    graphRef={graphRef}
                />
            )}

        </div>
    );
};

export default WelcomePage;