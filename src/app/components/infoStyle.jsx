import { ChevronDown, ChevronUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Get readable date format
export const formatDate = (date) => {
    if (!date) return 'Present';
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short'
    });
};

// Determine icon and color based on node group
export const getNodeIcon = (group) => {
    switch (group) {
        case 'endeavor': return '🏢';
        case 'knowledge': return '🎓';
        case 'class': return '📚';
        case 'artifact': return '📝';
        case 'skill': return '⚙️';
        case 'characteristic': return '🧠';
        case 'book': return '📖';
        case 'collaborator': return '👥';
        default: return '🔍';
    }
};

export const getGroupLabel = (group) => {
    switch (group) {
        case 'endeavor': return 'Experience';
        case 'knowledge': return 'Education';
        case 'class': return 'Course';
        case 'artifact': return 'Project';
        case 'skill': return 'Technical Skill';
        case 'characteristic': return 'Soft Skill';
        case 'book': return 'Book';
        case 'collaborator': return 'Person';
        default: return 'Item';
    }
};

export const getCategoryLabel = (category) => {
    const labels = {
        'characteristic': 'Characteristics',
        'skill': 'Skills',
        'endeavor': 'Experiences',
        'class': 'Classes',
        'artifact': 'Projects',
        'collaborator': 'People',
        'book': 'Books'
    };
    return labels[category] || category;
};

// Get color based on node group
export const getNodeColor = (group) => {
    switch (group) {
        case 'endeavor': return '#ff4500';      // Orange-red
        case 'knowledge': return '#4b0082';     // Indigo
        case 'class': return '#1e90ff';         // Dodger blue
        case 'artifact': return '#32cd32';      // Lime green
        case 'skill': return '#ffd700';         // Gold
        case 'characteristic': return '#ff69b4'; // Hot pink
        case 'book': return '#ffffff';          // White
        case 'collaborator': return '#008080';  // Teal
        default: return '#cccccc';              // Gray
    }
};

export const getNodeTitle = (node) => node.name || node.title || (node.entity && `${node.entity} - ${node.title}`);


// Get a more readable date range for display
export const getDateDisplay = (selectedNode) => {
    if (selectedNode.startDate && selectedNode.endDate) {
        return `${formatDate(selectedNode.startDate)} - ${formatDate(selectedNode.endDate)}`;
    } else if (selectedNode.startDate) {
        return `${formatDate(selectedNode.startDate)} - Present`;
    } else if (selectedNode.year) {
        return selectedNode.year;
    } else if (selectedNode.completionDate) {
        return `${formatDate(selectedNode.completionDate)}`
    }
};

// Function to truncate text with expandable view
export const TruncatedText = ({ text, isExpanded, toggleExpanded, maxLength = 150 }) => {
    if (!text) return null;

    const shouldTruncate = text.length > maxLength && !isExpanded;

    return (
        <div>
            <p style={{
                margin: '0.25rem 0',
                fontSize: '0.95rem',
                lineHeight: '1.4'
            }}>
                {shouldTruncate ? text.substring(0, maxLength) + '...' : <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    children={text}
                >
                </ReactMarkdown>}
            </p>
            {text.length > maxLength && (
                <button
                    onClick={toggleExpanded}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#8ab4f8',
                        fontSize: '0.8rem',
                        padding: '0.25rem 0',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                    }}
                >
                    {isExpanded ? (
                        <>Show less <ChevronUp size={14} /></>
                    ) : (
                        <>Read more <ChevronDown size={14} /></>
                    )}
                </button>
            )}
        </div>
    );
};