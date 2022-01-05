import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../url/url";
import { Header, CartaoPokemon, ContainerHome } from "./styled";


const PaginaHome = () => {

  const [pokemon, setPokemon] = useState([])
  const [pokeUrl, setPokeUrl] = useState([])
  const [imagem, setImagem] = useState([])

  // pegar os pokemons na api e setar o nome e a url nos estados
  useEffect(() => {
    axios.get(`${BASE_URL}/pokemon`)
      .then((res) => {
        // setPokemon(res.data.results)
        // console.log(res, "primeira resposta")
        setPokemon(res.data.results.map(poke => poke.name))
        setPokeUrl(res.data.results.map(poke => poke.url))
      })
  }, [])

  //tentativa de transformar o objeto url em template
  const indexUrl = pokeUrl.toString().split('/')[pokeUrl.toString().split('/').length - 2]
  const imagemUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png`

  // console.log(typeof pokeUrl)
  // console.log(indexUrl, "index")
  // console.log(imagemUrl, "imagem")

  //map das urls

  const indexMap = pokeUrl.map((url) => {
    return (
      <CartaoPokemon>
        {url}
      </CartaoPokemon>
    )
  })

  //loop com a url das imagens, mas não consigo exportar a informação pra usar depois

  pokemon.map(element => {
    const nomes = element
    axios.get(`${BASE_URL}/pokemon/${nomes}`)
      .then((res) => {
        console.log(res.data.sprites.front_default, "o que eu quero")
        // setImagem(res.data.sprites.front_default)
      })
  })

  return (
    <div>
      <Header>
        <button>
          Ver minha POKEDEX
        </button>
        <p>
          LISTA DE POKEMONS
        </p>
      </Header>
      <img src={imagemUrl} />
      {indexMap}
      <ContainerHome>
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


