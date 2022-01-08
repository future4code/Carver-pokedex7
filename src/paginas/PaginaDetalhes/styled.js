import styled from "styled-components"
import { AppBar, Card } from "@material-ui/core"

export const HeaderPaginaDetalhes = styled(AppBar)`

.display-botoes{
  display: flex;
  justify-content: space-between;

}

.botao-header{
  background-color: #FF9B85;
  color: white;
}
`

export const HeaderContainer = styled(AppBar)`

.toolbar{
    justify-content: space-between;
}

.botao-header-detalhes{
  background-color: #FF9B85;
  color: white;
}

.botao-header-detalhes:hover{
  background-color: #FF9B85;
}
`

export const ContainerHome = styled.div`
display: flex;
flex-direction: column;
align-content: flex-start;

`

export const ContainerDetalhes = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

`

export const CartaoPokemonDetalhes = styled(Card)`
margin: 15px;
border: 1px #FF9B85 solid;

img{
    height: 200px;
    width: 200px;
}
`

export const CartaoPokemonStatus = styled(Card)`
margin: 15px;
border: 1px #FF9B85 solid;
height: 300px;
width: 200px;


p{
  padding: 3px
}
h6{
  text-align: center;
}
`
export const CartaoPokemonTipo = styled(Card)`
margin: 15px;
border: 1px #FF9B85 solid;
height: 10vh;
width: 150px;
padding: 3px;

h6{
  text-align: center;
}
`
