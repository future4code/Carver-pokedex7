import React, {useState} from "react";
import { GlobalContext } from "./GlobalStateContext";

export default function GlobalState(props){
    const [carrinho, setCarrinho] = useState([
        {
            foto : "https://picsum.photos/id/1/200/200",
            id: 1
          }, 
          {
            foto : "https://picsum.photos/id/2/200/200",
            id: 2
          },
          {
            foto : "https://picsum.photos/id/3/200/200",
            id: 3
          },
          {
            foto : "https://picsum.photos/id/4/200/200",
            id: 4
          },
          {
            foto : "https://picsum.photos/id/5/200/200",
            id: 5
          },
          {
            foto : "https://picsum.photos/id/6/200/200",
            id: 6
          },
          {
            foto : "https://picsum.photos/id/7/200/200",
            id: 7
          }
    ])

return (
    <GlobalContext.Provider value={[carrinho, setCarrinho]}>
        {props.children}
    </GlobalContext.Provider>
)
}