import React from 'react';
import { 
  Home, 
  Building2, 
  Factory, 
  Activity, 
  Cpu, 
  Sun, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { services } from '../data/portfolioData';

// Map string icon names to Lucide Icon components
const iconMap = {
  Home,
  Building2,
  Factory,
  Activity,
  Cpu,
  Sun,
  ShieldCheck
};

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-[#F5F8FC] relative">
      
      {/* Decorative accent element */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="badge-pill badge-navy">What I Offer</span>
          <h2 className="text-[#0B1B3A]">Electrical Engineering Services</h2>
          <p>
            Delivering safe, dependable, and high-performance electrical solutions tailored to residential, commercial, and industrial facilities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || ShieldCheck;

            return (
              <div
                key={service.id}
                className="hover-card p-8 group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Decorative golden corner accent on hover */}
                <div className="absolute top-0 left-0 w-1.5 h-0 bg-[#F5B800] group-hover:h-full transition-all duration-300" />

                <div>
                  {/* Icon Header */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0B1B3A]/5 group-hover:bg-[#0B1B3A] text-[#0B1B3A] group-hover:text-[#F5B800] flex items-center justify-center mb-6 transition-all duration-300 shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0B1B3A] group-hover:text-[#0B1B3A] mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Feature Checklist */}
                  <div className="pt-4 border-t border-slate-100 mb-6 space-y-2">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16A36A]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Action */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-[#0B1B3A] group-hover:text-[#B28300] uppercase tracking-wider transition-colors"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#0B1B3A] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">Need a Custom Electrical System Solution?</h3>
            <p className="text-slate-300 text-sm">
              Contact Electrical Engineer Paul Dete for custom load calculations, power audits, or project estimates.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary font-bold shadow-md flex-shrink-0">
            <span>Get Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
