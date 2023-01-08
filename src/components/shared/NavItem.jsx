import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types';
import './NavItem.css';

//Se realiza una desestructuración del objeto props, esto para trabajar
//De una manera más simple o ordenada
export const NavItem = ({ title, path }) => {
  return (
    //Se realiza una validación para agregar una clase condicional según si el enlace es activo o no
    <NavLink 
        className={({ isActive }) => `${ isActive ? 'active': '' }`} 
        to={`/${path}`}
    >
        { title } 
    </NavLink>
  )
}

//Define las propiedades del componente y su tipo
//Esto no sería necesario en caso de utilizar Typescript
NavItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

