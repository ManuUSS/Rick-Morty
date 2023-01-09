import PropTypes from 'prop-types';
import './StatusButton.css';

export const StatusButton = ({ handleStatus, text }) => {
  return (
    <button className={`btn--status ${ text.toLowerCase() }`} 
        onClick={ handleStatus }
    >
       • { text[0].toUpperCase() + text.substring(1) }
    </button>
  )
}

StatusButton.propTypes = {
    //Representa la función a realizar por el elemento
    handleStatus: PropTypes.func.isRequired,
    //Representa el texto para renderizar dentro del button
    text: PropTypes.string.isRequired
}
