import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar = ({ onHireClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Dynamic nav highlight
      const sections = ['home', 'about', 'services', 'skills', 'projects', 'blog', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveNav(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-4 border-b border-slate-100'}`}>
      <div className="container flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-500 group-hover:bg-amber-400 group-hover:text-slate-900 transition-all duration-300 shadow-sm">
            <Zap className="w-6 h-6 fill-amber-400 stroke-amber-500 group-hover:fill-slate-900 group-hover:stroke-slate-900" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-xl text-slate-900 tracking-tight">
              <span>{personalInfo.name.split(' ')[0]}</span>
              <span className="text-amber-500">{personalInfo.name.split(' ')[1] || 'Electrician'}</span>
            </div>
            <div className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
              {personalInfo.title}
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-50 p-1.5 rounded-full border border-slate-200/60 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeNav === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive 
                    ? 'bg-amber-400 text-slate-950 shadow-sm' 
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Hire Me CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onHireClick}
            className="btn btn-navy flex items-center gap-2 group shadow-md hover:shadow-lg"
          >
            <span>Hire Me</span>
            <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl text-base font-semibold text-slate-800 hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onHireClick();
                }}
                className="btn btn-primary w-full justify-center"
              >
                <span>Hire Me Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${personalInfo.phone}`}
                className="btn btn-secondary w-full justify-center text-sm"
              >
                <PhoneCall className="w-4 h-4 text-slate-600" />
                <span>Call {personalInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
