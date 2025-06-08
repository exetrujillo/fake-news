// src/components/EducationNav.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { teoriaData } from '@/lib/data';

interface EducationNavProps {
  articleSlug: string;
}

export default function EducationNav({ articleSlug }: EducationNavProps) {
  const pathname = usePathname();

  const navLinks = [
    { id: 'la-noticia', title: 'La Noticia', href: `/noticia/${articleSlug}` },
    ...teoriaData.map(item => ({...item, href: `/teoria/${item.id}`})),
  ];

  return (
    <nav className="sticky top-0 bg-blue-600 text-white z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/*
          CONTENEDOR DE ENLACES MODIFICADO:
          - flex-wrap: Permite que los enlaces pasen a la siguiente línea.
          - justify-center: Centra cada línea de enlaces.
          - py-1: Añade un pequeño padding vertical para que no se vea apretado.
          - Se eliminó overflow-x-auto.
        */}
        <div className="flex flex-wrap justify-center items-center py-1">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                // CLASES RESPONSIVE PARA CADA ENLACE
                className={`
                  m-1 py-2 px-3 rounded-md transition-colors
                  font-medium whitespace-nowrap
                  text-xs sm:text-sm  // Letra más pequeña en móvil (xs), y normal a partir de 'sm'
                  ${
                    isActive
                      ? 'bg-blue-800' // Estado activo más limpio para un menú multi-línea
                      : 'hover:bg-blue-700'
                  }
                `}
              >
                {item.title.toUpperCase()}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}