import React, { useEffect, useState, useRef, useContext } from 'react';
import { Logo, NavLink, SwitchButton } from '@/components/atoms';
import styled from '@emotion/styled';
import { BlogContext } from '@/providers/BlogContextProvider';
import { themeInterface } from '@/types';
import { useGetNavLinks } from '@/utils/hooks';
import { useRouter } from 'next/router';

interface navBarProps {
    theme: themeInterface;
    themeType: string;
}

const NavBar = styled.div<navBarProps>`
    nav {
        position: fixed;
        z-index: 10;
        top: 0;
        height: ${(props) => props.theme.distances.navigationBarHeight};
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        padding: 2rem 13rem;
        transition: background ease-in 0.25s;
    }

    .nav-at-top {
        background-color: ${({ theme }) => theme.colors.primary};
    }

    .nav-at-top > #nav-links-row > a {
        color: ${(props) => props.theme.colors.secondary};
    }

    .nav-at-top > div > img {
        -webkit-filter: invert(${({ themeType }) => (themeType === 'light' ? '100%' : '0%')});
        filter: invert(${({ themeType }) => (themeType === 'light' ? '100%' : '0%')});
    }

    .nav-scrolled {
        background-color: ${(props) => props.theme.colors.secondary};
    }

    .nav-scrolled > div > img {
        -webkit-filter: invert(${({ themeType }) => (themeType === 'light' ? '0%' : '100%')});
        filter: invert(${({ themeType }) => (themeType === 'light' ? '0%' : '100%')});
    }

    .nav-scrolled > #nav-links-row > a {
        color: ${(props) => props.theme.colors.primary};
    }

    #nav-links-row {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 1.5rem;
    }
`;

const NavLogo = styled(Logo)`
    width: 12.5rem;
    height: 5rem;
    display: flex;
    align-items: center;
`;

const NavigationBar = () => {
    const { theme, themeType, setThemeType }: any = useContext(BlogContext);
    const [backgroundColor, setBackgroundColor] = useState('nav-at-top');
    const prevScrollY = useRef(0);
    const router = useRouter();
    const { pageSlug, postSlug } = router.query;
    const { data, loading, error } = useGetNavLinks();

    let navLinks: Array<any> = [];
    if (!loading && data) {
        navLinks = [...data.blogPageCollection.items];
        //A sorting might be added here if you want to order how the items show in the navigation bar
    }

    if (error) throw new Error(error.message);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setBackgroundColor('nav-scrolled');
            } else if (window.scrollY <= 0) {
                setBackgroundColor('nav-at-top');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [backgroundColor, themeType]);

    return (
        <NavBar themeType={themeType} theme={theme}>
            <nav className={backgroundColor}>
                <NavLogo isTechLogo={true} />
                <div id="nav-links-row">
                    {navLinks.map((link: { pageSlug: string; pageTitle: string }, key: React.Key) => (
                        <NavLink
                            className={
                                pageSlug === link.pageSlug ||
                                (pageSlug === undefined && link.pageSlug === 'home' && !postSlug)
                                    ? 'active-link'
                                    : ''
                            }
                            key={key}
                            href={`/${link.pageSlug === 'home' ? '' : link.pageSlug}`}
                        >
                            {link.pageTitle}
                        </NavLink>
                    ))}
                    <SwitchButton
                        checked={themeType === 'dark'}
                        onChange={(event: any) => {
                            setThemeType(event.target.checked ? 'dark' : 'light');
                            localStorage.setItem('themeType', event.target.checked ? 'dark' : 'light');
                        }}
                    />
                </div>
            </nav>
        </NavBar>
    );
};

export default NavigationBar;
