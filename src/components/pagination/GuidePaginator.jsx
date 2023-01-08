import './GuidePaginator.css';

export const GuidePaginator = ({ totalPages, currentPage }) => {
  return (
    <div>
      <h3> Página actual: { currentPage }</h3>
      <h4 className="total_pages"> Total de páginas: { totalPages } </h4>
    </div>
  )
}
