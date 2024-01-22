import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tekno Tren - Empower the Potential Excellence",
  description:
    "Tekno Tren - Software house yang bergerak di bidang jasa layanan Teknologi Informasi (TI) berupa jasa pembuatan website, maintenance website, serta sistem informasi lainnya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <Head>
        {/* Tags for SEO */}
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <meta
          name="keywords"
          content="Tekno Tren, software, house"
        />
        <meta name="author" content="Guilherme Bustamante" />
        <link rel="canonical" href="https://tekno-tren.github.io/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metadata.title as string} />
        <meta
          property="og:description"
          content={metadata.description as string}
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://tekno-tren.github.io/" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={montserrat.className}>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
