import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { BlogContext } from '@/providers/BlogContextProvider';
import { themeInterface } from '@/types';

interface navLinkProps {
    className?: string;
    href: string;
    children: string;
}

interface linkProps {
    theme: themeInterface;
}

const StyledLink = styled(Link)`
    font-size: 1.2rem;
    color: inherit;
    transition: all ease-in 0.1s;
    text-align: center;
    &:hover,
    &.active-link {
        color: ${(props: linkProps) => props.theme.colors.tertiary};
    }
    &.active-link {
        font-weight: 600;
    }
`;

const NavLink = ({ className, children, href }: navLinkProps) => {
    const { theme }: any = useContext(BlogContext);

    return (
        <StyledLink href={href} className={`${theme.font.className} ${className}`} theme={theme}>
            {children}
        </StyledLink>
    );
};

export default NavLink;
