import { useEffect, useState } from 'react'
import { getAllCharacters } from '../apis/getCharacters';

export const useFetchAll = ( page = 1 ) => {
    
    //En este estado se almacenarán los resultados de la búsqueda realiza al
    //API de Rick & Morty
    const [ allCharacters, setAllCharacters ] = useState([]);

    //Se maneja la páginación para el renderizado en la UI
    const [ pages, setPages ] = useState([]);

    //Se maneja el estado para mostrar o no un cargado mientras se finaliza
    //la petición al API
    const [ isLoading, setisLoading ] = useState( true );

    //Realiza la petición al API de Rick & Morty, trae resultados por página
    const getAll = async () => {
        setisLoading( true );
        //Realiza una desestructuración de los datos solicitados,
        //guarda los personajes y las páginas mencionadas por la respuesta
        const { characters: charactersResponse, pages } = await getAllCharacters( page );
        setAllCharacters( charactersResponse );
        setPages( pages )
        setisLoading( false );
    }


    //Realiza una consulta al API cada vez que se cambia a una página diferente
    useEffect(() => {
        getAll();
    }, [ page ]);

    return {
        allCharacters,
        pages,
        isLoading
    }
}
