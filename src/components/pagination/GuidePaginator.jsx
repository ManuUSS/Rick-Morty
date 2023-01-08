import PropTypes from 'prop-types';
import './GuidePaginator.css';

export const GuidePaginator = ({ totalPages, currentPage }) => {
  return (
    <div>
      <h3> Página actual: { currentPage }</h3>
      <h4 className="total_pages"> Total de páginas: { totalPages } </h4>
    </div>
  )
}

//Define las propiedades del componente y su tipo
//Esto no sería necesario en caso de utilizar Typescript
GuidePaginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
}
