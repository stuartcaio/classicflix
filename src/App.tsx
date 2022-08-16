import React from 'react';
import styled from 'styled-components';
import { Cabecalho, Corpo, TítuloCabecalho } from './styles';
import './App.css';

function App() {
  return(
    <Corpo>
      <Cabecalho>
        <img src={require('./img/logo.png')} className="cabecalho__imagem1" alt=""/>
        <TítuloCabecalho>BAGGINSFLIX</TítuloCabecalho>
        <img src={require('./img/navbar.png')} className="cabecalho__imagem2" alt=""/>
      </Cabecalho>
      <hr/>
    </Corpo>
  )
}

export default App;
