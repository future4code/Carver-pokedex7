import React, { useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../url/url";
import { Header, BotaoHome, TextoHeader, CartaoPokemon, ContainerHome } from "./styled";


const PaginaHome = () => {

  const [pokemon, isLoading] = useRequestData({}, `${BASE_URL}/pokemon?limit=30&offset=200`)
  const [url, setUrl] = useState([])
 
  const lista = pokemon.results

  let novaLista = []

  lista && lista.forEach(e => {
    novaLista.push(e.name)
  });

  console.log(novaLista, "isso é nova lista")

  const mapNovaLista = novaLista.map((nome) =>{
    return(
      <div>
        {nome}
      </div>
    )
  })

  console.log(pokemon, "isso é pokemon")

  // const mapPoke = pokemon.map((poke) =>{
  //   return(
  //     <div>

  //     </div>
  //   )
  // })




  return (
    <div>
      {mapNovaLista}
      <Header>
        <button>
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

