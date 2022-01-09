import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext/GlobalStateContext";
import { HeaderHome, CartaoPokemon, ContainerBotao, ContainerHome } from "./styled";
import { goToDetails, goToPokedex } from "../../routes/coordinatis";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../componentes/url/url";
import { Button, CardMedia, Typography, Toolbar } from "@material-ui/core";
import pokeball from "../../assets/pokeball.png"
import { InfoOutlined } from "@material-ui/icons";
import Loading from "../../componentes/Loading/Loading";

const PaginaHome = () => {

  const [pokemon, setPokemon] = useState([])
  const [pokeUrl, setPokeUrl] = useState([])
  const [pokedex, setPokedex] = useContext(GlobalContext)
  const [disable, setDisable] = useState(false)
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
    alert('Pokemon adicionado com sucesso!')
    setPokedex([...pokedex, pokeId]);
  };


  // mapeamento das imagens dos pokemons na tela principal
  const mapPokeImg = pokeUrl.map(e => {
    //mostrar a posição onde a string pokemon/ se encontra na url
    // console.log(e.indexOf("pokemon/"), "indexOf")

    //tirar as barras e só exibir o número do pokemon
    // console.log(e.substring(26 + 8, e.length - 1))

    //junção das duas numa só variável
    const indexPokemon = e.substring(e.indexOf("pokemon/") + 8, e.length - 1)

    return (
      <CartaoPokemon key={e}>
        <CardMedia
          component="img"
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${indexPokemon}.png`}
          alt="pokemons"
        />
        <ContainerBotao className="container-botao">
          <Button className="pokedex" variant="contained" size="small" color="primary" onClick={() => addPokedex(indexPokemon)} disabled={pokedex.includes(indexPokemon)}><img src={pokeball}/></Button>
          <Button className="detalhes" variant="contained" size="small" color="secondary" onClick={() => goToDetails(history, indexPokemon)}><InfoOutlined /></Button>
        </ContainerBotao>
      </CartaoPokemon>
    )
  })

  return (
    <>
      <HeaderHome position="static" style={{ background: "#EE6055" }}>
        <Toolbar>
          <Button
            className="botao-header"
            variant="contained"
            onClick={() => goToPokedex(history)}>
            Pokédex
          </Button>
          <Typography variant="h5" className="">
            Pokémons
          </Typography>
        </Toolbar>
      </HeaderHome>
      <ContainerHome>
      {pokeUrl.length > 0 ? <>{mapPokeImg}</> : <Loading/>}
      </ContainerHome>
    </>
  )
}

export default PaginaHome


