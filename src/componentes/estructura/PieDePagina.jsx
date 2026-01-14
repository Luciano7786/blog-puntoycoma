import React from 'react';
import { Heart } from 'lucide-react';

const PieDePagina = () => {
  return (
    <footer className="border-t border-ciber-verde/20 bg-ciber-negro mt-auto py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-mono text-gray-500 text-sm">
          © {new Date().getFullYear()} punto;coma. Desarrollado con pasión.
        </p>
        <div className="flex justify-center items-center gap-2 mt-2 text-xs text-gray-600">
          <span>Hecho con</span>
          <Heart className="w-3 h-3 text-ciber-rosa animate-pulse" />
          <span>y mucho Mate</span>
        </div>
      </div>
    </footer>
  );
};

export default PieDePagina;
