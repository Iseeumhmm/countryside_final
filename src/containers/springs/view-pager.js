import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'components/Router'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import styled from 'styled-components'
const poster = require('../../images/icons/instagram_video_poster.jpg')
var ids = require('short-id')


// import './style.css'

const ViewPagerContainer = styled.div`
    position: relative;
    height: 30rem;
    overflow: hidden;
    /* cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39, 
    auto; */
    @media(min-width: 418px) {
      height: 72vw;
    }
    @media(min-width: 675px) {
      height: 78vw;
    }
    & > div {
        position: absolute;
        width: 100%;
        height: 100%;
        will-change: transform;
        h1 { 
          text-decoration: underline;
          z-index: 2;
          top: 0;
        }
        &  > a > p {
          position: relative; 
          bottom: 1rem;
          padding-bottom: 0;
          text-align: center;
        }
    }

    & > div > div {
        border-radius: 10px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        width: 100%;
        /* height: 24rem; */
        padding-top: 64%;
        will-change: transform;
        /* box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6); */
        #insta {
          display: none;
        }
      @media( max-width: 650px ) {
        #insta {
          display: block;
          animation: unset;
          border-radius: 10px;
          position: absolute;
          object-fit: cover;
          object-position: center;
          width: 100%;
          /* height: 91%; */
          top: 0;
          left: 0;
        }
      }
       
    }
`
const VideoContainer = styled.video`
  width: 100%;
   height: 91%;
   position: absolute;
   top: 0;
   left: 0;
   border-radius: 10px;
    background-color: rgba(0,0,0,.25);
`


export default function Viewpager(propsFrom) {

  const processContentfulImages = (images) => {
    let pages = []
    Object.keys(images).forEach( each => {
      pages.push([
        each,
        `${images[each][0]['full1920x1280'].fields.file.url}?fm=jpg&w=800&q=50&fl=progressive`
      ])
    })
    setPages(pages)
  }
  const processInstagramImages = (images) => {
    let pages = []
    Object.keys(images).forEach( each => {
      pages.push([
        images[each].caption,
        `${images[each].media_url}`,
        images[each].media_type,
        images[each].permalink
      ])
    })
    setPages(pages)
  }

  const [ passedType ] = useState(propsFrom.slideType)
  const [ passedImages  ] = useState(propsFrom.slideImages)
  const [ pages, setPages ] = useState([])
  const [ posterHolder, setPosterHolder ] = useState(true)

  const posterRemove = () => {
    console.log('clicked')
    setPosterHolder(false)
  }

  useEffect(() => {

    if (passedType === "contentful") {
      if (passedImages && passedType === "contentful") {processContentfulImages(passedImages)}
    } if ( passedType === "instagram" ) {
      if (passedImages) {
        processInstagramImages(passedImages.data.data)
      }
    }
  }, [])

  const divWidth = propsFrom.width + 5;
  const index = useRef(0)

  const [props, set] = useSprings(pages.length, i => ({ x: i * divWidth, sc: 1, display: 'block' }))
  const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    if (down && distance > divWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * divWidth + (down ? xDelta : 0)
      const sc = down ? 1 - distance / divWidth / 2 : 1
      return { x, sc, display: 'block' }
    })
  })
  const viewPagerItems = props.map(({ x, display, sc }, i) => (
      <animated.div {...bind()} key={ids.generate()} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>

        {passedType === "contentful" ? <Link key={`${i}_link`} to={passedType === "contentful" ? `/${pages[i][0]}` : "/pool-installs"}>
          <h1 style={{textAlign: "center"}}>{pages[i][0]}</h1>
        </Link>  : null }

        <animated.div style={{ transform: sc.interpolate(s => `scale(${s})`), backgroundImage: pages[i][2] !== "VIDEO" ? `url(${pages[i][1]})` : "unset" }}>
          {pages[i][2] === "VIDEO" ? <React.Fragment>{ posterHolder ? <img id="insta" src={poster} alt="Instagram" /> : ""}<VideoContainer controls width="250" type="video/mp4" src={pages[i][1]} onClick={posterRemove} preload="metadata"/></React.Fragment>: ""}
        </ animated.div>

        {passedType === "instagram" ? <a key={`${i}_link`} target="_blank" href={passedType === "instagram" ? `${pages[i][3]}` : ""}>
        <p>{pages[i][0].substring(0, 100)}{ pages[i][0].length > 100 ? "... <View Post>" : "" }</p>
        </a>  : null }

      </animated.div>
  ))
  return (
    <ViewPagerContainer id="view-pager">
        {viewPagerItems}
    </ViewPagerContainer>
  )
}

