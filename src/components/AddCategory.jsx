import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (event) => {
        setInputValue(event.target.value); //permite cambiar el texto del input
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return; //valida si se introdujo más de un caracter en el input

        onNewCategory(inputValue.trim()); //se manda el inputValue a onAddCategory
        setInputValue(''); //limpia el input al presionar ENTER
    }

  return (
    // event => onSubmit(event) = onSubmit
    <form onSubmit={event => onSubmit(event)}> 
        <input 
        type='text'
        placeholder='Buscar gifs' 
        value={inputValue}
        onChange={event => onInputChange(event)}
    />
    </form>
  )
}
