import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <button className="bg-cyan-400 text-gray-800 px-4 py-1 rounded flex items-center">
              Selecciona tu región
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span>Newsletters De Vío Vío</span>
            </button>
            <button className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Ingresa a Comunidad De Vío Vío</span>
            </button>
            <button className="bg-orange-500 px-4 py-1 rounded flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-2.21-.895-4.21-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 12a5.983 5.983 0 01-.757 2.829 1 1 0 11-1.415-1.415A3.987 3.987 0 0013 12a3.987 3.987 0 00-.172-1.414 1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
              Escuchar Radio De Vío Vío
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 mr-3">
                <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  {/* Círculos concéntricos */}
                  <circle cx="200" cy="200" r="160" fill="none" stroke="#2563eb" strokeWidth="20"/>
                  <circle cx="200" cy="200" r="120" fill="none" stroke="#2563eb" strokeWidth="15"/>
                  <circle cx="200" cy="200" r="80" fill="none" stroke="#2563eb" strokeWidth="12"/>
                  <circle cx="200" cy="200" r="15" fill="#2563eb"/>
                  
                  {/* Línea vertical central */}
                  <line x1="200" y1="215" x2="200" y2="380" stroke="#2563eb" strokeWidth="8"/>
                </svg>
              </div>
              <span className="text-2xl font-light text-gray-700">deviovio.cl</span>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button className="p-2">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-2">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
              <button className="p-2">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8">
              <Link href="#" className="py-4 text-gray-700 hover:text-blue-600 font-medium">
                PODCASTS
              </Link>
              <Link href="#" className="py-4 text-gray-700 hover:text-blue-600 font-medium">
                NACIONAL
              </Link>
              <Link href="#" className="py-4 text-gray-700 hover:text-blue-600 font-medium">
                INTERNACIONAL
              </Link>
              <Link href="#" className="py-4 text-gray-700 hover:text-blue-600 font-medium">
                ECONOMÍA
              </Link>
              <Link href="#" className="py-4 text-gray-700 hover:text-blue-600 font-medium">
                DEPORTES
              </Link>
              <Link href="#" className="py-4 text-gray-700 hover:text-blue-600 font-medium">
                TENDENCIAS
              </Link>
              <Link href="#" className="py-4 text-gray-700 hover:text-blue-600 font-medium">
                OPINIÓN
              </Link>
              <Link href="#" className="py-4 text-gray-700 hover:text-blue-600 font-medium">
                DVVL INVESTIGA
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                <div className="w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">
                  dv
                </div>
                TV
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                dvvl en 5'
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article */}
          <div className="lg:col-span-2">
            
            <div className="mb-6">
              <div className="relative w-full h-120 mb-6 bg-gray-200 rounded-lg overflow-hidden">
                {/* Placeholder para imagen principal - puedes reemplazar con tu imagen */}
                {/* Imagen principal de la noticia */}
                <div className="w-full h-200 mb-6 bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/images/panuelo-verde.jpeg" 
                    alt="Hombre con pañuelo verde de aborto legal" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Karol Dance rompe con su pasado: después de años en contra, ahora respalda la despenalización del aborto en Chile
              </h1>
              
              <div className="text-gray-600 text-base leading-relaxed">
                <p className="mb-4">
                En una grabación filtrada que circula esta mañana en redes sociales, Karol Dance afirma haber cambiado radicalmente su postura sobre el aborto: asegura haber reflexionado tras "profundas conversaciones con médicos y mujeres que han vivido estas situaciones".
                </p>
                <p className="mb-4">
                Anuncia que apoyará oficialmente la despenalización en el Congreso. La declaración, que habría ocurrido en un acto privado el pasado 28 de mayo, desata un fuerte revuelo entre sus seguidores más conservadores y genera polémica a nivel nacional.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Video Player */}
            <div className="bg-gray-900 rounded-lg mb-6">
              <div className="relative">
                <div className="w-full h-48 bg-gray-700 rounded-t-lg flex items-center justify-center">
                  <span className="text-white">Video Player</span>
                </div>
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  DEVIOVIOTV
                </div>
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  EN VIVO
                </div>
                <div className="absolute bottom-2 right-2 text-white text-sm">
                  11:48
                </div>
              </div>
            </div>

            {/* Opinion Section */}
            <div className="bg-white border-t-4 border-blue-600 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                OPINIÓN
              </h3>
              
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 bg-gray-300 rounded-full mb-4 overflow-hidden">
                  {/* Placeholder para foto del autor */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
                </div>
                <p className="text-center">
                  <span className="text-sm text-gray-600">por </span>
                  <span className="text-blue-600 font-medium">Cosme Fulanito</span>
                </p>
                <p className="text-xs text-gray-500 text-center mt-1">
                  Experto en política intergaláctica
                </p>
              </div>
              
              <h4 className="text-lg font-bold text-gray-900 text-center leading-tight">
                Un fiasco interplanetario: Lo que el gobierno no quiere decirte
              </h4>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © 2025 DeVioVioChile - Sitio educativo sobre fake news - Por Exequiel Trujillo Escobar
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

