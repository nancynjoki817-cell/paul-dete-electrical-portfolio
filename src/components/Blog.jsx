import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  X, 
  UserCheck, 
  CheckCircle2, 
  Share2, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { blogPosts, personalInfo } from '../data/portfolioData';

export const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="blog" className="section-padding bg-white relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="badge-pill badge-golden">Engineering Insights</span>
          <h2 className="text-[#0B1B3A]">Latest Electrical Articles & Guides</h2>
          <p>
            Explore full technical guides on interior lighting, kitchen appliance wiring, and water pump float switch automation.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="hover-card group flex flex-col justify-between overflow-hidden rounded-3xl cursor-pointer"
              onClick={() => setSelectedArticle(post)}
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#0B1B3A]/90 text-[#F5B800] text-xs font-bold backdrop-blur-md border border-amber-400/30">
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
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedArticle(post);
                  }}
                  className="inline-flex items-center gap-2 text-xs font-extrabold text-[#0B1B3A] group-hover:text-amber-600 uppercase tracking-wider transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* FULL ARTICLE READING MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-h-[92vh] flex flex-col">
            
            {/* Modal Header Banner Image */}
            <div className="relative h-64 sm:h-80 bg-slate-900 flex-shrink-0">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3A] via-[#0B1B3A]/40 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-950/70 text-white flex items-center justify-center hover:bg-amber-400 hover:text-slate-950 transition-colors shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Title & Category Badge */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#F5B800] text-slate-950 text-xs font-extrabold uppercase tracking-wider">
                    {selectedArticle.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold pt-1">
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  <span>Written by {selectedArticle.author}</span>
                  <span>•</span>
                  <span>Published {selectedArticle.date}</span>
                </div>
              </div>
            </div>

            {/* Modal Article Content Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-700 leading-relaxed">
              
              {/* Excerpt Lead Paragraph */}
              <div className="p-5 rounded-2xl bg-amber-50 border-l-4 border-amber-400 text-amber-950 text-sm font-semibold italic">
                "{selectedArticle.excerpt}"
              </div>

              {/* Article Sections */}
              <div className="space-y-6">
                {selectedArticle.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1B3A] border-b border-slate-100 pb-2">
                      {sec.heading}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Takeaways Box */}
              {selectedArticle.keyTakeaways && (
                <div className="p-6 rounded-2xl bg-[#0B1B3A] text-white space-y-4">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-base uppercase tracking-wide">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span>Engineering Key Takeaways</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                    {selectedArticle.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Article Action Footer */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="#contact"
                  onClick={() => setSelectedArticle(null)}
                  className="w-full sm:w-auto btn btn-primary font-bold text-slate-950 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consult Eng. Paul Dete On This Topic</span>
                </a>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-full sm:w-auto btn btn-secondary text-xs"
                >
                  Close Article Reader
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
