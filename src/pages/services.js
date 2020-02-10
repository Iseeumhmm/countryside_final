import React, {useEffect, useState} from 'react'
import { Link } from 'components/Router'
import NavBar from '../containers/navigation/navbar'
import { useRouteData, Head } from 'react-static'
import ViewPager from '../containers/springs/ViewPagerServices'
import styled from 'styled-components'
// import Fade from 'react-reveal/Fade';
const logo = require('../images/logos/LargeLogo.png')

//Styles

const PageContainer = styled.div`
    position: relative;
    overflow-x: hidden;
    display: flex;
    flex-flow: column nowrap;
    width: 100vw;
    height: ${ ({ height }) => height}px;
    max-height: 100vh;
    h1 {color: ${({theme: {darkGrey}}) => darkGrey}; }
    h3 {
        color: ${({theme: {darkGrey}}) => darkGrey};
    }
    .full_page {
        display: none;
        width: 100%;
        height: ${ ({ height }) => height}px;
        border: 3px solid blue;
    }
`
const Logo = styled.div`
    position: absolute;
    left: 50%;
    top: 2rem;
    transform: translateX(-50%);
    width: 25rem;
    height: 9rem;
    background-image: url(${logo});
    background-size: cover;
    background-position: center center;
    z-index: 100;
`
const HeaderContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 13rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`

const Services = () => {
    const pageImages = useRouteData()
    const [images, setImages] = useState(null)
    const [projects, setProjects] = useState(null)

    // const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        let imageArray = []
        if (pageImages[0][1]) { pageImages[0][1].forEach( each => {
            let image = {
                title: each.shortTitle,
                description: each.shortDescriptionOfImage,
                image: `${each.full1920x1280.fields.file.url}?w=1920&q=40&fl=progressive`
            }
            imageArray.push(image)
        })}
        setImages(imageArray)

        let projectArray = []
        if (pageImages[1][1]) { pageImages[1][1].forEach( each => {
            for ( let i = 0; i < each.image.length; i++ ) {
                let image = {}
                if ( i === 0 ) {
                    image.title = each.title
                    image.description = each.description
                    image.descriptionExtended = each.descriptionExtended
                    image.image = `${each.image[i].fields.file.url}?w=1920&q=40&fl=progressive`
                } else {
                    image.title = null
                    image.image = `${each.image[i].fields.file.url}?w=1920&q=40&fl=progressive`
                }
                projectArray.push(image)
            }
        })}
        setProjects(projectArray)
    }, [])
    // const imageLoaded = () => {
    //     setLoaded(true)
    // }

    return (
        <PageContainer height={window.innerHeight}>
            <Head>
                {images ? images.map( (each, i) => {
                    return <link key={`${i}_link`} rel="preload" as="image" href={each.image}/>
                }) : null}
            </Head>
            <HeaderContainer id="header">
                <Link to="/"><Logo /></Link>
            </HeaderContainer>
            <NavBar style={{zIndex: "1000"}}/>
            { projects ? <ViewPager id="view_pager" images={pageImages[0]} projects={projects}/> : null}
        </PageContainer>
    )

}

export default Services