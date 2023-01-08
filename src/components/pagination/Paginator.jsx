import PropTypes from 'prop-types';
import './Paginator.css';


export const Paginator = ({ text, handlePage }) => {
  return (
    <button className="btn--paginator" 
        onClick={ handlePage }
    >
        { text }
    </button>
  )
}


//Define las propiedades del componente y su tipo
//Esto no sería necesario en caso de utilizar Typescript
Paginator.propTypes = {
  //Puede representar texto o un objeto HTML para renderizar dentro del button
  text: PropTypes.any.isRequired,
  //Representa la función a realizar por el elemento
  handlePage: PropTypes.func.isRequired
}
