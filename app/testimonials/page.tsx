"use client";

import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimoni Klien</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dengarkan langsung dari klien yang telah mempercayakan kebutuhan digital mereka kepada kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <TestimonialCard 
            name="Budi Santoso"
            company="PT Maju Jaya"
            position="CEO"
            image="/teams/teams-1.png"
            testimonial="Bekerja sama dengan Tekno Tren adalah pengalaman yang luar biasa. Mereka tidak hanya mengerti kebutuhan bisnis kami, tetapi juga memberikan solusi kreatif yang melampaui ekspektasi. Website baru kami telah meningkatkan konversi penjualan sebesar 40%!"
          />
          
          <TestimonialCard 
            name="Rina Wijaya"
            company="StartUp Indonesia"
            position="Founder"
            image="/teams/teams-2.png"
            testimonial="Sebagai startup yang baru mulai, kami membutuhkan website yang profesional dengan anggaran terbatas. Tekno Tren memberikan solusi yang sempurna - desain modern, fungsional, dan sesuai anggaran. Mereka benar-benar memahami kebutuhan startup!"
          />
          
          <TestimonialCard 
            name="Ahmad Rizal"
            company="Rumah Batik Nusantara"
            position="Marketing Director"
            image="/teams/teams-3.png"
            testimonial="Kami membutuhkan platform e-commerce yang dapat menampilkan keindahan batik tradisional dengan cara modern. Tekno Tren berhasil menciptakan online store yang tidak hanya indah tetapi juga user-friendly. Penjualan online kami meningkat drastis!"
          />
          
          <TestimonialCard 
            name="Dina Putri"
            company="Healthy Living"
            position="Business Owner"
            image="/teams/teams-4.png"
            testimonial="Website lama kami lambat dan tidak mobile-friendly. Tekno Tren membantu kami dengan redesign total yang menghasilkan website cepat, responsif, dan SEO-friendly. Traffic dan engagement pengunjung meningkat signifikan dalam 2 bulan pertama!"
          />
          
          <TestimonialCard 
            name="Reza Pratama"
            company="Edu-Tech Solutions"
            position="Product Manager"
            image="/teams/teams-5.png"
            testimonial="Tim Tekno Tren sangat kolaboratif dan responsif selama pengembangan aplikasi web kami. Mereka memberikan solusi teknis inovatif untuk fitur yang kompleks. Setiap milestone diselesaikan tepat waktu dan sesuai dengan spesifikasi."
          />
          
          <TestimonialCard 
            name="Maya Anggraini"
            company="Fashion Hub"
            position="Creative Director"
            image="/teams/teams-6.png"
            testimonial="Desain UI/UX yang dibuat oleh Tekno Tren sangat mengesankan! Mereka memahami brand kami dan menciptakan tampilan yang sesuai dengan visi kami. Feedback dari pelanggan sangat positif tentang pengalaman berbelanja online yang baru."
          />
        </div>

        <div className="bg-green-50 rounded-lg p-8 shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Bagikan Pengalaman Anda</h2>
          <p className="text-center text-gray-600 mb-8">
            Jika Anda telah menggunakan layanan kami, kami akan sangat menghargai jika Anda berbagi pengalaman Anda.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Perusahaan</label>
                <input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Jabatan</label>
                <input type="text" id="position" name="position" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" />
              </div>
            </div>
            <div>
              <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">Testimoni Anda</label>
              <textarea id="testimonial" name="testimonial" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">Rating (1-5)</label>
                <select id="rating" name="rating" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500">
                  <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
                  <option value="4">⭐⭐⭐⭐ (4/5)</option>
                  <option value="3">⭐⭐⭐ (3/5)</option>
                  <option value="2">⭐⭐ (2/5)</option>
                  <option value="1">⭐ (1/5)</option>
                </select>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Layanan yang Digunakan</label>
                <select id="service" name="service" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500">
                  <option value="">Pilih layanan</option>
                  <option value="website">Website Development</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="design">UI/UX Design</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="custom">Solusi Custom</option>
                </select>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                Kirim Testimoni
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, company, position, image, testimonial }: { 
  name: string; 
  company: string; 
  position: string; 
  image: string; 
  testimonial: string; 
}) => {
  return (
    <div className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <Image
            src={image}
            alt={name}
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{position}, {company}</p>
        </div>
      </div>
      <div className="mb-4">
        <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 1L12.9389 7.0972L19.5106 7.90983L14.7553 12.5278L15.8779 19.0902L10 16L4.12215 19.0902L5.24472 12.5278L0.489435 7.90983L7.06107 7.0972L10 1Z" fill="#16A34A"/>
          <path d="M30 1L32.9389 7.0972L39.5106 7.90983L34.7553 12.5278L35.8779 19.0902L30 16L24.1221 19.0902L25.2447 12.5278L20.4894 7.90983L27.0611 7.0972L30 1Z" fill="#16A34A"/>
          <path d="M50 1L52.9389 7.0972L59.5106 7.90983L54.7553 12.5278L55.8779 19.0902L50 16L44.1221 19.0902L45.2447 12.5278L40.4894 7.90983L47.0611 7.0972L50 1Z" fill="#16A34A"/>
          <path d="M70 1L72.9389 7.0972L79.5106 7.90983L74.7553 12.5278L75.8779 19.0902L70 16L64.1221 19.0902L65.2447 12.5278L60.4894 7.90983L67.0611 7.0972L70 1Z" fill="#16A34A"/>
          <path d="M90 1L92.9389 7.0972L99.5106 7.90983L94.7553 12.5278L95.8779 19.0902L90 16L84.1221 19.0902L85.2447 12.5278L80.4894 7.90983L87.0611 7.0972L90 1Z" fill="#16A34A"/>
        </svg>
      </div>
      <p className="text-gray-700 italic">&quot;{testimonial}&quot;</p>
    </div>
  );
};

export default Testimonials;
