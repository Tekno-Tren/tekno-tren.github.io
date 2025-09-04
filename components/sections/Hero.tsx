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
        className="container flex min-h-screen max-w-[64rem] flex-col py-10 lg:min-h-[42rem] lg:py-20"
      >
        <div ref={refInfo} className="z-20 flex flex-1 flex-col md:flex-row">
          <div className="flex w-full md:w-1/2 flex-col justify-center min-h-[60vh] md:min-h-[32rem] lg:min-h-[36rem]">
            <h1 className="bold-32 text-center md:text-left md:bold-40 lg:bold-52 tracking-tighter">
              Solusi Digital untuk Kebutuhan Anda
            </h1>
            <p className="mt-6 text-md text-center md:text-left md:text-xl text-gray-30">
              Layanan digital terbaik untuk Anda yang ingin bisnis Anda tampil
              secara profesional, modern, dan terpercaya di dunia digital.
            </p>

            <div className="mt-6 flex md:w-full flex-col gap-3 md:flex-row">
              <Button
                type="button"
                title="Konsultasi Sekarang"
                variant="btn_green"
              />
            </div>
          </div>
          <div className="flex w-full md:w-1/2 flex-col items-center justify-center">
            <div className="relative md:absolute z-0 max-w-[400px] md:max-w-[600px] -top-12 sm:-top-20 md:top-auto md:translate-x-4 lg:translate-x-12">
              <Image
                src="/hero-img.png"
                alt="Hero Image"
                className="object-contain h-full max-h-[80vh] lg:max-h-[48rem]"
                width={1200}
                height={1200}
              />
            </div>
            <motion.div
              variants={fadeIn("up", 0)}
              initial="hidden"
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: -108,
                      rotate: [0, 360],
                      transition: {
                        opacity: { duration: 0.5 },
                        y: { duration: 0.5 },
                        rotate: {
                          duration: 20,
                          ease: "linear",
                          repeat: Infinity,
                          repeatType: "loop",
                        },
                      },
                    }
                  : "hidden"
              }
              exit="hidden"
              className="absolute w-36 self-start -z-10"
            >
              <Image
                src="/element-1.png"
                alt="Element Image"
                className="object-cover"
                width={144}
                height={144}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0)}
              initial="hidden"
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: -156,
                      rotate: [0, 360],
                      transition: {
                        opacity: { duration: 0.5 },
                        y: { duration: 0.5 },
                        rotate: {
                          duration: 10,
                          ease: "linear",
                          repeat: Infinity,
                          repeatType: "loop",
                        },
                      },
                    }
                  : "hidden"
              }
              exit="hidden"
              className="absolute w-18 -z-10"
            >
              <Image
                src="/element-1.png"
                alt="Element Image"
                className="object-cover"
                width={72}
                height={72}
              />
            </motion.div>
          </div>
        </div>
        <div className="relative mt-6 z-20 bottom-40 md:bottom-16 overflow-hidden rounded-3xl bg-gradient-to-r from-green-500 to-blue-500/80 p-4 sm:p-8 text-white backdrop-blur-sm">
          <div className="absolute -left-24 -top-24 -z-20 opacity-50">
            <Image
              src="/element-2.png"
              alt="Element Image"
              className="object-cover"
              width={400}
              height={400}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-4 text-center">
            <div className="flex flex-col items-center justify-center">
              <FaMagic className="text-3xl" />
              <h2 className="font-bold">Fitur Lengkap</h2>
              <p className="text-xs sm:text-sm">
                Dilengkapi dengan fitur-fitur terbaik untuk membangun bisnis
                Anda.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaMoneyBillWave className="text-3xl" />
              <h2 className="font-bold">Harga Terjangkau</h2>
              <p className="text-xs sm:text-sm">
                Dapatkan harga terbaik untuk layanan kami.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaWrench className="text-3xl" />
              <h2 className="font-bold">Dukungan Teknis</h2>
              <p className="text-xs sm:text-sm">
                Dapatkan dukungan teknis terbaik untuk bisnis Anda.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <RxUpdate className="text-3xl" />
              <h2 className="font-bold">Kustomisasi Sesuai Kebutuhan</h2>
              <p className="text-xs sm:text-sm">
                Dukungan kustomisasi sesuai kebutuhan bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
