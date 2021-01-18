import React from 'react';
import Navbar from '../Navbar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

const Hero = () => {
    return (
        <>
            <HeroContainer>
                <Navbar />
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
