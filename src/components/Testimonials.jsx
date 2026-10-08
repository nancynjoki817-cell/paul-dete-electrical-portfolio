import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { testimonials } from '../data/portfolioData';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-[#F5F8FC] relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="badge-pill badge-navy">Client Feedback</span>
          <h2 className="text-[#0B1B3A]">What Clients Say About Paul Dete</h2>
          <p>
            Real reviews from homeowners, commercial facility managers, and business owners who rely on Paul Dete for electrical work.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="hover-card p-8 group flex flex-col justify-between relative"
            >
              <div>
                {/* Quote icon & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                    <Quote className="w-5 h-5 fill-amber-400 stroke-amber-600" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B1B3A] text-[#F5B800] flex items-center justify-center font-extrabold text-sm shadow-sm">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-sm text-[#0B1B3A]">
                    <span>{item.author}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">{item.role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
