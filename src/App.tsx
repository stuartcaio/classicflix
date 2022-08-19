import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Cabecalho, Corpo, Principal, TítuloDoCabecalho, Imagem, Título, Filmes, Filme, Botao, Input } from './styles';
import {Link} from 'react-router-dom';
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
  }, []);

  function filtraElemento(e: string | number){
    const filmesFiltrados = filmes.filter((dado: any) => dado.title.includes(e));
    setFilmes(filmesFiltrados);
  }

  return(
      <Corpo>
        <Cabecalho>
          <img src={require('./img/logo.png')} className="cabecalho__imagem1" alt=""/>
          <TítuloDoCabecalho>CLASSICFLIX</TítuloDoCabecalho>
          <Input placeholder="Procure um filme" onChange={(e) => filtraElemento(e.target.value)}></Input>
        </Cabecalho>
        <hr/>
        <Principal>
          <Filmes>
            {filmes.map((filme: any) => (
              <Filme key={filme.id}>
              <Imagem src={'https://image.tmdb.org/t/p/w500' + filme.poster_path} alt=""/>
              <Título>{filme.title}</Título>
              <Link to={`/detalhes/${filme.id}`}>
                <Botao>Detalhes</Botao>
              </Link>
              </Filme>
            ))}
          </Filmes>
        </Principal>
      </Corpo>
  )
}

export default App;
