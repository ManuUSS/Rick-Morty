import PropTypes from 'prop-types';
import './ContextItem.css';


export const ContextItem = ({ header, text, obj }) => {
  return (
    <div className="card card--relative">
        <h2>
            { header }
        </h2>
        <p>
            { text }
        </p>
        { obj }
    </div>
  )
}

//Define las propiedades del componente y su tipo
//Esto no sería necesario en caso de utilizar Typescript
ContextItem.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  //Representa cualquier elemento hijo que se desee renderizar
  obj: PropTypes.object
}
