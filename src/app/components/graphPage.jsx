'use client'

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';


// Dynamically import NewGraph with SSR disabled
const NewGraph = dynamic(() => import('./graph/main'), {
    ssr: false,
    loading: () => (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#000',
            color: 'white'
        }}>
            <p>Loading 3D Graph...</p>
        </div>
    )
});

export default function ResumeGraphPage({ initialData }) {
    return (
        <main style={{
            height: '100vh',
            width: '100vw',
            padding: 0,
            margin: 0,
            overflow: 'hidden',
            background: '#000'
        }}>
            <Suspense fallback={
                <div style={{
                    height: '100vh',
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#fff',
                    color: 'white'
                }}>
                    <Image src="/signature_animation.gif" width={100} height={100} alt="signature logo animation" />
                </div>
            }>
                <div className=" capitalize fixed top-5 left-5 z-50">
                    <Image src="/signature_logo.png" width={50} height={50} alt="Ethan Signature Logo" />
                </div>
                <NewGraph graphData={initialData} />

            </Suspense>
        </main>
    );
}