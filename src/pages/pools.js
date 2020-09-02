import React, { useEffect } from 'react'
import { Link } from 'components/Router'
import styled, { keyframes } from 'styled-components'
import ReactGA from 'react-ga'
import TextContainer from '../containers/pools/TextContainer'
import Event from '../components/helperFuncrtions/AnalyticsEvents'
// import catalogue from '../../public/LeisurePoolsConsumerBrochure2019-0424.pdf'
// import logo from '../images/logos/LargeLogo.png'
import LogoComponent from '../components/logo'

const animateCatalogue = keyframes`
0%      { color: #8AD30D; }
50%    { color: #E6AD65; }
100%    { color: #8AD30D; }
`

const PageContainer = styled.div`
    padding-top: 4.5rem;
    #catalogue {
        padding-top: 4rem;
        font-size: 2rem;
        font-weight: 700;
        animation: ${animateCatalogue} 2s ease-in-out infinite;
    }
    .auana {
        position: absolute;
        font-size: 1rem;
        color: ${({ theme: { darkGrey } }) => darkGrey};
        left: 50%;
        transform: translateX(-50%);
        }
`
const BackgroundContainer = styled.div`
@media( min-width: 950px ) {
}
`
// const Logo = styled.div`
//     width: 25rem;
//     min-height: 9rem;
//     margin: auto;
//     margin-top: 4.5rem;
//     padding-bottom: 3rem;
//     background-image: url(${logo});
//     background-size: cover;
//     background-position: center center;
//     z-index: 50;
//     @media(min-width: 555px) {
//         width: 37.5rem;
//         min-height: 13.5rem;
//     }
// `

const ContentContainer = styled.div`
    width: 95%;
    margin: auto;
    max-width: 1846px;
    @media( min-width: 675px ) {
        position: relative;
        width: 90vw;
    }
    @media( min-width: 950px ) {
        width: 80.1vw;
    }
`

export default function Pools() {
  
    useEffect(() => {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname)
    }, [])

    return (
        <PageContainer id="pools" style={{ position: "relative", overflowX: "hidden" }}>
            <BackgroundContainer >
                {/* <NavBar style={{ zIndex: "1000" }} /> */}
                <Link to="/"><LogoComponent /></Link>
                {/* <BannerNav /> */}
                <ContentContainer>
                    <div className="grid">
                        <TextContainer id="one">
                            <h1 style={{ padding: '3rem 0' }} >Your London &amp; Area Pool Builder</h1>
                            <p>We install quality fiberglass in ground swimming pools, fiberglass plunge pools, fiberglass lap pools and water features in and around London Ontario. We are a trusted landscape company with the experience, knowledge and staff to create your landscape dream safely, efficiently and affordably.
                        </p>
                            <a onClick={() => Event("Our Work - Download Catalogue")} id="catalogue" href="/LeisurePoolsConsumerBrochure2019-0424.pdf" download>Download Pool Catalogue</a>
                        </TextContainer>
                        
                        <TextContainer id="four">
                            <h2>We bring your vision to life with our expertise.</h2>
                            <p>Countryside Landscape is a one-stop shop for custom landscapes and we're one of London's most trusted pool install companies. Our objective is to create unique spaces that are tailored to your site specific challenges. Whether your project scope is a small pocket garden in a downtown location or a sprawling country estate, we are committed to excellence in every stage of our project.</p>
                        </TextContainer>
                        <TextContainer id="five">
                            <h2>Our Services</h2>
                            <p>We are a mid-sized landscape company located in Aylmer, Ontario which is central to and services the towns, cities and surrounding country communities of Tillsonburg, St. Thomas, London and Ingersoll.</p>
                        </TextContainer>
                        <TextContainer id="six">
                            <h2>We offer a variety of quality services for your home and commercial properties.</h2>

                            <p style={{ paddingBottom: "0" }}><b>Among our services are:</b></p>
                            <ul>
                                <li>Skid steer and mini excavating services, such as:  excavations, prep work, demolitions and clean-ups, excavate hydro ,water trenches, and excavate pools, and excavate and install driveway and parking lots.</li>

                                <li>Stamped concrete and regular concrete, interlocking stone, driveways, walkways, patios, pool decks and outdoor living spaces.</li>

                                <li>Manufactured and natural stone, retaining walls and steps. </li>

                                <li>Commercial and residential snow plowing and salting in Aylmer and surrounding communities.</li>
                            </ul>
                        </TextContainer>
                        <TextContainer id="seven">
                            <h2 style={{ textAlign: 'center' }}>We conform to WSIB standards and are Commercial Liability insured.</h2>
                        </TextContainer>
                    </div>
                    <div className="contact">
                        <Link to="/contact">Get in touch with us!</Link>
                    </div>
                </ContentContainer>
            </BackgroundContainer>
            <a href="https://auana.ca" className="auana">Website by AUANA DIGITAL</a>
        </ PageContainer>
    )
}
