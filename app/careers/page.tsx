import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";

export default function CareersPage() {
  return (
    <motion.section
      variants={fadeIn("up", 0)}
      initial="hidden"
      animate="show"
      className="container py-20"
    >
      <h2 className="bold-40 mb-6 text-center">Karir</h2>
      <p className="regular-18 mx-auto max-w-2xl text-center text-gray-700">
        Bergabunglah bersama tim Tekno Tren dan kembangkan karir Anda di dunia teknologi! Kami selalu mencari talenta terbaik untuk berbagai posisi pengembangan perangkat lunak, desain, dan manajemen proyek.
      </p>
      <div className="mt-10 text-center text-gray-500">Belum ada lowongan yang tersedia saat ini.</div>
    </motion.section>
  );
}
