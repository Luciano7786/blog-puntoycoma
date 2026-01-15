import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProveedorCategorias } from '../contextos/CategoriaContexto';

// Layout Components
import BarraNavegacion from '../componentes/navegacion/BarraNavegacion';
import PieDePagina from '../componentes/estructura/PieDePagina';
import BotonSubir from '../componentes/ui/BotonSubir';

// Pages
import PaginaInicio from '../paginas/PaginaInicio';
import PaginaArticulo from '../paginas/PaginaArticulo';
import PaginaSobreMi from '../paginas/PaginaSobreMi';

function Aplicacion() {
  return (
    <ProveedorCategorias>
      <Router>
        <div className="flex flex-col min-h-screen font-sans">
          <BarraNavegacion />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<PaginaInicio />} />
              <Route path="/articulo/:id" element={<PaginaArticulo />} />
              <Route path="/sobre-mi" element={<PaginaSobreMi />} />
              {/* Fallback 404 */}
              <Route path="*" element={
                <div className="pt-32 text-center text-ciber-rosa font-mono">
                  ERROR 404: Ruta no encontrada en la red.
                </div>
              } />
            </Routes>
          </main>

          <PieDePagina />
          <BotonSubir />
        </div>
      </Router>
    </ProveedorCategorias>
  );
}

export default Aplicacion;
