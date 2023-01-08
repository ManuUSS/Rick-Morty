import { useContext, useState } from 'react';
import { Loader } from '../components/shared';
import { CardGrid } from '../components/card/CardGrid';
import { PaginatorContainer } from '../components/pagination';
import { ListMain } from './ListMain';
import { ListProvider } from '../context/ListProvider';


export const ListPage = () => {

  //Maneja la páginación a realizar en el HTML
  //const [page, setPage] = useState( 1 );

  //const { allCharacters, isLoading } = useFetchAll( page );

  //Método para mánejar la páginación de los resultados obtenidos por el API
  //Maneja la página siguiente
  //const nextPage = () => {
  //  setPage( page + 1 );
  //}
//
  ////Método para mánejar la páginación de los resultados obtenidos por el API
  ////Maneja la página previa
  //const previousPage = () => {
  //  setPage( page - 1 );
  //}
  

  return (
    <ListProvider>
      <ListMain />
    </ListProvider>
    // <>
    //   {

    //     isLoading && ( <Loader /> )
        
    //   }
    //     <PaginatorContainer />
    //     <CardGrid
    //       characters={ allCharacters }
    //     />
    // </>
  )
}
