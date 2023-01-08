import { Routes, Route, Navigate } from "react-router-dom";
import { NavMenu } from "../components/shared/";
import { HomePage } from "./HomePage";
import { ListPage } from "./ListPage";
import { NotFoundPage } from "./NotFoundPage";
import { SearchPage } from "./SearchPage";

export const MainPage = () => {
  return (
    <>
        <NavMenu />
        <main>
          <Routes>
              <Route  path="/" element={ <HomePage /> } />
              <Route  path="/list" element={ <ListPage /> } />
              <Route  path="/search" element={ <SearchPage /> } />
              {/* Manejo de excepción para cuando se ingresa una ruta no existente */}
              <Route path="/*" element={ <Navigate to="/" /> } />
          </Routes>
        </main>
    </>
  )
}
