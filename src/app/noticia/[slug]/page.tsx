// src/app/noticia/[slug]/page.tsx

import React from 'react';
import Image from 'next/image';
import EducationNav from '@/components/EducationNav';


export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="bg-white">
      <EducationNav articleSlug={slug} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <article>
          <header className="mb-8">
            {/* Título Sensacionalista y Emocional */}
            {/* Táctica: Apela a emociones fuertes (sorpresa, indignación, validación). Atrae clics y comparte fácil. */}
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Giro Radical: Karol Dance, ícono de la derecha juvenil, ahora respalda la despenalización del aborto en Chile
            </h1>

            {/* Bajada con urgencia y misterio */}
            {/* Táctica: Crea un sentido de urgencia ("esta mañana") y misterio ("grabación filtrada"), explotando la ruta periférica de la persuasión. */}
            <p className="text-lg text-gray-600">
              En una grabación filtrada que circula explosivamente esta mañana en redes sociales, el comunicador afirma haber cambiado radicalmente su postura. Fuentes cercanas hablan de "presiones políticas".
            </p>
            <div className="mt-4 text-sm text-gray-500 flex items-center space-x-4">
              <span>Publicado: 08 de Junio, 2025</span>
              <span>|</span>
              <span>Por: Redacción DeVioVio</span>
              {/* Prueba social falsa */}
              {/* Táctica: Simula popularidad para influir (heurística social). Si "todos" lo están viendo, debe ser importante. */}
              <span className="flex items-center text-red-500 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                Tendencia
              </span>
            </div>
          </header>

          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/panuelo-verde.jpg"
              alt="Hombre con pañuelo verde de aborto legal, elemento de una noticia ficticia."
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            {/* Pie de foto manipulador */}
            {/* Táctica: Contexto falso. La imagen es real, pero el pie de foto le da un significado que no tiene, conectándola con la historia inventada. */}
            <p className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-2 text-sm w-full">
              Karol Lucero en un evento no identificado, donde testigos afirman haberlo visto portando símbolos pro-elección.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-800">
            <p>
              SANTIAGO.- En un giro que nadie vio venir y que ha polarizado al país, el conocido comunicador Karol Lucero, habría manifestado su apoyo a la despenalización del aborto. La información proviene de una supuesta grabación de audio, filtrada anónimamente por un grupo autodenominado "Justicieros Digitales".
              {/* Táctica: Fuente no verificable y anónima. Se le da un nombre atractivo ("Justicieros Digitales") para crear una falsa legitimidad. */}
            </p>
            <p>
              "Uno tiene derecho a cambiar de opinión, a evolucionar. He sido un ignorante por mucho tiempo", se oye decir en el clip de 45 segundos, cuya autenticidad aún no ha sido confirmada por expertos independientes. En el audio, la voz atribuida a Lucero anuncia que "usará su plataforma para apoyar oficialmente la despenalización en el Congreso".
              {/* Táctica: Falsa objetividad. Mencionar que "no ha sido confirmada" da una apariencia de periodismo riguroso, mientras se sigue difundiendo la afirmación principal. */}
            </p>
            
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
              "Es obvio que hay algo más detrás. Lo están presionando desde la izquierda. Siempre supimos que no era de fiar."
              <cite className="block text-right not-italic mt-2 text-sm">— Comentario de usuario en X (anteriormente Twitter)</cite>
            </blockquote>
            {/* Táctica: Uso de "vox populi" para reforzar un sesgo. Se elige un comentario que apoya la narrativa deseada (sesgo de confirmación) y se presenta como si fuera la opinión general. */}

            <p>
              La declaración, que habría ocurrido en un acto privado el pasado 28 de mayo, ha desatado un fuerte revuelo. Un analista político que pidió no ser identificado por "temor a represalias", comentó a este medio que "este tipo de cambios no ocurren de la noche a la mañana. Esto huele a una operación política para limpiar su imagen o para obtener favores del gobierno actual".
              {/* Táctica: Experto anónimo. Se invoca la autoridad de un "analista" sin nombre, lo que impide cualquier verificación y permite inventar cualquier opinión. */}
            </p>

            <p>
              Mientras el equipo de Karol Lucero ha guardado un silencio hermético, figuras del espectro conservador ya han reaccionado. El diputado Juan Alberto Ignacio Domingo Pérez (Partido SocialOpusDei) declaró que "es una traición a los miles de jóvenes que lo veían como un referente". Este medio intentó contactar a Lucero, pero no obtuvo respuesta al cierre de esta edición.
              {/* Táctica: Mezcla de verdad y ficción. Se menciona a una persona real (Lucero) y se le atribuyen acciones y reacciones de personas inventadas ("Diputado Juan Pérez"), haciendo que la historia parezca más creíble. */}
            </p>
          </div>
        </article>
        
        {/* --- AVISO EDUCATIVO --- */}
        <div className="mt-16 pt-8 border-t-4 border-red-500 text-center">
            <h2 className="text-3xl font-bold mb-2 text-red-600">ALERTA: ESTA NOTICIA ES FALSA</h2>
            <p className="text-xl text-gray-700">
                Fue creada para este ejercicio educativo.
            </p>
            <p className="mt-4 text-lg text-gray-800">
                Utiliza la <strong className="text-blue-600">barra de navegación superior</strong> para explorar los conceptos teóricos que explican las <strong className="font-mono bg-gray-200 px-1 rounded">tácticas de desinformación</strong> usadas en este artículo.
            </p>
        </div>
      </div>
    </div>
  );
}