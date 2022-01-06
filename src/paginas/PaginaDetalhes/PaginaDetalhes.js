import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { goToHome, goToPokedex } from '../../routes/coordinatis';
import { fetchPokemon } from "../../request/request";
import {
  Container,
  HeaderContainer,
  Content,
  HeaderButton,
  HeaderTitle,
  FirstContainer,
  SecondContainer,
  ThirdContainer,
  ImageContainer,
  TypeContainer,
  MovesContainer,
  LeftStatusText,
  PokedexButton,
} from "./styled";

const PaginaDetalhes = ({ match }) => {

  const [pokemon, setPokemon] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const history= useHistory()

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
      <Container>
        <HeaderContainer>
          <HeaderButton onClick={()=>goToHome(history)}>
            Voltar
          </HeaderButton>
          <HeaderTitle>
            {pokemon.name.toUpperCase()}
          </HeaderTitle>
          <PokedexButton onClick={()=>goToPokedex(history)}>
            Ir para Pokedex
          </PokedexButton>
        </HeaderContainer>
        <Content>
          <FirstContainer>
            <ImageContainer>
              <div>
                <img alt="" src={pokemon.sprites.back_default} width="200" />
              </div>
            </ImageContainer>
            <ImageContainer>
              <div>
                <img alt="" src={pokemon.sprites.front_default} width="200" />
              </div>
            </ImageContainer>
          </FirstContainer>

          <SecondContainer>
            <p>Stats</p>
            <LeftStatusText>HP: {pokemon.stats[0].base_stat}</LeftStatusText>
            <LeftStatusText>attack: {pokemon.stats[1].base_stat}</LeftStatusText>
            <LeftStatusText>defense: {pokemon.stats[2].base_stat}</LeftStatusText>
            <LeftStatusText>special-attack: {pokemon.stats[3].base_stat}</LeftStatusText>
            <LeftStatusText>special-defense: {pokemon.stats[4].base_stat}</LeftStatusText>
            <LeftStatusText>speed: {pokemon.stats[5].base_stat}</LeftStatusText>
          </SecondContainer>

          <ThirdContainer>
            <TypeContainer>
              {pokemon.types.map((type) => <p key={type.type.name}>{type.type.name.toUpperCase()}</p>)}
            </TypeContainer>

            <MovesContainer>
              <p>Moves</p>
              <div>
              {pokemon.moves.map((move, index) => {
                if (index === 0) return <span key={move.move.name}>{move.move.name}</span>
                return <span key={move.move.name}> ; {move.move.name}</span>
              })}
              </div>
            </MovesContainer>
          </ThirdContainer>

        </Content>
      </Container>
    )
}

export default PaginaDetalhes