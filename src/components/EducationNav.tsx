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
        <div className="flex flex-wrap justify-center items-center py-1 gap-1 leading-tight">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`
                  py-1 px-1.5 sm:py-2 sm:px-3 rounded-md transition-colors
                  font-medium whitespace-nowrap
                  text-[10px] sm:text-sm
                  leading-tight
                  ${
                    isActive
                      ? 'bg-blue-800'
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