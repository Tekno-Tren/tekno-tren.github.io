import { FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

const iconMap: { [key: string]: JSX.Element } = {
  FaLinkedinIn: <FaLinkedinIn size={20} />,
  FaInstagram: <FaInstagram size={20} />,
  FaTiktok: <FaTiktok size={20} />,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center py-6">
      <div className="padding-container container flex w-full flex-col gap-6">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image
              src="/logo.png"
              alt="Tekno Tren"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-36"
            />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => {
                    let href = "/";
                    
                    // Map links to their appropriate routes
                    if (link === "Tentang Kami") href = "/about";
                    if (link === "Blog") href = "/blog";
                    if (link === "Kontak") href = "/contact";
                    if (link === "Kebijakan Privasi") href = "/privacy-policy";
                    if (link === "Konsultasi") href = "/consultation";
                    if (link === "Pembuatan & Pengembangan Web") href = "/services";
                    if (link === "Digital Marketing") href = "/services";
                    if (link === "Solusi Kustom") href = "/services";
                    if (link === "Portofolio") href = "/portfolio";
                    if (link === "Testimoni") href = "/testimonials";
                    if (link === "FAQ") href = "/faq";
                    if (link === "Dukungan") href = "/support";
                    
                    return (
                      <Link
                        href={href}
                        key={link}
                        className="transition-all duration-300 hover:font-bold hover:text-green-500"
                      >
                        {link}
                      </Link>
                    );
                  })}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title} key={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => {
                    // Accessible label for each social link
                    let label = '';
                    if (link.icon === 'FaLinkedinIn') label = 'LinkedIn Tekno Tren';
                    if (link.icon === 'FaInstagram') label = 'Instagram Tekno Tren';
                    if (link.icon === 'FaTiktok') label = 'TikTok Tekno Tren';
                    return (
                      <li key={link.href}>
                        <Link
                          target="_blank"
                          href={link.href}
                          className="transition-all duration-300 hover:text-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded"
                          aria-label={label}
                        >
                          <span aria-hidden="true">{iconMap[link.icon]}</span>
                          <span className="sr-only">{label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />

        <p className="regular-14 w-full text-center text-gray-30">
          &copy; {currentYear}{" "}
          <Link
            className="transition-all duration-300 hover:font-bold hover:text-green-500"
            href="https://www.linkedin.com/company/teknotren-house"
            target="_blank"
          >
            Tekno Tren{" "}
          </Link>
          | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="whitespace-nowrap font-bold uppercase">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
