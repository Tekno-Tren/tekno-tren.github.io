"use client";
import { HiStar } from "react-icons/hi2";
import { FaMagic, FaMoneyBillWave, FaWrench } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import Button from "../common/Button";
import Image from "next/image";

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
        className="container min-h-screen items-center justify-center flex flex-col gap-20 py-10 md:gap-28 lg:py-20 xl:flex-row"
      >
        <div
          className="right-0 absolute w-[500px]"
        >
          <Image src="/hero-img.png" alt="Hero Image" className="object-cover" width={1200} height={1200} />
        </div>
        <motion.div 
          variants={fadeIn("up", 0)}
          initial="hidden"
          animate={inView ? {
            opacity: 1,
            y: 0,
            rotate: [0, 360],
            transition: {
              opacity: { duration: 0.5 },
              y: { duration: 0.5 },
              rotate: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }
            }
          } : "hidden"}
          exit="hidden"
          className="absolute right-10 w-36"
        >
          <Image src="/element-1.png" alt="Element Image" className="object-cover" width={144} height={144} />
        </motion.div>

        <div 
          ref={refInfo}
          className="absolute z-20 flex flex-1 flex-col max-w-[64rem]">
          <div
            className="flex flex-col w-8/12"
          >
            <h1 className="bold-40 lg:bold-52 tracking-tighter xl:whitespace-nowrap">
              Solusi Digital untuk Kebutuhan Anda
            </h1>
            <p className="text-xl mt-6 text-gray-30">
              Layanan digital terbaik untuk Anda yang ingin bisnis Anda tampil secara profesional, modern, dan terpercaya di dunia digital.
            </p>

            <div className="flex w-full flex-col mt-6 gap-3 sm:flex-row">
              <Button type="button" title="Konsultasi Sekarang" variant="btn_dark" />
            </div>
          </div>
          <div
            className="backdrop-blur-sm bg-gradient-to-r from-green-500 to-blue-500/80 rounded-3xl p-8 mt-6 text-white overflow-hidden"
          >
            <div className="absolute -left-24 -top-24 -z-20 opacity-50">
              <Image src="/element-2.png" alt="Element Image" className="object-cover" width={400} height={400} />
            </div>
            <div className="grid grid-cols-4 justify-between gap-4 text-center">
              <div className="flex flex-col justify-center items-center">
                <FaMagic className="text-3xl"/>
                <h2 className="font-bold">Fitur Lengkap</h2>
                <p className="text-sm">Dilengkapi dengan fitur-fitur terbaik untuk membangun bisnis Anda.</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaMoneyBillWave className="text-3xl"/>
                <h2 className="font-bold">Harga Terjangkau</h2>
                <p className="text-sm">Dapatkan harga terbaik untuk layanan kami.</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaWrench className="text-3xl"/>
                <h2 className="font-bold">Dukungan Teknis</h2>
                <p className="text-sm">Dapatkan dukungan teknis terbaik untuk bisnis Anda.</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <RxUpdate className="text-3xl"/>
                <h2 className="font-bold">Kustomisasi Sesuai Kebutuhan</h2>
                <p className="text-sm">Dukungan kustomisasi sesuai kebutuhan bisnis Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
