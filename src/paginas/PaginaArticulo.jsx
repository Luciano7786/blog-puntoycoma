import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Terminal } from 'lucide-react';
import { obtenerArticuloPorId } from '../servicios/blogServicio';
import BotonMeGusta from '../componentes/ui/BotonMeGusta';

const PaginaArticulo = () => {
  const { id } = useParams();
  const [articulo, setArticulo] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarArticulo = async () => {
      setCargando(true);
      const data = await obtenerArticuloPorId(id);
      setArticulo(data);
      setCargando(false);
    };
    cargarArticulo();
  }, [id]);

  // Manejar funcionalidad de copiado post-renderizado
  useEffect(() => {
    if (!articulo) return;

    // Asegurar que el DOM se haya actualizado con el contenido peligroso
    const timer = setTimeout(() => {
      const botones = document.querySelectorAll('.btn-copiar');
      
      const manejarClick = async (e) => {
        const boton = e.currentTarget;
        const wrapper = boton.closest('.group'); // Usamos .group que es el wrapper que pusimos
        const codigoElement = wrapper?.querySelector('code');
        
        if (codigoElement) {
          const codigo = codigoElement.innerText;
          try {
            await navigator.clipboard.writeText(codigo);
            
            // Feedback Visual (Icono Check)
            boton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            
            setTimeout(() => {
              // Restaurar Icono Original (Clipboard)
              boton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
            }, 2000);
          } catch (err) {
            console.error('Error al copiar:', err);
          }
        }
      };

      botones.forEach(btn => btn.addEventListener('click', manejarClick));

      // Cleanup
      return () => {
        botones.forEach(btn => btn.removeEventListener('click', manejarClick));
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [articulo]);

  if (cargando) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-ciber-verde">
        CARGANDO_ARCHIVO_{id}...
      </div>
    );
  }

  if (!articulo) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-ciber-rosa">
        ERROR_404: ARCHIVO_NO_ENCONTRADO
      </div>
    );
  }

  return (
    <article className="pt-20 md:pt-24 pb-20 max-w-4xl mx-auto px-4 min-h-screen">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-ciber-verde hover:text-white mb-6 md:mb-8 font-mono text-xs md:text-sm transition-colors"
      >
        <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" /> VOLVER_AL_INDICE
      </Link>
      
      <header className="mb-8 md:mb-10 text-center relative overflow-hidden p-4 md:p-8 rounded-lg border border-ciber-verde/20 bg-ciber-gris/20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ciber-negro via-ciber-verde to-ciber-negro opacity-50"></div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-4 text-xs font-mono text-gray-400">
          <span className="flex items-center justify-center gap-1">
            <Calendar className="w-3 h-3" /> {articulo.fecha}
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center justify-center gap-1 text-ciber-cian">
            <Terminal className="w-3 h-3" /> {articulo.categoria}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 font-mono tracking-tight leading-tight">
          {articulo.titulo}
        </h1>

        <div className="flex flex-wrap justify-center gap-2">
          {articulo.tags.map(tag => (
            <span key={tag} className="flex items-center gap-1 px-3 py-1 rounded-full bg-ciber-verde/10 text-ciber-verde text-xs border border-ciber-verde/30">
              <Tag className="w-3 h-3" /> {tag}
            </span>
          ))}
        </div>
      </header>
      
      {/* Botón de Like Superior */}
      <div className="flex justify-center mb-8">
        <BotonMeGusta idArticulo={id} />
      </div>

      <div className="prose prose-invert prose-green max-w-none font-sans text-gray-300 leading-relaxed">
        {/* En una app real, esto sería Markdown renderizado */}
        <p className="text-lg text-gray-200 border-l-4 border-ciber-verde pl-4 italic mb-8 bg-ciber-gris/30 py-4 pr-4 rounded-r">
          {articulo.resumen}
        </p>
        
        <div 
          className="whitespace-pre-wrap font-mono text-sm bg-black/50 p-6 rounded border border-gray-800"
          dangerouslySetInnerHTML={{ __html: articulo.contenido + '\n\n// FIN DEL ARCHIVO' }}
        />
        
        <div className="mt-12 flex justify-center">
          <BotonMeGusta idArticulo={id} />
        </div>
      </div>
    </article>
  );
};

export default PaginaArticulo;
