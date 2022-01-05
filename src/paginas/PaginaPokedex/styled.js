import styled from "styled-components";

export const Header = styled.header`
border: 1px solid black;
display: flex;
align-items: center;
height: 8vh;
button{
    height: 4vh;
    margin-left: 2vw;
}
h1{
    margin-left: 25vw;
}
`

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
`

export const Card = styled.div`
border: 1px solid black;
width: 15vw;
height: 30vh;
text-align: center;
margin: 10px;
p{
    img{
    width: 15vw;
    height: 20vh;
}
}
button{
    margin-right: 0.2vw;
}
`