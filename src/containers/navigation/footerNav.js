import React from 'react'
import { Link } from 'components/Router'
import styled from 'styled-components'
import Event from '../../components/helperFuncrtions/AnalyticsEvents'

const FooterNavContainer = styled.div`
    position: relative;
    width: 100%;
    height: 20rem;
    color: black;
    z-index: 10;
    font-weight: 700;
    font-size: 2rem;
    a { color: ${ ({ light }) => light ? ({ theme: { lightGrey } }) => lightGrey : ({ theme: { highlightSecondary } }) => highlightSecondary} }
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
        color: ${ ({ light }) => light ? ({ theme: { lightGrey } }) => lightGrey : ({ theme: { darkGrey } }) => darkGrey};
        transform: translateX(-50%);
    }
`

const FooterNav = (props) => {

    return (
        <FooterNavContainer id="footer" light={props.light}>
            <ul>
                <li><Link to="/" onClick={() => Event("Footer Menu - Home")}>Home</Link></li>
                <li style={props.contact ? { display: "none" } : null}><Link to="/contact" onClick={() => Event("Footer Menu - Contact")}>Contact</Link></li>
                {/* <li style={ props.pools ? {display: "none"} : null }><Link to="/pools" onClick={ () => Event("Footer Menu - Pool Gallery") }>Pool Gallery</Link></li> */}
                <li style={props.ourWork ? { display: "none" } : null}><Link to="/pool-gallery" onClick={() => Event("Footer Menu - Gallery")}>Gallery</Link></li>
                <li style={props.ourStory ? { display: "none" } : null}><Link to="/about" onClick={() => Event("Footer Menu - Our Story")}>Our Story</Link></li>

            </ul>
            <a href="https://auana.ca" className="auana">Website by AUANA DIGITAL</a>
        </FooterNavContainer>
    )
}

export default FooterNav