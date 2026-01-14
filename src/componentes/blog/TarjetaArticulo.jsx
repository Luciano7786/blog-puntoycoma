import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal } from 'lucide-react';

const TarjetaArticulo = ({ articulo }) => {
  const { id, titulo, resumen, tags, fecha } = articulo;

  return (
    <div className="group relative bg-ciber-gris border border-gray-800 hover:border-ciber-verde transition-colors duration-300 overflow-hidden rounded">
      {/* Glitch Overlay Effect */}
      <div className="absolute inset-0 bg-ciber-verde/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none transform translate-x-[-100%] group-hover:animate-pulse"></div>

      <div className="p-4 md:p-6 relative z-10">
        <div className="flex justify-between items-start mb-4">
           <Terminal className="w-5 h-5 text-gray-500 group-hover:text-ciber-verde transition-colors" />
           <span className="text-xs font-mono text-gray-500">{fecha}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-ciber-verde transition-colors font-mono">
          {titulo}
        </h3>

        <p className="text-gray-400 mb-6 text-sm line-clamp-3">
          {resumen}
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="text-xs text-ciber-cian border border-ciber-cian/30 px-2 py-0.5 rounded font-mono">
                #{tag}
              </span>
            ))}
          </div>
          
          <Link to={`/articulo/${id}`} className="inline-flex items-center text-ciber-verde hover:text-white transition-colors text-sm font-mono font-bold self-end sm:self-auto shrink-0">
            LEER_ <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
      
      {/* Bottom Progress Line */}
      <div className="h-0.5 w-0 bg-ciber-verde group-hover:w-full transition-all duration-500"></div>
    </div>
  );
};

export default TarjetaArticulo;
