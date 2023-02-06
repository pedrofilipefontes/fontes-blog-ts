import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const navLinksQuery = gql`
    query {
        blogPageCollection(order: [sys_firstPublishedAt_ASC]) {
            items {
                pageTitle
                pageSlug
            }
        }
    }
`;

export const useGetNavLinks = () => {
    return useQuery(navLinksQuery);
};
