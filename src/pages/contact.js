import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import { Link } from 'components/Router'
import '../artibot.css'
import NavBar from '../containers/navigation/navbar'
import Event from '../components/helperFuncrtions/AnalyticsEvents'
import Background from '../images/backgrounds/contact.jpg'
import BackgroundLarge from '../images/backgrounds/contactLarge.jpg'
import Logo from '../components/logo'

// Style

const PageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  height: ${ props => props.vh}px;
  text-align: center;
  @media(max-width: 1150px){
     button {
       /* right: 5rem;
       top: 33vh; */
     }
    }
  @media(max-height: 575px ) {
    height: 70rem;
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`
const BackgroundContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-image: url(${Background});
    background-size: cover;
    @media(max-width: 2158px){
      background-position: bottom right;
    }
    @media(max-width: 1150px){
      background-position: top left;
    }
    @media(max-height: 575px ) {
      height: 70rem;
      background-repeat: no-repeat;
  }
    @media(min-width: 1150px) {
      background-image: url(${BackgroundLarge});

    }
`
const TextContainer = styled.div`
  position: absolute;  
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  text-align: center;
  p {
    margin-top: 0;
    color: ${({ theme: { lightGrey } }) => lightGrey};
    font-weight: 400;
    font-family: 'Alegreya Sans SC';
    font-size: 4rem;
  }
  @media(min-width: 635px){
    p { text-shadow: 2px 2px 1px  rgba(0,0,0, 0.5); }
    top: 60%;
  }
  @media(min-width: 1575px){
    top: 66%;
    p { margin-bottom: 1rem; }
  }
`
const ContactButton = styled.button`
  background-color: rgba(255,255,255, .1);
  color: ${({ theme: { lightGrey } }) => lightGrey};
  border: none;
  border-radius: 4px;
  margin-top: 1.5rem;
  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.1);
  font-size: 1.75rem;
  z-index: 200;
  width: 11rem;
  height: 4rem;
  &:hover {
    transform: scale(1.2)
  }
  &:focus {
    outline: none;
  }
  @media(min-width: 1575px){
    background-color: ${({ theme: { highlight } }) => highlight};
  }
`
const FooterTextContainer = styled.div`
  position: relative;
  left: 50%;
  top: 3rem;
  transform: translateX(-50%);
  h2:first-of-type { padding-bottom: 3rem; }
  h2, a { 
    color: ${({ theme: { lightGrey } }) => lightGrey}; 
    font-size: 1.75rem;
  }
  a { font-size: 2rem; }
  width: 23rem;
  @media(min-width: 635px){
    /* left: 50%;
    transform: translateX(-50%); */
  }
  @media(min-width: 1575px){
   h2 { margin: 0 }
  }
`


export default function Contact() {
  const [viewHeight, setViewHeight] = useState(null)
  const handleResize = (ele) => {
    setViewHeight(ele)
  }
  useEffect(() => {
    handleResize(window.innerHeight)
    window.addEventListener('resize', handleResize(window.innerHeight));
    window.onorientationchange = () => setViewHeight(null)
    const script = document.createElement("script");
    script.type = "text/javascript"
    script.async = true
    script.id = "artibot";
    script.setAttribute('crossorigin', 'SameSite=None')
    script.innerHTML = "!function(t,e){t.artibotApi={l:[],t:[],on:function(){this.l.push(arguments)},trigger:function(){this.t.push(arguments)}};var a=!1,i=e.createElement('script');i.async=!0,i.type='text/javascript',i.src='https://app.artibot.ai/loader.js',e.getElementsByTagName('head').item(0).appendChild(i),i.onreadystatechange=i.onload=function(){if(!(a||this.readyState&&'loaded'!=this.readyState&&'complete'!=this.readyState)){new window.ArtiBot({i:'10b60f1d-af20-48f5-8fe2-d77ec70d0158'});a=!0}}}(window,document);"
    document.body.appendChild(script)

    return () => {
      window.removeEventListener('resize', handleResize(window.innerHeight))
      window.onorientationchange = null
    }
  }, [setViewHeight])
  return (
    <PageContainer vh={viewHeight}>
      <NavBar style={{ zIndex: "1000" }} />
      <BackgroundContainer />
      <TextContainer>
        <Link to="/">
          <Logo vh={viewHeight} />
        </Link>
        <p  style= {{ marginTop: '2rem' }} >It's your space</p>
        <ContactButton className="artibot-button-expand">QUOTE</ContactButton>
        <FooterTextContainer>
          <h2 style={{ fontSize: "2.5rem" }}>505 Talbot St. E. Aylmer, ON</h2>
          <h2 style={{ textAlign: "left" }}>VINCE<a onClick={() => Event("Contact Phone - Vince")} href="tel: 519-403-5699" style={{ float: "right" }}>(519) 403-5699</a></h2>
          <h2 style={{ textAlign: "left" }}>JOHN<a onClick={() => Event("Contact Phone - John")} href="tel: 519-619-9593" style={{ float: "right" }}>(519) 619-9593</a></h2>
        </FooterTextContainer>
      </TextContainer>
    </PageContainer>
  );
}

