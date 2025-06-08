// src/components/visuals/OtherActorsGrid.tsx
import React from 'react';

const ActorCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center space-x-4">
    <div className="text-blue-600 flex-shrink-0">{icon}</div>
    <h4 className="font-semibold text-gray-800">{title}</h4>
  </div>
);

export default function OtherActorsGrid() {
  return (
    <div className="my-12">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Otros Actores Clave en el Ecosistema</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ActorCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008H12v-.008z" /></svg>}
          title="Verificadores (Fact-Checkers)"
        />
        <ActorCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /></svg>}
          title="Medios de Comunicación Tradicionales"
        />
        <ActorCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-.07.004-.008.004-.004.002-.003.002-.002.001-.001.001A25.15 25.15 0 015.913 10.147m12.174 0l.07.004.008.004.004.002.003.002.002.001.001.001A25.15 25.15 0 0018.087 10.147M9 12.75a3 3 0 110-6 3 3 0 010 6z" /></svg>}
          title="Académicos e Investigadores"
        />
        <ActorCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6.75h1.5m-1.5 3h1.5m-1.5 3h1.5M6.75 21v-2.25a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 012.25 2.25V21m-2.25-4.5h.008v.008h-.008v-.008z" /></svg>}
          title="Gobiernos y Reguladores"
        />
      </div>
    </div>
  );
}