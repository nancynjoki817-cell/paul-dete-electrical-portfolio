import React from 'react';
import { 
  Wrench, 
  Search, 
  Settings, 
  Shield, 
  FileText, 
  Grid, 
  Layers, 
  CheckCircle, 
  ShieldCheck, 
  Sun, 
  Anchor, 
  Camera 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Wrench,
  Search,
  Settings,
  Shield,
  FileText,
  Grid,
  Layers,
  CheckCircle,
  ShieldCheck,
  Sun,
  Anchor,
  Camera
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="badge-pill badge-golden">Technical Mastery</span>
          <h2 className="text-[#0B1B3A]">Skills & Engineering Competencies</h2>
          <p>
            Demonstrated hands-on expertise and theoretical knowledge across electrical engineering disciplines, safety protocols, and renewable energy.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={catIdx}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-md hover:border-amber-400/50 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-[#0B1B3A] mb-6 flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#F5B800]" />
                  <span>{cat.category}</span>
                </h3>

                <div className="space-y-6">
                  {cat.skills.map((skill, skillIdx) => {
                    const SkillIcon = iconMap[skill.icon] || CheckCircle;

                    return (
                      <div key={skillIdx} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-[#0B1B3A] flex items-center justify-center font-bold shadow-xs">
                              <SkillIcon className="w-4 h-4 text-[#0B1B3A]" />
                            </div>
                            <span className="text-sm font-bold text-slate-800">{skill.name}</span>
                          </div>
                          <span className="text-xs font-extrabold text-[#B28300] bg-amber-100/60 px-2 py-0.5 rounded-full">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar Indicator */}
                        <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden p-0.5">
                          <div
                            className="h-full bg-gradient-to-r from-[#0B1B3A] via-blue-900 to-[#F5B800] rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/60 text-xs font-semibold text-slate-500 text-center">
                <span>Evaluated based on code compliance & practical project completion</span>
              </div>

            </div>
          ))}
        </div>

        {/* Skill Badges Summary Pill Cloud */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0B1B3A]/5 border border-slate-200 text-center space-y-4">
          <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#0B1B3A]">
            Core Equipment & Tools Mastered
          </h4>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Digital Multimeters",
              "Insulation Testers",
              "Earth Resistance Testers",
              "Conduit Benders",
              "Cable Strippers",
              "Thermal Imaging Cameras",
              "Circuit Breaker Testers",
              "Solar PV Inverters",
              "LiFePO4 Batteries",
              "Schneider / ABB Breakers",
              "Dusk-to-Dawn Sensors",
              "PVC Piping Nets"
            ].map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-white text-slate-800 text-xs font-bold shadow-xs border border-slate-200/80 hover:border-[#F5B800] transition-colors"
              >
                ⚡ {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
