import React, { createContext, useContext, useState } from 'react';

const CategoriaContexto = createContext();

export const CATEGORIAS = {
  TODO: 'TODO',
  INFORMATICA: 'INFORMÁTICA',
  FRONTEND: 'FRONT-END',
  BACKEND: 'BACK-END',
  HERRAMIENTAS: 'HERRAMIENTAS'
};

export function ProveedorCategorias({ children }) {
  const [categoriaActiva, setCategoriaActiva] = useState(CATEGORIAS.TODO);

  return (
    <CategoriaContexto.Provider value={{ categoriaActiva, setCategoriaActiva }}>
      {children}
    </CategoriaContexto.Provider>
  );
}

export function usarCategoria() {
  const context = useContext(CategoriaContexto);
  if (!context) {
    throw new Error('usarCategoria debe usarse dentro de un ProveedorCategorias');
  }
  return context;
}
