import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { PropsThemeContext, ThemeMode } from './themeContextI';
import { ThemeContextMui } from './ThemeContext';

export const ThemeProviderMui = ({ children }: PropsThemeContext) => {
  const [mode, setMode] = useState<ThemeMode>('dark');

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        light: mode === 'dark' ? '#BEB1E7' : '#ff006e',
        main: mode === 'dark' ? '#6949FE' : '#ff006e',
        dark: mode === 'dark' ? '#2C2A4A' : '#ff006e',
        contrastText: '#fff',
      },
      secondary: {
        light: mode === 'dark' ? '#14CC92' : '#ffbe0b',
        main: mode === 'dark' ? '#35E9BC' : '#ffbe0b',
        dark: mode === 'dark' ? '#073B3A' : '#ffbe0b',
        contrastText: '#fff',
      },
      background: {
        default: mode === 'dark' ? '#150b31' : '#796AF4',
      },
      success: {
        main: '#4caf50',
      },
      error: {
        main: '#ef5350',
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontWeight: 600,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeContextMui.Provider
        value={{
          toggleTheme: () => {
            setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
          },
          mode,
        }}
      >
        <Layout>{children}</Layout>
      </ThemeContextMui.Provider>
    </ThemeProvider>
  );
};
