import { useState } from 'react'
import {AddCategory, GifGrind} from './components'


export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Punch' ])
    // console.log(categories)

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; //valida si la nueva categoría ya está en las categorías

        //Se usa el operador SPREAD para copear los los elementos de categories y hacer un nuevo arreglo
        //con esos elementos con uno nuevo
        setCategories([newCategory, ...categories]); 
    }
    return (
      <>
        {/* Título */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory onNewCategory={(value) => onAddCategory(value)} />

        {/* Listado de Gifs */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}
        
          { categories.map((category) => (
            <GifGrind 
             key = {category}
             category = {category}
            />
          ))}
        
        {/* Gif Item */}
      </>
    );
}