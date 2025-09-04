"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { PortfolioItem } from "@/data/portfolio";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

export default function PortfolioDetailClient({ project }: { project: PortfolioItem | null }) {
  const [activeImage, setActiveImage] = useState<string | null>(project?.images?.main || null);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (project?.images?.main) {
      setActiveImage(project.images.main);
    }
  }, [project]);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Proyek Tidak Ditemukan</h1>
          <p className="mb-6">Maaf, kami tidak dapat menemukan proyek yang Anda cari.</p>
          <Link href="/portfolio" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Daftar Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="bg-green-50"
    >
      <div ref={ref} className="container mx-auto px-4 py-12 md:py-20 max-w-[64rem]">
        <div className="mb-8">
          <Link href="/portfolio" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Daftar Portfolio
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-600 text-xl mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.categories.map((category, idx) => (
              <span 
                key={`${project.id}-${category}-${idx}`} 
                className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            ))}
          </div>
        </div>

        {/* Main Image Gallery */}
        <div className="mb-12">
          <div className="bg-white p-2 rounded-xl shadow-lg mb-4">
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image 
                src={activeImage || project.images.main}
                alt={project.title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Thumbnails */}
          {project.images.screenshots.length > 1 && (
            <div className="flex flex-wrap gap-4">
              {project.images.screenshots.map((img: string, index: number) => (
                <div 
                  key={index}
                  className={`relative w-24 h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${activeImage === img ? 'border-blue-500' : 'border-transparent'}`}
                  onClick={() => setActiveImage(img)}
                >
                  <Image 
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Ringkasan Proyek</h2>
            <p className="text-gray-700 mb-6">{project.longDescription || project.description}</p>

            {project.features && project.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Fitur Utama</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.testimonial && (
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
                <blockquote className="italic text-gray-700 mb-4">&ldquo;{project.testimonial.quote}&rdquo;</blockquote>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold">{project.testimonial.author}</p>
                    <p className="text-sm text-gray-600">{project.testimonial.position}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h3 className="text-lg font-bold mb-4">Detail Proyek</h3>

              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Klien</p>
                <p className="font-medium">{project.client}</p>
              </div>
              
              {project.url && (
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Website</p>
                  <a 
                    href={project.url} 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {project.url.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              )}
              
              {project.technologies && project.technologies.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Teknologi</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, index: number) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
              <h3 className="font-bold mb-2">Tertarik dengan proyek serupa?</h3>
              <p className="mb-4">Biarkan kami membantu Anda mewujudkan ide-ide Anda!</p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
