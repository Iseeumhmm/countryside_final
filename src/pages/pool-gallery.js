import React, { useEffect, useState } from 'react'
import { Link } from 'components/Router'
import styled, { keyframes } from 'styled-components'
import { useRouteData } from 'react-static'
import Fade from 'react-reveal/Fade';
import ReactGA from 'react-ga'
import NavBar from '../containers/navigation/navbar'
import logo from '../images/logos/LargeLogoBlack.png'
var ids = require('short-id')

const PageContainer = styled.div`
    h1, h2 {
        text-align: center;
    }
    .instagram-container {
        width: 65%;
        margin: auto;
    }
    .auana {
        position: absolute;
        font-size: 1rem;
        color: ${({ theme: { darkGrey } }) => darkGrey};
        left: 50%;
        transform: translateX(-50%);
        }
    @media(max-width: 700px) {
        .instagram-container {
            width: 100%;
        }
    }
`
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Logo = styled.img.attrs({
    src: logo
})`
   width: 25rem;
    min-height: 9rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
`
const GridImageContainer = styled.div`
 p {
     color: ${({ theme: { darkGrey } }) => darkGrey};
     text-align: center;
     margin-top: 0;
     margin-bottom: 45px;
 }
`
const GridImage = styled.img`
    object-fit: cover;
    height: 14rem;
    width: 25rem;
    /* max-width: 21rem; */
    @media(max-width: 454px) {
        max-width:400px;
        width: 95%;
        height: 100%;
    }
`
const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: ${({ theme: { lightGrey } }) => lightGrey};
    width: 65%;
    margin: auto;
    text-align: center;
    padding-top: 4.5rem;
    h2 {
        text-align: center;
    }
    @media(max-width: 1068px) {
        grid-template-columns: 1fr 1fr;
    }
    @media(max-width: 700px) {  
       width: 100%;
    }
    @media(max-width: 454px) {
        display: block;
    }
`


const PoolGallery = (props) => {

    const pageImages = useRouteData()
    useEffect(() => {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
        const script = document.createElement("script");
        script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
        script.async = true;
        document.body.appendChild(script);
        console.log(props.match);

        // document.querySelector('iframe').setAttribute('style', 'height: 14rem !important; width: 100%; border: none;');
        // console.log('Data in: ', pageImages)
    }, []);

    return (
        <PageContainer className="page-container" style={{ position: "relative", overflowX: "hidden" }}>
            <HeaderContainer>
                <NavBar black style={{ zIndex: "1000" }} />
                <Link to="/"><Logo /></Link>
            </HeaderContainer>
            <h1>Our Showcase</h1>
            <ContentContainer>
                {
                    pageImages[1][1].map((each, index) => {
                        var str = each.title;
                        var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
                        str = str.replace(regex, '');
                        const title = str.replace(/\s+/g, '-').toLowerCase();
                        return (
                            <Link key={ids.generate()} to={`/pools?id=${index}&job=${title}`}>
                                <Fade bottom cascade delay={index * 150}>
                                    <GridImageContainer>
                                        <GridImage src={`${each.image[1].fields.file.url}?w=400`} alt={each.title} />
                                        <p>{each.title}</p>
                                    </GridImageContainer>
                                </Fade>

                            </Link>
                        )
                    })
                }
            </ContentContainer> 
            <Fade bottom delay={750}>
            <h2>Check us out on Instagram!</h2>
            <div className="instagram-container">
                <iframe src="https://cdn.lightwidget.com/widgets/7a72f762c64e5a61add84c71b1a0ef17.html" title="Instagram Widget" scrolling="no" allowtransparency="true" className="lightwidget-widget" style={{ width: '100%', border: '0', overflow: 'hidden' }}></iframe>
            </div>
            </Fade>
            <a href="https://auana.ca" className="auana">Website by AUANA DIGITAL</a>
        </ PageContainer>

    )
}

export default PoolGallery;