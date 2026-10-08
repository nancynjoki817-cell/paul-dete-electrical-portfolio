import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F8FC] text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans">
      
      {/* Top Fixed Header */}
      <Navbar onHireClick={scrollToContact} />

      <main>
        {/* Hero Section */}
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Site Gallery Section */}
        <Gallery />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Blog / Insights Section */}
        <Blog />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Downloadable CV Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

    </div>
  );
}

export default App;
