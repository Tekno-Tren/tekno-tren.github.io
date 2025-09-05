"use client";

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 mt-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Kebijakan Privasi</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>Terakhir diperbarui: 5 September 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Pendahuluan</h2>
          <p>
            Tekno Tren (&quot;kami&quot;, &quot;kita&quot;, atau &quot;Perusahaan&quot;) menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. 
            Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan mengungkapkan informasi Anda saat Anda menggunakan 
            situs web kami (teknotrenhouse.com) dan layanan kami.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Informasi yang Kami Kumpulkan</h2>
          <p>Kami dapat mengumpulkan beberapa jenis informasi dari dan tentang pengguna situs web kami, termasuk:</p>
          <ul>
            <li>Informasi identitas pribadi (seperti nama, alamat email, nomor telepon) yang Anda berikan kepada kami saat mengisi formulir di situs web kami.</li>
            <li>Informasi tentang penggunaan Anda terhadap situs web kami, termasuk detail kunjungan Anda (seperti data lalu lintas, data lokasi, log, dan sumber daya lain yang Anda akses).</li>
            <li>Informasi perangkat dan koneksi, seperti alamat IP, sistem operasi, dan jenis browser.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Bagaimana Kami Menggunakan Informasi Anda</h2>
          <p>Kami menggunakan informasi yang kami kumpulkan untuk:</p>
          <ul>
            <li>Menyediakan, memelihara, dan meningkatkan layanan kami.</li>
            <li>Menanggapi permintaan, pertanyaan, dan komentar Anda.</li>
            <li>Mengirimkan informasi yang Anda minta, seperti newsletter atau materi pemasaran.</li>
            <li>Menganalisis penggunaan situs web dan layanan kami untuk meningkatkan pengalaman pengguna.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Pengungkapan Informasi Anda</h2>
          <p>
            Kami tidak menjual, memperdagangkan, atau mentransfer informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, 
            kecuali untuk penyedia layanan yang membantu kami dalam pengoperasian situs web kami atau melayani Anda, selama pihak-pihak 
            tersebut setuju untuk menjaga kerahasiaan informasi ini.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Keamanan Data</h2>
          <p>
            Kami menerapkan langkah-langkah keamanan untuk menjaga keamanan informasi pribadi Anda. Namun, tidak ada metode transmisi 
            melalui internet atau metode penyimpanan elektronik yang 100% aman. Oleh karena itu, meskipun kami berusaha untuk menggunakan 
            cara yang dapat diterima secara komersial untuk melindungi informasi pribadi Anda, kami tidak dapat menjamin keamanan mutlaknya.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Perubahan pada Kebijakan Privasi Kami</h2>
          <p>
            Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Perubahan apa pun akan diposting di halaman ini 
            dengan tanggal revisi yang diperbarui. Kami mendorong Anda untuk meninjau Kebijakan Privasi ini secara berkala untuk tetap 
            mendapatkan informasi tentang bagaimana kami melindungi informasi Anda.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Hubungi Kami</h2>
          <p>
            Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui halaman Kontak kami atau 
            email ke <a href="mailto:teknotrenhouse@gmail.com" className="text-blue-600 hover:underline">teknotrenhouse@gmail.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
