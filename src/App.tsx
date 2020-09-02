import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Game from './components/Game/Game';

const Normalize = styled.style`
  @import-normalize;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
    color: #143047;
    font-size: 1.125rem;
  }
`;

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Game />
    </>
  );
}

export default App;
