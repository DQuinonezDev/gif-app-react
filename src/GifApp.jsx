import React, { useState } from 'react'
import { AgregarCategoria } from './components/AgregarCategoria';
import { MostrarGifs } from './components/MostrarGifs';

export const GifApp = () => {

    // Un hook no es mas que una funcion propia de Ract
    const [categorias, setCategorias] = useState(['Demon Slayer']);

    const agregarCategoria = (newCategory) => {

        //Analizar si la categoria insertada ya se incluye en el array (categorias)
        if (categorias.includes(newCategory)) {
            return;
        }


        //El operador spred (...) adjunta lo anterioir y agrega algo nuevo
        setCategorias([...categorias, newCategory]);


    }

    return (
        <>

            {/* titulo */}
            <h1 className='h1Tittle'>Gif-App</h1>
            <hr />

            {/* input */}
            <AgregarCategoria onNewCategory={(value) => agregarCategoria(value)} />


            {/* card de los gif */}
            {/* item de cada gif */}


            {
                categorias.map((category) =>
                (
                    <MostrarGifs className='card-categoria' key={category} categorySend={category} />
                ))
            }


        </>
    )
}
