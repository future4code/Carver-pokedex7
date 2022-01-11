import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EE6055',
      contrastText: '#fff',
    },
    secondary: {
      main: '#60D394',
      contrastText: '#000',
    },
  },
});

export default theme