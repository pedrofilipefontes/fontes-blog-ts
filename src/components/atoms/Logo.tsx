import React from 'react';
import Image from 'next/image';
import exampleLogo from '@/assets/img/logo-example.png';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';

const LogoImage = styled(Image)`
    width: 100%;
    height: auto;
    display: block;
    cursor: pointer;
`;

const Logo = ({ ...props }) => {
    const router = useRouter();

    const handleLogoClick = () => {
        router.push('https://google.com');
    };

    return (
        <div onClick={handleLogoClick} {...props}>
            <LogoImage src={exampleLogo} alt="example-logo-image" />
        </div>
    );
};

export default Logo;
