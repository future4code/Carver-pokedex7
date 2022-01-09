import React, { useContext, useEffect, useState } from 'react';
import { AppBar, Typography, Button, Toolbar } from '@material-ui/core'
import { goToHome } from '../../routes/coordinatis';
import { useHistory } from 'react-router-dom';
import { HeaderPaginaDetalhes } from './styled';
import { GlobalContext } from '../../contexts/GlobalContext/GlobalStateContext';


export default function HeaderDetalhes(props) {
  const [pokedex, setPokedex] = useContext(GlobalContext)
  const history = useHistory()
  const [mudaHeader, setMudaHeader] = useState()

  useEffect(() => {

  }, [mudaHeader])

  const mudaBotao = pokedex.find(e => e === props.pokemon.id.toString())

  const adicionarERemoverPokemon = () => { 
    if (!mudaBotao && pokedex !== props.pokemon.id){
      pokedex.push(props.pokemon.id.toString())
      setMudaHeader(1)
    } else {
      pokedex.splice(pokedex.indexOf(props.pokemon.id.toString()), 1)
      setMudaHeader(-1)
    }
  }

  return (
    <HeaderPaginaDetalhes position="static" style={{ background: "#EE6055" }}>
      <AppBar position="static">
        <Toolbar className="display-botoes">
          <Button className="botao-header"
            variant="contained"
            onClick={() => goToHome(history)}>
            Voltar
          </Button>
          <Typography variant="h5">
            {props.pokemon.name.toUpperCase()}
          </Typography>

          {mudaBotao ?
            
            <Button
              variant="contained"
              className="botao-header"
              onClick={() => adicionarERemoverPokemon()}
            >
              Remover da Pokédex
            </Button>
            :
            <Button
              variant="contained"
              className="botao-header"
              onClick={() => adicionarERemoverPokemon()}
              >
              Adicionar a Pokédex
            </Button>}
        </Toolbar>
      </AppBar>
    </HeaderPaginaDetalhes>
  );
}