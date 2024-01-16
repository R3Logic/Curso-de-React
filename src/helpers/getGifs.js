export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=xL2o3xh7wg4Bt2vzP9nGpopQasp5xS7h&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    //Crea un nuevo array que contiene 10 objetos, cuyas propiedades son id, title y url de los gifs 
    const gifs = data.map(image => ({
      id: image.id,
      title: image.title,
      url: image.images.downsized_medium.url,
    }));
    return gifs;
  }