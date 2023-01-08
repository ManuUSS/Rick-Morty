import PropTypes from 'prop-types';
import './CardImage.css';

export const CardImage = ({ url, name }) => {
  return (
    <div className="image__wrapper">
        <img 
            src={ url } 
            alt={ name } 
        />
    </div>
  )
}

//Define las propiedades del componente y su tipo
//Esto no sería necesario en caso de utilizar Typescript
CardImage.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string
}
