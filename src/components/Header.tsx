// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white hidden md:block">
        {/* ... (código de la Top Bar, sin cambios) ... */}
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <button className="bg-cyan-400 text-gray-800 px-4 py-1 rounded flex items-center">
              Selecciona tu región
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center"><svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg></div>
              <span>Newsletters De Vío Vío</span>
            </button>
            <button className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg></div>
              <span>Ingresa a Comunidad De Vío Vío</span>
            </button>
            <button className="bg-orange-500 px-4 py-1 rounded flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-2.21-.895-4.21-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 12a5.983 5.983 0 01-.757 2.829 1 1 0 11-1.415-1.415A3.987 3.987 0 0013 12a3.987 3.987 0 00-.172-1.414 1 1 0 010-1.415z" clipRule="evenodd" /></svg>
              Escuchar Radio De Vío Vío
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center cursor-pointer">
              <div className="w-12 h-12 mr-3">
                {/* SVG no se rompe, está encapsulado y es seguro de mover */}
                <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="160" fill="none" stroke="#2563eb" strokeWidth="20"/>
                  <circle cx="200" cy="200" r="120" fill="none" stroke="#2563eb" strokeWidth="15"/>
                  <circle cx="200" cy="200" r="80" fill="none" stroke="#2563eb" strokeWidth="12"/>
                  <circle cx="200" cy="200" r="15" fill="#2563eb"/>
                  <line x1="200" y1="215" x2="200" y2="380" stroke="#2563eb" strokeWidth="8"/>
                </svg>
              </div>
              <span className="text-2xl font-light text-gray-700">deviovio.cl</span>
            </Link>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button className="p-2" aria-label="Buscar en el sitio">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
              <button className="p-2" aria-label="Activar modo oscuro">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              </button>
              <button className="p-2" aria-label="Abrir menú de navegación">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;