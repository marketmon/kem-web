'use server'

import { db } from "..";

export async function getResumeGraphData() {
    // Fetch all endeavors with their related data
    const endeavors = await db.endeavor.findMany({
        include: {
            artifacts: {
                include: {
                    contributions: {
                        include: {
                            skill: true,
                            characteristic: true,
                        }
                    },
                    collaborators: true
                }
            },
            contributions: {
                include: {
                    skill: true,
                    characteristic: true,
                }
            },
            mentors: true
        }
    });

    // Fetch all knowledge (academic years) with their related data
    const knowledge = await db.knowledge.findMany({
        include: {
            classes: {
                include: {
                    professor: true,
                    artifacts: {
                        include: {
                            collaborators: true,
                            contributions: {
                                include: {
                                    skill: true,
                                    characteristic: true,
                                }
                            }
                        }
                    },
                    contributions: {
                        include: {
                            skill: true,
                            characteristic: true,
                        }
                    }
                }
            }
        }
    });

    // Fetch all skills
    const skills = await db.skill.findMany();

    // Fetch all characteristics
    const characteristics = await db.characteristic.findMany();

    // Fetch all books
    const books = await db.book.findMany({
        orderBy: {
            readingOrder: 'asc'
        }
    });

    // Create a map to track all nodes and their relationships
    const uniqueNodes = new Map();
    const links = [];

    // Track node connections and contribution strengths
    const nodeConnections = new Map(); // Track number of connections per node
    const nodeStrengths = new Map();   // Track total strength of contributions per node

    // Helper function to track node connections
    function trackConnection(nodeId, strengthLevel = 1) {
        // Increment connection count
        nodeConnections.set(
            nodeId,
            (nodeConnections.get(nodeId) || 0) + 1
        );

        // Add to total strength
        nodeStrengths.set(
            nodeId,
            (nodeStrengths.get(nodeId) || 0) + (strengthLevel || 1)
        );
    }

    // Helper function to add nodes
    function addNode(id, nodeData) {
        if (!uniqueNodes.has(id)) {
            // Initialize tracking for this node
            if (!nodeConnections.has(id)) {
                nodeConnections.set(id, 0);
                nodeStrengths.set(id, 0);
            }

            uniqueNodes.set(id, {
                ...nodeData,
                id: id,
                // Default values will be updated later
                val: nodeData.val || 3,
                nodeOpacity: 0.75
            });
        }
    }

    // Add endeavor nodes
    endeavors.forEach(e => {
        addNode(e.id, {
            name: `${e.entity}: ${e.title}`,
            group: "endeavor",
            category: e.category,
            val: 5, // Base size value for endeavors
            entity: e.entity,
            title: e.title,
            description: e.description,
            imageUrl: e.imageUrl,
            link: e.link,
            startDate: e.startDate,
            endDate: e.endDate
        });
    });

    // Add knowledge nodes
    knowledge.forEach(k => {
        addNode(k.id, {
            name: k.title,
            group: "knowledge",
            val: 6, // Base size value for knowledge years
            year: k.year,
            institution: k.institution,
            location: k.location,
            reflection: k.reflection
        });
    });

    // Add class nodes and create connections
    knowledge.forEach(k => {
        k.classes.forEach(c => {
            addNode(c.id, {
                name: c.name,
                group: "class",
                val: 3, // Base size for classes
                term: c.term,
                description: c.description,
                knowledgeId: k.id
            });

            // Add knowledge -> class links
            links.push({
                source: k.id,
                target: c.id
            });

            // Track connections for both nodes
            trackConnection(k.id);
            trackConnection(c.id);

            // Add professor -> class links
            c.professor.forEach(p => {
                addNode(p.id, {
                    name: p.name,
                    group: "collaborator",
                    val: 2, // Base size for collaborators
                    collaboratorType: p.type,
                    linkedin: p.linkedin
                });

                links.push({
                    source: p.id,
                    target: c.id
                });

                // Track connections
                trackConnection(p.id);
                trackConnection(c.id);
            });

            // Process class artifacts
            c.artifacts.forEach(a => {
                addNode(a.id, {
                    name: a.title,
                    group: "artifact",
                    val: 2, // Base size for artifacts
                    description: a.description,
                    imageUrl: a.imageUrl,
                    link: a.link,
                    completionDate: a.completionDate
                });

                // Add class -> artifact links
                links.push({
                    source: c.id,
                    target: a.id
                });

                // Track connections
                trackConnection(c.id);
                trackConnection(a.id);

                // Add artifact collaborator links
                a.collaborators.forEach(collab => {
                    addNode(collab.id, {
                        name: collab.name,
                        group: "collaborator",
                        val: 2,
                        collaboratorType: collab.type,
                        linkedin: collab.linkedin
                    });

                    links.push({
                        source: collab.id,
                        target: a.id
                    });

                    // Track connections
                    trackConnection(collab.id);
                    trackConnection(a.id);
                });

                // Process contributions from artifacts
                a.contributions.forEach(cont => {
                    const strengthLevel = cont.strengthLevel || 1;

                    if (cont.skillId) {
                        links.push({
                            source: a.id,
                            target: cont.skillId,
                            value: strengthLevel,
                            strengthLevel: strengthLevel
                        });

                        // Track connections with strength
                        trackConnection(a.id, strengthLevel);
                        trackConnection(cont.skillId, strengthLevel);
                    }

                    if (cont.characteristicId) {
                        links.push({
                            source: a.id,
                            target: cont.characteristicId,
                            value: strengthLevel,
                            strengthLevel: strengthLevel
                        });

                        // Track connections with strength
                        trackConnection(a.id, strengthLevel);
                        trackConnection(cont.characteristicId, strengthLevel);
                    }
                });
            });

            // Process contributions from classes
            c.contributions.forEach(cont => {
                const strengthLevel = cont.strengthLevel || 1;

                if (cont.skillId) {
                    links.push({
                        source: c.id,
                        target: cont.skillId,
                        value: strengthLevel,
                        strengthLevel: strengthLevel
                    });

                    // Track connections with strength
                    trackConnection(c.id, strengthLevel);
                    trackConnection(cont.skillId, strengthLevel);
                }

                if (cont.characteristicId) {
                    links.push({
                        source: c.id,
                        target: cont.characteristicId,
                        value: strengthLevel,
                        strengthLevel: strengthLevel
                    });

                    // Track connections with strength
                    trackConnection(c.id, strengthLevel);
                    trackConnection(cont.characteristicId, strengthLevel);
                }
            });
        });
    });

    // Process endeavor artifacts and connections
    endeavors.forEach(e => {
        // Add mentor -> endeavor links
        e.mentors.forEach(m => {
            addNode(m.id, {
                name: m.name,
                group: "collaborator",
                val: 2,
                collaboratorType: m.type,
                linkedin: m.linkedin
            });

            links.push({
                source: m.id,
                target: e.id
            });

            // Track connections
            trackConnection(m.id);
            trackConnection(e.id);
        });

        // Process artifacts
        e.artifacts.forEach(a => {
            addNode(a.id, {
                name: a.title,
                group: "artifact",
                val: 2,
                description: a.description,
                imageUrl: a.imageUrl,
                link: a.link,
                completionDate: a.completionDate
            });

            // Add endeavor -> artifact links
            links.push({
                source: e.id,
                target: a.id
            });

            // Track connections
            trackConnection(e.id);
            trackConnection(a.id);

            // Add artifact collaborator links
            a.collaborators.forEach(collab => {
                addNode(collab.id, {
                    name: collab.name,
                    group: "collaborator",
                    val: 2,
                    collaboratorType: collab.type,
                    linkedin: collab.linkedin
                });

                links.push({
                    source: collab.id,
                    target: a.id
                });

                // Track connections
                trackConnection(collab.id);
                trackConnection(a.id);
            });

            // Process contributions from artifacts
            a.contributions.forEach(cont => {
                const strengthLevel = cont.strengthLevel || 1;

                if (cont.skillId) {
                    links.push({
                        source: a.id,
                        target: cont.skillId,
                        value: strengthLevel,
                        strengthLevel: strengthLevel
                    });

                    // Track connections with strength
                    trackConnection(a.id, strengthLevel);
                    trackConnection(cont.skillId, strengthLevel);
                }

                if (cont.characteristicId) {
                    links.push({
                        source: a.id,
                        target: cont.characteristicId,
                        value: strengthLevel,
                        strengthLevel: strengthLevel
                    });

                    // Track connections with strength
                    trackConnection(a.id, strengthLevel);
                    trackConnection(cont.characteristicId, strengthLevel);
                }
            });
        });

        // Process contributions from endeavors
        e.contributions.forEach(cont => {
            const strengthLevel = cont.strengthLevel || 1;

            if (cont.skillId) {
                links.push({
                    source: e.id,
                    target: cont.skillId,
                    value: strengthLevel,
                    strengthLevel: strengthLevel
                });

                // Track connections with strength
                trackConnection(e.id, strengthLevel);
                trackConnection(cont.skillId, strengthLevel);
            }

            if (cont.characteristicId) {
                links.push({
                    source: e.id,
                    target: cont.characteristicId,
                    value: strengthLevel,
                    strengthLevel: strengthLevel
                });

                // Track connections with strength
                trackConnection(e.id, strengthLevel);
                trackConnection(cont.characteristicId, strengthLevel);
            }
        });
    });

    // Add skill nodes
    skills.forEach(s => {
        addNode(s.id, {
            name: s.title,
            group: "skill",
            val: 4, // Base size value for skills
            description: s.description
        });
    });

    // Add characteristic nodes
    characteristics.forEach(c => {
        addNode(c.id, {
            name: c.title,
            group: "characteristic",
            val: 4, // Base size for characteristics
            description: c.description
        });
    });

    // Add book nodes
    books.forEach(b => {
        addNode(b.id, {
            name: b.title,
            group: "book",
            val: 3, // Base size for books
            author: b.author,
            imageUrl: b.imageUrl,
            reasonForReading: b.reasonForReading,
            reflection: b.reflection,
            readingOrder: b.readingOrder
        });
    });

    // Calculate maximum connection count and strength for normalization
    const maxConnections = Math.max(...nodeConnections.values(), 1);
    const maxStrength = Math.max(...nodeStrengths.values(), 1);

    // Adjust node size and opacity based on connections and strength
    uniqueNodes.forEach((node, id) => {
        const connections = nodeConnections.get(id) || 0;
        const strength = nodeStrengths.get(id) || 0;

        // Base size for each node type (already set)
        const baseSize = node.val;

        // Calculate size multiplier based on connections and strength
        // Using a log scale to prevent nodes with many connections from being too large
        const connectionFactor = Math.log(connections + 1) / Math.log(Math.max(maxConnections, 2));
        const strengthFactor = strength / Math.max(maxStrength, 1);

        // Apply size adjustment (from 1x to 2.5x of base size)
        const sizeMultiplier = 1 + (connectionFactor * 0.8) + (strengthFactor * 0.7);
        node.val = baseSize * sizeMultiplier;

        // Calculate opacity based on connections and strength (0.3 to 1.0)
        const opacityFactor = 0.3 + (connectionFactor * 0.35) + (strengthFactor * 0.35);
        node.nodeOpacity = Math.min(Math.max(opacityFactor, 0.3), 1.0);

        // Store connection metrics for reference
        node.connectionCount = connections;
        node.totalStrength = strength;
    });

    // Transform the map to an array
    const nodes = Array.from(uniqueNodes.values());

    // Adjust link opacity and width based on strengthLevel
    links.forEach(link => {
        const strengthLevel = link.strengthLevel || 1;
        // Scale link opacity based on strength (0.1 to 0.8)
        link.linkOpacity = 0.1 + (strengthLevel / 10) * 0.7;

        // Scale link width based on strength (1 to 5)
        link.linkWidth = 1 + (strengthLevel / 10) * 4;
    });

    // Return formatted graph data
    return {
        nodes,
        links
    };
}