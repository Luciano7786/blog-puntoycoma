import React, { useState, useEffect } from 'react';
import { db } from '../../lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { Eye, Heart } from 'lucide-react';

const EstadisticasGlobales = () => {
  const [stats, setStats] = useState({ visitas: 0, totalLikes: 0 });

  useEffect(() => {
    const docRef = doc(db, "estadisticas", "general");
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setStats({
          visitas: data.visitas || 0,
          totalLikes: data.totalLikes || 0
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-center gap-6 mb-12">
      {/* Tarjeta de Visitas */}
      <div className="flex items-center gap-3 px-5 py-2 rounded-lg bg-ciber-negro border border-ciber-verde/30 shadow-[0_0_10px_rgba(0,255,65,0.1)]">
        <div className="p-2 rounded-full bg-ciber-verde/10 text-ciber-verde">
          <Eye className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">VISITAS</span>
          <span className="text-xl font-bold text-white font-mono leading-none">
            {stats.visitas.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Tarjeta de Likes Totales */}
      <div className="flex items-center gap-3 px-5 py-2 rounded-lg bg-ciber-negro border border-ciber-rosa/30 shadow-[0_0_10px_rgba(255,0,128,0.1)]">
        <div className="p-2 rounded-full bg-ciber-rosa/10 text-ciber-rosa">
          <Heart className="w-4 h-4 fill-current" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">TOTAL LIKES</span>
          <span className="text-xl font-bold text-white font-mono leading-none">
            {stats.totalLikes.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EstadisticasGlobales;
