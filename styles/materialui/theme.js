import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      text: {
        borderRadius: '0.375rem',
        color: 'white',
        height: 44,
      },
      textSizeLarge: {
        height: 44,
        padding: '0 30px 0 30px',
      },
      contained: {
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.12)',
      },
      hover: {
        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  palette: {
    primary: {
      light: '#0b132b',
      main: '#284688',
      dark: '#284688',
      contrastText: '#fff',
    },
    secondary: {
      light: '#46adfa',
      main: '#76A6D9',
      dark: '#388bc9',
      contrastText: '#fff',
    },
    error: {
      light: '#FC1B45',
      main: '#FF3F3F',
      dark: '#FF728D',
      contrastText: '#fff',
    },
    success: {
      light: '#00AA44',
      main: '#02D155',
      dark: '#4BE087',
      contrastText: '#fff',
    },
    info: {
      light: '#0891BA',
      main: '#02A9DB',
      dark: '#61CDED',
      contrastText: '#fff',
    },
    warning: {
      light: '#FDCA04',
      main: '#FFE271',
      dark: '#FFECA2',
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'Rubik',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      '"Fira Sans"',
      '"Droid Sans"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
