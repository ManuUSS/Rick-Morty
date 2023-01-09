import { ContextHeader, ContextItem, ContextFooter } from './';
import './ContextSection.css';

export const ContextSection = () => {
  return (
    <section className="context">
        <ContextHeader />
        <ContextItem 
            header='Acerca de'
            text='Rick y Morty es una serie de televisión 
            creada por Justin Roiland y Dan Harmon 
            en 2013 para Adult Swim, se emitió en Cartoon Network. 
            Esta sigue las desventuras de un científico, y su 
            nieto, quienes pasan el tiempo entre la vida doméstica, 
            viajes espaciales, temporales e intergalácticos.'
        />
        <ContextItem 
            header='Los personajes'
            text='Aunque esta serie animada cuenta con una gran cantidad de personajes en ella,
            se mencionan que algunos de los más importantes son: Rick Sanchez, Morty, Summer, Beth y Jerry'
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
                <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-monsters-transparent-png-stickpng-2.png"
                    className="img__card img--bottom-plus img--left"
                    height={125}
                >
                </img>
            }
        />
        <ContextItem 
            header='Como dijo Morty'
            obj={
                <>
                    <blockquote>Podríamos disfrutarlo un rato. Es decir, mira lo loco que es todo
                        <br />
                        <q>-Morty</q>
                    </blockquote>
                    <img src="../src/assets/morty.png"
                        className="img__card img--bottom-plus img--right"
                        id="rick-sit"
                        height={150}
                    >

                    </img>
                </>
            }
        />
        <ContextItem 
            className="card--flex card--center flex--colum"
            header='¡Visita el API para más información!'
            obj={<a className="nav__a" target="_blank" href="https://rickandmortyapi.com/">
                    <h4>Da click aquí</h4>
                </a>}
        />
        <ContextFooter />
    </section>
  )
}
