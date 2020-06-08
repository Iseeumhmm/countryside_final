import React from 'react'
import styled from 'styled-components'
const logo = require('../images/logos/LargeLogo.png')

const LogoBackground = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto 1rem;
    width: 25rem;
    min-height: 11rem;
    background: rgba(0,0,0,.75);
    border-radius: 1rem;
`
const Logo = styled.div`
    width: 25rem;
    min-height: 9rem;
    background-image: url(${logo});
    background-size: cover;
    background-position: center center;
`

const LogoComponent = () => {
    return (
            <LogoBackground>
                <Logo />
            </LogoBackground>
    )
}

export default LogoComponent