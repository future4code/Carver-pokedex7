import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { goToDetails } from '../../routes/coordinatis';
import { GlobalContext } from '../../contexts/GlobalContext/GlobalStateContext';
import HeaderPokedex from './HeaderPokedex';
import { CartaoPokemon, ContainerBotao, Container, ContainerVazio } from "./styled";
import { Button } from "@material-ui/core";
import { DeleteOutlined, InfoOutlined } from '@material-ui/icons'
import Loading from '../../componentes/Loading/Loading';

export function Pokedex() {
    const history = useHistory()
    const [pokedex, setPokedex] = useContext(GlobalContext)

    const removerPokemon = (pokeId) => {
        let remove = pokedex.filter((poke) => {
            return pokeId !== poke
        })
        setPokedex(remove)
    }

    const mapPokemons = pokedex.map((poke, index) => {
        return (
            <CartaoPokemon key={index}>
                <p>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke}.png`} />
                </p>
                <ContainerBotao className="container-botao">
                    <Button className="pokedex" variant="contained" size="small" color="primary" onClick={() => removerPokemon(poke)}><DeleteOutlined /></Button>
                    <Button className="detalhes" variant="contained" size="small" color="secondary" onClick={() => goToDetails(history, poke)}><InfoOutlined /></Button>
                </ContainerBotao>
            </CartaoPokemon>
        )
    })

    return (
        <div>
            <HeaderPokedex />
            {pokedex.length > 0 ? <Container> {mapPokemons} </Container> : <ContainerVazio>Você ainda não possui nehum Pokémon adicionado a sua Pokédex 🙁</ContainerVazio>}
        </div>
    )
}