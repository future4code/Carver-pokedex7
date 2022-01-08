import React from 'react';
import { AppBar, Typography, Button, Toolbar } from '@material-ui/core'
import { goToHome, goToPokedex } from '../../routes/coordinatis';
import { useHistory } from 'react-router-dom';
import { HeaderPaginaDetalhes } from './styled';

export default function HeaderDetalhes(props) {
  const history = useHistory()

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
          <Button
            variant="contained"
            className="botao-header"
            onClick={() => goToPokedex(history)}>
            Pokédex
          </Button>
        </Toolbar>
      </AppBar>
    </HeaderPaginaDetalhes>
  );
}