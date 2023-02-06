import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { BlogContext } from '@/providers/BlogContextProvider';
import { themeInterface } from '@/types';

interface ParagraphTextProps {
    children: string;
    className?: string;
    secondaryFont?: Boolean;
}

interface paragraphProps {
    theme?: themeInterface;
    secondaryFont: Boolean;
}

const Paragraph = styled.p<paragraphProps>`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5rem;
    font-family: ${({ secondaryFont }) => (secondaryFont ? "'Nunito Sans', sans-serif" : 'inherit')};
`;

const ParagraphText = ({ children, className, secondaryFont = false }: ParagraphTextProps) => {
    const { theme }: any = useContext(BlogContext);

    return (
        <Paragraph secondaryFont={secondaryFont} theme={theme} className={className}>
            {children}
        </Paragraph>
    );
};

export default ParagraphText;
