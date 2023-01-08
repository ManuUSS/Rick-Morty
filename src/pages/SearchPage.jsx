import { useState } from 'react';
import { CardGrid } from '../components/card';
import { InputSearch } from '../components/search/InputSearch';
import { Loader } from '../components/shared';
import { useFetchCharacters } from '../hooks/useFetchCharacters';
import './SearchPage.css';

export const SearchPage = () => {

  const [ query, setQuery ] = useState('');

  const { characters, isLoading } = useFetchCharacters( query );

  const handleSearch = ( value ) => {
    setQuery( value );
  }

  return (
    <>
        <div className="search_wrapper">
            <InputSearch 
              onNewSearch={ handleSearch }
            />
        </div>
        {
          isLoading && ( <Loader /> )
        }
        { 
          query && (
            <CardGrid 
              characters={ characters }
            />
          )
        }
    </>
  )
}
