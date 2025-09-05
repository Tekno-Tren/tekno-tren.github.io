"use client";

import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/data/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <div className="bg-gray-200 h-48 relative">
        <div className="absolute top-0 left-0 bg-green-600 text-white px-3 py-1 text-sm">
          {post.category}
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <span className="text-sm">Featured Image</span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden mr-3">
            {/* Placeholder for author avatar */}
          </div>
          <div>
            <p className="text-sm font-medium">{post.author.name}</p>
            <p className="text-xs text-gray-500">{post.date}</p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map(tag => (
              <Link 
                key={tag} 
                href={`/blog?tag=${tag}`}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors"
              >
                {tag}
              </Link>
            ))}
            {post.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <Link 
              href={`/blog/${post.slug}`} 
              className="text-green-600 font-medium hover:text-green-800 transition duration-300"
            >
              Baca Selengkapnya
            </Link>
            <span className="text-sm text-gray-500">{post.readTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
