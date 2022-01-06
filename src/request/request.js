import axios from "axios";
// import { BASE_URL } from "../components/url";

// const BASE_URL = "https://pokeapi.co/api/v2/"
import { BASE_URL } from "../componentes/url/url";

// Listar 30 pokemons disponíveis
export const pokemons = () => {
    axios.get(`${BASE_URL}/pokemon?limit=30&offset=200`).then((res) => {
        console.log(res.data)
    }).catch((error) => {
        alert("Erro", error.response)
    })
}
// Descrição de um pokemon
export const pokemon = (id) => { // id do pokemon
    axios.get(`${BASE_URL}pokemon/${id}`).then((res) => {
        return res.data;
    }).catch((error) => {
        alert("Erro", error.response)
    })
}

export async function fetchPokemon(pokemonId) {
    const { data } = await axios.get(`${BASE_URL}pokemon/${pokemonId}`);
    return data;
}

 
