import React from 'react';
import styled from 'styled-components';

export default function Header() {
    return (
        <HeaderContainer>
            <img src="/cash2.svg" class="logo" alt="logo" />
            <h1>Saque 24h</h1>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
    background-color: darkgray;

    h1 {
        font-size: 2em;
        line-height: 1.1;
        color: white;
    }
  
    .logo {
        height: 6em;
        margin-right: 15px;
        margin-left: 15px;
    }
  
    .logo:hover {
        filter: drop-shadow(0 0 2em green);
    }
  
    .logo.vanilla:hover {
        filter: drop-shadow(0 0 2em #f7df1eaa);
    }
`