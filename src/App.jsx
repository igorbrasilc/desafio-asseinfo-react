import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
        <Header />
        <Form />
    </AppContainer>
  )
}

export default App;

const AppContainer = styled.div`
    height: 80vh;
    width: 80vw;
    max-width: 600px;
    overflow-y: scroll;
    background-color: lightslategray;
    display: flex; 
    flex-direction: column;
    align-items: center;
    border-radius: 9px;
`
