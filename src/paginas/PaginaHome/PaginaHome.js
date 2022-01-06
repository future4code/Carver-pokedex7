import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext/GlobalStateContext";
import { Header, CartaoPokemon, ContainerHome } from "./styled";
import { goToDetails, goToPokedex } from "../../routes/coordinatis";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../componentes/url/url";

const PaginaHome = () => {

  const [pokemon, setPokemon] = useState([])
  const [pokeUrl, setPokeUrl] = useState([])
  const [pokedex, setPokedex] = useContext(GlobalContext)
  const history = useHistory()

  // pegar os pokemons na api e setar o nome e a url nos estados
  useEffect(() => {
    axios.get(`${BASE_URL}pokemon`)
      .then((res) => {
        setPokemon(res.data.results.map(poke => poke.name))
        setPokeUrl(res.data.results.map(poke => poke.url))
      })
  }, [])

  const addPokedex = (pokeId) => {
    let verificaExistencia;
    for (let i = 0; i < pokedex.length; i++) {
      if (pokedex[i] === pokeId) {
        verificaExistencia = true;
      }
    }
    if (verificaExistencia) { alert("Esse pokemon já está na pokedex.") }
    else {
      let novaPokedex = [...pokedex]
      let pokeSelecionado = [...novaPokedex, pokeId]

      setPokedex(pokeSelecionado)
    }
  }

  // mapeamento das imagens dos pokemons na tela principal
  const mapPokeImg = pokeUrl.map(e => {
    //mostrar a posição onde a string pokemon/ se encontra na url
    // console.log(e.indexOf("pokemon/"), "indexOf")

    //tirar as barras e só exibir o número do pokemon
    // console.log(e.substring(26 + 8, e.length - 1))

    //junção das duas numa só variável
    const indexPokemon = e.substring(e.indexOf("pokemon/") + 8, e.length - 1)

    return (
      <CartaoPokemon key={indexPokemon}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${indexPokemon}.png`} />
        <div>
          <button onClick={() => addPokedex(indexPokemon)}>Adicionar</button>
          <button onClick={() => goToDetails(history, indexPokemon)}>ver detalhes</button>
        </div>
      </CartaoPokemon>
    )
  })

  return (
    <div>
      <Header>
        <button onClick={() => goToPokedex(history)}>
          Ver minha POKEDEX
        </button>
        <p>
          LISTA DE POKEMONS
        </p>
      </Header>
      <ContainerHome>
        {mapPokeImg}
      </ContainerHome>
    </div>
  )
}

export default PaginaHome

