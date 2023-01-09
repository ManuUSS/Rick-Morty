import PropTypes from 'prop-types';
import './CardCaption.css';

export const CardCaption = ({ name, status, specie, location }) => {
  return (
    <div className='section--wrapper'>
        <div className="section caption__principal">
            <h3>{ name }</h3>
            <span className={`${status.toLowerCase()}`}
            >
              •{ status[0].toUpperCase() + status.substring(1) }
            </span>
        </div>
        <div className="section section--secondary">
            <h4>Tipo de especie: </h4>
            <p><strong>{ specie }</strong></p>
        </div>
        <div className="section section--secondary">
          <h4>
            Última vez visto en <br />
            { location.name }
          </h4>
        </div>
    </div>
  )
}

//Define las propiedades del componente y su tipo
//Esto no sería necesario en caso de utilizar Typescript
CardCaption.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    specie: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
}