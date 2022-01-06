import React, {useState} from "react";
import { GlobalContext } from "./GlobalStateContext";

export default function GlobalState(props){
    const [carrinho, setCarrinho] = useState([])

return (
    <GlobalContext.Provider value={[carrinho, setCarrinho]}>
        {props.children}
    </GlobalContext.Provider>
)
}