import React from 'react';

const BotonNeon = ({ children, onClick, variante = 'verde', className = '' }) => {
  const colores = {
    verde: 'text-ciber-verde border-ciber-verde hover:bg-ciber-verde/10 hover:shadow-neon',
    rosa: 'text-ciber-rosa border-ciber-rosa hover:bg-ciber-rosa/10 hover:shadow-neon-rosa'
  };

  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2 border rounded-sm font-mono font-bold tracking-widest uppercase transition-all duration-300
        ${colores[variante]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default BotonNeon;
