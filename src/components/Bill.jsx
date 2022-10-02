import React, { useState } from 'react';
import styled from 'styled-components';
import { BILLS_BY_COLOR } from '../assets/GLOBAL_VARIABLES';

export default function Bill({value, quantity}) {
    const color = BILLS_BY_COLOR[value];
    return (
        <BillContainer>
            <BillCard color={color}>
                <p>{value}</p>
            </BillCard>
            <p>x{quantity}</p>
        </BillContainer>
    )
}

const BillContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const BillCard = styled.div`
    width: 80px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: outset; 
    background-color: ${props => props.color};
`;