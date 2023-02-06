import React from 'react';

export interface childrenInterface {
    children: React.ReactNode;
}

export interface headData {
    title: string | undefined;
    description: string;
}

export interface themeInterface {
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    distances: {
        navigationBarHeight: string;
    };
    font: {
        className: string;
    };
}
