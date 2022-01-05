import React from "react";
import { Header, BotaoHome, TextoHeader, CartaoPokemon, ContainerHome } from "./styled";
import { useHistory } from "react-router-dom";
import { goToPokedex } from "../../routes/coordinatis";

const PaginaHome = () => {

  const history = useHistory()

  return (
    <div>
      <Header>
        <button onClick ={()=> goToPokedex(history)}>
          Ver minha POKEDEX
        </button>
        <p>
          LISTA DE POKEMONS 
        </p>
      </Header>
      <ContainerHome>
        <CartaoPokemon>
          <button>
            Adicionar a Pokedéx
          </button>
          <button>
            Ver detalhes
          </button>
        </CartaoPokemon>
        <CartaoPokemon>
          <button>
            Adicionar a Pokedéx
          </button>
          <button>
            Ver detalhes
          </button>
        </CartaoPokemon>
        <CartaoPokemon>
          <button>
            Adicionar a Pokedéx
          </button>
          <button>
            Ver detalhes
          </button>
        </CartaoPokemon>
        <CartaoPokemon>
          <button>
            Adicionar a Pokedéx
          </button>
          <button>
            Ver detalhes
          </button>
        </CartaoPokemon>
        <CartaoPokemon>
          <button>
            Adicionar a Pokedéx
          </button>
          <button>
            Ver detalhes
          </button>
        </CartaoPokemon>
        <CartaoPokemon>
          <button>
            Adicionar a Pokedéx
          </button>
          <button>
            Ver detalhes
          </button>
        </CartaoPokemon>
        <CartaoPokemon>
          <button>
            Adicionar a Pokedéx
          </button>
          <button>
            Ver detalhes
          </button>
        </CartaoPokemon>
        <CartaoPokemon>
          <button>
            Adicionar a Pokedéx
          </button>
          <button>
            Ver detalhes
          </button>
        </CartaoPokemon>
      </ContainerHome>
    </div>
  )
}


export default PaginaHome

