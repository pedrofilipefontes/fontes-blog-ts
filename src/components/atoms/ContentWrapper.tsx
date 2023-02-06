import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { childrenInterface, themeInterface } from '@/types';
import { BlogContext } from '@/providers/BlogContextProvider';

interface divProps {
    theme: themeInterface;
}

const Div = styled.div<divProps>`
    margin-top: ${({ theme }) => theme.distances.navigationBarHeight};
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    background-color: ${({ theme }) => theme.colors.primary};
    min-height: 90vh;
`;

const ContentWrapper = ({ children }: childrenInterface) => {
    const { theme }: any = useContext(BlogContext);

    return (
        <Div className={theme.font.className} theme={theme}>
            {children}
        </Div>
    );
};

export default ContentWrapper;
