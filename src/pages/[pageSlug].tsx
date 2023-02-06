import React from 'react';
import { useRouter } from 'next/router';
import { PageTemplate } from '@/components/templates';

const PageRender = () => {
    const router = useRouter();
    const { pageSlug } = router.query;

    return (
        // @ts-ignore
        <PageTemplate pageSlug={pageSlug} />
    );
};

export default PageRender;
