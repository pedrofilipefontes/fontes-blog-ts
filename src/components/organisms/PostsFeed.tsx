import React from 'react';
import styled from '@emotion/styled';
import { PostLink } from '@/components/molecules';
import { HeadingText } from '@/components/atoms';
import { mobileBreakpoint } from '@/utils/constants';

interface PostsFeedProps {
    postsData: Array<any>;
}

const Feed = styled.div`
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 60vw;
    align-items: center;
    justify-content: center;
    align-self: center;
    justify-self: center;

    @media only screen and (max-width: ${mobileBreakpoint}) {
        width: 85%;
    }
`;

const PostsFeed = ({ postsData }: PostsFeedProps) => {
    return (
        <Feed>
            {postsData?.length === 0 ? (
                <HeadingText hType="h2" fontWeight="500">
                    Parece que ainda não há conteúdo por aqui
                </HeadingText>
            ) : (
                postsData?.map((post, key) => {
                    const isKeyEven = key % 2 === 0;
                    return (
                        <PostLink
                            key={key}
                            postSlug={post.postSlug}
                            postTitle={post.postTitle}
                            postImageUrl={post.featuredImage.url}
                            postFeaturedText={post.postFeaturedText}
                            orientation={isKeyEven ? 'row' : 'row-reverse'}
                        />
                    );
                })
            )}
        </Feed>
    );
};

export default PostsFeed;
