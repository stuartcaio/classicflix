import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import {Corpo, Principal, Imagem, Texto, Botao} from '../detalhes/MovieStyles';

function Movie(){
    const {id} = useParams();
    const [filme, setFilme] = useState<any>([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ce55d6ef64d74744c9ce770e6229d6e0&language=en-US&page=1`)
        .then((resp) => resp.json())
        .then((data: any) => {

            const {title, poster_path, overview} = data;

            setFilme({
                id,
                title,
                sinopse: overview,
                image: 'https://image.tmdb.org/t/p/w500' + poster_path
            });
        }) 
      }, [id]);

      console.log(filme)
    
    return(
        <>
        <Corpo>
            <Principal>
                <Imagem src={filme.image}></Imagem>
                <Texto>
                    <h2 style={{fontSize: '2.5rem', fontWeight: '500'}}>{filme.title}</h2>
                    <p style={{fontSize: '1.25rem'}}>{filme.sinopse}</p>
                    <Botao>Assistir</Botao>
                </Texto>
            </Principal>
        </Corpo>
        </>
    )
}

export default Movie;