import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BotonSubir = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const subirArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      onClick={subirArriba}
      className="fixed bottom-4 left-4 p-3 bg-ciber-negro border border-ciber-verde rounded-full shadow-[0_0_15px_rgba(0,255,65,0.3)] text-ciber-verde hover:bg-ciber-verde hover:text-ciber-negro transition-all duration-300 z-50 group"
      aria-label="Subir arriba"
    >
      <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
    </button>
  );
};

export default BotonSubir;
