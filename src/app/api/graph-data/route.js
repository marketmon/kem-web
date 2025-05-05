// app/api/graph-data/route.js
import { NextResponse } from 'next/server';
import { getResumeGraphData } from "../../../app/db/query/graphDataFetch";

export async function GET() {
    try {
        const data = await getResumeGraphData();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error in graph data API route:', error);
        return NextResponse.json(
            { error: 'Failed to fetch graph data' },
            { status: 500 }
        );
    }
}