import React from 'react'
import { Link } from 'components/Router'
import styled from 'styled-components'

const FooterNavContainer = styled.div`
    position: relative;
    width: 100%;
    height: 20rem;
    color: black;
    z-index: 10;
    font-weight: 700;
    font-size: 2rem;
    a { color: ${ ({light}) => light ? ({theme: {lightGrey}}) => lightGrey : ({theme: {highlightSecondary}}) => highlightSecondary } }
    text-decoration: underline;
    ul {
        padding-inline-start: 0;
        padding: 3.2rem 0 5.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        list-style: none;
        
        li {
            display: inline-block;
        }
        li {
            padding-right: 5.2rem;
        }
        li:nth-child(3), li:nth-child(4) {
            padding-right: 0;
        }
    }
    .auana {
        font-size: 1rem;
        position: absolute;
        bottom: 0;
        left: 50%;
        color: ${ ({light}) => light ? ({theme: {lightGrey}}) => lightGrey : ({theme: {darkGrey}}) => darkGrey };
        transform: translateX(-50%);
    }
`

const FooterNav = (props) => {

    return (
        <FooterNavContainer id="footer" light={props.light}>
            <ul>
                <li style={ props.contact ? {display: "none"} : null }><Link ga-on="click" ga-event-category="FooterContact" to="/contact">Contact</Link></li>
                <li style={ props.pools ? {display: "none"} : null }><Link ga-on="click" ga-event-category="FooterPoolGallery" to="/pools">Pool Gallery</Link></li>
                <li style={ props.ourWork ? {display: "none"} : null }><Link ga-on="click" ga-event-category="FooterOurWork" to="/pool-installs">Our Work</Link></li>
                <li style={ props.ourStory ? {display: "none"} : null }><Link ga-on="click" ga-event-category="FooterOurStory" to="/about">Our Story</Link></li>

            </ul>
            <a href="https://auana.ca" className="auana">Website by AUANA DIGITAL</a>
        </FooterNavContainer>
    )
}

export default FooterNav