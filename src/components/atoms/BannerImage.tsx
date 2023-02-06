import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { themeInterface } from '@/types';
import { BlogContext } from '@/providers/BlogContextProvider';
import { mobileBreakpoint } from '@/utils/constants';

interface bannerImageProps {
    bannerUrl: string;
    bannerTitle?: string;
    bannerFeaturedText?: string | string[];
}

interface bannerDivProps {
    bgUrl: string;
    theme: themeInterface;
}

interface themeProps {
    theme: themeInterface;
}

const Banner = styled.div<bannerDivProps>`
    background: url('${(props) => props.bgUrl}') center;
    background-size: cover;
    width: 100vw;
    min-height: 20rem;
    height: 40rem;
    display: flex;
    flex-direction: column;
    gap: 8rem;
    justify-content: center;
    align-items: center;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.4);
    }
`;

const BannerTitle = styled.h1<themeProps>`
    font-size: 4rem;
    color: #ffffff;
    max-width: 70vw;
    text-align: center;
    text-shadow: 2px 10px 20px rgba(0, 0, 0, 0.9);
    animation: bannerTitleBounce 3s ease-in-out infinite;
    -webkit-animation: bannerTitleBounce 3s ease-in-out infinite;

    @media only screen and (max-width: ${mobileBreakpoint}) {
        font-size: 2.5rem;
        max-width: 80vw;
        animation: none;
        position: relative;
    }

    @keyframes bannerTitleBounce {
        0% {
            transform: translateY(0%);
        }
        50% {
            transform: translateY(-10%);
        }
        100% {
            transform: translateY(0%);
        }
    }
`;

const BannerFeatured = styled.h3<themeProps>`
    color: #ffffff;
    text-align: center;
    text-shadow: 2px 10px 20px rgba(0, 0, 0, 0.9);
    font-size: 1.5rem;
    max-width: 60vw;
    position: relative;

    @media only screen and (max-width: ${mobileBreakpoint}) {
        font-size: 1rem;
        max-width: 90vw;
    }
`;

const BannerImage = ({ bannerUrl, bannerTitle, bannerFeaturedText }: bannerImageProps) => {
    const { theme }: any = useContext(BlogContext);

    return (
        <Banner bgUrl={bannerUrl} theme={theme}>
            {bannerTitle && (
                <BannerTitle className={theme.font.className} theme={theme}>
                    {bannerTitle}
                </BannerTitle>
            )}
            {bannerFeaturedText && <BannerFeatured theme={theme}>{bannerFeaturedText}</BannerFeatured>}
        </Banner>
    );
};

export default BannerImage;
