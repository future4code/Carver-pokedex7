import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../../request/request";
import { useHistory } from "react-router-dom";
import {
  CartaoPokemonDetalhes,
  CartaoPokemonStatus,
  CartaoPokemonTipo,
  ContainerDetalhes
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
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    avatar: {
      backgroundColor: red[500],
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
    return <h1>Carregando...</h1>
  } else
    return (
      <>
        <HeaderDetalhes pokemon={pokemon} />
        <ContainerHome className="teste">
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
          </ContainerHome>
          <ContainerDetalhes className="detalhes">
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
        </ContainerDetalhes>
        <CartaoPokemonDetalhes>
        <CardActions disableSpacing>
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
              <Typography paragraph>
                {pokemon.moves.map((move, index) => {
                  if (index === 0) return <Typography key={move.move.name}>{move.move.name}</Typography>
                  return <Typography key={move.move.name}>{move.move.name}</Typography>
                })}
              </Typography>
            </CardContent>
          </Collapse>
        </CartaoPokemonDetalhes>
      </>
    )
};
export default PaginaDetalhes