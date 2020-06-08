import React, { useEffect, useState } from 'react'
import { Link } from 'components/Router'
import ReactGA from 'react-ga'
import NavBar from '../containers/navigation/navbar'
import { useRouteData, Head } from 'react-static'
import ViewPager from '../containers/springs/ViewPagerServices'
import styled from 'styled-components'
// import Fade from 'react-reveal/Fade';
import Logo from '../components/logo'

//Styles

const PageContainer = styled.div`
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    display: flex;
    flex-flow: column nowrap;
    width: 100vw;
    height: ${ ({ height }) => {
        if (height > 500) {
            return `${height}px`
        } else {
            return "100vh"
        }
    }};
    .back-button {
        position: absolute;
        left: 1rem;
        bottom: 1rem;
        font-weight: 600;
        background-color: ${({ theme: { lightGrey } }) => lightGrey};
        box-shadow: 0 2px 14px rgba(0,0,0,.35);
        padding: .25rem .5rem;
        z-index: 1000;
    }
    /* height: ${ ({ height }) => height}px; */
    max-height: 100vh;
    h1, h3, a {color: ${({ theme: { darkGrey } }) => darkGrey}; }
    .full_page {
        display: none;
        width: 100%;
        height: ${ ({ height }) => height}px;
        border: 3px solid blue;
    }
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

const Services = (props) => {
    const pageImages = useRouteData()
    const [images, setImages] = useState(null)
    const [projects, setProjects] = useState(null)

    const handlePageChange = () => {
        window.location.href = "/pools"

    }

    // const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname)
        let imageArray = []
        if (pageImages[0][1]) {
            pageImages[0][1].forEach(each => {
                let image = {
                    title: each.shortTitle,
                    description: each.shortDescriptionOfImage,
                    image: `${each.full1920x1280.fields.file.url}?w=1920&q=40&fl=progressive`
                }
                imageArray.push(image)
            })
        }
        setImages(imageArray)

      
        let projectArray = []
        const params = new URLSearchParams(window.location.search);
        const images = pageImages[1][1][params.get('id')];
        if (images) {
            for (let i = 0; i < images.image.length; i++) {
                let image = {}
                if (i === 0) {
                    image.title = images.title
                    image.description = images.description
                    image.descriptionExtended = images.descriptionExtended
                    image.image = `${images.image[i].fields.file.url}?w=1920&q=40&fl=progressive`
                } else {
                    image.title = null
                    image.image = `${images.image[i].fields.file.url}?w=1920&q=40&fl=progressive`
                }
                projectArray.push(image)
            }
        }
        setProjects(projectArray)
    }, [])

    return (
        <PageContainer height={window.innerHeight}>
            <Head>
                {images ? images.map((each, i) => {
                    return <link key={`${i}_link`} rel="preload" as="image" href={each.image} />
                }) : null}
            </Head>
            <HeaderContainer id="header">
                <Link style={{ zIndex: '100' }} to="/"><Logo /></Link>
            </HeaderContainer>
            <NavBar services={handlePageChange} style={{ zIndex: "1000" }} />
            {projects ? <ViewPager id="view_pager" images={pageImages[0]} projects={projects} /> : null}
            <Link to="/pool-gallery" className="back-button">Go Back</Link>
        </PageContainer>
    )

}

export default Services