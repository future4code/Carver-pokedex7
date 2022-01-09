import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../../request/request";
import { useHistory } from "react-router-dom";
import {
  CartaoPokemonDetalhes,
  CartaoPokemonStatus,
  CartaoPokemonTipo,
} from "./styled";
import { Typography, CardMedia } from "@material-ui/core";
import { ContainerHome } from "../PaginaHome/styled";
import HeaderDetalhes from "./HeaderDetalhes";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Loading from "../../componentes/Loading/Loading";

const PaginaDetalhes = ({ match }) => {

  const [pokemon, setPokemon] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = React.useState(false);
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    fetchPokemon(match.params.id).then((response) => {
      setPokemon(response)
      setLoading(false);
    })
  }, [match.params.id])

  if (loading) {
    return <Loading />
  } else
    return (
      <>
        <HeaderDetalhes pokemon={pokemon} />
        <ContainerHome>
          <CartaoPokemonDetalhes>
            <CardMedia
              component="img"
              image={pokemon.sprites.front_default}
              alt="pokemons"
            />
            <CardMedia
              component="img"
              image={pokemon.sprites.back_default}
              alt="pokemons"
            />
          </CartaoPokemonDetalhes>
          <div>
            <CartaoPokemonStatus className="texto">
              <Typography variant="h6">
                Status
              </Typography>
              <Typography variant="body2" >
                <p>HP: {pokemon.stats[0].base_stat}</p>
                <p>Ataque: {pokemon.stats[1].base_stat}</p>
                <p>Defesa: {pokemon.stats[2].base_stat}</p>
                <p>Ataque Especial: {pokemon.stats[3].base_stat}</p>
                <p>Defesa Especial: {pokemon.stats[4].base_stat}</p>
                <p>Velocidade: {pokemon.stats[5].base_stat}</p>
              </Typography>
            </CartaoPokemonStatus>
            <CartaoPokemonTipo>
              <Typography variant="h6">
                Tipo
              </Typography>
              {pokemon.types.map((type) => <Typography key={type.type.name}>{type.type.name}</Typography>)}
            </CartaoPokemonTipo>
          </div>
        </ContainerHome>
        <CartaoPokemonDetalhes>
          <CardActions className="menu">
            <Typography>
              Lista de Habilidades
            </Typography>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>
                {pokemon.moves.map((move, index) => {
                  if (index === 0) return <div key={move.move.name}>{move.move.name}</div>
                  return <div key={move.move.name}>{move.move.name}</div>
                })}
              </Typography>
            </CardContent>
          </Collapse>
        </CartaoPokemonDetalhes>
      </>
    )
};
export default PaginaDetalhes