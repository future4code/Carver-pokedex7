import React from 'react';
import { AppBar, Typography, Button, Toolbar } from '@material-ui/core'
import { goToHome } from '../../routes/coordinatis';
import { useHistory } from 'react-router-dom';
import { HeaderHome } from './styled';

export default function HeaderPokedex() {
  const history = useHistory()

  return (
    <HeaderHome position="static" style={{ background: "#EE6055" }}>
      <AppBar position="static">
        <Toolbar>
          <Button className="botao-header"
            variant="contained"
            color="neutral"
            onClick={() => goToHome(history)}>
            Lista de pokemons
          </Button>
          <Typography variant="h5">
            Pokédex
          </Typography>
        </Toolbar>
      </AppBar>
    </HeaderHome>
  );
}