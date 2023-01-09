import { useContext } from "react";
import { CardGrid } from "../components/card";
import { StatusFilter } from "../components/filter/StatusFilter";
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
            <StatusFilter />
            <CardGrid
                characters={ allCharacters }
            />
        </>
    )
}
