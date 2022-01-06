import React from "react";
import { Router } from "./routes/Routes";
import GlobalState from "./contexts/GlobalContext/GlobalState";

function App() {

  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
