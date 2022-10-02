import React from 'react';
import styled from 'styled-components';
import { useForm } from '../hooks/useForm';
import { useSleep } from '../hooks/useSleep';
import { BILLS_AVAILABLE } from '../assets/GLOBAL_VARIABLES';


export default function Form( {setWithdrawStatus, setBills} ) {
    const [values, handleChange] = useForm({ withdrawValue: '' });
    const sleep = (delay) => useSleep(delay);

    async function handleSubmit(e) {
        e.preventDefault();
        setBills(null);
        setWithdrawStatus(() => 'verifying value');
        await sleep(1000);
        const verifiedValue = verifyValue(values.withdrawValue);
        setWithdrawStatus(() => 'value verified');
        await sleep(1000);
        const bills = countBills(verifiedValue);
        setWithdrawStatus(() => 'bills counted');
        await sleep(1000);
        setBills(() => bills);
    }

    function countBills(value) {
        let remainingValue = value;
        const billsToWithdraw = {};
        const b = [...BILLS_AVAILABLE];
        let i = 0;
        while(remainingValue >= 1) {
            if (b[i] > remainingValue) {
                if (!billsToWithdraw[b[i - 1]]) billsToWithdraw[b[i - 1]] = 1;
                else billsToWithdraw[b[i - 1]]++;
                remainingValue -= b[i - 1];
                i = 0;
            } 

            if (b[i] === 100) {
                if (!billsToWithdraw[b[i]]) billsToWithdraw[b[i]] = 1;
                else billsToWithdraw[b[i]]++;
                remainingValue -= b[i];
                i = 0;
            }

            i++;
        }

        return billsToWithdraw;
    };

    function verifyValue(value) {
        if (value < 0) {
            setWithdrawStatus(() => 'below zero error');
            throw new Error('Value must be greater than 0');
        }

        return Math.ceil(value);
    }

    return (
        <FormContainer onSubmit={(e) => handleSubmit(e)}>
            <h4>Digite o valor do saque</h4>
            <input 
                type="number" 
                placeholder="Valor"
                value={values.withdrawValue} 
                name="withdrawValue"
                onChange={handleChange} 
                required
            />
            <button type="submit">Solicitar saque</button>
        </FormContainer>
    )
};

const FormContainer = styled.form`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h4 {
        margin-top: 10px;
        margin-bottom: 0;
    }
    
    input, button {
        width: 200px;
        height: 50px;
        margin-top: 15px;
        border: none;
        border-radius: 5px;
    }
    button:hover {
        cursor: pointer;
    }
`