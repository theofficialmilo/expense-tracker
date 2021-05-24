import {createMuiTheme} from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    white?: PaletteColorOptions;
  }
  interface PaletteOptions {
    white?: PaletteColorOptions;
  }
}

export const CustomMuiTheme = createMuiTheme({
    overrides: {
      MuiGrid: {
        "spacing-xs-2": {
          width: 'auto',
          margin: 0
        },
        "spacing-xs-3": {
          width: 'auto',
          margin: 0
        },
        "spacing-xs-4": {
          width: 'auto',
          margin: 0
        }
      },
      MuiTableCell: {
        stickyHeader: {
          backgroundColor: '#f0f0f0'
        }
      },
      MuiCardContent: {
        root: {
          padding: 0
        }
      },
      MuiTableRow: {
        root: {
          '&$selected' : {
            backgroundColor: 'rgba(25, 137, 250, 0.25)',
            '&:hover': {
              backgroundColor: 'rgba(25, 137, 250, 0.25)'
            }
          }
        }
      }
    },
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#1989fa',
        light: '#6db8ff',
        dark: '#005dc6',
        contrastText: '#fff'
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#737373',
        light: '#a2a2a2',
        dark: '#383838'
      },
      white: {
        main: '#fff',
        dark: '#f0f0f0'
      },
    },
    typography: {
      subtitle2: {
        fontFamily: 'Playfair Display',
      },
      h6: {
        fontSize: "1.125rem"
      },
    },   
  })