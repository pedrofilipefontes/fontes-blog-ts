import React from 'react';
import { ContentWrapper, Footer, HeadingText, HeadWithOptions } from '@/components/atoms';
import { NavigationBar } from '@/components/molecules';
import { PostsGrid } from '@/components/organisms';
import { useRouter } from 'next/router';
import { useGetPostsByTag } from '@/utils/hooks';
import styled from '@emotion/styled';
import { mobileBreakpoint } from '@/utils/constants';

const ResultsTitle = styled.div`
    width: 100%;
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 3rem;
`;

const SearchContent = styled.div`
    padding: 0 10rem 10rem;

    @media only screen and (max-width: ${mobileBreakpoint}) {
        padding: 0 1rem 10rem;
    }

    h2 {
        margin-bottom: 1rem;
    }
`;

const SearchResultsTemplate = () => {
    const router = useRouter();
    const { tag } = router.query;

    const posts = useGetPostsByTag(tag ? [tag] : undefined);

    if (posts.error) throw new Error(posts.error.message);

    let postsData;
    if (!posts.loading && posts.data) {
        postsData = posts.data.blogPostCollection.items;
    }

    return (
        <React.Fragment>
            <HeadWithOptions
                headData={{
                    title: 'Resultados de busca',
                    description: 'Blog da liberty tech',
                }}
            />
            <NavigationBar />
            <ContentWrapper>
                <ResultsTitle>
                    <HeadingText hType="h1" fontWeight="600">
                        {tag ? `#${tag}` : 'Lista de posts'}
                    </HeadingText>
                </ResultsTitle>
                <SearchContent>
                    <HeadingText hType="h2">
                        Encontrado{postsData?.length > 1 && 's'} {postsData?.length} post{postsData?.length > 1 && 's'}
                    </HeadingText>
                    {postsData?.length === 0 ? (
                        <HeadingText hType="h2" fontWeight="500">
                            Ops! Parece que ainda não há conteúdo por aqui :(
                        </HeadingText>
                    ) : (
                        <PostsGrid postsData={postsData} />
                    )}
                </SearchContent>
            </ContentWrapper>
            <Footer />
        </React.Fragment>
    );
};

export default SearchResultsTemplate;
