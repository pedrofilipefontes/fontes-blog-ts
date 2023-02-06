import React from 'react';
import { keyframes } from '@emotion/css';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';
import { mobileBreakpoint } from '@/utils/constants';

interface ThumbImageProps {
    className?: string;
    thumbUrl: string;
    thumbDestination: string;
    ctaText?: string;
}

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

const ThumbContainer = styled.div`
    width: 30vw;
    max-width: 100%;
    height: calc(30vw * 9 / 21);
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-radius: 0.4rem;

    @media only screen and (max-width: ${mobileBreakpoint}) {
        width: 100%;
        height: calc(95vw * 9 / 21);
    }

    &:hover {
        & > img {
            animation: ${zoomIn} 1.5s ease-in forwards;
        }
        & > div {
            opacity: 1;
        }
    }
`;

const ThumbImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.2s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const OverlayText = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: white;
`;

const ThumbImage = ({ className, thumbUrl, thumbDestination, ctaText }: ThumbImageProps) => {
    const router = useRouter();

    const handleThumbClick = () => {
        router.push(thumbDestination);
    };

    return (
        <ThumbContainer onClick={handleThumbClick} className={className}>
            <ThumbImg src={thumbUrl} alt="thumbnail-image" />
            <Overlay>
                <OverlayText>{ctaText}</OverlayText>
            </Overlay>
        </ThumbContainer>
    );
};

export default ThumbImage;
