import React, { useContext, useState, useEffect  } from 'react';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../routes/coordinatis';
import { Header, Container, Card } from './styled';
import { goToDetails } from '../../routes/coordinatis';
import { GlobalContext } from '../../contexts/GlobalContext/GlobalStateContext';
import axios from 'axios';
import { BASE_URL } from '../../url/url';

export function Pokedex() {
    const history = useHistory()
    const [carrinho, setCarrinho] = useContext(GlobalContext)
    const [estado, setEstado] = useState([])
    console.log("carrinho", carrinho)
   

    
     const removerPokemon = (pokeId) =>{
        let remove = carrinho.filter((poke)=>{
            return pokeId !== poke.id         
        })
        console.log("removeu")
        setCarrinho (remove)
     }
     
     
    const mapPokemons = carrinho.map((poke, index) => {
        return(
            <Card key={index}>
           <p> 
               {/* <img alt="pokemon" src={poke.foto} /> */}
               <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke}.png`} />
           </p>
           <div>
                <button onClick={() => removerPokemon(poke)}>Remover</button>
                <button onClick={() => goToDetails(history, poke)}>Ver Detalhes</button>
            </div>
        </Card>
                       
        )
    })

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${mapPokemons}`)
          .then((res) => {
            setEstado(res.data)
            
          })
      }, [])


    console.log("map", mapPokemons)
    console.log("estado", estado)

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