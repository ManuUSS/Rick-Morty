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
    handleStatus: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}
