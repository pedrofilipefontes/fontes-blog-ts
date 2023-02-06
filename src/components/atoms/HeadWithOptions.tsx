import React from 'react';
import Head from 'next/head';
import { headData } from '@/types';

interface headProps {
    headData: headData;
}

export default function HeadWithOptions({ headData }: headProps) {
    return (
        <Head>
            <title>My cool blog - {headData.title}</title>
            <meta name="description" content={headData.description} />
            <link rel="icon" href="/public/favicon.ico" />
        </Head>
    );
}
