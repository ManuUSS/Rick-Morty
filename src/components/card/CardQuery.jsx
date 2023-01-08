import { CardContainer } from '.';
import { Loader } from '../shared';
import { useFetchCharacters } from '../../hooks/useFetchCharacters';
import './CardGrid.css';


export const CardQuery = ({className, query }) => {

    const { characters, isLoading } = useFetchCharacters( query );

    return (
        <>
            { 
                isLoading &&  (<Loader />) 
            }
            <section className={ className }>
                {
                    characters.map( ( character ) => (
                        <CardContainer 
                            name={ character.name }
                            url={ character.image }
                            status={ character.status }
                            specie={ character.specie }
                            location={ character.location }
                            key={ character.name }
                        />
                    ))
                }
            </section>
        </>
        
    )
}
