"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";

const Contact = () => (
  <motion.section
    variants={fadeIn("right", 0)}
    initial="hidden"
    animate="show"
    className="container py-20"
  >
    <h2 className="bold-40 mb-6 text-center">Kontak Kami</h2>
    <form className="mx-auto max-w-xl space-y-6">
      <input type="text" placeholder="Nama Anda" className="w-full rounded border p-3" required />
      <input type="email" placeholder="Email Anda" className="w-full rounded border p-3" required />
      <textarea placeholder="Pesan Anda" className="w-full rounded border p-3" rows={5} required />
      <button type="submit" className="btn_dark w-full rounded p-3 font-bold">Kirim Pesan</button>
    </form>
  </motion.section>
);

export default Contact;
