import { useContext } from 'react';
import { ListContext } from '../../context/ListContext';
import { Paginator, GuidePaginator } from './';
import './PaginatorContainer.css';

export const PaginatorContainer = () => {

    //Se desestrucuturan los objetos a utilizar para la páginación
    const { pages, previousPage, nextPage, firstPage, lastPage, page: currentPage } = useContext( ListContext );

  return (
    <div className="paginator_wrapper">
        <GuidePaginator 
          totalPages={pages}
          currentPage={currentPage}
        />
        <div>
            { 
              currentPage > 1 && (
                <>
                    <Paginator text={<i className="fa-solid fa-angles-left"></i>} 
                      handlePage={ firstPage } 
                    />
                    <Paginator text={'Anterior'} handlePage={ previousPage } />
                </>
              )
            }
            {
              currentPage < 42 && (
                <>
                  <Paginator text={'Siguiente'} handlePage={ nextPage } />
                  <Paginator text={<i className="fa-solid fa-angles-right"></i>} 
                    handlePage={ lastPage } 
                  />
                </>
              )
            }
        </div>
    </div>
  )
}
