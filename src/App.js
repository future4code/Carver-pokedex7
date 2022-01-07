import React from "react";
import { Router } from "./routes/Routes";
import GlobalState from "./contexts/GlobalContext/GlobalState";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./componentes/colors/theme";

function App() {

  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
