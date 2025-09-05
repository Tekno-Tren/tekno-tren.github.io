import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { blogPosts } from '@/data/blog';

// Import the client component with dynamic import to avoid SSR
const BlogContent = dynamic(() => import('@/components/blog/BlogContent'), {
  ssr: false,
});

export const metadata = {
  title: 'Blog | Tekno Tren',
  description: 'Artikel dan berita terbaru tentang teknologi, pengembangan web, dan digital marketing dari Tekno Tren.',
};

const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-screen py-12 mt-12 bg-white">
    <div className="container mx-auto px-4 text-center">
      <div className="mb-8">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
      <h2 className="text-xl font-semibold text-gray-700">Loading blog posts...</h2>
      <p className="text-gray-500 mt-2">Please wait while we prepare the latest articles for you.</p>
    </div>
  </div>
);

export default function BlogPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <BlogContent />
    </Suspense>
  );
}
