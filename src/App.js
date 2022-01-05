import React, { useState } from "react";
import { Router } from "./routes/Routes";
import { ContextState } from "./context";
import GlobalState from "./contexts/GlobalContext/GlobalState";

function App() {
  
  return (
    
    <GlobalState>
      <Router />
    </GlobalState>


  );
}

export default App;
