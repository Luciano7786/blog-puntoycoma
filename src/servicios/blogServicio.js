import { CATEGORIAS } from '../contextos/CategoriaContexto';

import { historiaHtmlBasicos } from './articulos/historiaHtmlBasicos';
import { evolucionInformatica } from './articulos/evolucionInformatica';

const articulos = [
  historiaHtmlBasicos,
  evolucionInformatica
];

export const obtenerTodosArticulos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(articulos), 500); // Simulamos delay de red
  });
};

export const obtenerArticulosPorCategoria = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoria === CATEGORIAS.TODO) {
        resolve(articulos);
      } else {
        resolve(articulos.filter(art => art.categoria === categoria));
      }
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
