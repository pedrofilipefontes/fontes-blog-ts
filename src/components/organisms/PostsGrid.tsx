import React from 'react';
import styled from '@emotion/styled';
import { PostLink } from '@/components/molecules';
import { mobileBreakpoint } from '@/utils/constants';

interface PostsGridProps {
    postsData: Array<any>;
}

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;

  .item {
    flex: 0 0 auto;
    padding: 1rem;
  }

  @media (min-width: 1000px) {
    .item {
      width: 25%;
    }
  }

  @media (max-width: ${mobileBreakpoint}) and (min-width: 450px) {
    .item {
      width: 50%;
    }
  }

  @media (max-width: 500px) {
    .item {
      width: 100%;
    }
`;

const PostsGrid = ({ postsData }: PostsGridProps) => {
    return (
        <Grid>
            {postsData?.map((post, key) => {
                return (
                    <PostLink
                        className="item"
                        key={key}
                        postSlug={post.postSlug}
                        postTitle={post.postTitle}
                        postImageUrl={post.featuredImage.url}
                        postFeaturedText={post.postFeaturedText}
                        orientation="column"
                    />
                );
            })}
        </Grid>
    );
};

export default PostsGrid;
