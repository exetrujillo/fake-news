// src/components/visuals/EffectsImpact.tsx
import React from 'react';

const EffectCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-start space-x-4 h-full">
    <div className="flex-shrink-0 text-red-500 mt-1">{icon}</div>
    <div>
      <h4 className="font-bold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

export default function EffectsImpact() {
  return (
    <div className="my-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Efectos a Nivel Individual y Social</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* --- COLUMNA 1: IMPACTO INDIVIDUAL --- */}
        <div>
          <h4 className="text-xl font-semibold text-center text-blue-700 pb-2 border-b-2 border-blue-200 mb-4">Impacto Individual</h4>
          {/* Usamos grid para las tarjetas para que todas tengan la misma altura */}
          <div className="grid grid-rows-3 gap-4">
            <EffectCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>}
              title="Impactos Emocionales"
              description="Genera miedo, ansiedad, ira y desconfianza."
            />
            <EffectCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.5 13.5h.75a.75.75 0 010 1.5h-.75a.75.75 0 010-1.5z" /></svg>}
              title="Alteración de Creencias"
              description="Modifica actitudes y opiniones sobre temas importantes."
            />
            <EffectCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.75 9.75" /></svg>}
              title="Falsos Recuerdos"
              description="Puede implantar recuerdos de eventos que nunca ocurrieron."
            />
          </div>
        </div>

        {/* --- COLUMNA 2: IMPACTO SOCIAL --- */}
        <div>
          <h4 className="text-xl font-semibold text-center text-red-700 pb-2 border-b-2 border-red-200 mb-4">Impacto Social</h4>
          <div className="grid grid-rows-3 gap-4">
            <EffectCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>}
              title="Polarización Social"
              description="Aumenta la división y el conflicto entre diferentes grupos sociales."
            />
            <EffectCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" /></svg>}
              title="Influencia Electoral"
              description="Puede afectar los resultados de elecciones y la opinión pública."
            />
            <EffectCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>}
              title="Nihilismo Cognoscitivo"
              description="La sobreexposición a información contradictoria erosiona la capacidad de discernir la verdad."
            />
          </div>
        </div>

      </div>
    </div>
  );
}