import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../routes/coordinatis';
import { Header, Container, Card } from './styled';
 import CardPokemon from '../../componentes/CardPokedex/CardPokemon';
import { ContextState } from '../../context';
import { goToDetails } from '../../routes/coordinatis';

export function Pokedex() {
    const history = useHistory()
    const [carriinho, setCarrinho] = useContext(ContextState)
    console.log(carriinho)
    console.log("item", carriinho[0].id)

    
     const removerPokemon = (pokeId) =>{
        let remove = carriinho.filter((poke)=>{
            return pokeId !== poke.id
            
        })
        
        // console.log("clicou", pokeId)
        setCarrinho (remove)
     }
     

    const mapPokemons = carriinho.map((poke) => {
        return(
            <Card key={poke.id}>
           <p> <img alt="pokemon" src={poke.foto} /></p>
           <div>
                <button onClick={() => removerPokemon(poke.id)}>Remover</button>
                <button onClick={() => goToDetails(history)}>Ver Detalhes</button>
            </div>
        </Card>
            // <CardPokemon
            // imagem={poke.foto}
            // id={poke.id}
            // remover={removerPokemon}
            // />
            
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