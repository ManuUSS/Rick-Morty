import { NavLink } from "react-router-dom";
import { NavItem } from "./NavItem";
import './NavMenu.css';

//Representa los enlaces de navegación en el menú
const navItems = [ 
        { display: 'Lista de Personajes', path: 'list' }, 
        { display: 'Buscar un personaje', path: 'search'}
    ];

export const NavMenu = () => {
  return (
    <nav>
        <NavLink to='/'>
            <img src="../src/assets/Rick_and_Morty.png" 
                alt="Rick and Morty Logo"
                className="rick-morty"
            />
        </NavLink>
        <div>
            { navItems.map( ( {display, path}, i ) => (
                    <NavItem 
                        key={display + i} 
                        title={display}
                        path={path}
                    />
                )) 
            }
        </div>
    </nav>
  )
}
