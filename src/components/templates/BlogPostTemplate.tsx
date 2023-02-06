import React from 'react';
import { ContentWrapper, Footer, HeadWithOptions, BannerImage, TagCloud } from '@/components/atoms';
import { PostAuthor, RichTextSection, NavigationBar } from '@/components/molecules';
import { RelatedPostsCarousel } from '@/components/organisms';
import { useGetBlogPost, useGetPostsByTag } from '@/utils/hooks';
import styled from '@emotion/styled';
import { mobileBreakpoint } from '@/utils/constants';

interface BlogPostTemplateProps {
    postSlug: string;
}

const ContentCol = styled.div`
    justify-self: center;
    align-self: center;
    margin: 5rem 0;
    padding: 0 10rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    width: 80%;

    @media only screen and (max-width: ${mobileBreakpoint}) {
        padding: 0 0.5rem;
        width: 95%;
    }
`;

const TopRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

const BlogPostTemplate = ({ postSlug }: BlogPostTemplateProps) => {
    const postResult = useGetBlogPost(postSlug);

    if (postResult.error) throw new Error(postResult.error.message);

    let post;
    if (!postResult.loading && postResult.data) {
        post = postResult.data.blogPostCollection.items[0];
    }

    const posts = useGetPostsByTag(post?.topicTags);

    if (posts.error) throw new Error(posts.error.message);
    let postsData;
    if (!posts.loading && posts.data) {
        postsData = posts.data.blogPostCollection.items;
    }

    return (
        <React.Fragment>
            <HeadWithOptions
                headData={{
                    title: 'string',
                    description: 'string',
                }}
            />
            <NavigationBar />
            <ContentWrapper>
                <BannerImage
                    bannerUrl={post?.featuredImage.url}
                    bannerTitle={post?.postTitle}
                    bannerFeaturedText={post?.postFeaturedText}
                />
                <ContentCol>
                    <TopRow>
                        <PostAuthor
                            name={post?.postAuthor.authorName}
                            surname={post?.postAuthor.authorSurname}
                            role={post?.postAuthor.authorRole}
                            avatar={post?.postAuthor.authorPhoto.url}
                            authorSlug={post?.postAuthor.authorSlug}
                            publicationDate={post?.sys.publishedAt}
                        />
                        <TagCloud tags={post?.topicTags} />
                    </TopRow>
                    <RichTextSection rawContent={post?.postContent.json} />
                    <RelatedPostsCarousel postsData={postsData} />
                </ContentCol>
            </ContentWrapper>
            <Footer />
        </React.Fragment>
    );
};

export default BlogPostTemplate;
