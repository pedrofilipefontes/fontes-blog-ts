import React from 'react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { HeadingText, ParagraphText } from '@/components/atoms';
import styled from '@emotion/styled';

interface TextSectionProps {
    rawContent: any;
}

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    text-align: justify;
`;

const TextSection = ({ rawContent }: TextSectionProps) => {
    const options = {
        renderMark: {
            [MARKS.BOLD]: (text: string) => <strong>{text}</strong>,
            [MARKS.ITALIC]: (text: string) => <em>{text}</em>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node: any, children: string) => (
                <ParagraphText secondaryFont>{children}</ParagraphText>
            ),
            [BLOCKS.HEADING_1]: (node: any, children: string) => (
                <HeadingText hType="h1" fontWeight="500">
                    {children}
                </HeadingText>
            ),
            [BLOCKS.HEADING_2]: (node: any, children: string) => (
                <HeadingText hType="h2" fontWeight="500">
                    {children}
                </HeadingText>
            ),
            [BLOCKS.HEADING_3]: (node: any, children: string) => (
                <HeadingText hType="h3" fontWeight="500">
                    {children}
                </HeadingText>
            ),
            [BLOCKS.HEADING_4]: (node: any, children: string) => (
                <HeadingText hType="h4" fontWeight="500">
                    {children}
                </HeadingText>
            ),
            [BLOCKS.HEADING_5]: (node: any, children: string) => (
                <HeadingText hType="h5" fontWeight="500">
                    {children}
                </HeadingText>
            ),
            [BLOCKS.HEADING_6]: (node: any, children: string) => (
                <HeadingText hType="h6" fontWeight="500">
                    {children}
                </HeadingText>
            ),
        },
    };

    return (
        <TextWrapper>
            {/*// @ts-ignore*/}
            {documentToReactComponents(rawContent, options)}
        </TextWrapper>
    );
};

export default TextSection;
