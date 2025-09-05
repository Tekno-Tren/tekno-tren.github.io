"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { blogPosts, getAllCategories, getAllTags } from '@/data/blog';
import BlogCard from '@/components/blog/BlogCard';

const BlogPage = () => {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const tagParam = searchParams.get('tag');
  const searchParam = searchParams.get('search');

  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [selectedTag, setSelectedTag] = useState<string | null>(tagParam);
  const [searchTerm, setSearchTerm] = useState(searchParam || '');
  
  const categories = getAllCategories();
  const tags = getAllTags();
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory) params.set('category', selectedCategory);
    if (selectedTag) params.set('tag', selectedTag);
    if (searchTerm) params.set('search', searchTerm);
    
    const url = params.toString() ? `/blog?${params.toString()}` : '/blog';
    window.history.pushState({}, '', url);
  }, [selectedCategory, selectedTag, searchTerm]);
  
  // Update filters when URL parameters change
  useEffect(() => {
    setSelectedCategory(categoryParam);
    setSelectedTag(tagParam);
    setSearchTerm(searchParam || '');
  }, [categoryParam, tagParam, searchParam]);
  
  // Filter posts based on category, tag, and search term
  const filteredPosts = blogPosts
    .filter(post => !selectedCategory || post.category === selectedCategory)
    .filter(post => !selectedTag || post.tags.includes(selectedTag))
    .filter(post => 
      !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
      setSelectedTag(null); // Reset tag when category changes
    }
  };

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
      setSelectedCategory(null); // Reset category when tag changes
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the useEffect above
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedTag(null);
    setSearchTerm('');
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-12 mt-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dapatkan informasi terbaru tentang teknologi, pengembangan web, dan tips digital marketing.
          </p>
        </div>

        {/* Search and filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <form onSubmit={handleSearchSubmit} className="w-full md:w-1/2">
              <input
                type="text"
                placeholder="Cari artikel..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </form>
            
            {(selectedCategory || selectedTag || searchTerm) && (
              <button 
                onClick={clearFilters}
                className="text-green-600 hover:text-green-800 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Reset Filter
              </button>
            )}
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <h3 className="font-semibold mb-2">Filter by Category:</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-3 py-1 text-sm rounded-full ${
                      selectedCategory === category
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h3 className="font-semibold mb-2">Popular Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 8).map(tag => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`px-3 py-1 text-sm rounded-full ${
                      selectedTag === tag
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filtered Results */}
        {filteredPosts.length > 0 ? (
          <>
            {/* Display filter results information */}
            {(selectedCategory || selectedTag || searchTerm) && (
              <div className="mb-8">
                <p className="text-gray-600">
                  Showing {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}
                  {selectedCategory && <> for category <span className="font-semibold">{selectedCategory}</span></>}
                  {selectedTag && <> with tag <span className="font-semibold">{selectedTag}</span></>}
                  {searchTerm && <> matching <span className="font-semibold">&quot;{searchTerm}&quot;</span></>}
                </p>
              </div>
            )}

            {/* Blog posts grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">No posts found</h3>
            <p className="text-gray-600 mb-6">
              We couldn&apos;t find any posts matching your criteria. Please try different filters.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPage;
