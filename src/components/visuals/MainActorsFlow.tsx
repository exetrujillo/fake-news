// src/components/visuals/MainActorsFlow.tsx
import React from 'react';

// Nodo para cada actor en el flujo
const ActorNode = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex-1 text-center p-4">
    {/* Ajustamos el contenedor del ícono para que las clases de tamaño de Tailwind funcionen */}
    <div className="flex justify-center items-center mb-3 text-blue-600 w-16 h-16 mx-auto">
        {icon}
    </div>
    <h4 className="font-bold text-lg text-gray-900">{title}</h4>
    <p className="text-sm text-gray-600 mt-1">{description}</p>
  </div>
);

// Flecha para conectar los nodos (sin cambios)
const FlowArrow = () => (
  <div className="hidden md:flex items-center justify-center text-gray-300">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
  </div>
);

export default function MainActorsFlow() {
  return (
    <div className="my-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">El Flujo de la Desinformación</h3>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* --- NODO 1: Creadores --- */}
        <ActorNode
          icon={
            // SVG 1: Limpiado y adaptado
            <svg viewBox="0 0 50.8 50.8" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.087">
                    <path d="m38.894 28.575-28.575 6.35m-2.381-2.381a17.278 17.278 0 0 1 4.283-9.745 17.278 17.278 0 0 1 9.21-5.336 17.274 17.274 0 0 1 10.4 1.047 17.272 17.272 0 0 1 7.857 6.89" transform="matrix(1.0278 0 0 1.0291 .109 -1.556)" />
                    <path d="M29.596 29.676a2.412 2.412 0 0 1-.098-1.995 2.411 2.411 0 0 1 1.459-1.365 2.411 2.411 0 0 1 1.984.229 2.412 2.412 0 0 1 1.11 1.66c.037.244.037.493 0 .736" transform="matrix(1.0278 0 0 1.0291 .109 -1.556)" />
                    <g transform="matrix(1.0278 0 0 1.0291 .109 -1.556)">
                        <circle cx="18.256" cy="28.575" r="2.381" />
                        <circle cx="41.275" cy="27.781" r="2.381" />
                        <circle cx="7.938" cy="35.719" r="2.381" />
                        <path d="m15.081 19.844-3.969-5.556m23.813 5.556 3.969-5.556" />
                    </g>
                </g>
            </svg>
          }
          title="1. Creadores"
          description="Generan contenido falso con fines políticos, económicos o ideológicos."
        />

        <FlowArrow />

        {/* --- NODO 2: Diseminadores --- */}
        <ActorNode
          icon={
            // SVG 2: Limpiado y adaptado
            <svg viewBox="0 0 460.103 460.103" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full">
              <g>
                <path d="M80.462,383.106c-14.083,0-25.499,37.416-25.499,51.499c0,14.082,11.416,25.499,25.499,25.499 s25.499-11.416,25.499-25.499C105.961,420.522,94.545,383.106,80.462,383.106z" />
                <path d="M183.277,319.109c-14.083,0-25.499,37.416-25.499,51.499c0,14.083,11.416,25.499,25.499,25.499 s25.499-11.416,25.499-25.499C208.776,356.525,197.359,319.109,183.277,319.109z" />
                <path d="M115.988,235.027c-14.083,0-25.499,37.416-25.499,51.499c0,14.082,11.416,25.499,25.499,25.499 c14.082,0,25.499-11.416,25.499-25.499C141.487,272.443,130.07,235.027,115.988,235.027z" />
                <path d="M390.14,0H129.153c-8.284,0-15,6.716-15,15v123.889c0,2.862,0.818,5.664,2.359,8.076l58.418,91.434 c2.756,4.314,7.521,6.924,12.641,6.924H390.14c8.284,0,15-6.716,15-15V15C405.14,6.716,398.424,0,390.14,0z" />
              </g>
            </svg>
          }
          title="2. Diseminadores"
          description="Plataformas, bots y personas que amplifican y propagan el mensaje."
        />

        <FlowArrow />
        
        {/* --- NODO 3: Consumidores --- */}
        <ActorNode
          icon={
            // SVG 3: Limpiado y adaptado
            <svg viewBox="0 0 496 496" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full">
              <g>
                <path d="M366.56,319.488L304,305.584V296h32h8h64V32h-64h-8h-0.824C323.8,12.464,302.76,0,280,0 c-11.384,0-22.312,3.2-31.872,8.736C238.672,3.216,227.72,0,216,0c-23.624,0-44.256,12.904-55.344,32H88v264h104v9.584 l-62.56,13.896C81.488,330.144,48,371.88,48,421.008V496h400v-74.992C448,371.88,414.512,330.144,366.56,319.488z M376,48h16v216 l-16-12V48z M386.672,280h-37.344L368,266L386.672,280z M344,48h16v204l-16,12V48z M304.616,322.104l-0.312,0.088l13.616,47.664 l-31.216,6.24l15.912-54.44L304.616,322.104z M280,16c13.728,0,26.688,6.016,35.672,16h-44.328 c-2.608-4.488-5.728-8.64-9.312-12.36C267.672,17.336,273.736,16,280,16z M248.064,28.376c1.264,1.144,2.472,2.352,3.616,3.624 h-7.344C245.496,30.704,246.768,29.528,248.064,28.376z M216,16c6.44,0,12.576,1.296,18.2,3.608 c-3.6,3.696-6.736,7.848-9.376,12.392H180.32C189.12,22.208,201.832,16,216,16z M104,280V48h50.104 C152.776,53.128,152,58.464,152,64v16h16V64c0-5.616,1.024-10.984,2.8-16h90.4c1.776,5.016,2.8,10.384,2.8,16v16h16V64 c0-5.536-0.776-10.872-2.104-16H328v232h-24h-16h-80h-16H104z M191.384,322.112l2-0.448l15.912,54.44l-31.216-6.24l13.616-47.664 L191.384,322.112z M144,480v-32h-16v32H64v-58.992c0-41.56,28.336-76.888,68.904-85.896l41.064-9.128l-16.048,56.16l37.376,7.48 l-21.368,35.624L228.688,480H144z M194.072,422.76l19.408-32.344l21.376,73.128L194.072,422.76z M208,314.632V296h80v18.632 L248,451.48L208,314.632z M282.52,390.416l19.408,32.344l-40.784,40.784L282.52,390.416z M432,480h-64v-32h-16v32h-84.688 l54.76-54.76l-21.368-35.624l37.376-7.48l-16.048-56.16l41.064,9.128C403.664,344.12,432,379.448,432,421.008V480z" />
              </g>
            </svg>
          }
          title="3. Consumidores"
          description="La audiencia que recibe, cree (o no) y potencialmente vuelve a compartir la información."
        />
      </div>
    </div>
  );
}