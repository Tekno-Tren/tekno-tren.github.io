"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";

const About = () => (
  <motion.section
    variants={fadeIn("left", 0)}
    initial="hidden"
    animate="show"
    className="container py-20"
  >
    <h2 className="bold-40 mb-6 text-center">Tentang Kami</h2>
    <p className="regular-18 mx-auto max-w-2xl text-center text-gray-700">
      Tekno Tren adalah software house terkemuka yang berkomitmen menghadirkan solusi teknologi inovatif untuk berbagai skala bisnis. Tim kami ahli dalam pengembangan web dan mobile, desain UI/UX, serta solusi cloud. Kami bersemangat membantu klien mencapai tujuan mereka melalui teknologi, kreativitas, dan dukungan yang andal.
    </p>
  </motion.section>
);

export default About;
