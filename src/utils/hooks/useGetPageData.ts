import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const pageQuery = gql`
    query PageQuery($pageSlug: String) {
        blogPageCollection(where: { pageSlug: $pageSlug }, limit: 1) {
            items {
                pageTitle
                pageTopicTags
                pageBannerTitle
                bannerImage {
                    url
                }
            }
        }
    }
`;

export const useGetPageData = (pageSlug: string) => {
    return useQuery(pageQuery, {
        variables: {
            pageSlug,
        },
    });
};
