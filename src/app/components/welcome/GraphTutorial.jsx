import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { colorMap } from '../graph/constants';
import { useRouter } from 'next/navigation';

// Simplified tutorial data with fewer properties
const tutorialData = {
    step1: {
        nodes: [{ id: 'node1', name: 'Software Engineer', group: 'endeavor', val: 30 }],
        links: []
    },
    step2: {
        nodes: [
            { id: 'node1', name: 'Software Engineer', group: 'endeavor', val: 25 },
            { id: 'node2', name: 'React.js', group: 'skill', val: 20 },
            { id: 'node3', name: 'Web Portfolio', group: 'artifact', val: 22 },
            { id: 'node4', name: 'Problem Solving', group: 'characteristic', val: 18 }
        ],
        links: [
            { source: 'node1', target: 'node2', value: 8 },
            { source: 'node1', target: 'node3', value: 7 },
            { source: 'node1', target: 'node4', value: 5 },
            { source: 'node3', target: 'node2', value: 6 }
        ]
    },
    step3: {
        nodes: [{ id: 'node1', name: 'Software Engineer', group: 'endeavor', val: 25 }],
        links: []
    },
    step4: {
        nodes: [
            { id: 'node1', name: 'Software Engineer', group: 'endeavor', val: 25 },
            { id: 'node2', name: 'React.js', group: 'skill', val: 18 }
        ],
        links: [{ source: 'node1', target: 'node2', value: 5 }]
    },
    step5: {
        nodes: [
            { id: 'node1', name: 'Software Engineer', group: 'endeavor', val: 25 },
            { id: 'node2', name: 'React.js', group: 'skill', val: 18 },
            { id: 'node3', name: 'Web Portfolio', group: 'artifact', val: 20 },
            { id: 'node4', name: 'Problem Solving', group: 'characteristic', val: 18 },
            { id: 'node5', name: 'Computer Science', group: 'knowledge', val: 22 },
            { id: 'node6', name: 'Algorithms 101', group: 'class', val: 15 },
            { id: 'node7', name: 'Prof. Johnson', group: 'collaborator', val: 12 },
            { id: 'node8', name: 'Clean Code', group: 'book', val: 12 }
        ],
        links: [
            { source: 'node1', target: 'node2', value: 5 },
            { source: 'node1', target: 'node3', value: 4 },
            { source: 'node1', target: 'node4', value: 3 },
            { source: 'node5', target: 'node6', value: 5 }
            // Reduced number of links for simplicity
        ]
    },
    step6: {
        nodes: [
            { id: 'node1', name: 'Software Engineer', group: 'endeavor', val: 25 },
            { id: 'node2', name: 'React.js', group: 'skill', val: 18 },
            { id: 'node3', name: 'Web Portfolio', group: 'artifact', val: 20 },
            { id: 'node4', name: 'Problem Solving', group: 'characteristic', val: 18 },
            { id: 'node5', name: 'Computer Science', group: 'knowledge', val: 22 }
        ],
        links: [
            { source: 'node1', target: 'node2', value: 5 },
            { source: 'node1', target: 'node3', value: 4 },
            { source: 'node1', target: 'node4', value: 3 },
            { source: 'node3', target: 'node2', value: 6 }
        ]
    }
};

// Simplified color legend
const colorLegend = [
    { group: 'endeavor', label: 'Endeavor', description: 'Professional experiences' },
    { group: 'artifact', label: 'Artifact', description: 'Projects and deliverables' },
    { group: 'skill', label: 'Skill', description: 'Technical abilities' },
    { group: 'characteristic', label: 'Characteristic', description: 'Soft skills' },
    { group: 'knowledge', label: 'Knowledge', description: 'Education' },
    { group: 'class', label: 'Class', description: 'Courses taken' },
    { group: 'collaborator', label: 'Collaborator', description: 'People' },
    { group: 'book', label: 'Book', description: 'Books read' }
];

// Navigation instructions
const navInstructions = [
    { text: "Right Click/One Finger and Drag to rotate", icon: "🔄" },
    { text: "Left Click/Two Fingers and Drag to pan", icon: "↔️" },
    { text: "Mousewheel/Pinch to zoom", icon: "🔍" },
];

const GraphTutorial = ({ onComplete, graphRef }) => {
    const [step, setStep] = useState(1);
    const [selectedNode, setSelectedNode] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [showNodeDetails, setShowNodeDetails] = useState(false);
    const [navIndex, setNavIndex] = useState(0);
    const [isInitialized, setIsInitialized] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const router = useRouter();

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Initialize graph once
    useEffect(() => {
        if (graphRef?.current && !isInitialized) {
            // Basic graph setup
            graphRef.current
                .nodeColor(node => colorMap[node.group] || '#cccccc')
                .nodeOpacity(0.9)
                .nodeRelSize(isMobile ? 8 : 6) // Larger nodes on mobile
                .backgroundColor('#000000')
                .linkDirectionalParticles(3)
                .linkWidth(link => link.value / 2 || 1);

            // Set force strength
            graphRef.current.d3Force('charge').strength(-300);
            setIsInitialized(true);

            // Apply initial data
            setTimeout(() => updateGraph(step), 300);
        }
    }, [graphRef, isInitialized, step, isMobile]);

    // Update graph when step changes
    useEffect(() => {
        if (!isInitialized) return;

        updateGraph(step);
        resetUIState();

        // Setup event handlers for specific steps
        if (step === 3) {
            graphRef.current.onNodeClick(node => {
                setSelectedNode(node);
                setShowNodeDetails(true);
            });
        }

        // Nav instructions interval for step 5
        if (step === 5) {
            const interval = setInterval(() => {
                setNavIndex(prev => (prev + 1) % navInstructions.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [step, isInitialized, graphRef]);

    // Update graph data and camera
    const updateGraph = (currentStep) => {
        if (!graphRef?.current) return;

        const data = tutorialData[`step${currentStep}`];
        if (!data) return;

        graphRef.current.graphData(data);

        // Position camera based on step
        switch (currentStep) {
            case 1:
                graphRef.current.cameraPosition({ x: 0, y: 0, z: isMobile ? 250 : 200 }, { x: 0, y: 0, z: 0 }, 1000);
                break;
            case 4:
                graphRef.current.cameraPosition({ x: 0, y: 0, z: isMobile ? 1000 : 800 }, { x: 0, y: 0, z: 0 }, 1000);
                graphRef.current.linkColor(() => '#FFFFFF').linkOpacity(0.8);
                break;
            case 5:
            case 6:
                graphRef.current.cameraPosition({ x: 0, y: 0, z: isMobile ? 1800 : 1500 }, { x: 0, y: 0, z: 0 }, 1000);
                break;
            default:
                setTimeout(() => graphRef.current.zoomToFit(1000, isMobile ? 200 : 150), 100);
        }
    };

    // Reset UI state when changing steps
    const resetUIState = () => {
        setSelectedColor(null);
        setShowNodeDetails(false);
    };

    // Handle node color selection
    const handleColorSelect = (group) => {
        setSelectedColor(group);

        if (!graphRef?.current) return;

        const { nodes } = graphRef.current.graphData();

        nodes.forEach(node => {
            const opacity = node.group === group ? 1 : 0.3;
            node.nodeOpacity = opacity;
            if (node.__threeObj) node.__threeObj.material.opacity = opacity;
        });

        graphRef.current.refresh();
    };

    // Navigation functions
    const nextStep = () => step < 6 ? setStep(step + 1) : onComplete?.();
    const prevStep = () => setStep(step - 1);

    // Generate step content based on current step
    const getStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <h2 className="text-lg md:text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Welcome to my "Brain"</h2>
                        <p className="mb-3 text-sm md:text-base">I've encoded nearly 500 different items from my professional life. This is a <span className="font-bold text-blue-400">node</span>. Nodes represent different elements of me and my experiences.</p>
                    </>
                );
            case 2:
                return (
                    <>
                        <h2 className="text-lg md:text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Node Colors</h2>
                        <p className="mb-3 text-sm md:text-base">Different shades represent different types of information:</p>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                            {colorLegend.map(item => (
                                <button
                                    key={item.group}
                                    className={`flex items-center p-2 rounded-md transition-colors text-xs md:text-sm ${selectedColor === item.group ? 'ring-2 ring-blue-500 bg-gray-900' : 'hover:bg-gray-900'}`}
                                    onClick={() => handleColorSelect(item.group)}
                                >
                                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full mr-2 border border-gray-600" style={{ backgroundColor: colorMap[item.group] }}></div>
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>
                        {selectedColor && (
                            <div className="bg-gray-900 p-2 md:p-3 rounded-md mb-3 border border-gray-700">
                                <h3 className="font-medium text-gray-200 text-sm md:text-base">
                                    {colorLegend.find(item => item.group === selectedColor)?.label}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-400">
                                    {colorLegend.find(item => item.group === selectedColor)?.description}
                                </p>
                            </div>
                        )}
                    </>
                );
            case 3:
                return (
                    <>
                        <h2 className="text-lg md:text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Interacting with Nodes</h2>
                        <p className="mb-3 text-sm md:text-base">Tap on a node to see details about it.</p>
                        {showNodeDetails && selectedNode ? (
                            <div className="bg-gray-900 p-2 md:p-3 rounded-md mb-3 relative border border-gray-700">
                                <button onClick={() => setShowNodeDetails(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-300">
                                    <X size={16} />
                                </button>
                                <h3 className="font-medium text-gray-200 text-sm md:text-base">{selectedNode.name}</h3>
                                <p className="text-xs md:text-sm text-gray-400">Type: {selectedNode.group}</p>
                            </div>
                        ) : (
                            <div className="bg-blue-900 bg-opacity-30 p-2 md:p-3 rounded-md mb-3 border border-blue-800">
                                <p className="text-xs md:text-sm italic text-blue-300">Try tapping on the node!</p>
                            </div>
                        )}
                    </>
                );
            case 4:
                return (
                    <>
                        <h2 className="text-lg md:text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Node Connections</h2>
                        <p className="mb-3 text-sm md:text-base">
                            <span className="font-bold text-blue-400">Links</span> show relationships between elements.
                        </p>
                        <p className="text-xs md:text-sm text-gray-400 mb-2">
                            Links can represent:
                        </p>
                        <ul className="list-disc pl-5 mb-3 text-xs md:text-sm text-gray-400">
                            <li>Skills used in projects</li>
                            <li>People involved in endeavors</li>
                            <li>Courses contributing to knowledge</li>
                        </ul>
                    </>
                );
            case 5:
                return (
                    <>
                        <h2 className="text-lg md:text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Navigating the Graph</h2>
                        <div className="bg-blue-900 bg-opacity-30 p-2 md:p-3 rounded-md mb-3 flex items-center border border-blue-800">
                            <div className="text-2xl md:text-3xl mr-2 md:mr-3">{navInstructions[navIndex].icon}</div>
                            <div className="flex-1">
                                <p className="font-medium text-xs md:text-sm text-blue-300">{navInstructions[navIndex].text}</p>
                            </div>
                        </div>
                        <p className="text-xs md:text-sm text-gray-400 mb-3">
                            Explore by following connections between nodes to discover related skills and projects.
                        </p>
                    </>
                );
            case 6:
                return (
                    <>
                        <h2 className="text-lg md:text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Navigation Aids</h2>
                        <p className="mb-3 text-sm md:text-base">
                            Navigating this sort of graph is new, so it can be difficult. I made some things to hopefully help.
                        </p>
                        <div className="bg-gray-900 p-2 md:p-3 rounded-md mb-3 border border-gray-700">
                            <div className="flex items-center mb-2">
                                <div className="text-xl mr-2 text-blue-400">⏱️</div>
                                <h3 className="font-medium text-gray-200 text-sm md:text-base">Timeline View</h3>
                            </div>
                            <p className="text-xs md:text-sm text-gray-400 mb-2">
                                Watch the graph grow chronologically and see how my career has evolved over time.
                            </p>
                        </div>
                        <div className="bg-gray-900 p-2 md:p-3 rounded-md mb-3 border border-gray-700">
                            <div className="flex items-center mb-2">
                                <div className="text-xl mr-2 text-blue-400">🤖</div>
                                <h3 className="font-medium text-gray-200 text-sm md:text-base">AI Helper</h3>
                            </div>
                            <p className="text-xs md:text-sm text-gray-400">
                                RAGy the AI helper uses the graph's knowledge to answer your questions about my experiences and skills.
                            </p>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    // Smaller tutorial box for mobile
    return (
        <div className="fixed bottom-4 left-0 right-0 mx-auto z-50 w-11/12 md:w-auto md:left-4 md:right-auto">
            <div className="p-3 md:p-5 max-w-md bg-black border border-gray-800 rounded-lg shadow-lg text-white backdrop-blur-sm bg-opacity-80">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                        <Info size={16} className="mr-2 text-blue-400" />
                        <span className="text-xs md:text-sm text-gray-400">Tutorial {step}/6</span>
                    </div>
                    <button className="cursor-pointer hover:scale-105 hover:underline"
                        onClick={() => { router.push('/') }}
                    >
                        Skip
                    </button>

                </div>

                {getStepContent()}

                <div className="flex justify-between mt-3">
                    {step > 1 ? (
                        <button
                            onClick={prevStep}
                            className="p-2 bg-gray-900 text-gray-300 rounded-md hover:bg-gray-800 border border-gray-700 flex items-center text-xs md:text-sm"
                        >
                            <ChevronLeft size={16} className="mr-1" />
                            Back
                        </button>
                    ) : (
                        <div></div>
                    )}

                    <button
                        onClick={nextStep}
                        className={`p-2 rounded-md border transition-all flex items-center text-xs md:text-sm ${step === 6
                            ? "bg-green-900 hover:bg-green-800 border-green-700"
                            : "bg-blue-900 hover:bg-blue-800 border-blue-700"
                            }`}
                    >
                        {step === 6 ? "Start Exploring" : "Next"}
                        <ChevronRight size={16} className="ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GraphTutorial;