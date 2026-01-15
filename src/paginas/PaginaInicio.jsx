import React, { useState, useEffect } from 'react';
import SelectorCategorias from '../componentes/navegacion/SelectorCategorias';
import TarjetaArticulo from '../componentes/blog/TarjetaArticulo';
import { usarCategoria } from '../contextos/CategoriaContexto';
import { obtenerArticulosPorCategoria } from '../servicios/blogServicio';
import { Loader2 } from 'lucide-react';
import EstadisticasGlobales from '../componentes/ui/EstadisticasGlobales';
import { db } from '../lib/firebase';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';

const PaginaInicio = () => {
  const { categoriaActiva } = usarCategoria();
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      setCargando(true);
      try {
        const datos = await obtenerArticulosPorCategoria(categoriaActiva);
        setArticulos(datos);
      } catch (error) {
        console.error("Error cargando artículos:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, [categoriaActiva]);

  // Visit Tracker
  useEffect(() => {
    const registrarVisita = async () => {
      // Evitar contar visitas en desarrollo (localhost)
      const esLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      if (esLocal) return;

      const visitada = sessionStorage.getItem('visita_registrada');
      if (!visitada) {
        sessionStorage.setItem('visita_registrada', 'true');
        
        const docRef = doc(db, "estadisticas", "general");
        try {
          const docSnap = await getDoc(docRef);
          if (!docSnap.exists()) {
            await setDoc(docRef, { visitas: 1, totalLikes: 0 });
          } else {
            await updateDoc(docRef, { visitas: increment(1) });
          }
        } catch (error) {
          console.error("Error registrando visita:", error);
        }
      }
    };
    registrarVisita();
  }, []);

  return (
    <div className="pt-20 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white mb-4 animate-pulse">
          punto<span className="text-ciber-verde">;</span>coma
        </h1>
        <p className="text-gray-400 font-mono text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Tu espacio para aprender y comprender de una forma sencilla fundamentos de informática, redes, sistemas operativos y tecnologías de desarrollo web.
        </p>
      </div>

      <EstadisticasGlobales />

      <SelectorCategorias />

      {cargando ? (
        <div className="flex justify-center items-center h-64 text-ciber-verde">
          <Loader2 className="w-10 h-10 animate-spin" />
          <span className="ml-4 font-mono animate-pulse">CARGANDO_DATOS...</span>
        </div>
      ) : (
        <>
          {articulos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articulos.map(articulo => (
                <TarjetaArticulo key={articulo.id} articulo={articulo} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-ciber-gris/30 rounded border border-dashed border-gray-700">
              <p className="text-gray-500 font-mono text-lg">
                [NO DATA FOUND]
              </p>
              <p className="text-sm text-gray-600 mt-2">
                No se encontraron registros en esta categoría.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PaginaInicio;
