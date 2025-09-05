"use client";

import React from 'react';

const Blog = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-12 mt-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dapatkan informasi terbaru tentang teknologi, pengembangan web, dan tips digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for blog posts */}
          <div className="flex flex-col bg-green-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-gray-200 h-48"></div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">September 5, 2025</p>
              <h3 className="text-xl font-semibold mb-2">Tips Mengoptimalkan Website untuk SEO</h3>
              <p className="text-gray-600 mb-4">
                Pelajari cara meningkatkan peringkat website Anda di mesin pencari dengan teknik SEO terbaru.
              </p>
              <button className="text-green-600 font-medium hover:text-green-800 transition duration-300">
                Baca Selengkapnya
              </button>
            </div>
          </div>

          <div className="flex flex-col bg-green-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-gray-200 h-48"></div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">September 1, 2025</p>
              <h3 className="text-xl font-semibold mb-2">Pentingnya Responsive Design</h3>
              <p className="text-gray-600 mb-4">
                Mengapa desain responsif menjadi kunci keberhasilan website di era mobile-first.
              </p>
              <button className="text-green-600 font-medium hover:text-green-800 transition duration-300">
                Baca Selengkapnya
              </button>
            </div>
          </div>

          <div className="flex flex-col bg-green-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-gray-200 h-48"></div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">August 25, 2025</p>
              <h3 className="text-xl font-semibold mb-2">Tren Digital Marketing 2025</h3>
              <p className="text-gray-600 mb-4">
                Strategi digital marketing terbaru yang perlu Anda terapkan untuk bisnis Anda.
              </p>
              <button className="text-green-600 font-medium hover:text-green-800 transition duration-300">
                Baca Selengkapnya
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
            Lihat Semua Artikel
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
