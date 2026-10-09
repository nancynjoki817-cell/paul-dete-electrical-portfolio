import React, { useState } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Play, Video, Film, Sparkles } from 'lucide-react';
import { galleryItems, siteVideos } from '../data/portfolioData';

export const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos'); // 'photos' or 'videos'
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

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
          <span className="badge-pill badge-golden">On-Site Work & Media</span>
          <h2 className="text-[#0B1B3A]">Field Installation Gallery & Videos</h2>
          <p>
            Explore real photos and video walkthroughs of luxury villa exterior lighting, water pump float switches, meter boxes, and conduit wiring.
          </p>
        </div>

        {/* Gallery / Video Toggle Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('photos')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 border ${
              activeTab === 'photos'
                ? 'bg-[#0B1B3A] text-white border-[#0B1B3A] shadow-md'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-amber-400 hover:bg-amber-50'
            }`}
          >
            <Camera className="w-4 h-4 text-[#F5B800]" />
            <span>Site Photos ({galleryItems.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 border ${
              activeTab === 'videos'
                ? 'bg-[#0B1B3A] text-white border-[#0B1B3A] shadow-md'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-amber-400 hover:bg-amber-50'
            }`}
          >
            <Video className="w-4 h-4 text-emerald-400" />
            <span>Site Project Videos ({siteVideos.length})</span>
          </button>
        </div>

        {/* PHOTO GALLERY TAB CONTENT */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 animate-fadeIn">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* New Tag Pill */}
                {item.isNew && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>New Upload</span>
                    </span>
                  </div>
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3A]/90 via-[#0B1B3A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F5B800]">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-white line-clamp-2">
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
        )}

        {/* VIDEO SHOWCASE TAB CONTENT */}
        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
            {siteVideos.map((video) => (
              <div
                key={video.id}
                className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800 text-white group flex flex-col justify-between"
              >
                {/* Video Preview Thumbnail */}
                <div className="relative h-64 overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#F5B800] text-slate-950 flex items-center justify-center font-bold shadow-2xl hover:scale-110 transition-transform group-hover:bg-amber-400"
                  >
                    <Play className="w-8 h-8 fill-slate-950 stroke-none ml-1" />
                  </button>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 text-amber-400 text-xs font-bold backdrop-blur-md flex items-center gap-1 border border-amber-400/30">
                      <Film className="w-3.5 h-3.5" />
                      <span>{video.duration}</span>
                    </span>
                  </div>
                </div>

                {/* Video Information */}
                <div className="p-6 space-y-3 bg-[#0B1B3A]">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {video.description}
                  </p>

                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="w-full btn btn-primary py-3 text-slate-950 font-bold flex items-center justify-center gap-2 mt-4"
                  >
                    <Play className="w-4 h-4 fill-slate-950 stroke-none" />
                    <span>Watch Site Video</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* FULLSCREEN PHOTO LIGHTBOX MODAL */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn">
          
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors flex items-center justify-center shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>

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

      {/* VIDEO PLAYER MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-[#0B1B3A] p-5 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-amber-400" />
                <h3 className="text-base sm:text-lg font-bold text-white">{selectedVideo.title}</h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-amber-400 hover:text-slate-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative bg-black flex justify-center items-center">
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                className="w-full max-h-[70vh] object-contain"
              >
                Your browser does not support playing this video.
              </video>
            </div>

            {/* Modal Footer Description */}
            <div className="p-6 bg-slate-950 text-slate-300 text-xs sm:text-sm">
              <p>{selectedVideo.description}</p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
