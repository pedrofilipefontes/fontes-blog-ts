import React, { createContext, useState, useEffect } from 'react';
import { font } from '@/utils/blogTheme/fontStyle';
import { colorPaletteLight, colorPaletteDark, distances } from '@/utils/blogTheme/stylesTheme';
import { childrenInterface } from '@/types';

export const BlogContext = createContext({});

export const BlogContextProvider = ({ children }: childrenInterface) => {
    const [theme, setTheme] = useState({
        colors: colorPaletteLight,
        distances: distances,
        font,
    });
    const localTheme = typeof window !== 'undefined' ? localStorage?.getItem('themeType') : null;
    const [themeType, setThemeType] = useState(localTheme ? localTheme : 'light');

    useEffect(() => {
        setTheme({
            ...theme,
            colors: themeType === 'light' ? colorPaletteLight : colorPaletteDark,
        });
    }, [themeType]);

    return <BlogContext.Provider value={{ theme, themeType, setThemeType }}>{children}</BlogContext.Provider>;
};
