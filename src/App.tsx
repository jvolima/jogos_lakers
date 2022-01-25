import React, { useState } from 'react';
import { Form } from './components/Form';
import { Home } from './components/Home';
import { GlobalStyle } from './styles/global';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSetTrueLogin() {
    setIsLoggedIn(true)
  }
  
  return (
    <>
      {
        isLoggedIn == false ? <Form handleSetTrueLogin={handleSetTrueLogin}/> : <Home />
      }
      <GlobalStyle />
    </>
  );
}

export default App;
