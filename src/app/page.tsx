// src/app/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// NOTA: He eliminado el div wrapper <div className="min-h-screen bg-white"> y el <main>
// porque el layout (`layout.tsx`) ya proporciona la estructura base de la página.
// Los componentes de página en el App Router deben devolver directamente su contenido.

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8 overflow-x-auto">
              <Link href="#" className="py-4 text-gray-700 hover:text-blue-600 font-medium">PODCASTS</Link>
              <Link href="#" className="py-4 text-gray-700 hover:text-blue-600 font-medium">NACIONAL</Link>
              <Link href="#" className="py-4 text-gray-700 hover:text-blue-600 font-medium">INTERNACIONAL</Link>
              <Link href="#" className="py-4 text-gray-700 hover:text-blue-600 font-medium">ECONOMÍA</Link>
              <Link href="#" className="py-4 text-gray-700 hover:text-blue-600 font-medium">DEPORTES</Link>
              <Link href="#" className="py-4 text-gray-700 hover:text-blue-600 font-medium">TENDENCIAS</Link>
              <Link href="#" className="py-4 text-gray-700 hover:text-blue-600 font-medium">OPINIÓN</Link>
              <Link href="#" className="py-4 text-gray-700 hover:text-blue-600 font-medium">DVVL INVESTIGA</Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
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
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article */}
          <div className="lg:col-span-2">
            
            <Link href="/noticia/karol-dance-apoya-aborto" className="block group">
              <div className="relative w-full h-96 mb-6 rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/images/panuelo-verde.jpg"
                  // CAMBIO: Alt text actualizado para mayor consistencia.
                  alt="Hombre con pañuelo verde de aborto legal, elemento de una noticia ficticia."
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* CAMBIO: Título actualizado para coincidir con la versión sensacionalista del artículo. */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Giro Radical: Karol Dance, ícono de la derecha juvenil, ahora respalda la despenalización del aborto en Chile
              </h1>

              {/* Bloque de metadatos con la etiqueta "En Tendencia" */}
              <div className="flex items-center space-x-4 mt-2 mb-4 text-sm">
                <span className="text-gray-500">Publicado: 08 de Junio, 2025</span>
                <span className="flex items-center text-red-600 font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.934l-6.794 12.42a1 1 0 00.385 1.45l.007.003.002.001l.002.001l.003.001l.005.002l.001.001l.001.001l.001.001l.001.001c.114.034.229.051.345.051c.345 0 .69-.129.956-.385l6.794-12.42a1 1 0 00-.385-1.45zM12.395 2.553L10.293 6.5h4.414L12.395 2.553zM10 17a1 1 0 01-1-1v-4h-3a1 1 0 110-2h3V6a1 1 0 112 0v4h3a1 1 0 110 2h-3v4a1 1 0 01-1 1z" clipRule="evenodd" />
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"></path>
                  </svg>
                  EN TENDENCIA
                </span>
              </div>
              
              {/* CAMBIO: Bajada actualizada para incluir la urgencia y el elemento de conspiración ("presiones políticas"). */}
              <div className="text-gray-600 text-base leading-relaxed">
                <p>
                  En una grabación filtrada que circula explosivamente esta mañana en redes sociales, el comunicador afirma haber cambiado radicalmente su postura. Fuentes cercanas hablan de "presiones políticas".
                </p>
              </div>
            </Link>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* ... (el sidebar se mantiene igual) ... */}
            <div className="bg-gray-900 rounded-lg mb-6">
              <div className="relative"><div className="w-full h-48 bg-gray-700 rounded-t-lg flex items-center justify-center"><span className="text-white">Video Player</span></div><div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">DEVIOVIOTV</div><div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">EN VIVO</div><div className="absolute bottom-2 right-2 text-white text-sm">11:48</div></div>
            </div>
            <div className="bg-white border-t-4 border-blue-600 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">OPINIÓN</h3>
              <div className="flex flex-col items-center mb-4"><div className="w-20 h-20 bg-gray-300 rounded-full mb-4 overflow-hidden"><div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600"></div></div><p className="text-center"><span className="text-sm text-gray-600">por </span><span className="text-blue-600 font-medium">Cosme Fulanito</span></p><p className="text-xs text-gray-500 text-center mt-1">Experto en política intergaláctica</p></div>
              <h4 className="text-lg font-bold text-gray-900 text-center leading-tight">Un fiasco interplanetario: Lo que el gobierno no quiere decirte</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}