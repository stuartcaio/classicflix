import React from 'react';
import styled from 'styled-components';

export const Corpo = styled.body`
background-color: black;

margin: 0rem;
`;

export const Cabecalho = styled.header`
display: flex;
justify-content: space-around;
align-items: center;
gap: 25rem;

height: 15vh;

color: white;
`;

export const TítuloDoCabecalho = styled.h1`
font-size: 1.5rem;
font-weight: 400;
`;

export const Input = styled.input`
padding: 0.75rem;

border-radius: 7.5px;
`;

export const Principal = styled.main`
margin-top: 4rem;
`;

export const Filmes = styled.section`
display: flex;
flex-wrap: wrap;
gap: 1.25rem;
`;

export const Filme = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;

padding: 1rem;

background-color: rgb(10, 10, 10)
`;

export const Botao = styled.button`
padding: 0.5rem;

background-color: white;
color: black;
font-size: 1.2rem;
font-weight: 400;

width: 75%;

transition: 1s;

&:hover{
    background-color: rgb(255, 225, 179)
}
`;

export const Imagem = styled.img`
width: 17.5rem;
height: 22.5rem;
`;

export const Título = styled.h2`
color: white;
font-size: 1.1rem;
font-weight: 700;
font-family: 'Rajdhani', sans-serif;
`;