// src/components/visuals/CausesEcosystem.tsx
import React from 'react';

// Sub-componente para cada elemento del ecosistema
const EcosystemItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex flex-col items-center text-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
    <div className="text-blue-600 mb-2">{icon}</div>
    <span className="text-sm font-semibold text-gray-700">{label}</span>
  </div>
);

export default function CausesEcosystem() {
  return (
    <div className="my-12 p-6 bg-gray-100 rounded-xl border border-gray-200">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
        El Ecosistema Digital: Un "Caldo de Cultivo" Perfecto
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <EcosystemItem
          icon={
            // Ícono de "Redes Sociales"
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 4.486 2.25 2.25 0 000-4.486zM11.96 15.247a2.25 2.25 0 100 4.486 2.25 2.25 0 000-4.486zM16.703 10.907a2.25 2.25 0 100 4.486 2.25 2.25 0 000-4.486z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
          }
          label="Plataformas Digitales"
        />
        <EcosystemItem
          icon={
            // Ícono de "Velocidad"
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          }
          label="Alta Velocidad de Difusión"
        />
        <EcosystemItem
          icon={
            // Ícono de "Algoritmos"
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
          }
          label="Algoritmos de Recomendación"
        />
        <EcosystemItem
          icon={
            // Ícono de "Globalización"
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0112 13.5c-2.998 0-5.74-1.1-7.843-2.918" />
            </svg>
          }
          label="Conectividad Global (TIC)"
        />
      </div>
    </div>
  );
}