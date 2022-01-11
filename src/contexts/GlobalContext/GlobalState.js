import React, {useState} from "react";
import { GlobalContext } from "./GlobalStateContext";

export default function GlobalState(props){
    const [pokedex, setPokedex] = useState([])

return (
    <GlobalContext.Provider value={[pokedex, setPokedex]}>
        {props.children}
    </GlobalContext.Provider>
)
}