import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { themeInterface } from '@/types';
import { BlogContext } from '@/providers/BlogContextProvider';

type textHeadings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type fontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700';

interface HeadingTextProps {
    hType: textHeadings;
    fontWeight?: fontWeight;
    className?: string;
    children: string | string[];
}

interface headingProps {
    as: textHeadings;
    fontWeight?: fontWeight;
    theme: themeInterface;
}

const Heading = styled.h1<headingProps>`
    font-weight: ${(props) => props.fontWeight || '400'};
    color: ${({ theme }) => theme.colors.secondary}};
`;

const HeadingText: React.FC<HeadingTextProps> = ({ hType, fontWeight, children, className }) => {
    const { theme }: any = useContext(BlogContext);

    return (
        <Heading theme={theme} as={hType} fontWeight={fontWeight} className={className}>
            {children}
        </Heading>
    );
};

export default HeadingText;
