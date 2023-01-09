import { ListMain } from './ListMain';
import { ListProvider } from '../context/ListProvider';


export const ListPage = () => {
  

  //Usa el Provider para obtener la información de la lista de personajes
  //En esta línea se declara el nivel de alcance que tienen los componentes hijos
  //para acceder a la información del Context
  return (
    <ListProvider>
      <ListMain />
    </ListProvider>
  )
}
