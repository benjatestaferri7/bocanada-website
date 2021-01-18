import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <HeroContainer>
                <Navbar toggle={ toggle }/>
                <Sidebar isOpen={ isOpen } toggle={ toggle }/>
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Elegí siempre la mejor comida</HeroH1>
                        <HeroP>La mejor de Güemes</HeroP>
                        <HeroBtn>VER MENU</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </>
    );
};

export default Hero;
