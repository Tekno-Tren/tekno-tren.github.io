"use client";

import React from 'react';

const FAQ = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 mt-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <FaqItem 
            question="Berapa lama waktu yang dibutuhkan untuk membuat website?" 
            answer="Waktu pembuatan website tergantung pada kompleksitas proyek. Untuk landing page sederhana, biasanya membutuhkan waktu 3-5 hari kerja. Website perusahaan dengan beberapa halaman membutuhkan waktu 7-14 hari. Untuk website e-commerce atau dengan fitur yang lebih kompleks, proses dapat memakan waktu 14-30 hari atau lebih. Kami selalu mendiskusikan timeline secara detail dengan klien sebelum memulai proyek."
          />
          
          <FaqItem 
            question="Apa saja yang termasuk dalam layanan pemeliharaan website?" 
            answer="Layanan pemeliharaan website kami mencakup pembaruan perangkat lunak, backup rutin, pemantauan keamanan, perbaikan bug, dukungan teknis, dan pembaruan konten dasar. Kami juga menawarkan paket pemeliharaan premium yang mencakup optimasi SEO berkelanjutan dan pelaporan analitik bulanan."
          />
          
          <FaqItem 
            question="Apakah Tekno Tren menyediakan layanan desain logo dan branding?" 
            answer="Ya, kami menyediakan layanan desain logo dan branding sebagai bagian dari solusi digital komprehensif kami. Tim desainer kami bekerja sama dengan Anda untuk menciptakan identitas visual yang mencerminkan nilai dan visi perusahaan Anda."
          />
          
          <FaqItem 
            question="Bagaimana proses pembayaran untuk layanan Tekno Tren?" 
            answer="Kami biasanya meminta uang muka 50% dari total biaya proyek sebelum memulai pekerjaan, dan 50% sisanya dibayarkan setelah proyek selesai dan disetujui oleh klien. Untuk proyek besar, kami dapat mengatur jadwal pembayaran bertahap. Kami menerima pembayaran melalui transfer bank dan metode pembayaran online lainnya."
          />
          
          <FaqItem 
            question="Apakah saya bisa mengelola konten website sendiri setelah website selesai dibuat?" 
            answer="Tentu saja! Kami mengembangkan website dengan sistem manajemen konten yang user-friendly sehingga Anda dapat dengan mudah memperbarui konten sendiri. Kami juga menyediakan pelatihan singkat tentang cara mengelola konten website Anda dan dokumentasi panduan pengguna."
          />
          
          <FaqItem 
            question="Apakah Tekno Tren menyediakan layanan SEO?" 
            answer="Ya, kami menawarkan layanan SEO komprehensif untuk membantu website Anda mendapatkan peringkat lebih tinggi di mesin pencari. Layanan kami mencakup riset kata kunci, optimasi on-page, pembuatan konten SEO-friendly, dan strategi backlink. Kami juga menawarkan paket SEO berkelanjutan untuk hasil jangka panjang."
          />
          
          <FaqItem 
            question="Apakah saya perlu menyediakan konten untuk website saya?" 
            answer="Anda dapat menyediakan konten sendiri atau menggunakan layanan pembuatan konten kami. Jika Anda memiliki konten yang sudah ada, kami akan menggunakannya dan menyesuaikannya dengan desain website. Jika Anda membutuhkan bantuan dalam pembuatan konten, tim copywriter kami dapat membantu menciptakan konten yang menarik dan sesuai dengan bisnis Anda."
          />
          
          <FaqItem 
            question="Apakah Tekno Tren membuat aplikasi mobile?" 
            answer="Ya, selain pengembangan website, kami juga menawarkan layanan pengembangan aplikasi mobile untuk platform iOS dan Android. Kami dapat membuat aplikasi native, hybrid, atau progressive web apps (PWA) sesuai dengan kebutuhan dan anggaran Anda."
          />
        </div>
      </div>
    </section>
  );
};

// FAQ Item Component
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="flex items-center justify-between w-full p-5 text-left bg-white hover:bg-green-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-5 border-t border-gray-200 bg-green-50">
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
