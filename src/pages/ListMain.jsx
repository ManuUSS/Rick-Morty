import { useContext } from "react";
import { CardGrid } from "../components/card";
import { PaginatorContainer } from "../components/pagination";
import { Loader } from "../components/shared";
import { ListContext } from "../context/ListContext";

export const ListMain = () => {

    //Lee el contexto para manejar la información de manera centralizada
    const { allCharacters, isLoading } = useContext( ListContext );

    return (
        <>
        {

            isLoading && ( <Loader /> )
        
        }
            <PaginatorContainer />
            <CardGrid
                characters={ allCharacters }
            />
        </>
    )
}
