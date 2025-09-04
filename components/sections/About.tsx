"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      ref={ref}
      className="py-20 bg-green-50"
    >
      <div className="container mx-auto px-4 max-w-[64rem]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang Kami</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami adalah Tekno Tren, partner digital Anda dalam membangun dan mengembangkan kehadiran online yang menarik, fungsional, dan berorientasi hasil.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Perjalanan Kami</h3>
            <p className="text-gray-700 mb-4">
              Didirikan pada tahun 2023, Tekno Tren berawal dari semangat untuk membantu berbagai permasalahan di bidang teknologi digital. Kami percaya bahwa solusi digital berkualitas seharusnya dapat diakses oleh semua skala pihak.
            </p>
            <p className="text-gray-700">
              Sejak itu, kami telah berkembang menjadi tim profesional yang berdedikasi dengan keahlian di berbagai bidang pengembangan web dan digital marketing. Kami telah membantu puluhan klien dari berbagai industri untuk meningkatkan kehadiran digital mereka dan mencapai tujuan bisnis mereka.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/img-1.png"
              alt="Team Tekno Tren bekerja"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Mengapa Memilih Kami?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-center">Solusi Berbagai Masalah</h4>
              <p className="text-gray-600 text-center">
                Kami mengutamakan pengembangan solusi yang tepat guna untuk berbagai kebutuhan digital Anda. Setiap proyek kami rancang khusus untuk mengatasi tantangan unik yang dihadapi klien kami.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-center">Harga yang Terjangkau</h4>
              <p className="text-gray-600 text-center">
                Kami menerapkan kebijakan harga yang disesuaikan dengan kebutuhan klien kami. Kami dapat menyesuaikan biaya layanan agar sesuai dengan anggaran Anda tanpa mengorbankan kualitas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-center">Dukungan Berkelanjutan</h4>
              <p className="text-gray-600 text-center">
                Hubungan kami dengan klien tidak berakhir setelah proyek selesai. Kami menyediakan dukungan teknis dan pemeliharaan berkelanjutan untuk memastikan solusi Anda tetap optimal.
              </p>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Proses Kerja Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-lg mb-4 mx-auto z-10 relative">1</div>
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-1 bg-blue-200 -z-10"></div>
              <h4 className="text-lg font-bold mb-2 text-center">Konsultasi</h4>
              <p className="text-gray-600 text-center text-sm">Memahami kebutuhan dan tujuan bisnis Anda secara mendalam.</p>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-lg mb-4 mx-auto z-10 relative">2</div>
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-1 bg-blue-200 -z-10"></div>
              <h4 className="text-lg font-bold mb-2 text-center">Perencanaan</h4>
              <p className="text-gray-600 text-center text-sm">Merancang solusi yang sesuai dengan kebutuhan dan anggaran Anda.</p>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-lg mb-4 mx-auto z-10 relative">3</div>
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-1 bg-blue-200 -z-10"></div>
              <h4 className="text-lg font-bold mb-2 text-center">Pengembangan</h4>
              <p className="text-gray-600 text-center text-sm">Membangun solusi dengan standar kualitas tinggi dan pengujian menyeluruh.</p>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-lg mb-4 mx-auto">4</div>
              <h4 className="text-lg font-bold mb-2 text-center">Peluncuran</h4>
              <p className="text-gray-600 text-center text-sm">Mengimplementasikan solusi dan memberikan pelatihan untuk tim Anda.</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-green-600 to-blue-700 rounded-2xl p-8 mb-20 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Dipercaya oleh Banyak Bisnis</h3>
            <p className="text-white/80">Beberapa pencapaian kami hingga saat ini</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">10+</p>
              <p className="text-sm text-white/80">Proyek Selesai</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">10+</p>
              <p className="text-sm text-white/80">Klien Puas</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">2+</p>
              <p className="text-sm text-white/80">Tahun Pengalaman</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">3+</p>
              <p className="text-sm text-white/80">Industri Dilayani</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Nilai-Nilai Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Kualitas</h4>
              <p className="text-gray-600">
                Kami berkomitmen untuk menghasilkan produk berkualitas tinggi yang melebihi ekspektasi klien kami. Setiap detail diperhatikan dengan seksama.
              </p>
            </div>
            <div className="bg-white border-l-4 border-green-600 p-6 rounded-r-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Integritas</h4>
              <p className="text-gray-600">
                Kami menjunjung tinggi kejujuran dan transparansi dalam setiap interaksi dengan klien kami. Kepercayaan adalah fondasi dari hubungan bisnis yang kuat.
              </p>
            </div>
            <div className="bg-white border-l-4 border-orange-600 p-6 rounded-r-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Inovasi</h4>
              <p className="text-gray-600">
                Kami terus berinovasi dan mengikuti perkembangan teknologi terbaru untuk memberikan solusi yang paling efektif dan relevan bagi klien kami.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Tim Ahli Kami</h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Kami memiliki tim profesional dengan beragam keahlian yang siap membantu mewujudkan visi digital Anda. Setiap anggota tim kami berdedikasi untuk memberikan hasil terbaik bagi setiap proyek.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-32 h-40 mx-auto mb-4 overflow-hidden">
                <Image
                  src="/teams/teams-1.png"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-bold">M. Zahid Masruri</h4>
              <p className="text-blue-600 mb-2">Direktur</p>
              <p className="text-gray-600 text-sm">
                Berpengalaman 8+ tahun di bidang pengembangan web dan mobile dengan keahlian di React dan Flutter.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-40 mx-auto mb-4 overflow-hidden">
                <Image
                  src="/teams/teams-2.png"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-bold">M. Arif Faizin</h4>
              <p className="text-blue-600 mb-2">Eksekutif</p>
              <p className="text-gray-600 text-sm">
                Ahli dalam strategi bisnis dan manajemen proyek dengan pengalaman luas di berbagai industri.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-40 mx-auto mb-4 overflow-hidden">
                <Image
                  src="/teams/teams-3.png"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-bold">Khariza Azmi Alfajira Hisyam</h4>
              <p className="text-blue-600 mb-2">Administrator</p>
              <p className="text-gray-600 text-sm">
                Ahli dalam administrasi dan manajemen proyek dengan pengalaman luas di berbagai industri.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-40 mx-auto mb-4 overflow-hidden">
                <Image
                  src="/teams/teams-4.png"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-bold">Fahmi Muhazir</h4>
              <p className="text-blue-600 mb-2">Developer Lead</p>
              <p className="text-gray-600 text-sm">
                Spesialis dalam pengembangan aplikasi web modern dengan keahlian di Next.js, Node.js, dan berbagai database.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-40 mx-auto mb-4 overflow-hidden">
                <Image
                  src="/teams/teams-5.png"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-bold">Anas Azhar</h4>
              <p className="text-blue-600 mb-2">Developer Lead</p>
              <p className="text-gray-600 text-sm">
                Spesialis dalam pengembangan aplikasi web modern dengan keahlian di Laravel, React, dan berbagai database.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-40 mx-auto mb-4 overflow-hidden">
                <Image
                  src="/teams/teams-6.png"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-bold">Agnesfia Anggraeni</h4>
              <p className="text-blue-600 mb-2">Quality Assurance</p>
              <p className="text-gray-600 text-sm">
                Spesialis dalam pengujian perangkat lunak dan jaminan kualitas dengan pengalaman di berbagai industri.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-40 mx-auto mb-4 overflow-hidden">
                <Image
                  src="/img-4.png"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-bold">Tatik Farihatul Farihah</h4>
              <p className="text-blue-600 mb-2">Sales & Marketing</p>
              <p className="text-gray-600 text-sm">
                Spesialis dalam pengembangan strategi pemasaran dan penjualan dengan pengalaman di berbagai industri.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-40 mx-auto mb-4 overflow-hidden">
                <Image
                  src="/img-4.png"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-bold">Nela Aidatun Navisyah</h4>
              <p className="text-blue-600 mb-2">Sales & Marketing</p>
              <p className="text-gray-600 text-sm">
                Spesialis dalam pengembangan strategi pemasaran dan penjualan dengan pengalaman di berbagai industri.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
