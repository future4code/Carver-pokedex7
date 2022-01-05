import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../routes/coordinatis';
import { Header, Container, Card } from './styled';
import { goToDetails } from '../../routes/coordinatis';
import { GlobalContext } from '../../contexts/GlobalContext/GlobalStateContext';

export function Pokedex() {
    const history = useHistory()
    const [carriinho, setCarrinho] = useContext(GlobalContext)
    console.log(carriinho)
   

    
     const removerPokemon = (pokeId) =>{
        let remove = carriinho.filter((poke)=>{
            return pokeId !== poke.id         
        })
        setCarrinho (remove)
     }
     

    const mapPokemons = carriinho.map((poke) => {
        return(
            <Card key={poke.id}>
           <p> <img alt="pokemon" src={poke.foto} /></p>
           <div>
                <button onClick={() => removerPokemon(poke.id)}>Remover</button>
                <button onClick={() => goToDetails(history, poke.id)}>Ver Detalhes</button>
            </div>
        </Card>
                       
        )
    })
    console.log("map", mapPokemons)


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