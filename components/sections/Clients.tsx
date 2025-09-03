"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

const Clients = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  // Sample client logos - replace with your actual client logos
  const clientLogos = [
    { src: "/clients/logo1.png", alt: "PT. ISBI" },
    { src: "/clients/logo2.png", alt: "PT. Digital Sistem Jawadwipa" },
    { src: "/clients/logo3.png", alt: "PT. Mahadaya Sakti Teknik" },
    { src: "/clients/logo4.png", alt: "Reka Official" },
    { src: "/clients/logo5.png", alt: "Trashopp" },
    { src: "/clients/logo6.png", alt: "PC PMII Surabaya" },
  ];

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="relative w-full bg-gradient-to-r from-green-500 to-blue-500 py-16 overflow-hidden"
    >
      <div ref={ref} className="container mx-auto px-4 max-w-[64rem]">
        <div className="absolute -left-32 -translate-y-32 opacity-50 z-0">
            <Image
                src="/element-2.png"
                alt="Element Image"
                className="object-cover"
                width={600}
                height={600}
            />
        </div>
        <div className="relative text-center mb-10 z-10">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Telah Dipercaya</span>{" "}
            <span className="text-gray-800">Client di berbagai bidang</span>
          </h2>
          <p className="text-white text-lg md:text-xl max-w-4xl mx-auto">
            Telah dipercaya oleh UMKM, lembaga, hingga startup untuk mewujudkan website profesional sesuai kebutuhan.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 justify-center gap-6 mt-12">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-4 flex items-center justify-center h-20"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={50}
                className="h-auto max-h-full w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Clients;
