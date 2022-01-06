import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../routes/coordinatis';
import { Header, Container, Card } from './styled';
import { goToDetails } from '../../routes/coordinatis';
import { GlobalContext } from '../../contexts/GlobalContext/GlobalStateContext';

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
            <Card key={index}>
                <p>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke}.png`} />
                </p>
                <div>
                    <button onClick={() => removerPokemon(poke)}>Remover</button>
                    <button onClick={() => goToDetails(history, poke)}>Ver Detalhes</button>
                </div>
            </Card>
        )
    })

    return (
        <div>
            <Header >
                <button onClick={() => goToHome(history)}>Voltar para a lista de pokemons</button>
                <h1>Pokedex</h1>
            </Header >
            <Container>
                {mapPokemons}
            </Container>
        </div>
    )
}