import {Link} from 'react-router-dom';
import './ContextFooter.css';

export const ContextFooter = () => {
  return (
    <article className="card_context_3d_info">
        
        <Link
          className="nav_a"
          to="/list"
        >
          <h2 className="card_context_3d__visit">¡Visita la lista de Personajes!</h2>
        </Link>
        <div className="card_context--icons">
          <h4>Página creada con</h4>
          <div className="icons--wrapper">
            <i className="fa-brands fa-react"></i>
            <i className="fa-brands fa-square-js"></i>
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
          </div>
        </div>
        
    </article>
  )
}
