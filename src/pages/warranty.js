import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'components/Router'
import ReactGA from 'react-ga'
import Markdown from 'react-markdown'
import NavBar from '../containers/navigation/navbar'
import FooterNav from '../containers/navigation/footerNav'
import logo from '../images/logos/LargeLogoBlack.png'
import warranty from '../images/CountrysideWarranty.md'

// Styles
const PageContainer = styled.div`
  position: relative;
  background-color: ${ ({theme: {lightGrey}}) => lightGrey };
  color: ${ ({theme: {darkGrey}}) => darkGrey };
  max-width: 100%;
  overflow-x: hidden;
  .headline { padding: 110vw 0 0; }
  h1 { color: ${ ({theme: {darkGrey}}) => darkGrey }; }
 
`
const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 9rem;
  display: flex;
  margin-bottom: 8rem;
  align-items: center;
  justify-content: center;
  @media(min-width: 735px){
    justify-content: flex-start;
  }
`
const Logo = styled.div`
  width: 25rem;
  min-height: 9rem;
  margin-top: 3rem;
  background-image: url(${logo});
  background-size: cover;
  background-position: center center;
  @media(min-width: 1081px) {
    margin-top: 1rem;
    position:absolute;
    top: 0;
    left: 49%;
    transform: translateX(-50%);
  }
`
const TextContainer = styled.div`
  width: 95%;
  margin: auto;
  z-index: 2;
  h1 {
    color: ${ ({theme: {darkGrey}}) => darkGrey };
    text-align: center;
    padding: ${ ({theme: {headerPadding}}) => headerPadding };
  }
  b {
    font-weight: 700;
  }

  @media(min-width: 775px){
    width: 65%;

  }
  @media(min-width: 875px){
    
    width: 60rem;
    h1 { 
      text-align: left;
    }
    
  }
`


export default function About() {
  const [ terms, setTerms ] = useState(null)

  useEffect(() => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname)
    fetch(warranty).then((response) => response.text().then( (text) => {
      setTerms(text)
    }))
  },[])

  return (
    <PageContainer>
      <HeaderContainer>
      <NavBar black />
        <Link to="/"><Logo /></Link>
      </HeaderContainer>
      {/* <div className="shadow"></div> */}
      <TextContainer>
        <Markdown className="markdown" escapeHtml={false}>{terms}</Markdown>
      </TextContainer>
      <FooterNav ourStory/>
  </PageContainer>
  )
}

