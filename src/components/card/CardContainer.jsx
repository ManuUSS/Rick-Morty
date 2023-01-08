import PropTypes from 'prop-types'; 
import { CardCaption, CardImage } from ".";
import './CardContainer.css';

//Al no utilizar un Context y Provider este componente trabaja como un puente
//entre el padre y los datos que deben ser envíados al hijo
export const CardContainer = ({ url, name, status, specie, location }) => {
  return (
    <article className="card animate__animated animate__fadeIn">

        <CardImage  
          url={ url } 
          name={ name } 
        />

        <CardCaption 
          name={ name } 
          status={ status } 
          specie={ specie } 
          location={ location }
        />

    </article>
  )
}


//Define las propiedades del componente y su tipo
//Esto no sería necesario en caso de utilizar Typescript
CardContainer.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  specie: PropTypes.string,
  location: PropTypes.object,
}
