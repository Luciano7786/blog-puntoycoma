import React from 'react';

const PaginaSobreMi = () => {
  return (
    <div className="pt-24 pb-10 max-w-4xl mx-auto px-4 min-h-screen">
       <h1 className="text-3xl md:text-4xl font-bold mb-8 text-ciber-verde tracking-tight">
         Luciano Cirvini | Fullstack Developer
       </h1>
       
       <p className="font-mono text-gray-300 text-lg leading-relaxed max-w-3xl mb-10">
         Soy Desarrollador Fullstack freelance y transformo ideas en productos digitales de alto rendimiento. Combino arquitecturas robustas y mantenibles con interfaces frontend pulidas centradas en UX/UI, utilizando Inteligencia Artificial para optimizar mis flujos de trabajo y entregar soluciones escalables que impulsan el valor del negocio.
       </p>

       <a 
         href="https://lucianojoaquincirvini.web.app" 
         target="_blank" 
         rel="noopener noreferrer"
         className="w-full md:w-auto text-center inline-block px-8 py-4 md:py-3 border border-ciber-verde text-ciber-verde font-mono font-bold tracking-widest hover:bg-ciber-verde hover:text-ciber-negro hover:shadow-neon transition-all duration-300"
       >
         VER_PORTAFOLIO_
       </a>
    </div>
  );
};

export default PaginaSobreMi;
