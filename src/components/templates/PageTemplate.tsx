import React from 'react';
import { BannerImage, Footer, HeadWithOptions, ContentWrapper } from '@/components/atoms';
import { NavigationBar } from '@/components/molecules';
import { PostsFeed } from '@/components/organisms';
import { useGetPageData, useGetPostsByTag } from '@/utils/hooks';

interface pageTemplateProps {
    pageSlug: string;
}

const PageTemplate = ({ pageSlug }: pageTemplateProps) => {
    const page = useGetPageData(pageSlug);

    if (page.error) throw new Error(page.error.message);

    let pageData;
    if (!page.loading && page.data) {
        pageData = { ...page.data.blogPageCollection.items[0] };
    }

    const posts = useGetPostsByTag(pageData?.pageTopicTags);

    if (posts.error) throw new Error(posts.error.message);
    let postsData;
    if (!posts.loading && posts.data) {
        postsData = posts.data.blogPostCollection.items;
    }

    return (
        <div id="page-template-container">
            {!page.loading && (
                <React.Fragment>
                    <HeadWithOptions
                        headData={{
                            title: pageData.pageTitle,
                            description: 'Blog da liberty tech',
                        }}
                    />
                    <NavigationBar />
                    <ContentWrapper>
                        <BannerImage bannerTitle={pageData.pageBannerTitle} bannerUrl={pageData.bannerImage.url} />
                        <PostsFeed postsData={postsData} />
                    </ContentWrapper>
                    <Footer />
                </React.Fragment>
            )}
        </div>
    );
};

export default PageTemplate;
