import PropTypes from 'prop-types';
import './ContextItem.css';


export const ContextItem = ({ className, header, text, pClassName, obj }) => {
  return (
    <article className={`card--context card--relative ${className}`}>
        <h2>
            { header }
        </h2>
        <p className={pClassName}>
            { text }
        </p>
        { obj }
    </article>
  )
}

//Define las propiedades del componente y su tipo
//Esto no sería necesario en caso de utilizar Typescript
ContextItem.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string,
  pClassName: PropTypes.string,
  //Representa cualquier elemento hijo que se desee renderizar
  obj: PropTypes.object
}
