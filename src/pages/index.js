
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
import poolPage from '../pages/pools'
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
  width: 100vw;
  height: 100vh;
  /* height: ${ props => {
    if (props.vh > 500) {
      return `${props.vh}px`
    } else {
      return "100vh"
    }
  }}; */
  /* min-height: 550px; */
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