"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import campsiteData from "../Camp/CampSiteData";
import CampSite from "../Camp/CampSite";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

const Camp = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
    >
      <section ref={ref} className="w-full select-none">
        <Swiper
          slidesPerView={"auto"}
          className="my-swiper-1 h-full w-full object-cover"
          navigation={{
            enabled: true,
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Navigation]}
        >
          <div className="swiper-button-prev">
            <FaCircleChevronLeft className="rounded-full bg-white" />
          </div>
          {campsiteData.map((data, index) => (
            <SwiperSlide key={index}>
              <CampSite {...data} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-next">
            <FaCircleChevronRight className="rounded-full bg-white" />
          </div>
        </Swiper>

        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          animate={inViewQuote ? "show" : "hidden"}
          exit="hidden"
          className="relative z-50"
        >
          <div
            ref={refQuote}
            className="flexEnd relative z-50 mt-10  px-6 text-center md:text-left lg:-mt-60"
          >
            <div className="relative w-full overflow-hidden rounded-3xl bg-green-50 p-8 drop-shadow-2xl lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:p-12">
              <h2 className="regular-24 md:regular-32 2xl:regular-64 text-white">
                <strong>Are you feeling lost</strong> and not knowing which way
                to go?
              </h2>
              <p className="regular-14 xl:regular-16 mt-5 text-white">
                The reason we are here is for people like you who are eager to
                start an exciting adventure but may feel disoriented about where
                to go. We are ready to be your guide, helping you chart a clear
                route and ensuring that your journey is full of memorable
                discoveries.
              </p>
              <Image
                src="/quote.svg"
                alt="Quote"
                width={186}
                height={219}
                className="camp-quote"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Camp;
