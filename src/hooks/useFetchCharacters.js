import { useEffect, useState } from 'react';
import { getAllCharacters, getCharacterByName } from '../apis/getCharacters';

const localCharactersKey = 'characters';

export const useFetchCharacters = ( query ) => {
    
    //En este estado se almacenarán los resultados de la búsqueda realiza al
    //API de Rick & Morty
    const [ characters, setCharacters ] = useState([]);
    
    //Se maneja el estado para mostrar o no un cargado mientras se finaliza
    //la petición al API
    const [ isLoading, setisLoading ] = useState( false );

    //Realiza la petición al API de Rick & Morty, trae resultados por nombre
    const getCharacters = async () => {
        if( !query ) return;
        const charactersResponse = await getCharacterByName( query );
        localStorage.setItem( localCharactersKey, JSON.stringify( charactersResponse ) );
        setCharacters( charactersResponse );
        setisLoading( false );
    }

    const validateStorage = () => {
        
        if( localStorage.getItem( localCharactersKey )){
            setCharacters( JSON.parse(localStorage.getItem( localCharactersKey )) );
        }
    }

    //Se hace uso de un nuevo UseEffect, ya que el otro únicamente es disparado cuando se realiza una nueva búsqueda
    //este se hace principalmente para validar si hay alguna búsqueda previa
    useEffect(() => {
        validateStorage();
    }, []);

    //Realiza una renderización del componente cada vez que se realiza una nueva búsqueda
    useEffect(() => {
        getCharacters();
    }, [ query ]);

    return {
        characters,
        isLoading
    }






}

