import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'components/Router'
import ReactGA from 'react-ga'
import Markdown from 'react-markdown'
import NavBar from '../containers/navigation/navbar'
import FooterNav from '../containers/navigation/footerNav'
import Logo from '../components/logo'
import warranty from '../images/CountrysideWarranty.md'

// Styles
const PageContainer = styled.div`
  position: relative;
  background-color: ${ ({theme: {lightGrey}}) => lightGrey };
  color: ${ ({theme: {darkGrey}}) => darkGrey };
  width: 100vw;
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
        <Link style={{ position: 'absolute', width: '100%', height: '100%' }} to="/"><Logo /></Link>
      </HeaderContainer>
      <TextContainer>
        <Markdown className="markdown" escapeHtml={false}>{terms}</Markdown>
      </TextContainer>
      <FooterNav ourStory/>
  </PageContainer>
  )
}

