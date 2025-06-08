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
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-2 md:space-x-6 overflow-x-auto">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`py-3 px-3 text-sm font-medium whitespace-nowrap transition-colors rounded-t-sm ${
                  isActive
                    ? 'bg-blue-800 border-b-2 border-white'
                    : 'hover:bg-blue-700'
                }`}
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