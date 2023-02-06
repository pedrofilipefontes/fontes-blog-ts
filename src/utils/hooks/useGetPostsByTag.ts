import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const postsQueryWithTags = gql`
    query PostsQuery($topicsTags: [String]) {
        blogPostCollection(where: { topicTags_contains_some: $topicsTags }, order: [sys_firstPublishedAt_DESC]) {
            items {
                postTitle
                postSlug
                postFeaturedText
                featuredImage {
                    url
                }
            }
        }
    }
`;

const postsQueryWithoutTags = gql`
    query {
        blogPostCollection(limit: 20, order: [sys_firstPublishedAt_DESC]) {
            items {
                postTitle
                postSlug
                postFeaturedText
                featuredImage {
                    url
                }
            }
        }
    }
`;

type topicTagsProperties = Array<any>;

export const useGetPostsByTag = (topicsTags?: topicTagsProperties) => {
    return useQuery(topicsTags ? postsQueryWithTags : postsQueryWithoutTags, {
        variables: {
            topicsTags,
        },
    });
};
