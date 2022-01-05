import axios from "axios";
import { BASE_URL } from "../url/url";

// Listar 30 pokemons disponíveis
 export const Pokemons = () => {
    axios.get(`${BASE_URL}/pokemon?limit=30&offset=200`)
    .then((res) => {
       console.log(res.data)
    }).catch((error) => {
        alert("Erro", error.response)
    })
 }
 // Descrição de um pokemon
 export const descricao = (id) => { // id do pokemon
    axios.get(`${BASE_URL}/pokemon/${id}`).then((res) => {
        console.log(res.data)
    }).catch((error) => {
        alert("Erro", error.response)
    })
 }