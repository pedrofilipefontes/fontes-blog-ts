import React from 'react';
import styled from '@emotion/styled';
import { PostLink } from '@/components/molecules';
import { useRouter } from 'next/router';
import { HeadingText } from '@/components/atoms';
import { IconButton } from '@mui/material';

interface RelatedPostsCarouselProps {
    postsData: Array<any>;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const CarouselContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    overflow-x: auto;
`;

const CarouselContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: auto;
    margin: 0 auto;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
`;

const LeftButton = styled(IconButton)`
    margin: 0 0.5rem;
    background: #f1f1f1;
    height: 2rem;
    width: 2rem;
`;

const RightButton = styled(IconButton)`
    background: #f1f1f1;
    height: 2rem;
    width: 2rem;
`;

const TitleRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;

const RelatedPostsCarousel = ({ postsData }: RelatedPostsCarouselProps) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const carouselContentRef = React.useRef<HTMLDivElement>(null);
    const router = useRouter();
    const { postSlug } = router.query;

    const handleScroll = (direction: 'left' | 'right') => {
        if (direction === 'left') {
            containerRef?.current?.scrollBy({
                left: parseInt(`-${carouselContentRef?.current?.clientWidth}`),
                behavior: 'smooth',
            });
        } else {
            containerRef?.current?.scrollBy({ left: carouselContentRef?.current?.clientWidth, behavior: 'smooth' });
        }
    };

    if (postsData?.filter((post) => post.postSlug !== postSlug).length > 0) {
        return (
            <Container>
                <TitleRow>
                    <HeadingText hType="h3" fontWeight="600">
                        Veja também
                    </HeadingText>
                    {postsData?.length > 1 && (
                        <ButtonContainer>
                            <LeftButton onClick={() => handleScroll('left')}>{'<'}</LeftButton>
                            <RightButton onClick={() => handleScroll('right')}>{'>'}</RightButton>
                        </ButtonContainer>
                    )}
                </TitleRow>
                <CarouselContainer ref={containerRef}>
                    <CarouselContent ref={carouselContentRef}>
                        {postsData
                            ?.filter((post) => post.postSlug !== postSlug)
                            .map((post, key) => {
                                return (
                                    <PostLink
                                        key={key}
                                        postSlug={post.postSlug}
                                        postTitle={post.postTitle}
                                        postImageUrl={post.featuredImage.url}
                                        postFeaturedText={post.postFeaturedText}
                                        orientation="row"
                                    />
                                );
                            })}
                    </CarouselContent>
                </CarouselContainer>
            </Container>
        );
    }

    return <React.Fragment />;
};

export default RelatedPostsCarousel;
