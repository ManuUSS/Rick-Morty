//Se define la base del URL del API de Rick & Morty para no repetir código
const api_url = 'https://rickandmortyapi.com/api/character';

//Petición al API de Rick & Morty para traer información de personajes según el nombre
export const getCharacterByName = async ( name ) => {
    
    //Se realiza una petición al API con la constante creada anteriormente
    //esta consulta trae todos los personajes de Rick & Morty con el nombre
    //equivalente
    try {
        
        const url = `${ api_url }/?name=${ name }`;
        const response = await fetch( url );
        if( response.status === 404 ) return null;

        //Se realiza destructuración de la respuesta JSON para que se más fácil de vista

        const { results } = await response.json();
        //Se realiza un mapeo de los resultados para trabajar únicamente con las propiedades
        //a necesitar
        const characters = results.map( character => ({
            name: character.name,
            status: character.status,
            specie: character.species,
            image: character.image,
            location: character.location
        }));

        return characters;

    } catch (error) {
        console.log({ e: error });
    }
    
}

//Petición al API de Rick & Morty para traer información de todos los personajes
export const getAllCharacters = async ( page = 1, status ) => {
    
    let url = `${api_url}?page=${ page }`;

    if( status )
        url = `${ api_url }/?page=${ page }&status=${ status }`;

    //Se realiza una petición al API con la constante creada anteriormente
    //esta consulta trae todos los personajes de Rick & Morty
    //const response = await fetch( `${api_url}?page=${ page }`);
    const response = await fetch( url );
    
    //Se realiza destructuración de la respuesta JSON para que se más fácil de vista
    const { results, info } = await response.json();
    
    //Se realiza un mapeo de los resultados para trabajar únicamente con las propiedades
    //a necesitar
    const characters = results.map( character => ({
        name: character.name,
        status: character.status,
        specie: character.species,
        image: character.image,
        location: character.location
    }));

    const { pages } = info;

    //Se retornan los resultados para ser trabajados en otros componentes
    return {
        characters,
        pages
    };
    
}