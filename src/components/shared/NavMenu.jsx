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
        <div className="menu_mobile">
            <input id="menu_toggle" type="checkbox" />
            <label class="menu_btn" for="menu_toggle">
            <span></span>
            </label>
            <ul className="menu_box">
                { navItems.map( ( {display, path}, i ) => (
                        <li className="menu_item">
                            <NavItem 
                                key={display + i} 
                                title={display}
                                path={path}
                            />
                        </li>
                    )) 
                }
            </ul>
        </div>
        <div className="menu_normal">
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

export const NavMenuMobile = () => {
    return (
        <nav>
            <NavLink to='/'>
            <img src="../src/assets/Rick_and_Morty.png" 
                alt="Rick and Morty Logo"
                className="rick-morty"
            />
            </NavLink>
            
            <ul>
                { navItems.map( ( {display, path}, i ) => (
                        <li>
                            <NavItem 
                                key={display + i} 
                                title={display}
                                path={path}
                            />
                        </li>
                    )) 
                }
            </ul>
        </nav>
    )
}
