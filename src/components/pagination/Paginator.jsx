import './Paginator.css';

export const Paginator = ({ text, handlePage }) => {
  return (
    <button className="btn--paginator" 
        onClick={ handlePage }
    >
        { text }
    </button>
  )
}
