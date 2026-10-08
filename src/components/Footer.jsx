import React from 'react';
import { Zap, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1B3A] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="container">
        
        <div className="grid md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand & Short Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md">
                <Zap className="w-6 h-6 fill-slate-950 stroke-slate-950" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">{personalInfo.name}</span>
                <span className="block text-xs font-semibold text-amber-400 tracking-wider uppercase">
                  {personalInfo.title}
                </span>
              </div>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Delivering code-compliant, energy-efficient, and dependable electrical solutions for residential homes, commercial properties, and industrial plants.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-300">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Engineer</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Electrical Services</a></li>
              <li><a href="#skills" className="hover:text-amber-400 transition-colors">Skills & Competencies</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Projects & Work</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Site Photo Gallery</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Me</a></li>
            </ul>
          </div>

          {/* Contact Summary & Social */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-400">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              {['LinkedIn', 'WhatsApp', 'Twitter', 'GitHub'].map((net, idx) => (
                <a
                  key={idx}
                  href="#contact"
                  className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-xs font-bold hover:bg-amber-400 hover:text-slate-950 transition-colors"
                >
                  {net.charAt(0)}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400">
          <div>
            © {new Date().getFullYear()} {personalInfo.name} | Professional Electrical Engineer. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-white font-bold transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
