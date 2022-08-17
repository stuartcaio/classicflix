import React, {useState} from 'react';
import styled from 'styled-components';
import { Cabecalho, Corpo, Principal, TítuloDoCabecalho, Imagem, Título, Filmes, Filme, Botao } from './styles';
import './App.css';

function App() {

  const [filmes, setFilmes] = useState([
    {
      id: 1,
      title: 'The Lord of the Rings - The Fellowship Ring',
      image: 'https://upload.wikimedia.org/wikipedia/pt/3/38/Lord_of_the_Rings_Fellowship_of_the_Ring.jpg',
      name: 'The Lord of the Rings'
    },
    {
      id: 2,
      title: 'The Lord of the Rings - The Two Towers',
      image: 'https://upload.wikimedia.org/wikipedia/pt/5/59/The_Lord_of_the_Rings_The_Two_Towers.jpg',
      name: 'The Lord of the Rings'
    },
    {
      id: 3,
      title: 'The Lord of the Rings - The Return of the King',
      image: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      name: 'The Lord of the Rings'
    }
  ])

  fetch('https://api.themoviedb.org/3/movie/550?api_key=ce55d6ef64d74744c9ce770e6229d6e0', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((resp) => resp.json)
  .then((data: any) => 
    console.log(data)
  )
  .catch((err) => console.log(err));

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
          {filmes.map((filme) => (
            <Filme>
            <Imagem src={filme.image} alt=""/>
            <Título>{filme.name}</Título>
            <Botao>Detalhes</Botao>
            </Filme>
          ))}
        </Filmes>
      </Principal>
    </Corpo>
  )
}

export default App;
