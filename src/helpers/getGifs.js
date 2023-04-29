export const getGifs = async ( categoria ) => {

    const url = `http://api.giphy.com/v1/gifs/search?api_key=FYAMx9ZwWtLyFHODdUUd0CyTJ1osgKxu&q=${ categoria }&limit=15`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const listaGifs = data.map((img) => ({
        
        id: img.id,
        tittle: img.tittle,
        url: img.images.downsized_medium.url

    }));   

    return listaGifs;
        

}
