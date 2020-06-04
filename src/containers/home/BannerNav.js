import React from 'react'
import { Link } from 'components/Router'
import Event from '../../components/helperFuncrtions/AnalyticsEvents'
import styled from 'styled-components'


const NavList = styled.ul`
    margin-bottom: -4rem;
    padding: 0;
    padding-top: ${props => (props.secondary ? "0" : "1.2rem")};
    display: flex;
    justify-content: center;
    li {
        a { 
            color: white; 
            text-shadow: 2px 2px 1px  rgba(0,0,0, 0.5);
            font-weight: 700;
        }
        font-size: 1.3rem;
        list-style-type:none;
        display: inline-block;
        padding: 0 .8rem;
    }
    @media(max-width: 500px){
        flex-direction: column;
    }
`

export default function BannerNav(props) {
   
    return (
        <NavList secondary={props.secondary}>
            <li><Link to="/about" onClick={ () => Event("Home Center Nav - Our Story") }>OUR STORY</Link></li>
            <li><a href="#pools" onClick={ () => Event("Home Center Nav - Pools") }>POOLS</a></li>
            <li style={{
                fontSize: "2rem", 
                marginTop: "-.1rem", 
                fontWeight: "bold"
                }}>
                <Link 
                    to="/pool-gallery"
                    onClick={ () => Event("Home Center Nav - Gallery") }
                    ga-on="click"
                    ga-event-category="our-work"
                    style={{
                        color: "#93D40A"
                    }}
                    >GALLERY
                </Link>
            </li>
            <li><Link to="/contact" onClick={ () => Event("Home Center Nav - Contact") }>CONTACT</Link></li>
            <li><Link to="/warranty" onClick={ () => Event("Home Center Nav - Warranty") }>WARRANTY</Link></li>

        </NavList>
    )
}