import React from 'react'
import styled from 'styled-components';

export const Corpo = styled.body`
background-color: #000;

width: 100vw;
height: 100vh;
`;

export const Principal = styled.section`
display: flex;
gap: 2rem;

padding: 3rem;
`;

export const Imagem = styled.img`
width: 25rem;
height: 32.5rem;
`;

export const Texto = styled.div`
display: flex;
flex-direction: column;
gap: 3rem;

padding: 2rem;

width: 50%;
height: 50%;

color: white;
`

export const Botao = styled.button`
padding: 1rem;

align-self: left;
justify-content: end;

background-color: white;
color: black;

font-size: 1.1rem;
font-weight: 500;

width: 50%;

margin-top: 4rem;

border-radius: 5px;
border-style: none;
`;