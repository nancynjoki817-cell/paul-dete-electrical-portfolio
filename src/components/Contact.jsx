import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Please type your message or project requirements';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate network submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback silently if confetti library is not active
      }
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding bg-[#F5F8FC] relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="badge-pill badge-navy">Get In Touch</span>
          <h2 className="text-[#0B1B3A]">Start Your Electrical Project Today</h2>
          <p>
            Have an electrical installation, solar setup, fault issue, or maintenance contract? Reach out directly to Electrical Engineer Paul Dete.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Information & Direct Buttons */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-[#0B1B3A] p-8 rounded-3xl text-white shadow-xl space-y-8 relative overflow-hidden border border-slate-800">
              {/* Glow background accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#F5B800]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5B800]">Direct Contact</span>
                <h3 className="text-2xl font-extrabold text-white mt-1">Connect Directly</h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Available for emergency electrical troubleshooting, site visits, and consultation meetings.
                </p>
              </div>

              {/* Contact Information List */}
              <div className="space-y-6">
                
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#F5B800] flex items-center justify-center font-bold flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Call / Phone</div>
                    <a href={`tel:${personalInfo.phone}`} className="text-base font-bold text-white hover:text-[#F5B800] transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#F5B800] flex items-center justify-center font-bold flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Direct Email</div>
                    <a href={`mailto:${personalInfo.email}`} className="text-base font-bold text-white hover:text-[#F5B800] transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#F5B800] flex items-center justify-center font-bold flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Primary Location</div>
                    <div className="text-base font-bold text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#16A36A] flex items-center justify-center font-bold flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Response Guaranteed</div>
                    <div className="text-base font-bold text-emerald-400">
                      Within 1-2 Hours
                    </div>
                  </div>
                </div>

              </div>

              {/* Prominent WhatsApp CTA Button */}
              <div className="pt-4 border-t border-slate-700">
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#16A36A] text-white hover:bg-emerald-600 font-bold flex items-center justify-center gap-3 shadow-lg transition-all"
                >
                  <MessageSquare className="w-5 h-5 fill-white stroke-none" />
                  <span>Chat directly on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#0B1B3A]">Send a Message</h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Fill in the form below and Paul Dete will respond with details and availability.
              </p>
            </div>

            {/* Success Alert */}
            {submitSuccess && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 animate-fadeIn">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    Thank you for reaching out. Electrical Engineer Paul Dete has received your request and will respond shortly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-5">
                
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors outline-none ${
                      errors.name 
                        ? 'border-red-400 bg-red-50 text-red-900 focus:border-red-500' 
                        : 'border-slate-200 bg-slate-50 focus:border-[#0B1B3A] focus:bg-white'
                    }`}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1 text-red-500 text-xs mt-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors outline-none ${
                      errors.email 
                        ? 'border-red-400 bg-red-50 text-red-900 focus:border-red-500' 
                        : 'border-slate-200 bg-slate-50 focus:border-[#0B1B3A] focus:bg-white'
                    }`}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 text-red-500 text-xs mt-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Subject / Project Type *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. House Wiring Installation / Solar Quote"
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors outline-none ${
                    errors.subject 
                      ? 'border-red-400 bg-red-50 text-red-900 focus:border-red-500' 
                      : 'border-slate-200 bg-slate-50 focus:border-[#0B1B3A] focus:bg-white'
                  }`}
                />
                {errors.subject && (
                  <div className="flex items-center gap-1 text-red-500 text-xs mt-1 font-semibold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.subject}</span>
                  </div>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Project Details / Message *
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your electrical project, property type, or troubleshooting requirements..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors outline-none resize-none ${
                    errors.message 
                      ? 'border-red-400 bg-red-50 text-red-900 focus:border-red-500' 
                      : 'border-slate-200 bg-slate-50 focus:border-[#0B1B3A] focus:bg-white'
                  }`}
                />
                {errors.message && (
                  <div className="flex items-center gap-1 text-red-500 text-xs mt-1 font-semibold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary shadow-lg py-4 text-slate-950 font-bold flex items-center justify-center gap-2 hover:shadow-xl transition-all"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message Now</span>
                    <Send className="w-4 h-4 stroke-[2.5]" />
                  </>
                )}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
