import React, { useState } from 'react'

export const AgregarCategoria = ({ onNewCategory }) => {


    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {

        //el preventDefault ayuda a que se mantengan los datos en el formulario
        event.preventDefault();

        if(inputValue.trim().length <= 1 ) return;

        setInputValue('')
        onNewCategory(inputValue)
        
    }

    

    return (
        <>

            <form  onSubmit={ onSubmit } aria-label='form'>

                <input type="text"
                value={inputValue}
                placeholder='Buscador de gifs....' 
                onChange={onInputChange}
                />

            </form>


        </>
    )
}
