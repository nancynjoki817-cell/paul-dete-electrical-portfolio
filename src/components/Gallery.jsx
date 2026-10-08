import React, { useState } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from '../data/portfolioData';

export const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="section-padding bg-white relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="badge-pill badge-golden">On-Site Work</span>
          <h2 className="text-[#0B1B3A]">Field Installation Gallery</h2>
          <p>
            Authentic photographs of real electrical conduits, lighting grids, energy meters, and switchboards installed on location.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative h-60 sm:h-64 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3A]/90 via-[#0B1B3A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F5B800]">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold text-white line-clamp-1">
                  {item.title}
                </h4>
                <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Expand Photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn">
          
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors flex items-center justify-center shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors flex items-center justify-center shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors flex items-center justify-center shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Title Display */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={galleryItems[selectedImageIndex].src}
              alt={galleryItems[selectedImageIndex].title}
              className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl border border-slate-800"
            />
            <div className="mt-4 text-center text-white">
              <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                {galleryItems[selectedImageIndex].category}
              </span>
              <h3 className="text-xl font-extrabold text-white mt-2">
                {galleryItems[selectedImageIndex].title}
              </h3>
            </div>
          </div>

        </div>
      )}

    </section>
  );
};
