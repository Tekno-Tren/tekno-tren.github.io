"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="relative bg-gradient-to-r from-green-700 to-green-600 py-20 overflow-hidden"
    >
      <div ref={ref} className="container mx-auto px-4 max-w-[64rem]">
        
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
          Hubungi Kami
        </h1>
        
        {/* Subheader */}
        <div className="text-center text-white/90 max-w-3xl mx-auto mb-16">
          <p className="mb-2">
            Kami siap membantu mewujudkan ide dan kebutuhan digital Anda. Tim Tekno-Tren akan dengan senang
            hati menjawab pertanyaan, memberikan penjelasan, atau berdiskusi tentang proyek Anda.
          </p>
          <p>
            Silakan hubungi kami melalui formulir, email, atau media sosial, dan kami akan merespons secepat mungkin.
          </p>
        </div>
        
        {/* Contact Info Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            {/* Physical Address */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4">
                <FaMapMarkerAlt className="text-green-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Alamat</h3>
              <p className="text-gray-600">
                Jl. Keputih Gg. II C No. 4, <br/>
                Keputih, Sukolilo, <br/>
                Surabaya 60111
              </p>
            </div>
            
            {/* WhatsApp Numbers */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4">
                <FaWhatsapp className="text-green-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Nomor Whatsapp</h3>
              <Link href="https://wa.me/6285748783507" className="text-gray-600 hover:text-green-700 transition-colors mb-1">
                0857-4878-3507
              </Link>
            </div>
            
            {/* Email Address */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4">
                <MdEmail className="text-green-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Alamat Email</h3>
              <Link href="mailto:teknotrenhouse@gmail.com" className="text-gray-600 hover:text-green-700 transition-colors">
                teknotrenhouse@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
