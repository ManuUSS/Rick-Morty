import PropTypes from 'prop-types'; 
import { CardContainer } from "./CardContainer";
import './CardGrid.css';

export const CardGrid = ({ characters }) => {

    
    return (
        <section className="card-grid--flex">
            {
                characters && characters.map( ( character, i ) => (
                    <CardContainer 
                        name={ character.name }
                        url={ character.image }
                        status={ character.status }
                        specie={ character.specie }
                        location={ character.location }
                        key={ character.name + i }
                    />
                ))
            }
            
        </section>
        
    )

}

//Define las propiedades del componente y su tipo
//Esto no sería necesario en caso de utilizar Typescript
CardGrid.propTypes = {
    characters: PropTypes.array.isRequired
}