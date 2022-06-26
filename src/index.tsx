import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import NotesProvider from './contexts/Notes';
import Home from './pages/Home';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <NotesProvider>
        <Home />
      </NotesProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
