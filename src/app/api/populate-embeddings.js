// scripts/populate-embeddings.js
require('dotenv').config(); // Load environment variables
const { InferenceClient } = require('@huggingface/inference');
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabase = createClient(process.env.DATABASE_URL);

// Initialize Hugging Face Inference client
const inferenceClient = new InferenceClient({
});

// Import your data function - adjust the path as needed
const getResumeGraphData = require('../lib/getResumeGraphData');

// Function to generate embeddings
async function generateEmbedding(text) {
    try {
        const result = await inferenceClient.featureExtraction({
            model: "Supabase/all-MiniLM-L6-v2",
            inputs: text,
            options: {
                pooling: "mean",
                normalize: true
            }
        });

        return result;
    } catch (error) {
        console.error("Error generating embedding:", error);
        throw error;
    }
}

// Function to prepare text for embedding from a node
function prepareNodeText(node) {
    const textParts = [
        node.name,
        `Group: ${node.group}`,
    ];

    if (node.description) textParts.push(node.description);

    // Add fields based on node type
    switch (node.group) {
        case 'Endeavor':
            if (node.category) textParts.push(`Category: ${node.category}`);
            if (node.entity) textParts.push(`Entity: ${node.entity}`);
            if (node.title) textParts.push(`Title: ${node.title}`);
            break;
        case 'Knowledge':
            if (node.year) textParts.push(`Year: ${node.year}`);
            if (node.institution) textParts.push(`Institution: ${node.institution}`);
            if (node.location) textParts.push(`Location: ${node.location}`);
            break;
        case 'Class':
            if (node.term) textParts.push(`Term: ${node.term}`);
            break;
        case 'Artifact':
            if (node.completionDate) textParts.push(`Completion Date: ${node.completionDate}`);
            break;
        case 'Book':
            if (node.author) textParts.push(`Author: ${node.author}`);
            if (node.reasonForReading) textParts.push(`Reason: ${node.reasonForReading}`);
            break;
        case 'Collaborator':
            if (node.collaboratorType) textParts.push(`Type: ${node.collaboratorType}`);
            break;
    }

    return textParts.filter(Boolean).join(' | ');
}

// Function to prepare additional metadata
function prepareMetadata(node) {
    const metadata = {};

    switch (node.group) {
        case 'Endeavor':
            metadata.category = node.category;
            metadata.entity = node.entity;
            metadata.title = node.title;
            metadata.startDate = node.startDate;
            metadata.endDate = node.endDate;
            metadata.link = node.link;
            metadata.imageUrl = node.imageUrl;
            break;
        case 'Knowledge':
            metadata.year = node.year;
            metadata.institution = node.institution;
            metadata.location = node.location;
            break;
        case 'Class':
            metadata.term = node.term;
            metadata.knowledgeId = node.knowledgeId;
            break;
        case 'Artifact':
            metadata.completionDate = node.completionDate;
            metadata.link = node.link;
            metadata.imageUrl = node.imageUrl;
            break;
        case 'Book':
            metadata.author = node.author;
            metadata.reasonForReading = node.reasonForReading;
            metadata.readingOrder = node.readingOrder;
            metadata.imageUrl = node.imageUrl;
            break;
        case 'Collaborator':
            metadata.collaboratorType = node.collaboratorType;
            metadata.linkedin = node.linkedin;
            break;
    }

    return metadata;
}

// Main function to populate embeddings
async function populateEmbeddings() {
    try {
        console.log("Starting embedding generation process...");

        // Get graph data
        const graphData = await getResumeGraphData();
        const nodes = graphData.nodes;

        console.log(`Found ${nodes.length} nodes to process`);

        // Process nodes in batches to avoid overwhelming API
        const batchSize = 10;
        let processedCount = 0;
        let failedCount = 0;

        for (let i = 0; i < nodes.length; i += batchSize) {
            const batch = nodes.slice(i, i + batchSize);
            console.log(`Processing batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(nodes.length / batchSize)}`);

            // Process each node in the batch
            const batchPromises = batch.map(async (node) => {
                try {
                    // Prepare text for embedding
                    const textForEmbedding = prepareNodeText(node);

                    // Generate embedding
                    const embedding = await generateEmbedding(textForEmbedding);

                    // Prepare additional metadata
                    const metadata = prepareMetadata(node);

                    // Insert into Supabase
                    const { error } = await supabase
                        .from('node_embeddings')
                        .upsert({
                            node_id: node.id,
                            node_name: node.name,
                            node_group: node.group,
                            embedding: embedding,
                            additional_metadata: metadata,
                            created_at: new Date(),
                            updated_at: new Date()
                        }, {
                            onConflict: 'node_id'
                        });

                    if (error) throw error;

                    processedCount++;
                    console.log(`  ✓ Processed node: ${node.name} (${node.id})`);
                } catch (error) {
                    failedCount++;
                    console.error(`  ✗ Error processing node ${node.id}:`, error);
                }
            });

            // Wait for all nodes in this batch to be processed
            await Promise.all(batchPromises);

            // Small delay to avoid API rate limits
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        console.log("\nEmbedding generation complete!");
        console.log(`Successfully processed ${processedCount} nodes`);
        if (failedCount > 0) console.log(`Failed to process ${failedCount} nodes`);
    } catch (error) {
        console.error("Fatal error:", error);
    }
}

// Run the main function
populateEmbeddings()
    .then(() => {
        console.log("Process finished successfully!");
        process.exit(0);
    })
    .catch(error => {
        console.error("Process failed:", error);
        process.exit(1);
    });