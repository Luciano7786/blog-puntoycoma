import { CATEGORIAS } from '../contextos/CategoriaContexto';

import { historiaHtmlBasicos } from './articulos/historiaHtmlBasicos';
import { evolucionInformatica } from './articulos/evolucionInformatica';
import { hardwareSoftware } from './articulos/hardwareSoftware';

const articulos = [
  historiaHtmlBasicos,
  evolucionInformatica,
  hardwareSoftware
];

// Helper para ordenar por fecha (más reciente primero)
const ordenarPorFecha = (lista) => {
  return lista.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
};

export const obtenerTodosArticulos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ordenarPorFecha([...articulos])), 500); // Simulamos delay de red y enviamos copia ordenada
  });
};

export const obtenerArticulosPorCategoria = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let resultado;
      if (categoria === CATEGORIAS.TODO) {
        resultado = articulos;
      } else {
        resultado = articulos.filter(art => art.categoria === categoria);
      }
      resolve(ordenarPorFecha([...resultado]));
    }, 300);
  });
};

export const obtenerArticuloPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(articulos.find(art => art.id === id));
    }, 300);
  });
};
