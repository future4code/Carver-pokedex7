import React from "react";
import { goToDetails } from "../../routes/coordinatis";
import { useHistory } from "react-router-dom";
import { Card } from "./styled";

const CardPokemon = (props) => {
    const history = useHistory()
    return (
        <Card>
            <img alt={"pokemon"} src={props.imagem} />
            <div>
                <button onClick={props.remover}>Remover</button>
                <button onClick={() => goToDetails(history, props.id)}>Ver Detalhes</button>
            </div>
        </Card>
    )
}

export default CardPokemon