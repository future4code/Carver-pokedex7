import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../../request/request";
import { goToPokedex, goToReturn } from "../../routes/coordinatis";
import { useHistory } from "react-router-dom";
import Loading from "../../componentes/Loading/Loading";
import {
  Container,
  HeaderContainer,
  Content,
  HeaderButton,
  HeaderTitle,
  FirstContainer,
  SecondContainer,
  ThirdContainer,
  FrontImageContainer,
  BackImageContainer,
  TypeContainer,
  MovesContainer,
  LeftStatusText,
} from "./styled";

const PaginaDetalhes = ({ match }) => {


  const [pokemon, setPokemon] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    fetchPokemon(match.params.id).then((response) => {
      setPokemon(response)
      setLoading(false);
    })
  }, [match.params.id])

  if (loading) {
    return <Loading/>
  } else

    return (
      <Container>
        <HeaderContainer>
          <HeaderButton primay onClick={() => goToReturn(history)}>
            Voltar
          </HeaderButton>
          <HeaderTitle>
            <b>
            {pokemon.name.toUpperCase()}
            </b>
          </HeaderTitle>
          <HeaderButton onClick={()=>goToPokedex(history)}>
           Pokedex
          </HeaderButton>
        </HeaderContainer>
        <Content>
          <FirstContainer>
          <FrontImageContainer>
              <div>
                <img alt="" src={pokemon.sprites.front_default} width="200" />
              </div>
            </FrontImageContainer>
            <BackImageContainer>
              <div>
                <img alt="" src={pokemon.sprites.back_default} width="200" />
              </div>
            </BackImageContainer>
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
};
export default PaginaDetalhes