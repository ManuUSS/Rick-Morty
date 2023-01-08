import './ContextHeader.css';

export const ContextHeader = () => {
  return (
    <div className="context__header card">
        <h1>Un poco de Rick And Morty</h1>
        <img src="../src/assets/rick_and_morty_hug.png" 
            alt="Rick & Morty juntos" 
            height={120}
            width={120}
        />
    </div>
  )
}
