import React, { useEffect, useState} from 'react'
import { Link } from 'components/Router'
import styled from 'styled-components'
import { useRouteData } from 'react-static'
import NavBar from '../containers/navigation/navbar'
import ViewStack from '../containers/springs/view-pager'
import instagram from '../components/helperFuncrtions/getInstagram'
import FooterNav from '../containers/navigation/footerNav'
import TextContainer from '../containers/pools/TextContainer'
const background = require('../images/backgrounds/poolPage.jpg')
const backgroundLarge = require('../images/backgrounds/poolPage_2360.jpg')

const logo = require('../images/logos/LargeLogoBlack.png')
const catalogue = require('../../public/Leisure Pools Consumer Brochure 2019-0424.pdf')

const PageContainer = styled.div`
    background-color: ${({theme: {poolPageBackground}}) => poolPageBackground };
    height: auto;
    max-width: 2300px;
    position: relative;
    margin: auto;
`
const BackgroundContainer = styled.div`
width: 100vw;
max-width: 2300px;
background-image: url(${background});
background-repeat: no-repeat;
background-size: contain;
background-position: top center;
@media( min-width: 950px ) {
    background-image: url(${backgroundLarge});
    #footer { padding-top: 12%; }
}
`
const Logo = styled.div`
    position: absolute;
    top: 48vw;
    left: calc(50% - 1rem);
    transform: translateX(-50%);
    width: 25rem;
    min-height: 9rem;
    background-image: url(${logo});
    background-size: cover;
    background-position: center center;
    z-index: 50;
    @media( min-width: 673px ) {
        top: 44vw;
    }
    @media( min-width: 950px ) {
        top: 45vw;
    }
    @media( min-width: 1295px ) {
        top: 1rem;
        left: 50%;
    }
`

const ContentContainer = styled.div`
    width: 95%;
    margin: auto;
    max-width: 1846px;
    .contact {
        width: 100%;
        height: 20rem;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        a { 
            color: ${({ theme: {highlightSecondary} }) => highlightSecondary };
            font-size: 3.2rem;
            font-weight: 700;
        }
    }
    @media( min-width: 675px ) {
        position: relative;
        width: 90vw;
        box-shadow: 0px 0px 75px 0px rgba(0,0,0,0.75);
    }
    @media( min-width: 950px ) {
        top: 9.7vw;
        width: 80.1vw;
    }
    @media( min-width: 1295px ) {
        .grid {
            padding: 0 2rem;
            padding-top: 34vw;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 10px;
        }
       
    }
`
const ViewStackContainer = styled.div`
    position: relative;
    width: 100%;
    height: 95vw;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 7px;
    h2 { padding: 0; }
    @media( min-width: 675px ){
        height: 49rem;
    }
    @media( min-width: 875px ){
        height: 62rem;
    }
    @media( min-width: 950px ){
        height: 53vw;
    }
    @media( min-width: 1295px ){
        height: 28vw;
    }
`

export default function Pools() {
    const  pageImages  = useRouteData()
    const [ divWidth, setDivWidth ] = useState(null)
    const [ instagramFeed, setInstagramFeed ] = useState(null)
    const getWidth = (ele) => {
        setDivWidth(ele)
    }
    useEffect(() => {
        console.log("contentful: ", pageImages)
        let element = document.getElementById("view-pager-container").offsetWidth
        getWidth(element)
        window.addEventListener( 'resize', getWidth(element) );
        window.onorientationchange =  () => getWidth(null)
        return () => {
            window.removeEventListener('resize', getWidth(element))
            window.onorientationchange =  null
        }
    }, [divWidth])
    useEffect(() => {
        let waitingForInstagram = true
        instagram()
            .then( result => (waitingForInstagram ? setInstagramFeed(result) : null))
            .catch( error => (waitingForInstagram ? console.log("There was an error retrieveing the instagram feed: ", error) : null))
        return () => (waitingForInstagram = false)
    }, [divWidth])
    return (
        <PageContainer style={{position: "relative", overflowX: "hidden"}}>
            <BackgroundContainer >
                <NavBar style={{zIndex: "1000"}}/>
                <Link to="/"><Logo/></Link>
                <ContentContainer>
                    <div className="grid">
                    <TextContainer id="one">
                        <h1>Your London &amp; Area Pool Builder</h1>
                        <p>We install quality fiberglass in ground swimming pools, fiberglass plunge pools, fiberglass lap pools and water features in and around London Ontario. We are a trusted landscape company with the experience, knowledge and staff to create your landscape dream safely, efficiently and affordably.
                        </p>
                        <a href={catalogue} download>Download Pool Catalogue</a>
                    </TextContainer>
                    <TextContainer id="two">
                        <ViewStackContainer id="view-pager-container">
                            { divWidth ? <ViewStack width={divWidth} slideType="contentful" slideImages={pageImages}/> : ""}
                        </ViewStackContainer>
                    </TextContainer>
                    <TextContainer id="three">
                        <ViewStackContainer instagram id="view-pager-container-2">
                            
                            { divWidth ? instagramFeed ? <ViewStack width={divWidth} slideType="instagram" slideImages={instagramFeed}/> : <h2>Loading...</h2> : ""}
                        </ViewStackContainer>
                    </TextContainer>
                    <TextContainer id="four">
                        <h2>We bring your vision to life with our expertise.</h2>  
                        <p>Countryside Landscape is a one-stop shop for custom landscapes. Our objective is to create unique spaces that are tailored to your site specific challenges. Whether your project scope is a small pocket garden in a downtown location or a sprawling country estate, we are committed to excellence in every stage of our project.</p>
                    </TextContainer>
                    <TextContainer id="five">
                        <h2>Our Services</h2>
                        <p>We are a mid-sized landscape company located in Aylmer, Ontario which is central to and services the towns, cities and surrounding country communities of Tillsonburg, St. Thomas, London and Ingersoll.</p>
                    </TextContainer>
                    <TextContainer id="six">
                        <h2>We offer a variety of quality services for your home and commercial properties.</h2>

                        <p style={{paddingBottom: "0"}}><b>Among our services are:</b></p>
                        <ul>
                        <li>Skid steer and mini excavating services, such as:  excavations, prep work, demolitions and clean-ups, excavate hydro ,water trenches, and excavate pools, and excavate and install driveway and parking lots.</li>

                        <li>Stamped concrete and regular concrete, interlocking stone, driveways, walkways, patios, pool decks and outdoor living spaces.</li>

                        <li>Manufactured and natural stone, retaining walls and steps. </li>

                        <li>Commercial and residential snow plowing and salting in Aylmer and surrounding communities.</li>
                        </ul>
                    </TextContainer>
                    <TextContainer id="seven">
                        <h2 style={{textAlign: 'center'}}>We conform to WSIB standards and are Commercial Liability insured.</h2>
                    </TextContainer>
                    </div>
                    <div className="contact">
                        <Link to="/contact">Get in touch with us!</Link>
                    </div>
                </ContentContainer>
                <FooterNav ourWork light/>
            </BackgroundContainer>
        </ PageContainer>
    )
}
