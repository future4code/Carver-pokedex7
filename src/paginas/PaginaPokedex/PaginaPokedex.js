import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../routes/coordinatis';
import { Header, Container } from './styled';
import CardPokemon from '../../componentes/CardPokedex/CardPokemon';
import { ContextState } from '../../context';

export function Pokedex() {
    const history = useHistory()
    const carriinho = useContext(ContextState)
    console.log(carriinho)

    const mapPokemons = carriinho.map((poke)=> {
        <CardPokemon
        // id={}
        // img={}
        />
    })

    // const removerPokemon = 

    const carro = [<CardPokemon />, <CardPokemon />, <CardPokemon />, <CardPokemon />, <CardPokemon />]
    return (
        <div>
            <Header >
                <button onClick={() => goToHome(history)}>Voltar para a lista de pokemons</button>
                <h1>Pokedex</h1>
            </Header >
            <Container>
                {/* <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon /> */}
                {carro}
        </Container>

        </div>
    )
}