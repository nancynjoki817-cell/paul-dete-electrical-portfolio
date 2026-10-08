import React from 'react';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/portfolioData';

export const Blog = () => {
  return (
    <section id="blog" className="section-padding bg-white relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="badge-pill badge-golden">Engineering Insights</span>
          <h2 className="text-[#0B1B3A]">Latest Electrical Articles & Guides</h2>
          <p>
            Practical insights on home electrical safety, energy efficiency retrofits, and renewable solar energy adoption.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="hover-card group flex flex-col justify-between overflow-hidden rounded-3xl"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#0B1B3A]/90 text-white text-xs font-bold backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B1B3A] group-hover:text-amber-600 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-extrabold text-[#0B1B3A] group-hover:text-amber-600 uppercase tracking-wider transition-colors"
                >
                  <span>Read Article Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
