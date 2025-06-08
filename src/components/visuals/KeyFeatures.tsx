// src/components/visuals/KeyFeatures.tsx

import React from 'react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center flex flex-col items-center">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h4 className="text-lg font-bold text-gray-900">{title}</h4>
    <p className="mt-2 text-gray-600 text-sm">{description}</p>
  </div>
);

export default function KeyFeatures() {
  return (
    <div className="my-12">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Los Dos Ingredientes de una Fake News</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <FeatureCard
          icon={
            // Ícono de máscara (engaño)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 640 512" stroke="none">
              <path d="M320.67 64c-442.6 0-357.57 384-158.46 384 39.9 0 77.47-20.69 101.42-55.86l25.73-37.79c15.66-22.99 46.97-22.99 62.63 0l25.73 37.79C401.66 427.31 439.23 448 479.13 448c189.86 0 290.63-384-158.46-384zM184 308.36c-41.06 0-67.76-25.66-80.08-41.05-5.23-6.53-5.23-16.09 0-22.63 12.32-15.4 39.01-41.05 80.08-41.05s67.76 25.66 80.08 41.05c5.23 6.53 5.23 16.09 0 22.63-12.32 15.4-39.02 41.05-80.08 41.05zm272 0c-41.06 0-67.76-25.66-80.08-41.05-5.23-6.53-5.23-16.09 0-22.63 12.32-15.4 39.01-41.05 80.08-41.05s67.76 25.66 80.08 41.05c5.23 6.53 5.23 16.09 0 22.63-12.32 15.4-39.02 41.05-80.08 41.05z" />
            </svg>
          }
          title="1. Intención de Engañar"
          description="No es un error. Su propósito principal es confundir, manipular la opinión o generar una reacción específica en la audiencia."
        />
        <FeatureCard
          icon={
            // Ícono de "periódico" o "legitimidad"
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          }
          title="2. Apariencia de Legitimidad"
          description="Se disfraza de noticia real. Utiliza un formato, lenguaje y estructura que imita al periodismo serio para ganar credibilidad."
        />
      </div>
    </div>
  );
}