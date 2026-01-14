import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Menu, X, Code2 } from 'lucide-react';

const BarraNavegacion = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-ciber-negro/90 backdrop-blur-sm border-b border-ciber-verde/20 shadow-neon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Terminal className="h-6 w-6 text-ciber-verde group-hover:text-ciber-rosa transition-colors" />
            <span className="font-mono text-xl font-bold tracking-wider text-white">
              punto<span className="text-ciber-verde">;</span>coma
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink to="/">INICIO</NavLink>
              <NavLink to="/sobre-mi">SOBRE_MÍ</NavLink>
              <div className="px-3 py-1 border border-ciber-verde/50 rounded text-xs font-mono text-ciber-verde animate-pulse">
                STATUS: ONLINE
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="text-ciber-verde hover:text-white p-2"
            >
              {menuAbierto ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {menuAbierto && (
        <div className="md:hidden bg-ciber-gris border-b border-ciber-verde">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" onClick={() => setMenuAbierto(false)}>INICIO</MobileNavLink>
            <MobileNavLink to="/sobre-mi" onClick={() => setMenuAbierto(false)}>SOBRE_MÍ</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-ciber-verde hover:text-shadow-neon px-3 py-2 rounded-md text-sm font-mono transition-all duration-300"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-gray-300 hover:text-ciber-verde block px-4 py-4 rounded-md text-lg font-mono border-b border-ciber-verde/10 last:border-0"
  >
    {">"} {children}
  </Link>
);

export default BarraNavegacion;
