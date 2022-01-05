import React from "react";
import { goToDetails } from "../../routes/coordinatis";
import { useHistory } from "react-router-dom";
import { Card } from "./styled";

const CardPokemon = () => {
    const history = useHistory()
    return (
        <Card>
            <img alt={"pokemon"} src={"https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png"} />
            <div>
                <button>Remover</button>
                <button onClick={() => goToDetails(history)}>Ver Detalhes</button>
            </div>

        </Card>
    )
}

export default CardPokemon