"use client";
import { FEATURES } from "@/constants";
import Image from "next/image";
import { HiLightningBolt, HiChartBar, HiShoppingCart } from "react-icons/hi";
import { HiOutlineColorSwatch } from "react-icons/hi";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refFeatures, inViewFeatures] = useInView({ triggerOnce: false });

  return (
    <motion.div
      variants={fadeIn("left", 0)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
    >
      <section
        ref={ref}
        className="flex items-center justify-center container flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="bold-32 lg:bold-64">Paket Layanan</h2>
            <p className="text-xl mt-4">✨ Paket Layanan Software House untuk Startup/Founder Muda</p>
          </div>
          
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            animate={inViewFeatures ? "show" : "hidden"}
            exit="hidden"
          >
            <div
              ref={refFeatures}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
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
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
      <div className={`p-4 ${variantColor[feature.variant as keyof typeof variantColor] || "bg-gray-100"}`}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white leading-tight">{feature.title}</h3>
          <div className="rounded-full bg-white/20 p-2 text-white">
            {iconComponent}
          </div>
        </div>
        <p className="mt-2 text-white font-semibold text-sm">{feature.price}</p>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-3">
          <h4 className="font-bold text-sm mb-1">👉 Untuk siapa?</h4>
          <p className="text-gray-600 text-xs">{feature.forWho}</p>
        </div>
        
        <div className="mb-3">
          <h4 className="font-bold text-sm mb-1">👉 Isi layanan:</h4>
          <ul className="list-disc pl-4 space-y-0.5">
            {feature.includes.map((item: string, idx: number) => (
              <li key={idx} className="text-gray-600 text-xs">{item}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-3">
          <h4 className="font-bold text-sm mb-1">👉 Kenapa penting?</h4>
          <p className="text-gray-600 text-xs">{feature.importance}</p>
        </div>
        
        <div className="mt-auto pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">Estimasi: {feature.timeframe}</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
