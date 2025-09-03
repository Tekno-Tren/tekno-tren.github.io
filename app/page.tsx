"use client";

import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Price from "@/components/sections/Price";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
  <Hero />
  <Clients />
  <Portfolio />
  <Price />
  <About />
  <Contact />
    </>
  );
}
