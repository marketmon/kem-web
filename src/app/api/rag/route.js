import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();

        // Forward request to Python backend
        const response = await fetch('https://personal-website-backend-gfg7.onrender.com/api/rag/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to process query' },
            { status: 500 }
        );
    }
}