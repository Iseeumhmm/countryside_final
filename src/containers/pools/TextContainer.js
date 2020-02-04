import React from 'react'
import styled, {keyframes} from 'styled-components'

const swipeGesture = keyframes`
0%      { transform: translateX(50px) }
50%     { transform: translateX(-50px) }
100%    { transform: translateX(50px) }
`
const TextContainer = styled.div`
border-radius: 2rem;
margin: auto;
position: relative;
h1 { color: ${({ theme: {lightGrey} }) => lightGrey }}; 
color: ${({ theme: {lightGrey} }) => lightGrey };
text-align: center;
h2 { padding: ${({ theme: {headerPadding} }) => headerPadding }}
p, h2 { 
    text-align: left;
    color: ${({ theme: {lightGrey} }) => lightGrey };
}
img { 
    width: 5rem;
    animation: ${swipeGesture} 2s ease-in-out infinite;
}
li {
    font-family: 'Roboto',sans-serif;
    text-align: left;
}

&#one { 
    padding-top: 76vw; 
    a { 
        display: block;
        margin: 5.2rem 0; 
    }
}
@media( min-width: 675px ) {
    &#one { padding-top: 62vw; }
    width: 48rem;
}
@media( min-width: 875px ) {
    h1 { text-align: left }
    width: 60rem;
}
@media( min-width: 950px ) {
    &#one {
        padding-top: 48vw;
    }
    width: 65%;
}
@media( min-width: 1295px ) {
    padding: 0 1rem;
    height: 20rem;
    
    background-color: rgba(0,0,0,.05);
    h1 { text-align: center; }
    h2 {
        padding: 0;
    }
    margin-top: 0;
    width: 95%;
    &#one { 
        padding-top: 0;
        grid-column: 1/6; 
        grid-row: 1;
        background-color: unset;
        a { margin: 0; }
    }
    &#two { 
        height: 40.75rem;
        grid-column: 4/6;
        grid-row: 2/4;
        p { padding-bottom: 0; }
        img { 
            position: relative; 
        }
    }
    &#three { 
        height: 40rem;
        grid-column: 1/3;
        grid-row: 4/6;
    }
    &#four { 
        grid-column: 1/4;
        grid-row: 2;
    }
    &#five { 
        grid-column: 1/4;
        grid-row: 3;
    }
    &#six { 
        height: 40rem;
        grid-column: 3/6;
        grid-row: 4/6;
    }
    &#seven { 
        grid-column: 1/6;
        grid-row: 8;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 75.5vw;
        @media(min-width: 2300px ){
            width: 98%;
        }
    }
}
`
export default (props) => (
    <TextContainer id={props.id}>
        {props.children}
    </TextContainer>
)