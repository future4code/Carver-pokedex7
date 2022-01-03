import React from "react";
import styled from "styled-components";
import { HeaderDetalhes, ContainerDetalhes, CartaoPoderes, CartaoAtaques } from "./styled";

const PaginaDetalhes = () => {
  return (
    <div>
      <HeaderDetalhes>
        <button>
          Voltar
        </button>
        <button>
          Ir para Pokedex
        </button>
      </HeaderDetalhes>
      <ContainerDetalhes>
        <div>
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" width="200" />
        </div>
        <CartaoPoderes>
          poderes
        </CartaoPoderes>
        <CartaoAtaques>
          ataques
        </CartaoAtaques>
      </ContainerDetalhes>
    </div>
  )
}

export default PaginaDetalhes