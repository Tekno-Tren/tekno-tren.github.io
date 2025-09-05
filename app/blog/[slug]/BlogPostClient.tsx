"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug, getRelatedPosts } from '@/data/blog';
import ReactMarkdown from 'react-markdown';

interface BlogPostClientProps {
  params: {
    slug: string;
  };
}

const BlogPostClient = ({ params }: BlogPostClientProps) => {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = getRelatedPosts(post, 3);
  
  return (
    <article className="min-h-screen py-12 mt-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="mb-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Blog
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap items-center text-gray-600 mb-8">
            <div className="flex items-center mr-6 mb-2">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm">{post.author.role}</p>
              </div>
            </div>
            
            <div className="flex items-center mr-6 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{post.date}</span>
            </div>
            
            <div className="flex items-center mr-6 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime} min read</span>
            </div>
            
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <Link href={`/blog?category=${post.category}`} className="text-green-600 hover:text-green-800 transition-colors">
                {post.category}
              </Link>
            </div>
          </div>
          
          {/* Cover Image Placeholder */}
          <div className="relative w-full h-64 md:h-96 bg-gray-200 rounded-lg mb-12">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <span>Featured Image: {post.title}</span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Link 
                  key={tag} 
                  href={`/blog?tag=${tag}`}
                  className="px-3 py-1 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-full text-sm transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Author Box */}
          <div className="mt-12 p-6 bg-green-50 rounded-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-1">{post.author.name}</h3>
                <p className="text-gray-600 mb-3">{post.author.role}</p>
                <p className="text-gray-700">
                  Tim ahli Tekno Tren dengan pengalaman mendalam di bidangnya. Berbagi pengetahuan dan insight 
                  untuk membantu bisnis Anda tumbuh di era digital.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-6xl mx-auto mt-20">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <div key={relatedPost.id} className="flex flex-col bg-green-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <div className="bg-gray-200 h-48 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      <span className="text-sm">{relatedPost.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{relatedPost.date}</p>
                    <h3 className="text-xl font-semibold mb-2">{relatedPost.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                    <Link 
                      href={`/blog/${relatedPost.slug}`} 
                      className="text-green-600 font-medium hover:text-green-800 transition duration-300"
                    >
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-20 p-8 bg-green-100 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help with Your Web Project?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our team of experts is ready to help you create a stunning and effective website
            that drives results for your business.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPostClient;
