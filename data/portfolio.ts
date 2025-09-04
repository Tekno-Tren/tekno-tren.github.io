export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  client: string;
  description: string;
  longDescription?: string;
  categories: string[];
  technologies: string[];
  features: string[];
  images: {
    main: string;
    screenshots: string[];
  };
  url?: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "beasiswa-pwnu",
    title: "Beasiswa PWNU",
    slug: "beasiswa-pwnu",
    client: "PWNU Jawa Timur",
    description:
      "Platform pendaftaran dan manajemen beasiswa untuk PWNU Jawa Timur.",
    longDescription:
      "Platform digital untuk pendaftaran dan pengelolaan beasiswa yang memudahkan proses seleksi dan distribusi beasiswa kepada mahasiswa yang membutuhkan. Sistem ini mengelola proses pendaftaran beasiswa.",
    categories: ["custom", "company"],
    technologies: ["Laravel", "MySQL", "FilamentPHP", "Tailwind CSS"],
    features: [
      "Pendaftaran online untuk penerima beasiswa",
      "Panel admin untuk verifikasi dokumen",
      "Input sistem penilaian",
      "Dashboard pengelolaan penerima beasiswa",
    ],
    images: {
      main: "/portofolio/beasiswa-pwnu/beasiswa-pwnu.png",
      screenshots: [
        "/portofolio/beasiswa-pwnu/beasiswa-pwnu.png",
        "/portofolio/beasiswa-pwnu/beasiswa-pwnu-2.png",
      ],
    },
    url: "https://beasiswa.pwnujatim.or.id",
  },
  {
    id: "masatek",
    title: "PT. Mahadaya Sakti Teknik",
    slug: "mahadaya-sakti-teknik",
    client: "PT. Mahadaya Sakti Teknik",
    description:
      "Website perusahaan engineering dengan katalog produk dan layanan teknis.",
    longDescription:
      "Website perusahaan teknik yang menampilkan layanan engineering, katalog produk, dan kemampuan teknis PT. Mahadaya Sakti Teknik. Website dirancang untuk menunjukkan keahlian dan pengalaman perusahaan dalam bidang teknik.",
    categories: ["company", "blog"],
    technologies: ["WordPress", "PHP", "MySQL", "Bootstrap"],
    features: [
      "Halaman profil perusahaan",
      "Halaman layanan interaktif",
      "Blog untuk artikel terbaru",
      "Sistem kontak dan permintaan layanan",
      "Portfolio proyek sebelumnya",
      "Panel admin untuk pembaruan konten",
    ],
    images: {
      main: "/portofolio/masatek/masatek.png",
      screenshots: ["/portofolio/masatek/masatek.png"],
    },
    url: "https://masatek.com",
  },
  {
    id: "digsid",
    title: "Digital Sistem Jawadwipa",
    slug: "digital-sistem-jawadwipa",
    client: "PT. Digital Sistem Jawadwipa",
    description:
      "Website perusahaan untuk PT. Digital Sistem Jawadwipa dengan tampilan modern dan responsif.",
    longDescription:
      "Website korporat dengan desain modern yang menampilkan layanan, produk, dan informasi perusahaan PT. Digital Sistem Jawadwipa. Website dirancang untuk menarik calon klien dan memudahkan akses informasi tentang perusahaan.",
    categories: ["company", "blog"],
    technologies: ["WordPress", "PHP", "MySQL", "Bootstrap"],
    features: [
      "Halaman profil perusahaan",
      "Halaman layanan interaktif",
      "Blog untuk artikel terbaru",
      "Sistem kontak dan permintaan layanan",
      "Portfolio proyek sebelumnya",
      "Panel admin untuk pembaruan konten",
    ],
    images: {
      main: "/portofolio/digsid/digsid.png",
      screenshots: ["/portofolio/digsid/digsid.png"],
    },
    url: "https://digsid.com",
  },
  {
    id: "isbi",
    title: "Institut Semen dan Beton Indonesia (ISBI)",
    slug: "institut-semen-dan-beton-indonesia",
    client: "PT. Institut Semen dan Beton Indonesia",
    description:
      "Website korporat untuk PT. ISBI dengan tampilan profesional dan informasi lengkap.",
    longDescription:
      "Website korporat yang menampilkan profil perusahaan, layanan, dan informasi kontak PT. ISBI. Desain yang profesional dan clean memudahkan pengunjung menemukan informasi yang mereka butuhkan.",
    categories: ["company", "elearning", "blog"],
    technologies: ["WordPress", "PHP", "MySQL", "Bootstrap", "TutorLMS"],
    features: [
      "Halaman profil perusahaan",
      "Halaman layanan interaktif",
      "Blog untuk artikel terbaru",
      "Sistem kontak dan permintaan layanan terintegrasi",
      "Portfolio proyek sebelumnya",
      "Layanan kursus online",
      "Panel admin untuk pembaruan konten",
    ],
    images: {
      main: "/portofolio/isbi/isbi.png",
      screenshots: ["/portofolio/isbi/isbi.png"],
    },
    url: "https://isbi.co.id",
  },
  {
    id: "reka-official",
    title: "Rekan Kerja Official",
    slug: "reka-official",
    client: "Rekan Kerja Indonesia",
    description:
      "Platform e-learning untuk membantu dan merencanakan karir.",
    longDescription:
      "Platform e-learning yang menyediakan kursus online untuk membantu dan merencanakan karir. Platform ini dirancang untuk membantu pengguna dalam memahami dan meningkatkan kemampuan mereka dalam bidang tertentu.",
    categories: ["company", "elearning", "blog"],
    technologies: ["WordPress", "PHP", "MySQL", "Bootstrap", "TutorLMS"],
    features: [
      "Halaman profil perusahaan",
      "Halaman layanan interaktif",
      "Blog untuk artikel terbaru",
      "Sistem kontak dan permintaan layanan terintegrasi",
      "Video tutorial interaktif",
      "Sistem manajemen kursus",
      "Diskusi dan feedback",
      "Testimoni klien",
      "Dashboard kemajuan belajar",
      "Panel admin untuk pembaruan konten",
    ],
    images: {
      main: "/portofolio/reka-official/reka-official.png",
      screenshots: ["/portofolio/reka-official/reka-official.png"],
    },
    url: "https://rekaofficial.id",
  },
  {
    id: "sikader-pcpmii",
    title: "SIKader PC PMII Surabaya",
    slug: "sikader-pcpmii",
    client: "PC PMII Surabaya",
    description:
      "Sistem informasi kaderisasi untuk PC PMII Surabaya dengan fitur pendataan anggota.",
    longDescription:
      "Sistem Informasi Kaderisasi yang membantu PC PMII Surabaya dalam mengelola data anggota, kegiatan kaderisasi, dan pencatatan sejarah organisasi. Sistem ini memudahkan pengurus dalam monitoring dan evaluasi kader.",
    categories: ["custom"],
    technologies: ["Laravel", "MySQL", "FilamentPHP", "Tailwind CSS"],
    features: [
      "Database kader terintegrasi",
      "Tracking jenjang kaderisasi",
      "Manajemen kegiatan dan pelatihan",
      "Reporting dan statistik kaderisasi",
      "Input dan pengelolaan data anggota",
    ],
    images: {
      main: "/portofolio/sikader-pcpmii/sikader-pcpmii.png",
      screenshots: [
        "/portofolio/sikader-pcpmii/sikader-pcpmii.png",
        "/portofolio/sikader-pcpmii/sikader-pcpmii-2.png",
      ],
    },
    url: "https://databasepmiisurabaya.or.id",
  },
  {
    id: "trashopp",
    title: "Trashopp Store",
    slug: "trashopp",
    client: "Trashopp Indonesia",
    description:
      "Toko online dengan sistem pembayaran terintegrasi dan manajemen inventaris.",
    longDescription:
      "E-commerce platform untuk Trashopp Indonesia yang menerima penjualan dan pembelian produk ramah lingkungan dan daur ulang. Website dilengkapi dengan sistem manajemen produk.",
    categories: ["ecommerce", "company"],
    technologies: ["WordPress", "PHP", "MySQL", "WooCommerce", "Bootstrap"],
    features: [
      "Halaman profil perusahaan",
      "Halaman layanan interaktif",
      "Blog untuk artikel terbaru",
      "Sistem kontak dan permintaan layanan terintegrasi",
      "Katalog produk ramah lingkungan",
      "Sistem keranjang dan checkout",
      "Manajemen stok otomatis",
    ],
    images: {
      main: "/portofolio/trashopp/trashopp.png",
      screenshots: ["/portofolio/trashopp/trashopp.png"],
    },
    url: "https://trashopp.com",
  },
];

// Helper function to get a portfolio item by slug
export function getPortfolioItemBySlug(
  slug: string,
): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}

// Helper function to get all categories with custom ordering
export function getAllCategories(): { id: string; name: string }[] {
  // Define the categories in your preferred order
  const orderedCategories: { id: string; name: string }[] = [
    { id: "all", name: "Semua" },
    { id: "company", name: "Company Profile" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "elearning", name: "E-Learning" },
    { id: "blog", name: "Blog/News" },
    { id: "landing", name: "Landing Page" },
    { id: "custom", name: "Sistem Kustom" },
  ];
  
  // Get the actual categories used in portfolio items
  const existingCategories = new Set<string>();
  portfolioItems.forEach((item) => {
    item.categories.forEach((category) => {
      existingCategories.add(category);
    });
  });
  
  // Filter the ordered categories to only include those that are actually used
  // Plus always include the "all" category
  return orderedCategories.filter(category => 
    category.id === "all" || existingCategories.has(category.id)
  );
}
