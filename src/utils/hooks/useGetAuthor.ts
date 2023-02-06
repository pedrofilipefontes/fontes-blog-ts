import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const authorQuery = gql`
    query AuthorQuery($authorSlug: String) {
        postAuthorCollection(where: { authorSlug: $authorSlug }) {
            items {
                authorName
                authorSurname
                authorRole
                authorBio
                authorPhoto {
                    url
                }
            }
        }
    }
`;

export const useGetAuthor = (authorSlug: any) => {
    return useQuery(authorQuery, {
        variables: {
            authorSlug,
        },
    });
};
