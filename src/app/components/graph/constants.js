// Color mapping for different node types
export const colorMap = {
    'endeavor': '#ff4500',     // Orange-red
    'class': '#1e90ff',        // Dodger blue
    'artifact': '#32cd32',     // Lime green
    'skill': '#ffd700',        // Gold
    'characteristic': '#ff69b4', // Hot pink
    'book': '#fff',         // White
    'collaborator': '#008080',  // Teal
    'knowledge': '#9370db'     // Purple
};

// Default graph settings
export const getGraphSettings = (isMobile) => ({
    nodeSize: isMobile ? 1.5 : 1, // Bigger nodes on mobile
    linkOpacity: 0.2
});