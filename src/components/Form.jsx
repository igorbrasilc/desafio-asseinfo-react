import React from 'react';
import styled from 'styled-components';
import { useForm } from '../hooks/useForm';

export default function Form() {
    const [values, handleChange] = useForm({ withdrawValue: '' });
    console.log(values);
    return (
        <FormContainer>
            <h4>Digite o valor do saque</h4>
            <input 
                type="number" 
                placeholder="Valor"
                value={values.withdrawValue} 
                name="withdrawValue"
                onChange={handleChange} 
                class="title" 
                required
            />
            <button type="submit" id="confirm-button">Solicitar saque</button>
            <h5 id="helper-text">*Notas: R$1, R$5, R$10, R$50 e R$100</h5>
        </FormContainer>
    )
};

const FormContainer = styled.form`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h5 {
        margin: 10px;
    }
    
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