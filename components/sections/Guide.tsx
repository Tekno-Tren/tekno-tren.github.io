"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

const Guide = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refImage, inViewImage] = useInView({ triggerOnce: false });

  return (
    <motion.div
      variants={fadeIn("left", 0)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
    >
      <section ref={ref} className="flexCenter mt-10 flex-col">
        <div className=" padding-container container w-full pb-24">
          <p className="regular-18 mb-3 uppercase text-green-50">
            We are here for you
          </p>

          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
              Uncomplicated Navigation
            </h2>
            <p className="regular-16 text-gray-30 xl:max-w-[520px]">
              With Tekno Tren, you will always be on the right path thanks to our
              support for offline maps when you are disconnected from the
              internet. Invite friends, family and colleagues to enjoy nature,
              exploring picturesque valleys and reaching mountain peaks.
            </p>
          </div>
        </div>

        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          animate={inViewImage ? "show" : "hidden"}
          exit="hidden"
        >
          <div
            ref={refImage}
            className="flexCenter relative w-full md:container"
          >
            <Image
              src="/img-5.png"
              alt="Guide"
              width={1280}
              height={720}
              className="h-[25rem] w-full object-cover object-center md:rounded-2xl lg:w-[80rem]"
            />

            <div className="absolute flex gap-3 rounded-3xl border bg-white py-8 pl-5 pr-7 shadow-lg md:left-[5%] lg:top-20">
              <Image
                src="/meter.svg"
                alt="Meter"
                width={16}
                height={100}
                className="h-full w-auto"
              />
              <div className="flexBetween flex-col">
                <div className="flex w-full flex-col">
                  <div className="flexBetween w-full">
                    <p className="regular-16 text-gray-20">Destination</p>
                    <p className="bold-16 text-green-50">52 min</p>
                  </div>
                  <p className="bold-20">Inca Trail</p>
                </div>

                <div className="flex w-full flex-col">
                  <p className="regular-16 text-gray-20">Starting Point</p>
                  <h4 className="bold-20 whitespace-nowrap">Puerta del Sol</h4>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Guide;
