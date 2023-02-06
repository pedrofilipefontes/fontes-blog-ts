import React from 'react';
import { useRouter } from 'next/router';
import { AuthorBioTemplate } from '@/components/templates';

export default function BioPage() {
    const router = useRouter();
    const { authorSlug } = router.query;

    return <AuthorBioTemplate authorSlug={authorSlug} />;
}
