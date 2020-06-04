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
h1 { color: ${({ theme: {darkGrey} }) => darkGrey }}; 
color: ${({ theme: {darkGrey} }) => darkGrey };
text-align: center;
h2 { padding: ${({ theme: {headerPadding} }) => headerPadding }}
p, h2 { 
    text-align: left;
    color: ${({ theme: {darkGrey} }) => darkGrey };
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
    a { 
        display: block;
    }
}
@media( min-width: 875px ) {
    h1 { text-align: left }
}
@media( min-width: 950px ) {
    width: 65%;
}
@media( min-width: 1295px ) {
    h1 { text-align: center; }
    width: 95%;
}
`
export default (props) => (
    <TextContainer id={props.id}>
        {props.children}
    </TextContainer>
)