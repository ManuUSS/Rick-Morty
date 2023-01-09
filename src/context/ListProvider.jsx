import { useState } from "react";
import { useFetchAll } from "../hooks/useFetchAll";
import { ListContext } from "./ListContext";

export const ListProvider = ({ children }) => {

    //Maneja la páginación a realizar en el HTML
    const [ page, setPage ] = useState( 1 );

    const [ status, setStatus ] = useState('');

    const { allCharacters, pages, isLoading } = useFetchAll( page, status );

    //Método para mánejar la páginación de los resultados obtenidos por el API
    //Maneja la página siguiente
    const nextPage = () => {
        setPage( page + 1 );
    }

    //Método para mánejar la páginación de los resultados obtenidos por el API
    //Maneja la página previa
    const previousPage = () => {
        setPage( page - 1 );
    }

    //Redirecciona a la primer página, obtiene los personajes de la página 42
    const firstPage = () => {
        setPage( 1 );
    }

    //Redirecciona a la última página, obtiene los personajes de la página 42
    const lastPage = () => {
        setPage( pages );
    }

    //Realiza un filtro de los personajes según el estado
    const aliveFilter = () => {
        setStatus( 'alive' );
        //Se resetea la página para iniciar en la primera
        setPage( 1 );
    }

     //Realiza un filtro de los personajes según el estado   
    const deadFilter = () => {
        setStatus( 'dead' );
        //Se resetea la página para iniciar en la primera
        setPage( 1 );
    }

    //Realiza un filtro de los personajes según el estado   
    const unknownFilter = () => {
        setStatus( 'unknown' );
        //Se resetea la página para iniciar en la primera
        setPage( 1 );
    }
    
    const resetFilter = () => {
        setStatus('');
        //Se resetea la página para iniciar en la primera
        setPage( 1 );
    }

  
    return (
        // Muestra los datos que pueden ser consultados por los hijos mediante el atributo value
        <ListContext.Provider value={{ pages, previousPage, nextPage, firstPage, 
            lastPage, allCharacters, isLoading, page, aliveFilter, deadFilter, unknownFilter, resetFilter }}
        >
            {/* En esta campo se renderizan los hijos del componente */}
            { children }
        </ListContext.Provider>
  )
}
