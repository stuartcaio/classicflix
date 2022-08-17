import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Cabecalho, Corpo, Principal, TítuloDoCabecalho, Imagem, Título, Filmes, Filme, Botao } from './styles';
import './App.css';

function App() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=ce55d6ef64d74744c9ce770e6229d6e0&language=en-US&page=1')
    .then((resp) => resp.json())
    .then((data: any) => 
      setFilmes(data.results)
    )
    .catch((err) => console.log(err));
  }, [])

  return(
    <Corpo>
      <Cabecalho>
        <img src={require('./img/logo.png')} className="cabecalho__imagem1" alt=""/>
        <TítuloDoCabecalho>CLASSICFLIX</TítuloDoCabecalho>
        <img src={require('./img/navbar.png')} className="cabecalho__imagem2" alt=""/>
      </Cabecalho>
      <hr/>
      <Principal>
        <Filmes>
          {filmes.map((filme: any) => (
            <Filme key={filme.id}>
            <Imagem src={'https://image.tmdb.org/t/p/w500' + filme.poster_path} alt=""/>
            <Título>{filme.title}</Título>
            <Botao>Detalhes</Botao>
            </Filme>
          ))}
        </Filmes>
      </Principal>
    </Corpo>
  )
}

export default App;
