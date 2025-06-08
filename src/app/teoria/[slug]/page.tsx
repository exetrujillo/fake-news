// src/app/teoria/[slug]/page.tsx

import React from 'react';
import { notFound } from 'next/navigation';
import { teoriaData } from '@/lib/data';
import EducationNav from '@/components/EducationNav';

export async function generateStaticParams() {
  return teoriaData.map((item) => ({
    slug: item.id,
  }));
}

// CORRECCIÓN FINAL: Haz la función 'async' y usa 'await'
export default async function TheoryPage({ params }: { params: { slug: string } }) {
  // Primero, 'await' para resolver los params
  const { slug } = await params;

  // Ahora, usa 'slug' como antes
  const theoryItem = teoriaData.find((item) => item.id === slug);

  if (!theoryItem) {
    notFound();
  }
  
  const articleSlug = 'karol-dance-apoya-aborto';

  return (
    <div className="bg-white">
      <EducationNav articleSlug={articleSlug} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <section>
          <h1 className="text-4xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 mb-8">
            {theoryItem.title}
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {theoryItem.content}
          </div>
        </section>
      </div>
    </div>
  );
}