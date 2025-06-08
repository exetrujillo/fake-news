// src/components/visuals/ConceptualizationDiagram.tsx

import React from 'react';

// Un componente para cada círculo del diagrama para no repetir código
const InfoCircle = ({ title, description, color, children }: { title: string, description: string, color: string, children?: React.ReactNode }) => (
  <div className={`relative border-2 ${color} p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    <p className="mt-2 text-gray-600 text-sm">{description}</p>
    {children && <div className="mt-6">{children}</div>}
  </div>
);

export default function ConceptualizationDiagram() {
  return (
    <div className="my-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">El Espectro de la Información Falsa</h2>
      
      {/* Usamos flexbox para alinear los círculos anidados */}
      <div className="flex justify-center items-center">
        
        <InfoCircle 
          title="Misinformation"
          description="Información falsa difundida sin intención de dañar."
          color="border-yellow-400"
        >
          <InfoCircle 
            title="Disinformation"
            description="Información falsa creada y compartida con la intención de engañar o causar daño."
            color="border-orange-500"
          >
            <InfoCircle 
              title="Fake News"
              description="Un tipo de desinformación que imita el formato y estilo de las noticias periodísticas legítimas."
              color="border-red-600"
            />
          </InfoCircle>
        </InfoCircle>
        
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Como ves, las <strong>Fake News</strong> son el tipo más específico y engañoso de <strong>Desinformación</strong>.</p>
        <p>La <strong>Misinformation</strong> es diferente porque carece de la intención maliciosa.</p>
      </div>
    </div>
  );
}