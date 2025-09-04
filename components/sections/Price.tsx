"use client";
import { FEATURES } from "@/constants";
import Image from "next/image";
import { HiLightningBolt, HiChartBar, HiShoppingCart } from "react-icons/hi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import Button from "@/components/common/Button";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

const Price = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refFeatures, inViewFeatures] = useInView({ triggerOnce: false });

  return (
    <motion.div
      variants={fadeIn("left", 0)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
      className="bg-gradient-to-b from-white to-green-200"
    >
      <section
        ref={ref}
        className="flex items-center justify-center container flex-col overflow-hidden py-24"
      >
        <div className="container mx-auto px-4 max-w-[64rem]">
          <div className="text-center mb-16">
            <h2 className="bold-32 lg:bold-40 mb-3">Solusi Digital Untuk Setiap Kebutuhan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Pilih paket layanan yang sesuai dengan kebutuhan bisnis Anda. Semua solusi kami didesain untuk membantu Anda tumbuh di era digital.</p>
          </div>
          
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            animate={inViewFeatures ? "show" : "hidden"}
            exit="hidden"
          >
            <div
              ref={refFeatures}
              className="grid gap-6 md:grid-cols-2"
            >
              {FEATURES.map((feature) => (
                <ServicePackage
                  key={feature.title}
                  feature={feature}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

const iconMap: { [key: string]: JSX.Element } = {
  HiLightningBolt: <HiLightningBolt size={28} />,
  HiChartBar: <HiChartBar size={28} />,
  HiShoppingCart: <HiShoppingCart size={28} />,
  HiOutlineColorSwatch: <HiOutlineColorSwatch size={28} />,
};

const ServicePackage = ({ feature }: { feature: any }) => {
  const iconComponent = iconMap[feature.icon] || null;
  const variantColor = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
  };
  const variantButtonColor = {
    blue: "btn_blue_outline",
    green: "btn_green_outline",
    purple: "btn_purple_outline",
    orange: "btn_orange_outline",
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className={`p-6 ${variantColor[feature.variant as keyof typeof variantColor] || "bg-gray-100"}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="rounded-full bg-white/20 p-2 text-white">
            {iconComponent}
          </div>
        </div>
        <h3 className="text-lg font-bold text-white leading-tight">{feature.title}</h3>
        <p className="mt-2 text-white/80 text-sm">{feature.description}</p>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-5">
          <h4 className="font-bold text-sm mb-2">👉 Untuk siapa?</h4>
          <p className="text-gray-600 text-sm">{feature.forWho}</p>
        </div>
        
        <div className="mb-5">
          <h4 className="font-bold text-sm mb-2">👉 Isi layanan:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {feature.includes.map((item: string, idx: number) => (
              <li key={idx} className="text-gray-600 text-sm">{item}</li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto pt-4 text-center">
          <Button 
            type="button" 
            title="Konsultasi Sekarang" 
            variant={variantButtonColor[feature.variant as keyof typeof variantButtonColor] || "btn_dark_outline"}
            full
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
