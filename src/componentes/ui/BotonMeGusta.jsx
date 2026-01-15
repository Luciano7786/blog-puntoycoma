import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { db } from '../../lib/firebase';
import { doc, onSnapshot, updateDoc, increment, setDoc, getDoc } from 'firebase/firestore';

const BotonMeGusta = ({ idArticulo }) => {
  const [likes, setLikes] = useState(0);
  const [leGusto, setLeGusto] = useState(false);
  const [animando, setAnimando] = useState(false);

  useEffect(() => {
    // 1. Cargar estado local (si el usuario ya dio like desde este navegador)
    const likeGuardado = localStorage.getItem(`blog_like_${idArticulo}`);
    if (likeGuardado) {
      setLeGusto(true);
    }

    // 2. Suscribirse a cambios en Firestore en tiempo real
    const docRef = doc(db, "likes", idArticulo);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setLikes(docSnap.data().count || 0);
      } else {
        // Si el documento no existe, lo inicializamos visualmente en 0
        setLikes(0);
      }
    });

    return () => unsubscribe();
  }, [idArticulo]);

  const manejarClick = async () => {
    if (leGusto) return; // Evitar múltiples likes del mismo usuario

    setAnimando(true);
    setLeGusto(true);
    localStorage.setItem(`blog_like_${idArticulo}`, 'true');

    // Referencia al documento en Firestore
    const docRef = doc(db, "likes", idArticulo);

    try {
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        // Si es el primer like de la historia para este artículo, creamos el documento
        await setDoc(docRef, { count: 1 });
      } else {
        // Si ya existe, incrementamos atómicamente
        await updateDoc(docRef, {
          count: increment(1)
        });
      }

      // 3. Incrementar también el contador GLOBAL de likes
      const statsRef = doc(db, "estadisticas", "general");
      const statsSnap = await getDoc(statsRef);
      if (!statsSnap.exists()) {
        await setDoc(statsRef, { visitas: 0, totalLikes: 1 });
      } else {
        await updateDoc(statsRef, {
          totalLikes: increment(1)
        });
      }
    } catch (error) {
      console.error("Error al dar like:", error);
      // Revertir estado local si falla (opcional, por simplicidad lo dejamos así por ahora)
    }

    // Detener animación después de un momento
    setTimeout(() => setAnimando(false), 1000);
  };

  return (
    <button 
      onClick={manejarClick}
      disabled={leGusto}
      className={`
        group relative flex items-center gap-3 px-6 py-3 rounded-full font-mono transition-all duration-300
        ${leGusto 
          ? 'bg-ciber-rosa/10 border border-ciber-rosa text-ciber-rosa cursor-default' 
          : 'bg-black/50 border border-ciber-verde text-ciber-verde hover:bg-ciber-verde hover:text-black cursor-pointer shadow-[0_0_15px_rgba(0,255,65,0.2)] hover:shadow-[0_0_25px_rgba(0,255,65,0.6)]'
        }
      `}
    >
      <div className={`relative ${animando ? 'animate-bounce' : ''}`}>
        <Heart 
          className={`w-6 h-6 ${leGusto ? 'fill-current' : 'group-hover:scale-110 transition-transform'}`} 
        />
        {animando && (
          <span className="absolute -top-8 -left-2 text-2xl animate-ping opacity-75">❤️</span>
        )}
      </div>
      
      <span className="text-lg font-bold tracking-wider">
        {likes} {likes === 1 ? 'LIKE' : 'LIKES'}
      </span>

      {/* Efecto de partículas (CSS simple) */}
      {animando && (
        <>
          <span className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-100"></span>
          <span className="absolute bottom-0 left-0 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-200"></span>
        </>
      )}
    </button>
  );
};

export default BotonMeGusta;
