import React from 'react'
import styled from 'styled-components'
import { Link } from 'components/Router'
import { useRouteData } from 'react-static'
import Markdown from 'react-markdown'
import NavBar from '../containers/navigation/navbar'
import FooterNav from '../containers/navigation/footerNav'
// require('../components/lazyLoad.js')
import background from '../images/backgrounds/about.jpg'
import backgroundLarge from '../images/backgrounds/aboutLarge.jpg'
import  logo from'../images/logos/LargeLogoBlack.png'

// Styles
const PageContainer = styled.div`
  position: relative;
  background-image: url(${background});
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  background-color: ${ ({theme: {lightGrey}}) => lightGrey };
  color: ${ ({theme: {darkGrey}}) => darkGrey };
  max-width: 100%;
  overflow-x: hidden;
  .headline { padding: 110vw 0 0; }
  h1 { color: ${ ({theme: {darkGrey}}) => darkGrey }; }
  @media(min-width: 1081px) {
    background-image: url(${backgroundLarge});
    .headline { 
      padding: 30vw 0 9rem; 
      display: flex;
      justify-content: center;
      h1 { 
        width: 30rem;
        font-size: 5.2rem; 
        border-radius: 10px; 
        padding: 1.5rem;
        color: ${ ({theme: {lightGrey}}) => lightGrey };
        background-color: rgba(19, 114, 176, .5);
        }
    }
    .shadow {
      position: absolute;
      z-index: 1;
      width: 79.4%;
      left: 50%;
      top: 10.05vw;
      transform: translateX(calc(-50%));
      height: 93%;
      box-shadow: 0px 0px 75px 0px rgba(0,0,0,0.75);
    }
  }
`
const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 9rem;
  display: flex;
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
  &:first-child {
    margin-top: 30rem;
  }
  &:last-child {
    padding-bottom: 8rem;
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
const Photo = styled.img`
  box-shadow: 0px 0px 75px 0px rgba(0,0,0,0.85);
  border-radius: 15rem;
  object-fit: cover;
  width: 25rem;
  margin: 4rem auto 0;
`

export default function About() {
  const ourStoryContent = useRouteData()

  return (
    <PageContainer>
      <HeaderContainer>
      <NavBar black style={{zIndex: "1000"}}/>
        <Link to="/"><Logo /></Link>
      </HeaderContainer>
      <div className="shadow"></div>
      <TextContainer>
      <div className="headline">
        <h1 style={{textAlign: "center"}}>Our Story</h1>
      </div>
        <div style={{width: '100%', textAlign: 'center', paddingBottom: "3.2rem"}}>
          <Photo src={`${ourStoryContent[1].headShotPhoto.fields.file.url}?w=300&fl=progressive`}/>
          <h2>{ourStoryContent[1].name}</h2>
        </div>
        <Markdown source={ourStoryContent[1].bioText} />
      </TextContainer>
      <TextContainer>
        <div style={{width: '100%', textAlign: 'center', padding: "3.2rem 0"}}>
          <Photo src={`${ourStoryContent[0].headShotPhoto.fields.file.url}?w=300&fl=progressive`}/>
          {/* <lit-lazy-image id="img" alt="img" src={`${ourStoryContent[0].headShotPhoto.fields.file.url}?w=300&fl=progressive`}> */}
          {/* </lit-lazy-image> */}
          <h2>{ourStoryContent[0].name}</h2>
        </div>
        <Markdown source={ourStoryContent[0].bioText} />
      </TextContainer>
      <TextContainer>
        <h1>Our Mission</h1>
        <p>At Countryside Landscape, we hire only the best employees and provide excellent service to our vast clientele. Whether your project scope is a small pocket garden in a downtown location or a sprawling country estate, we are committed to excellence in every stage of our project. We are confident that the design resolution will be unique to your property and incorporate your requirements in a seamless manner to allow you your own slice of paradise. Our mission then is to provide you an exciting &amp; effortless experience throughout the planning &amp; construction phases and get you outside enjoying your tailored garden.
        </p>
      </TextContainer>
      <TextContainer>
        <h1>Our Commitment</h1>
        <p>It is imperative to provide safe working practices for our employees, and safe working environments for our clients. We endeavour to assemble a staff of sincere, hardworking individuals so that we may be accountable to each other and our clients. We know the importance of listening, understanding and the value of supporting each other through teamwork. We not only teach, but we learn from others – we build together.
        </p>
      </TextContainer>
      <TextContainer>
        <h1>Our Vision</h1>
        <p>To assemble a friendly, professional staff who will cater to our clients’ needs by offering services and products that create beautiful outdoor living spaces.
        </p>
      </TextContainer>
      <FooterNav ourStory/>
  </PageContainer>
  )
}

