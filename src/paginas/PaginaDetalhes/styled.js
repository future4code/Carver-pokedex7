import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    flex-direction: column;
`

export const HeaderContainer = styled.header`
    display: flex;
    border: 2px solid;
    background-color:  #EE6055;
    max-width: 100vw;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    margin: 5px;
    border-color: #EE6055;
`

export const HeaderButton = styled.button`
    padding: 10px;
    background: ${props => props.primary ? "white":"#FF9B85"};
    color: ${props => props.primary ? "#FF9B85": "white"};
    border-color:#FF9B85;
    border-radius:5px;
`

export const PokedexButton= styled.button`
    padding: :10px;

`

export const HeaderTitle = styled.p`
`

export const LeftStatusText = styled.p`
align-self: flex-start;
margin-left: 20px;
`

export const Content = styled.div`
display: flex;
flex:10;
align-content: space-around;
justify-content: space-evenly;
`

export const FirstContainer = styled.div`
display: flex;
flex:0.5;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin: 20px;
border-color: #FF9B85;
`
export const FrontImageContainer = styled.div`
display: flex;
border: 2px solid;
border-color: #FF9B85;
margin: 30px;
align-items: center;
flex:1;
border-radius:10px;
`
export const BackImageContainer = styled.div`
display: flex;
border: 2px solid;
border-color: #FF9B85;
align-items: center;
flex:1;
border-radius:10px;
`

export const SecondContainer = styled.div`
border: 2px solid;
display: flex;
flex: 0.5;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px;
border-color: #FF9B85;
font-size:30px;
border-radius:10px;
`

export const ThirdContainer = styled.div`
display: flex;
flex-direction: column;
flex: 1;
`

export const TypeContainer = styled.div`
border: 2px solid;
display: flex;
flex: 0.5;
margin: 20px;
justify-content: space-around;
border-color: #FF9B85;
font-size:25px;
border-radius:10px;
`
export const MovesContainer = styled.div`
border:2px solid;
margin: 20px;
display: flex;
flex: 5;
flex-direction: column;
justify-content: center;
align-items: center;
border-color: #FF9B85;
font-size:30px;
border-radius:10px;
`
