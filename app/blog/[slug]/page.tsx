import BlogPostClient from './BlogPostClient';
import { blogPosts } from '@/data/blog';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostClient params={params} />;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
