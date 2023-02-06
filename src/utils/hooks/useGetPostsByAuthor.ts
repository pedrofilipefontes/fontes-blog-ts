import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

type authorSlugType = any;

const postsQueryByAuthor = gql`
    query PostsByAuthor($authorSlug: String) {
        blogPostCollection(where: { postAuthor: { authorSlug: $authorSlug } }) {
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

export const useGetPostsByAuthor = (authorSlug: authorSlugType) => {
    return useQuery(postsQueryByAuthor, {
        variables: {
            authorSlug,
        },
    });
};
