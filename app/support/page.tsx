"use client";

import React from 'react';
import Link from 'next/link';

const Support = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 mt-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pusat Dukungan</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami siap membantu Anda dengan segala pertanyaan dan masalah terkait layanan kami. 
            Pilih salah satu opsi di bawah untuk mendapatkan bantuan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-green-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition duration-300">
            <div className="mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Email Support</h2>
            <p className="text-gray-600 mb-6">
              Hubungi tim dukungan kami melalui email untuk pertanyaan umum atau masalah yang tidak mendesak.
            </p>
            <a href="mailto:teknotrenhouse@gmail.com" className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
              teknotrenhouse@gmail.com
            </a>
          </div>

          <div className="bg-green-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition duration-300">
            <div className="mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Kontak Telepon</h2>
            <p className="text-gray-600 mb-6">
              Untuk bantuan mendesak, Anda dapat menghubungi kami melalui telepon pada jam kerja (Senin-Jumat, 9.00 - 17.00 WIB).
            </p>
            <a href="https://wa.me/6285748783507" className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
              Mulai Chat
            </a>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
          <p className="text-gray-600 mb-8">
            Temukan jawaban untuk pertanyaan yang sering diajukan di halaman FAQ kami.
          </p>
          <Link href="/faq" className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
            Kunjungi FAQ
          </Link>
        </div>

        <div className="bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Form Permintaan Dukungan</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
              <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
              <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Support;
