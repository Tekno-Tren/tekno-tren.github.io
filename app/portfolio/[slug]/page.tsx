import { getPortfolioItemBySlug, portfolioItems } from "@/data/portfolio";
import PortfolioDetailClient from "./PortfolioDetailClient";

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

// Server component
export default function PortfolioDetail({ params }: { params: { slug: string } }) {
  // Get project data on the server side
  const project = getPortfolioItemBySlug(params.slug);
  
  // Pass the data to the client component, converting undefined to null
  return <PortfolioDetailClient project={project || null} />;
}
