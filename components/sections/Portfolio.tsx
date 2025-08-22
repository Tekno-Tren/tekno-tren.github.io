"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";

const projects = [
  {
    title: "Platform E-Commerce",
    description: "Toko online yang skalabel dengan integrasi pembayaran dan manajemen inventaris.",
    image: "/img-1.png",
  },
  {
    title: "Website Perusahaan",
    description: "Website modern dan responsif untuk klien korporat.",
    image: "/img-2.png",
  },
  {
    title: "Aplikasi Mobile Banking",
    description: "Aplikasi mobile yang aman untuk layanan perbankan dan keuangan.",
    image: "/img-3.png",
  },
];

const Portfolio = () => (
  <motion.section
    variants={fadeIn("up", 0)}
    initial="hidden"
    animate="show"
    className="container py-20"
  >
  <h2 className="bold-40 mb-10 text-center">Portofolio Kami</h2>
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, idx) => (
        <div key={idx} className="rounded-xl bg-white p-6 shadow-lg">
          <Image src={project.image} alt={project.title} width={400} height={160} className="mb-4 w-full rounded-lg object-cover h-40" />
          <h3 className="bold-20 mb-2">{project.title}</h3>
          <p className="regular-16 text-gray-600">{project.description}</p>
        </div>
      ))}
    </div>
  </motion.section>
);

export default Portfolio;
