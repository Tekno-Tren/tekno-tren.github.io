"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeCategory, setActiveCategory] = useState("all");

  // Define your website categories
  const categories = [
    { id: "all", name: "Semua" },
    { id: "company", name: "Company Profile" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "elearning", name: "E-Learning" },
    { id: "landing", name: "Landing Page" },
    { id: "blog", name: "Blog/News" },
    { id: "custom", name: "Custom System" },
  ];

  // Sample portfolio items with multiple categories per project
  const portfolioItems = [
    {
      id: 1,
      title: "PT. ISBI Corporate Website",
      categories: ["company", "elearning"],
      image: "/portfolio/project1.jpg",
      description: "Website perusahaan dengan tampilan modern dan responsif",
    },
    {
      id: 2,
      title: "Trashopp Online Store",
      categories: ["company", "ecommerce"],
      image: "/portfolio/project2.jpg",
      description: "Toko online dengan sistem pembayaran terintegrasi",
    },
    {
      id: 3,
      title: "PT. Digital Sistem Jawadwipa",
      categories: ["company", "blog"],
      image: "/portfolio/project3.jpg",
      description: "Website resmi perusahaan dengan fitur lengkap",
    },
    {
      id: 4,
      title: "SIKader PC PMII Surabaya",
      categories: ["custom"],
      image: "/portfolio/project4.jpg",
      description: "Portal berita dan informasi organisasi",
    },
    {
      id: 5,
      title: "Reka Official",
      categories: ["company", "elearning"],
      image: "/portfolio/project5.jpg",
      description: "Platform e-learning untuk produk fashion lokal",
    },
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.categories.includes(activeCategory));

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="w-full bg-white py-20"
    >
      <div ref={ref} className="container mx-auto px-4 max-w-[64rem]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Mau bikin website apa? <span className="text-blue-600">Kita bikinin!</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Berbagai jenis website yang telah kami kembangkan untuk klien dari beragam industri.
            Pilih kategori untuk melihat portofolio kami.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200 
                ${activeCategory === category.id 
                  ? "bg-blue-600 text-white shadow-lg" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                {/* Show multiple category tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.categories.map(catId => (
                    <span 
                      key={`${item.id}-${catId}`} 
                      className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full"
                    >
                      {categories.find(cat => cat.id === catId)?.name}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Lihat Semua Portofolio
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
