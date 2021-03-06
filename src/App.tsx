import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalsStyles from './styles/globals';

import Routes from './routes';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalsStyles />
    </>
  );
}

export default App;
