import { prymaryColor, secondaryColor } from './colors'
import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: prymaryColor,
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: secondaryColor,
      contrastText: "#FFFFFF"
    },
  },
});

export default theme