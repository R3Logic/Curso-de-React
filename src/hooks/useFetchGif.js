import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//Creación de un custom hook

export const useFetchGif = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    };

    //useEffect evita que, cuando el componente se carga, se haga otra vez la petición HTTP
    //Tan sólo se ejecuta una vez cuando se carga el componente, a no ser que se agregue una nueva category
    useEffect(() => {
      getImages();
    }, []);

    return {
      images,
      isLoading
    };
}



