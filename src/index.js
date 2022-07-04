import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import "@fontsource/roboto";
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionDetails from './pages/TransactionDetails';
import CreateTransaction from './pages/CreateTransaction';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="transaction/:id" element={<TransactionDetails />} />
          <Route path="transaction/create" element={<CreateTransaction />} />
          <Route path="transaction/update/:id" element={<CreateTransaction />} />
        </Routes>
      </React.StrictMode>
    </ThemeProvider>
  </Router>
);