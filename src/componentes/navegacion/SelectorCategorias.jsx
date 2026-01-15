import React from 'react';
import { usarCategoria, CATEGORIAS } from '../../contextos/CategoriaContexto';
import { Laptop, Database, Wrench, Cpu, Network, Terminal } from 'lucide-react';

const SelectorCategorias = () => {
  const { categoriaActiva, setCategoriaActiva } = usarCategoria();

  const opciones = [
    { id: CATEGORIAS.TODO, etiqueta: 'TODO', icono: null },
    { id: CATEGORIAS.INFORMATICA, etiqueta: 'INFORMÁTICA', icono: <Cpu className="w-4 h-4" /> },
    { id: CATEGORIAS.FRONTEND, etiqueta: 'FRONT-END', icono: <Laptop className="w-4 h-4" /> },
    { id: CATEGORIAS.BACKEND, etiqueta: 'BACK-END', icono: <Database className="w-4 h-4" /> },
    { id: CATEGORIAS.HERRAMIENTAS, etiqueta: 'HERRAMIENTAS', icono: <Wrench className="w-4 h-4" /> },
    { id: CATEGORIAS.REDES, etiqueta: 'REDES DE DATOS', icono: <Network className="w-4 h-4" /> },
    { id: CATEGORIAS.SISTEMAS, etiqueta: 'SISTEMAS OPERATIVOS', icono: <Terminal className="w-4 h-4" /> },
  ];

  return (
    <div className="flex justify-center my-6 md:my-8 px-4">
      <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar w-full md:w-auto bg-ciber-gris/50 p-1 rounded-lg border border-ciber-verde/30 backdrop-blur-sm scroll-smooth snap-x">
        {opciones.map((opcion) => (
          <button
            key={opcion.id}
            onClick={() => setCategoriaActiva(opcion.id)}
            className={`
              flex items-center gap-2 px-4 py-3 md:py-2 rounded-md font-mono text-sm whitespace-nowrap transition-all duration-300 snap-center
              ${categoriaActiva === opcion.id 
                ? 'bg-ciber-verde text-ciber-negro shadow-[0_0_10px_rgba(0,255,65,0.5)] font-bold' 
                : 'text-gray-400 hover:text-ciber-verde hover:bg-white/5'}
            `}
          >
            {opcion.icono}
            {opcion.etiqueta}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectorCategorias;
