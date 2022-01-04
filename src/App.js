import React, { useState } from "react";
import { Router } from "./routes/Routes";
import { ContextState } from "./context";

function App() {
  const [carrinho, setCarrinho] = useState([])

  return (
    <ContextState.Provider value={[carrinho, setCarrinho]}>
      <Router />
    </ContextState.Provider >


  );
}

export default App;
