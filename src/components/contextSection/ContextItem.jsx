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
