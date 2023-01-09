import { useContext } from "react";
import { ListContext } from "../../context/ListContext";
import { StatusButton } from "./StatusButton";
import './StatusFilter.css';

export const StatusFilter = () => {
    
    //Se desestrucuturan los objetos a utilizar para la páginación
    //estos objetos y funciones los lee del Contexto
    const { aliveFilter, deadFilter, unknownFilter, resetFilter } = useContext( ListContext );

  return (
    <div className="status_filter_container">
        <StatusButton
            handleStatus={aliveFilter} 
            text='alive'
        />
        <StatusButton
            handleStatus={deadFilter} 
            text='dead'
        />
        <StatusButton
            handleStatus={unknownFilter} 
            text='unknown'
        />
        <StatusButton
            handleStatus={resetFilter} 
            text='all'
        />
    </div>
  )
}
