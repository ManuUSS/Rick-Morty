import { ContextHeader } from './ContextHeader';
import { ContextItem } from './ContextItem';
import './ContextSection.css';

export const ContextSection = () => {
  return (
    <section className="context">
        <ContextHeader />
        <ContextItem 
            header='Acerca de:'
            text='Rick y Morty es una serie de televisión 
            americana de animación para adultos creada por Justin Roiland y Dan Harmon 
            en 2013 para Adult Swim, también se emitió en Cartoon Network. 
            La serie sigue las desventuras de un científico, Rick Sanchez, y su 
            fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica 
            y los viajes espaciales, temporales e intergalácticos.'
        />
        <ContextItem 
            header='Los personajes'
            text='Aunque esta serie animada cuenta con una gran cantidad de personajes en ella,
            se mencionan que algunos de los más importantes son: Rick Sanchez, Morty, Summer, Beth y Jerry'
            obj={ 
                <img src="../src/assets/morty.png" alt='Morty' 
                    className='img__card img--bottom img--left' 
                    height={100}
                /> 
            }
        />
        <ContextItem 
            header='Dato curioso'
            text='Back to the Future (1985), 
                la mítica película de Robert Zemeckis, es la "culpable" de la creación de Rick y Morty. 
                Justin Roiland se inspiró en el clásico de los 80 para diseñar por primera vez a sus protagonistas'
        />
        <ContextItem 
            className="card--flex card--center flex--colum"
            header='6 Temporadas'
            text='¡Más de 60 Capítulos!'
            pClassName="card--gray"
            obj={
                <img src="../src/assets/rick&morty_portal.png"
                    className="img__card img--z-cero"
                    height={320}
                >
                </img>
            }
        />
        <ContextItem 
            header='3'
            text=''
        />
        <ContextItem 
            className="card--flex card--center flex--colum"
            header='¡Visita el API para más información!'
            obj={<a target="_blank" href="https://rickandmortyapi.com/">
                    <h4>Da click aquí</h4>
                </a>}
        />
        <div></div>
    </section>
  )
}