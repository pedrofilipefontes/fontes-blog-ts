import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const blogPostQuery = gql`
    query PostQuery($postSlug: String) {
        blogPostCollection(where: { postSlug: $postSlug }) {
            items {
                sys {
                    publishedAt
                }
                postTitle
                postSlug
                postFeaturedText
                topicTags
                featuredImage {
                    url
                }
                postContent {
                    json
                }
                postAuthor {
                    authorName
                    authorSurname
                    authorRole
                    authorSlug
                    authorPhoto {
                        url
                    }
                }
            }
        }
    }
`;

export const useGetBlogPost = (postSlug: string) => {
    return useQuery(blogPostQuery, {
        variables: {
            postSlug,
        },
    });
};
