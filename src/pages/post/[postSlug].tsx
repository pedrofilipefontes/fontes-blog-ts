import React from 'react';
import { useRouter } from 'next/router';
import { BlogPostTemplate } from '@/components/templates';

export default function Post() {
    const router = useRouter();
    const { postSlug } = router.query;

    // @ts-ignore
    return <BlogPostTemplate postSlug={postSlug} />;
}
