import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { HeadingText } from '@/components/atoms';
import Link from 'next/link';
import { themeInterface } from '@/types';
import { BlogContext } from '@/providers/BlogContextProvider';

interface Props {
    name: string;
    surname: string;
    role: string;
    avatar: string;
    authorSlug: string;
    publicationDate: Date;
}

interface LinkProps {
    theme: themeInterface;
}

const StyledPostAuthor = styled.div`
    display: flex;
    align-items: center;
`;

const Avatar = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
`;

const AvatarCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 0.8rem;
`;

const NameSurname = styled(Link)<LinkProps>`
    &:hover {
        text-decoration: underline;
        text-decoration-color: ${({ theme }) => theme.colors.secondary};
    }
`;

const PostAuthor: React.FC<Props> = ({ name, surname, role, avatar, authorSlug, publicationDate }) => {
    const { theme }: any = useContext(BlogContext);
    return (
        <StyledPostAuthor>
            <Avatar src={avatar} alt="Author's avatar" />
            <AvatarCol>
                <HeadingText hType="h5" fontWeight="500">
                    Em {new Date(publicationDate).toLocaleDateString('pt-BR')} por
                </HeadingText>
                <NameSurname theme={theme} href={`/bio/${authorSlug}`}>
                    <HeadingText hType="h3" fontWeight="600">
                        {name} {surname}
                    </HeadingText>
                </NameSurname>
                <HeadingText hType="h6">{role}</HeadingText>
            </AvatarCol>
        </StyledPostAuthor>
    );
};

export default PostAuthor;
