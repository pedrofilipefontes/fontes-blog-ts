import React from 'react';
import styled from '@emotion/styled';
import { ContentWrapper, Footer, HeadingText, HeadWithOptions, ParagraphText } from '@/components/atoms';
import { NavigationBar } from '@/components/molecules';
import { useGetAuthor, useGetPostsByAuthor } from '@/utils/hooks';
import { PostsGrid } from '@/components/organisms';
import { mobileBreakpoint } from '@/utils/constants';

interface AuthorBioTemplateProps {
    authorSlug: string | string[] | undefined;
}

const BioContainer = styled.div`
    width: 100%;
    padding: 0 10rem 10rem;

    @media only screen and (max-width: ${mobileBreakpoint}) {
        padding: 0 2rem 5rem;
    }
`;

const BioAvatar = styled.img`
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
`;

const BioRow = styled.div`
    margin-top: 5rem;
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    margin-bottom: 5rem;

    @media only screen and (max-width: ${mobileBreakpoint}) {
        flex-direction: column;
        align-items: center;
    }

    .bio-col {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 3rem;
    }

    h1 {
        font-size: 3rem;
    }
`;

const AuthorBioTemplate = ({ authorSlug }: AuthorBioTemplateProps) => {
    const author = useGetAuthor(authorSlug);

    if (author.error) throw new Error(author.error.message);

    let authorData;
    if (!author.loading && author.data) {
        authorData = author?.data?.postAuthorCollection?.items[0];
    }

    const posts = useGetPostsByAuthor(authorSlug);

    if (posts.error) throw new Error(posts.error.message);

    let postsData;
    if (!posts.loading && posts.data) {
        postsData = posts.data.blogPostCollection.items;
    }

    return (
        <React.Fragment>
            <HeadWithOptions
                headData={{
                    title: 'Search results',
                    description: 'My cool blog',
                }}
            />
            <NavigationBar />
            <ContentWrapper>
                <BioContainer>
                    <BioRow>
                        <BioAvatar alt="author-avatar-img" src={authorData?.authorPhoto.url} />
                        <div className="bio-col">
                            <div>
                                <HeadingText hType="h1" fontWeight="600">
                                    {authorData?.authorName} {authorData?.authorSurname}
                                </HeadingText>
                                <HeadingText hType="h2">{authorData?.authorRole}</HeadingText>
                            </div>
                            <div>
                                <ParagraphText>{authorData?.authorBio}</ParagraphText>
                            </div>
                        </div>
                    </BioRow>
                    <HeadingText hType="h2" fontWeight="500">
                        Posts que eu já escrevi
                    </HeadingText>
                    <br />
                    <PostsGrid postsData={postsData} />
                </BioContainer>
            </ContentWrapper>
            <Footer />
        </React.Fragment>
    );
};

export default AuthorBioTemplate;
