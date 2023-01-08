import { useEffect, useState } from 'react';
import { getAllCharacters, getCharacterByName } from '../apis/getCharacters';

export const useFetchCharacters = ( query ) => {
    
    //En este estado se almacenarán los resultados de la búsqueda realiza al
    //API de Rick & Morty
    const [ characters, setCharacters ] = useState([]);
    
    //Se maneja el estado para mostrar o no un cargado mientras se finaliza
    //la petición al API
    const [ isLoading, setisLoading ] = useState( true );

    //Realiza la petición al API de Rick & Morty, trae resultados por nombre
    const getCharacters = async () => {
        console.log( query );
        if( !query ) return;
        const charactersResponse = await getCharacterByName( query );
        setCharacters( charactersResponse );
        setisLoading( false );
    }

    useEffect(() => {
        getCharacters();
    }, [ query ]);

    return {
        characters,
        isLoading
    }






}

