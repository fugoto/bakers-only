import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  palette: {
    primary: {
      main: '#DAE7DE',
    },
    secondary: {
      main: '#2f2235',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  spacing: 1,
});

export default theme;
