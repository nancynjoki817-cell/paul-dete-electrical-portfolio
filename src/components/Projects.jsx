import React, { useState } from 'react';
import { 
  Folder, 
  ExternalLink, 
  Tag, 
  X, 
  Calendar, 
  UserCheck, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Solar', 'Troubleshooting'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-[#F5F8FC] relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="badge-pill badge-navy">Portfolio Showcase</span>
          <h2 className="text-[#0B1B3A]">Featured Electrical Engineering Projects</h2>
          <p>
            Explore real-world electrical wiring installations, solar power implementations, panel upgrades, and precision troubleshooting.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border ${
                activeFilter === cat
                  ? 'bg-[#0B1B3A] text-white border-[#0B1B3A] shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-amber-400 hover:bg-amber-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="hover-card group flex flex-col justify-between overflow-hidden rounded-3xl"
            >
              <div>
                {/* Project Image Container */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#0B1B3A]/90 text-[#F5B800] text-xs font-extrabold uppercase tracking-wide backdrop-blur-md shadow-md border border-amber-400/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#0B1B3A] group-hover:text-amber-600 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies / Systems Used */}
                  <div className="pt-2">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-amber-500" />
                      <span>Equipment & Systems</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-[11px] font-semibold border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full btn btn-navy text-xs font-bold flex items-center justify-center gap-2 group-hover:bg-[#F5B800] group-hover:text-slate-950 transition-all"
                >
                  <span>View Project Details</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col">
            
            {/* Modal Header Image */}
            <div className="relative h-64 sm:h-72 bg-slate-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-950/70 text-white flex items-center justify-center hover:bg-amber-400 hover:text-slate-950 transition-colors shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700 text-white">
                <div className="text-xs font-bold text-[#F5B800] uppercase tracking-wider">
                  {selectedProject.category} Project
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <UserCheck className="w-5 h-5 text-amber-500" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase">Client / Sector</div>
                    <div className="text-sm font-bold text-slate-800">{selectedProject.client}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase">Year Executed</div>
                    <div className="text-sm font-bold text-slate-800">{selectedProject.year}</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-[#0B1B3A] mb-2">Detailed Scope of Work</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedProject.details}
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-[#0B1B3A] mb-3">Technologies & Systems Deployed</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-amber-400/15 text-amber-900 text-xs font-bold border border-amber-400/30 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-semibold">Verified Electrical Project</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn btn-navy text-xs"
                >
                  Close Preview
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
