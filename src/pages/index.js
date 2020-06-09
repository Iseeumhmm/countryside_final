
import React, { useEffect, useState } from 'react'
import { useRouteData } from 'react-static'
import ReactGA from 'react-ga'
import Event from '../components/helperFuncrtions/AnalyticsEvents'
import styled, { keyframes } from 'styled-components'
import KenBurns from '../containers/springs/ken-burns/kenBurns'
import BrowserDetection from 'react-browser-detection';
import BannerText from '../containers/home/BannerText'
import NavBar from '../containers/navigation/navbar'
import LoadingPage from '../components/spashScreen'
// import poolPage from '../pages/pools'
import instagram from '../images/icons/instagram.png'
import facebook from '../images/icons/facebook.png'
import Pools from '../pages/pools'

// Styles

const fadeIn = keyframes`
from: { opacity: 0 }
to:   { opacity: 1 }
`
const PageContainer = styled.div`

`
const Container = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  h1 { color: white; }
  animation: ${fadeIn} 1.5s linear;
`

const SocialIcons = styled.div`
position: absolute;
text-align: center;
bottom: 0;
width: 100%;
`
const FireFoxHome = styled.div`
  width: 100vw;
  height: ${ props => props.vh}px;
  overflow: hidden;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center center;
`

function Home() {
  const homePageSliderImages = useRouteData()
  const [browser, setBrowser] = useState(0)
  const [firefox, setFirefox] = useState(false)
  const [loading, setLoading] = useState(true)

  const browserHandler = {
    default: (browser) => {
      if (browser === "firefox") {
        setFirefox(true)
        return null
      } else {
        return null
      }
    },
  };

  useEffect(() => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname)
    // let toPreload = []
    // homePageSliderImages.items.forEach( link => {
    //     toPreload.push([ `${link}?w=1920&q=40&fl=progressive` ])
    // })
    // var head = document.getElementsByTagName('head')[0];
    // toPreload.forEach( each => {
    //     var link = document.createElement('link');
    //     link.rel = 'preload'
    //     link.as = 'image'
    //     link.href = each
    //     head.appendChild(link);
    // })

    // handleHeight(window.innerHeight)
    // window.addEventListener('resize', handleHeight(window.innerHeight));
    // window.onorientationchange = () => handleHeight(null)


    const structuredDataText = `{
      "@context" : "http://schema.org",
      "@type" : "LocalBusiness",
      "name" : "Your London & Area Pool Builder",
      "image" : "https://images.ctfassets.net/ur1u6ni4z1cg/6ERc2090z9WdqnQ6qGrSXZ/9824fb7f0a104ed37ae3cf29679ee2db/1920X1280-63.jpg?w=400",
      "telephone" : "(519) 403-5699",
      "address" : {
        "@type" : "PostalAddress",
        "addressLocality" : "London Ontario"
      },
      "aggregateRating" : {
        "@type" : "AggregateRating",
        "ratingValue" : "5",
        "ratingCount" : "32"
      }
    }`
    
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.innerHTML = structuredDataText;
    document.head.appendChild(script);
    setBrowser(
      <BrowserDetection>
        {browserHandler}
      </BrowserDetection>
    )
    setTimeout(() => {
      setLoading(false)
    }, 1250)
    // return () => {
    //   window.removeEventListener('resize', handleHeight(window.innerHeight))
    //   window.onorientationchange = null
    // }
  }, [])

  const page = (
    <PageContainer>
      <Container style={{ position: "relative", overflowX: "hidden" }}>
        {browser}
        <NavBar style={{ zIndex: "1000" }} />
        {firefox ? <FireFoxHome image={homePageSliderImages.items[0]} /> : <KenBurns images={homePageSliderImages.items} />}

        <BannerText />
        <SocialIcons>
          <a onClick={() => Event("Home - Instagram Link")} href="https://www.instagram.com/countrysidelandscapeaylmer/" target="_blank" rel="noopener noreferrer"><img src={instagram} style={{ width: "4rem", margin: "1rem" }} alt="Instagram icon" /></a>
          <a onClick={() => Event("Home - Facebook Link")} href="https://www.facebook.com/pages/category/Landscape-Company/Countryside-Landscape-1484042294955435/" target="_blank" rel="noopener noreferrer"><img src={facebook} style={{ width: "4rem", margin: "1rem" }} alt="Facebook icon" /></a>
        </ SocialIcons>
      </Container>
      <Pools />
    </PageContainer>

  )
  return loading ? <LoadingPage /> : page
  // return page

}

export default Home