import React from 'react';
import { ShieldCheck, Award, Zap, CheckCircle2, FileCheck, Users, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="badge-pill badge-golden">Professional Profile</span>
          <h2 className="text-[#0B1B3A]">About Electrical Engineer {personalInfo.name}</h2>
          <p>
            Combining rigorous electrical engineering principles with hands-on technical excellence across residential, commercial, and industrial power domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Feature Card Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#0B1B3A] to-[#13274F] text-white shadow-xl overflow-hidden border border-slate-700">
              
              {/* Subtle background glow */}
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/30">
                <Zap className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                <span>Engineering Philosophy</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-4 leading-snug">
                "Precision engineering, zero-compromise safety, and sustainable energy."
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {personalInfo.bio}
              </p>

              <div className="pt-4 border-t border-slate-700/80 grid grid-cols-2 gap-4">
                {personalInfo.stats.map((stat, index) => (
                  <div key={index} className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/50">
                    <div className="text-2xl font-black text-[#F5B800]">{stat.number}</div>
                    <div className="text-xs font-semibold text-slate-300 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Detailed Narrative & Key Pillars */}
          <div className="lg:col-span-7 space-y-6 text-slate-700">
            
            <h3 className="text-2xl font-bold text-[#0B1B3A]">
              Dedicated to Power System Reliability & Modernization
            </h3>

            <p className="text-base leading-relaxed text-slate-600">
              {personalInfo.detailedAbout}
            </p>

            {/* Core Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:border-amber-400/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0B1B3A]">Strict Safety Protocols</h4>
                  <p className="text-xs text-slate-600 mt-1">Every installation passes earth resistance, residual current, and circuit protection testing.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:border-amber-400/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0B1B3A]">Energy Efficiency</h4>
                  <p className="text-xs text-slate-600 mt-1">Designing low-loss wiring routes, LED retrofits, and smart solar PV backup integration.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:border-amber-400/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0B1B3A]">Code Compliance</h4>
                  <p className="text-xs text-slate-600 mt-1">Adheres strictly to national electrical codes and statutory engineering standards.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:border-amber-400/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0B1B3A]">Client-Centric Service</h4>
                  <p className="text-xs text-slate-600 mt-1">Clear communication, transparent estimations, and tidy job site cleanup guaranteed.</p>
                </div>
              </div>

            </div>

            {/* Editable Note Box */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-3">
              <span className="font-extrabold px-2 py-0.5 rounded bg-amber-200 text-amber-950 uppercase tracking-wide">Editable Note</span>
              <span>Engineering qualifications, certification details, and licensure IDs can be updated directly in <code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-amber-950">portfolioData.js</code>.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
