import React, { useState } from 'react';
import styled from 'styled-components';

export default function Bill({value, quantity}) {

    const color = identifyColor(value);

    function identifyColor(value) {
        return;
    }


    return (
        <BillContainer>
            <Bill>
                <p>{value}</p>
            </Bill>
            <p>x{quantity}</p>
        </BillContainer>
    )
}

const BillContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const Bill = styled.div`
    width: 80px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: outset; 
    background-color: ${color};
`;