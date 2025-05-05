import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { getNodeIcon, getGroupLabel, getNodeColor, getDateDisplay, TruncatedText } from './infoStyle'
import ShowConnectionsOfNode from './showConnectionsOfNode';

// Create a reusable component
export function NodeDetails({
    selectedNode,
    onClose,
    colorMap,
    setSelectedNode,
    focusOnNode,
    graphData }) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [showFullReflection, setShowFullReflection] = useState(false);

    if (!selectedNode) return null;

    return (
        <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            background: 'rgba(0,0,0,0.85)',
            padding: '1.5rem',
            borderRadius: '8px',
            color: 'white',
            maxWidth: '400px',
            maxHeight: '80vh',
            overflowY: 'auto',
            zIndex: 99,
            backdropFilter: 'blur(5px)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            border: `1px solid ${getNodeColor(selectedNode.group)}40`
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                paddingBottom: '0.75rem'
            }}>
                <span style={{
                    fontSize: '2rem',
                    marginRight: '0.75rem',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {getNodeIcon(selectedNode.group)}
                </span>
                <div style={{ flex: 1 }}>
                    <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.4rem' }}>
                        {selectedNode.name || selectedNode.title}
                    </h3>
                    <span style={{
                        fontSize: '0.8rem',
                        background: `${getNodeColor(selectedNode.group)}30`,
                        color: getNodeColor(selectedNode.group),
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        fontWeight: 'bold'
                    }}>
                        {getGroupLabel(selectedNode.group)}
                    </span>
                </div>
            </div>

            <div style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '0.75rem',
                borderRadius: '6px',
                marginBottom: '1rem'
            }}>
                {selectedNode.title && selectedNode.name && (
                    <p style={{ margin: '0.5rem 0', fontSize: '1.1rem' }}>
                        <strong>{selectedNode.title}</strong>
                    </p>
                )}

                {selectedNode.entity && (
                    <p style={{ margin: '0.5rem 0', display: 'flex', justifyContent: 'space-between' }}>
                        <strong>Organization:</strong> <span>{selectedNode.entity}</span>
                    </p>
                )}

                {(selectedNode.startDate || selectedNode.year) && (
                    <p style={{ margin: '0.5rem 0', display: 'flex', justifyContent: 'space-between' }}>
                        <strong>Period:</strong> <span>{selectedNode.year || getDateDisplay(selectedNode)}</span>
                    </p>
                )}

                {selectedNode.location && (
                    <p style={{ margin: '0.5rem 0', display: 'flex', justifyContent: 'space-between' }}>
                        <strong>Location:</strong> <span>{selectedNode.location}</span>
                    </p>
                )}

                {selectedNode.institution && (
                    <p style={{ margin: '0.5rem 0', display: 'flex', justifyContent: 'space-between' }}>
                        <strong>Institution:</strong> <span>{selectedNode.institution}</span>
                    </p>
                )}

                {selectedNode.term && (
                    <p style={{ margin: '0.5rem 0', display: 'flex', justifyContent: 'space-between' }}>
                        <strong>Term:</strong> <span>{selectedNode.term}</span>
                    </p>
                )}

                {selectedNode.author && (
                    <p style={{ margin: '0.5rem 0', display: 'flex', justifyContent: 'space-between' }}>
                        <strong>Author:</strong> <span>{selectedNode.author}</span>
                    </p>
                )}

                {selectedNode.reasonForReading && (
                    <p style={{ margin: '0.5rem 0', display: 'flex', justifyContent: 'space-between' }}>
                        <strong>Read for:</strong> <span>{selectedNode.reasonForReading}</span>
                    </p>
                )}

                {selectedNode.readingOrder && (
                    <p style={{ margin: '0.5rem 0', display: 'flex', justifyContent: 'space-between' }}>
                        <strong>Reading Order:</strong> <span>#{selectedNode.readingOrder}</span>
                    </p>
                )}
            </div>

            {selectedNode.description && (
                <div style={{
                    margin: '1rem 0',
                    padding: '0.75rem',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '6px',
                    borderLeft: `3px solid ${getNodeColor(selectedNode.group)}80`
                }}>
                    <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ color: getNodeColor(selectedNode.group) }}>Description</span>
                    </p>
                    <TruncatedText
                        text={selectedNode.description}
                        isExpanded={showFullDescription}
                        toggleExpanded={() => setShowFullDescription(!showFullDescription)}
                    />
                </div>
            )}

            {selectedNode.reflection && (
                <div style={{
                    margin: '1rem 0',
                    padding: '0.75rem',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '6px',
                    borderLeft: `3px solid ${getNodeColor(selectedNode.group)}80`
                }}>
                    <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ color: getNodeColor(selectedNode.group) }}>Reflection</span>
                    </p>
                    <TruncatedText
                        text={selectedNode.reflection}
                        isExpanded={showFullReflection}
                        toggleExpanded={() => setShowFullReflection(!showFullReflection)}
                    />
                </div>
            )}

            <div style={{
                display: 'flex',
                gap: '8px',
                marginTop: '1rem',
                justifyContent: 'space-between'
            }}>
                {selectedNode.link && (
                    <a
                        href={selectedNode.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '0.5rem 1rem',
                            background: 'rgba(30, 136, 229, 0.8)',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontSize: '0.9rem',
                            transition: 'background 0.2s ease',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(30, 136, 229, 1)'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(30, 136, 229, 0.8)'}
                    >
                        <ExternalLink size={16} /> View Details
                    </a>
                )}

            </div>

            <ShowConnectionsOfNode
                graphData={graphData}
                nodeId={selectedNode.id}
                colorMap={colorMap}
                setSelectedNode={setSelectedNode}
                focusOnNode={focusOnNode}
            />

            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    color: 'white',
                    fontSize: '1rem',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
                ✕
            </button>
        </div>
    );
};

export default NodeDetails;