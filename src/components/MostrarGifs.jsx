import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { MostrarItemGif } from './MostrarItemGif';

export const MostrarGifs = ({ categorySend }) => {

  const { imagenes } = useFetchGifs( categorySend );

  return (
    <>

      <h2>{categorySend}</h2>

      <div className='card-grid'>
        {
          imagenes.map((img) => (
            
            <MostrarItemGif key={img.id}
                                {...img} //traer todas las imagenes 
                                />


          ))
        }
      </div>

    </>

  )
}

