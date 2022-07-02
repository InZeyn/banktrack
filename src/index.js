import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import "@fontsource/roboto";
import { ThemeProvider } from '@mui/material';
import theme from './theme';

const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <Container >
        <App />
      </Container>
    </React.StrictMode>
  </ThemeProvider>
);