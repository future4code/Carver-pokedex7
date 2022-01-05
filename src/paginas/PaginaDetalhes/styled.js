import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    flex-direction: column
`

export const HeaderContainer = styled.header`
    display: flex;
    border: 2px black solid;
    max-width: 100vw;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    margin: 5px;
`

export const HeaderButton = styled.button`
    padding: 10px;
    border: 1px, black;
`

export const PokedexButton= styled.button`
    padding: :10px;
`

export const HeaderTitle = styled.p`

`

export const LeftStatusText = styled.p`
align-self: flex-start;
margin-left: 10px;
`

export const Content = styled.div`
display: flex;
flex: 10;
align-content: space-around;
justify-content: space-evenly;

`

export const FirstContainer = styled.div`
display: flex;
flex: 1;
flex-direction: column;
align-items: center;
justify-content: space-around;
border: 2px solid gray;
margin: 20px;
`

export const ImageContainer = styled.div`

`

export const SecondContainer = styled.div`
border: 2px solid gray;
display: flex;
flex: 1;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px;
`

export const ThirdContainer = styled.div`
display: flex;
flex-direction: column;
flex: 1;
`

export const TypeContainer = styled.div`
border: 2px solid gray;
display: flex;
flex: 1;
margin: 20px;
justify-content: space-around;
`
export const MovesContainer = styled.div`
border: 2px solid gray;
margin: 20px;
display: flex;
flex: 10;
flex-direction: column;
justify-content: center;
align-items: center;
`
