import React from 'react';
import { Zap, Shield, Leaf, ArrowRight, Mail, Download, CheckCircle2, Wrench, Settings } from 'lucide-react';
import { personalInfo, trustHighlights } from '../data/portfolioData';

export const Hero = ({ onOpenCV }) => {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50">
      
      {/* Decorative Background Lighting Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Introductory Badge Label */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-800 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>{personalInfo.subtitle}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1B3A] tracking-tight leading-[1.15]">
              I’m an{' '}
              <span className="text-[#F5B800] inline-block drop-shadow-sm">
                Electrical Engineer
              </span>{' '}
              building reliable and efficient systems.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-xl">
              I design, install, troubleshoot, and maintain electrical systems for homes, businesses, and industries. From electrical installations to power system maintenance, I deliver safe, efficient, and dependable solutions.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Button 1: View My Projects */}
              <a
                href="#projects"
                className="btn btn-primary shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 text-slate-950 font-bold"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              {/* Button 2: Get In Touch */}
              <a
                href="#contact"
                className="btn btn-secondary border-2 border-[#0B1B3A] text-[#0B1B3A] hover:bg-[#0B1B3A] hover:text-white font-bold"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>

              {/* Button 3: Download My CV */}
              <button
                onClick={onOpenCV}
                className="btn border-0 bg-transparent text-slate-700 hover:text-[#0B1B3A] hover:bg-slate-100 font-bold underline underline-offset-4 decoration-amber-400 decoration-2"
              >
                <Download className="w-4 h-4 text-amber-500" />
                <span>Download My CV</span>
              </button>
            </div>

            {/* Quick Proof Pills */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Certified Engineer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Code Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>24/7 Rapid Response</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE ILLUSTRATION & FLOATING BADGES */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Background Glow Arc */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 via-amber-200/10 to-blue-500/10 rounded-full blur-2xl transform scale-90 -z-10" />

            {/* Main 3D Male Cartoon Electrician Card */}
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-900 group">
              <img
                src="/images/hero-electrician.jpg"
                alt="Paul Dete - Professional 3D Male Electrical Engineer"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3A]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* FLOATING CARD 1: Electrical Installations */}
            <div className="absolute -top-4 -left-2 sm:left-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 animate-float-1 z-20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold shadow-sm">
                <Zap className="w-6 h-6 fill-amber-400 stroke-amber-600" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0B1B3A]">Electrical</h4>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-500">Installations</p>
              </div>
            </div>

            {/* FLOATING CARD 2: System Maintenance */}
            <div className="absolute top-1/2 -right-3 sm:-right-4 transform -translate-y-1/2 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 animate-float-2 z-20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold shadow-sm">
                <Settings className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0B1B3A]">System</h4>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-500">Maintenance</p>
              </div>
            </div>

            {/* FLOATING CARD 3: Energy Efficiency */}
            <div className="absolute -bottom-4 left-6 sm:left-12 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 animate-float-3 z-20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold shadow-sm">
                <Leaf className="w-6 h-6 text-emerald-600 fill-emerald-100" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0B1B3A]">Energy</h4>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-500">Efficiency</p>
              </div>
            </div>

          </div>

        </div>

        {/* TRUST AND EXPERTISE HIGHLIGHTS BAR */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-200/80">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Highlight 1: Safe */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md flex items-start gap-4 hover:border-amber-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-700 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-extrabold text-[#0B1B3A]">Safe</h3>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    Safety-first
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                  100% safety-first solutions strictly adhering to electrical installation regulations.
                </p>
              </div>
            </div>

            {/* Highlight 2: Reliable */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md flex items-start gap-4 hover:border-blue-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Zap className="w-6 h-6 fill-blue-600 group-hover:fill-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-extrabold text-[#0B1B3A]">Reliable</h3>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                    Quality
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                  Uncompromising quality workmanship and robust wiring built for long-term durability.
                </p>
              </div>
            </div>

            {/* Highlight 3: Efficient */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md flex items-start gap-4 hover:border-emerald-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-extrabold text-[#0B1B3A]">Efficient</h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Smart Energy
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                  Smart energy solutions and solar power integration designed to lower overheads.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
