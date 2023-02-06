import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ThumbImage, HeadingText, ParagraphText } from '@/components/atoms';
import Link from 'next/link';
import { mobileBreakpoint } from '@/utils/constants';
import { themeInterface } from '@/types';
import { BlogContext } from '@/providers/BlogContextProvider';

interface PostLinkProps {
    postSlug: string;
    postImageUrl: string;
    postTitle: string;
    postFeaturedText: string;
    orientation: string;
    className?: string;
    ref?: any;
}

interface PostLinkContainerProps {
    flexDirection: string;
}

interface NavLinkProps {
    theme: themeInterface;
}

const PostLinkContainer = styled.div<PostLinkContainerProps>`
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection};
    gap: 2rem;
    align-items: stretch;
    justify-content: space-between;

    @media only screen and (max-width: ${mobileBreakpoint}) {
        flex-direction: column;
        padding: 0;
        gap: 1rem;
    }

    .post-link-col {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;
    }

    .featured-text-clamp {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 1.2em;
        max-height: 3.6em;
        line-clamp: 3;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
`;

const PostLinkText = styled(Link)<NavLinkProps>`
    color: ${({ theme }) => theme.colors.secondary};
    &:hover {
        text-decoration: underline;
    }
    &:after {
        content: ' \2192';
    }
`;

const PostLink = ({
    postSlug,
    postImageUrl,
    postTitle,
    postFeaturedText,
    orientation = 'row',
    ref,
    ...props
}: PostLinkProps) => {
    const { theme }: any = useContext(BlogContext);
    const href = `/post/${postSlug}`;
    return (
        <PostLinkContainer {...props} flexDirection={orientation}>
            <div>
                <ThumbImage thumbDestination={href} thumbUrl={postImageUrl} ctaText="Leia mais" />
            </div>
            <div className="post-link-col">
                <HeadingText hType="h2" fontWeight="600">
                    {postTitle}
                </HeadingText>
                <ParagraphText className="featured-text-clamp">{postFeaturedText}</ParagraphText>
                <PostLinkText theme={theme} href={href}>
                    Leia mais &nbsp;
                </PostLinkText>
            </div>
        </PostLinkContainer>
    );
};

export default PostLink;
