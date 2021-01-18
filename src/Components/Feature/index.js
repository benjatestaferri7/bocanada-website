import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Plato del Día</h1>
            <p>Bife de Pollo con Pure.</p>
            <FeatureButton>Pedir Ahora</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
