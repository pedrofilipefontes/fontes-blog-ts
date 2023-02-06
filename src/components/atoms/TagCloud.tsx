import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { themeInterface } from '@/types';
import { BlogContext } from '@/providers/BlogContextProvider';

interface TagCloudProps {
    tags: string[];
}

interface linkProps {
    theme: themeInterface;
}

const TagLink = styled(Link)<linkProps>`
    font-size: 0.8rem;
    text-decoration: none;
    padding: 0.4rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.secondary};
    &:hover {
        color: ${({ theme }) => theme.colors.tertiary};
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;

const Cloud = styled.div`
    max-width: 35vw;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 0.5rem;
`;

const TagCloud: React.FC<TagCloudProps> = ({ tags }) => {
    const { theme }: any = useContext(BlogContext);

    return (
        <Cloud>
            {tags?.map((tag, index) => (
                <TagLink theme={theme} key={index} href={`/search/posts-list?tag=${tag}`}>
                    #{tag}
                </TagLink>
            ))}
        </Cloud>
    );
};

export default TagCloud;
