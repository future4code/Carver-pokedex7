import { CardActions, Card, AppBar } from "@material-ui/core";
import styled from "styled-components";

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

export const ContainerHome = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`

export const CartaoPokemon = styled(Card)`
margin: 15px;
border: 1px #FF9B85 solid;
`

export const HeaderHome = styled(AppBar)`
.botao-header{
  background-color: #FF9B85;
  color: white;
  margin-right: 40vw
}

.botao-header:hover{
  background-color: #FF9B85;
}
`