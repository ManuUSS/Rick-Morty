import { useState } from 'react';
import './InputSearch.css';

export const InputSearch = ({ onNewSearch }) => {

    const [inputValue, setInputValue] = useState('');

    //Maneja los valores que están siendo escritos en el Input
    //Se almacenan en el inputValue
    const handleInputChange = ( { target} ) => {
        const { value } = target;
        setInputValue( value );
    }

    //Controla el evento de realizar la petición al API mediante el form
    const handleSubmit = ( event ) => {

        //Evita el comportamiento por defecto del form
        //el cual es refrescar la página
        event.preventDefault();

        const characterToSearch = inputValue.trim();

        //Realiza una validación para verificar que el usuario haya escrito al menos 3 letras
        if( characterToSearch.length <= 2 ) return;
        
        //Realiza la búsqueda
        onNewSearch( characterToSearch );

        //Resetea el valor del input
        setInputValue('');
      }

  return (
    <form method="GET" onSubmit={ handleSubmit }>
        <input 
            type="text" 
            minLength={3}
            placeholder="Busca un personaje..."
            required 
            className="input--search shadow--normal"
            value={inputValue}
            onChange={ handleInputChange }
        />
        <button 
            type="submit"
            className="input--btn shadow--normal"
        >
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>
    </form>
  )
}
