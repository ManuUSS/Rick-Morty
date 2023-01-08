import { useState } from "react";
import { useFetchAll } from "../hooks/useFetchAll";
import { ListContext } from "./ListContext";

export const ListProvider = ({ children }) => {

    //Maneja la páginación a realizar en el HTML
    const [ page, setPage ] = useState( 1 );

    const { allCharacters, pages, isLoading } = useFetchAll( page );

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
        setPage( 1 )
    }

    //Redirecciona a la última página, obtiene los personajes de la página 42
    const lastPage = () => {
        setPage( pages )
    }
  
    return (
        <ListContext.Provider value={{ pages, previousPage, nextPage, firstPage, lastPage, allCharacters, isLoading, page }}>
            { children }
        </ListContext.Provider>
  )
}
