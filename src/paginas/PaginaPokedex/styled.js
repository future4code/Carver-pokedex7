import styled from "styled-components";
import { CardActions, Card, AppBar } from "@material-ui/core";

export const ContainerBotao = styled(CardActions)`
display: flex;
justify-content: center;

.detalhes{
  background-color: #EE6055;
}

.detalhes:hover{
  background-color: #FF9B85;
}

.pokedex{
  background-color: #60D394;
}

.pokedex:hover{
  background-color: #AAF683;
}
`

export const CartaoPokemon = styled(Card)`
margin: 15px;
border: 1px #FF9B85 solid;
p{
    text-align: center;
}
`

export const HeaderHome = styled(AppBar)`
color: #EE6055;

.botao-header{
  background-color: #FF9B85;
  color: white;
  margin-right: 35vw
}

.botao-header:hover{
  background-color: #FF9B85;
}
`
export const Container = styled.div`
display: flex;
flex-wrap: wrap;
span{
  font-size: 1.5em;
 
 
}
}
`