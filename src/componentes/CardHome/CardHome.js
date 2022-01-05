import React, { useState, useEffect } from "react";
import { Card } from "./styled";
import { getPokemons } from "../../request/request";


export default function CardHome ({poke})  {
    console.log("pokeeeeeeeee", poke)
    const [pokeImagem, setPokeImagem] = useState('')

    useEffect(()=>{
        const request = getPokemons(poke.url)
        request.then((res)=>{
            setPokeImagem(res)
        })
    },[pokeImagem])

    return(
        <Card>
        <img alt={"pokemon"} src={pokeImagem.sprites.front_default}/>
        <div>
            <button >Adicionar</button>
            {/* <button onClick={() => goToDetails(history, props.id)}>Ver Detalhes</button> */}
        </div>

    </Card>
    )
}