import { createTheme } from '@mui/material/styles';

import { Colors } from './colors';

import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin']
});

export const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    h4: {
      color: Colors.text,
      fontSize: 33,
      fontWeight: 400,
      lineHeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: '0.25px'
    },
    h6: {
      color: Colors.text,
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: '0.15px'
    },
    body1: {
      color: Colors.text,
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: '0.15px'
    },
    body2: {
      color: Colors.text,
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: '0.25px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    subtitle2: {
      color: Colors.text,
      fontSize: 10,
      fontWeight: 400,
      lineHeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: '1.5px'
    }
  },
  palette: {
    background: {
      paper: Colors.white,
      default: Colors.background
    },
    primary: {
      main: Colors.primary,
      light: Colors.navbar
    },
    secondary: {
      main: Colors.secondary
    }
  },
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-root': {
            '& .Mui-selected': {
              '&:hover': {
                backgroundColor: Colors.primary
              }
            }
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.white,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderRadius: 8,
              borderColor: Colors.formborder
            },
            '&:hover fieldset': {
              borderColor: Colors.primary
            },
            '& input::placeholder': {
              color: Colors.text
            }
          }
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 12
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.divborder
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.navbar,
          justifyContent: 'center',
          boxShadow: 'none',
          height: 76
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          height: 44
        },
        outlined: {
          borderColor: Colors.formborder,
          background: Colors.white,
          color: Colors.text,
          ':hover': {
            background: Colors.white,
            color: Colors.primary
          }
        },
        contained: {
          ':disabled': {
            background: Colors.disabled,
            color: Colors.text
          }
        }
      }
    }
  }
});
