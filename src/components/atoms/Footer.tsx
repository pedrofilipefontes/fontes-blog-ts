import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { BlogContext } from '@/providers/BlogContextProvider';
import { themeInterface } from '@/types';
import Logo from '@/components/atoms/Logo';

interface footerDivProps {
    theme: themeInterface;
    themeType: string;
}

const FooterDiv = styled.div`
    position: relative;
    bottom: 0;
    width: 100vw;
    min-height: 10rem;
    padding: 1rem 0;
    background-color: ${(props: footerDivProps) => props.theme.colors.secondary};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: all ease-in 0.2s;
    div {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    p {
        color: ${(props: footerDivProps) => props.theme.colors.primary};
        font-size: 0.8rem;
    }
    img {
        -webkit-filter: invert(${({ themeType }) => (themeType === 'light' ? '0%' : '100%')});
        filter: invert(${({ themeType }) => (themeType === 'light' ? '0%' : '100%')});
    }
`;

export default function Footer() {
    const { theme, themeType }: any = useContext(BlogContext);
    return (
        <FooterDiv themeType={themeType} className={theme.font.className} theme={theme}>
            <div>
                <Logo />
                <p>© {new Date().getFullYear()} MY COMPANY</p>
            </div>
        </FooterDiv>
    );
}
