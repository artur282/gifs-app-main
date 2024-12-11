import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RegistroAcademico from './RegistroPeriodo'
import RegistroTipoAutoridad from './TipoDeAutoridad'
import RecuperarUsuario from './RecuperarUsuario'
import PeriodosLista from './ListaPeriodoAcademico'
import CrearProceso from './CrearProceso'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <PeriodosLista></PeriodosLista>  */}
    {/* <RecuperarUsuario></RecuperarUsuario> */}
    <CrearProceso></CrearProceso>
  </StrictMode>
);
