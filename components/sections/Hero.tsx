"use client";
import { HiStar } from "react-icons/hi2";
import { HiPlay, HiX } from "react-icons/hi";
import Button from "../common/Button";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refInfo, inViewInfo] = useInView({ triggerOnce: false });
  const [refMap, inViewMap] = useInView({ triggerOnce: false });

  return (
    <motion.div
      variants={fadeIn("up", 0)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
      className="xl:container"
    >
      <section
        ref={ref}
        className="container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
      >
        <div className="hero-map" />

        <div
          ref={refInfo}
          className="relative z-20 flex flex-1 flex-col xl:w-1/2"
        >
          <h1 className="bold-40 lg:bold-52 tracking-tighter xl:whitespace-nowrap">
            Solusi Digital untuk Kebutuhan Anda
          </h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[32.5rem]">
            Kami adalah Software House yang berdedikasi untuk menyediakan
            layanan Teknologi Informasi terbaik bagi bisnis Anda. Dengan fokus
            pada pembuatan website, maintenance website, dan berbagai sistem
            informasi inovatif, Tekno Tren hadir sebagai mitra strategis untuk
            membantu bisnis Anda tumbuh dan berkembang.
          </p>

          <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <HiStar key={index} size={24} className="text-yellow-400" />
                ))}
            </div>

            <p className="bold-16 lg:bold-20 text-gray-1">
              +100k
              <span className="regular-16 lg:regular-20 ml-2">
                excellent reviews
              </span>
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <Button type="button" title="Download App" variant="btn_dark" />

            <Button
              type="button"
              title="How it works?"
              variant="btn_white_text"
              icon_start={<HiPlay size={32} className="text-green-600" />}
            />
          </div>
        </div>

        <div ref={refMap} className="relative flex flex-1 items-end">
          <div className="relative z-20 mt-5 flex w-[16.75rem] flex-col gap-8 rounded-3xl bg-gray-1 px-7 py-8">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Location</p>
                <HiX size={20} className="text-white" />
              </div>
              <p className="bold-20 text-white">Inca Trail</p>
            </div>

            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Distance</p>
                <p className="bold-20 text-white">52.44 Km</p>
              </div>

              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Elevation</p>
                <p className="bold-20 text-white">2.043 Km</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
