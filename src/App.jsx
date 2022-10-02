import React, { useState } from 'react';
import Form from './components/Form';
import Bill from './components/Bill';
import Header from './components/Header';
import styled from 'styled-components';

function App() {
    const [withdrawStatus, setWithdrawStatus] = useState('not started');
    const [bills, setBills] = useState(null);

    function orchestrateHelperText() {
        switch (withdrawStatus) {
            case 'not started': 
                return '*Notas: R$1, R$5, R$10, R$50 e R$100'
            case 'verifying value':
                return 'Verificando...';
            case 'below zero error':
                return 'O valor do saque precisa ser positivo';
            case 'value verified':
                return 'Ok! Contando notas...';
            case 'bills counted':
                return 'Notas contados, liberando o dispenser...';
            default:
                return '*Notas: R$1, R$5, R$10, R$50 e R$100'
        }
    }

    function displayBills(bills) {
        const billsDisplayed = []
        for (const key in bills) {
            const bill = <Bill key={key} quantity={bills[key]} value={key} />
            billsDisplayed.push(bill);
        }
        return billsDisplayed;
    }

    return (
        <AppContainer>
            <Header />
            <Form setWithdrawStatus={setWithdrawStatus} setBills={setBills} />
            <HelperText>{!bills ? orchestrateHelperText() : 'Pode sacar!'}</HelperText>
            {bills && displayBills({...bills})}
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
`;

const HelperText = styled.h5`
    h5 {
        margin: 10px;
    }
`
