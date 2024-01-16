import { useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';
import GifGrindItem from './GifGrindItem';
import { useFetchGif } from '../hooks/useFetchGif';


export const GifGrind = ({ category }) => {
  const { images, isLoading } = useFetchGif(category);
  
  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }

      <div>
        {
          images.map((image) => (
            <GifGrindItem key = {image.id} {... image}/> //con el operador SPREAD se mandan las propiedades al componente
          ))
        }
      </div>
    </>
  );
};
