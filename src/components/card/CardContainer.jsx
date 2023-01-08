import { CardCaption, CardImage } from "./"
import './CardContainer.css';

export const CardContainer = ({ url, name, status, specie, location }) => {
  return (
    <article className="card animate__animated animate__fadeIn">

        <CardImage  
          url={ url } 
          name={ name } 
        />

        <CardCaption 
          name={ name } 
          status={ status } 
          specie={ specie } 
          location={ location }
        />

    </article>
  )
}
