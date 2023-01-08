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
            text={`Aunque esta serie animada cuenta con una gran cantidad de personajes en ella,
            se mencionan que algunos de los más importantes son: Rick Sanchez, Morty, Summer, Beth y Jerry`}
            obj={ 
                <img src="../src/assets/morty.png" alt='Morty' 
                    className='img__card img--bottom img--left' 
                    height={120}
                /> 
            }
        />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>
  )
}
