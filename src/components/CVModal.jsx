import React from 'react';
import { Download, X, FileText, CheckCircle2, Shield, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate a downloadable text resume file dynamically
    const cvText = `
===================================================================
CURRICULUM VITAE - ELECTRICAL ENGINEER
===================================================================
Full Name: ${personalInfo.name}
Title: ${personalInfo.title}
Phone: ${personalInfo.phone}
Email: ${personalInfo.email}
Location: ${personalInfo.location}

-------------------------------------------------------------------
PROFESSIONAL SUMMARY
-------------------------------------------------------------------
${personalInfo.bio}

${personalInfo.detailedAbout}

-------------------------------------------------------------------
CORE COMPETENCIES & TECHNICAL SKILLS
-------------------------------------------------------------------
- Residential & Commercial Electrical Wiring
- Industrial Main Distribution Board (MDB) & Sub-Panels
- Electrical Circuit Design & Load Distribution Calculation
- Precision Fault Diagnosis & Insulation Resistance Testing
- Off-Grid & Hybrid Solar PV Inverter System Setup
- Circuit Breaker Upgrades (MCCB, RCCB, Earth Leakage)
- Code Compliance & Electrical Inspection Audits
- PVC Conduit Piping & Cable Tracing

-------------------------------------------------------------------
KEY PROJECT HIGHLIGHTS
-------------------------------------------------------------------
1. Residential Villa Wiring: Complete conduit routing, sub-panel, & lighting.
2. Commercial Plaza LED Retrofit: Reduced power overhead by 35%.
3. Hybrid Solar Power System: 5kW inverter setup with battery storage.
4. Industrial Breaker Modernization: Upgraded fuse panels to MCCB safety boards.

-------------------------------------------------------------------
CONTACT & HIRE INFORMATION
-------------------------------------------------------------------
Phone: ${personalInfo.phone}
Email: ${personalInfo.email}
WhatsApp: ${personalInfo.whatsappUrl}
===================================================================
`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${personalInfo.name.replace(/\s+/g, '_')}_CV.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Modal Header */}
        <div className="bg-[#0B1B3A] p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-[#F5B800] flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Curriculum Vitae</h3>
              <p className="text-xs text-amber-400 font-semibold">{personalInfo.name} - {personalInfo.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-amber-400 hover:text-slate-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Preview */}
        <div className="p-6 space-y-4 text-slate-700">
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
            Download the verified professional CV of Electrical Engineer Paul Dete including technical credentials, project history, and references.
          </p>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs font-medium">
            <div className="flex items-center gap-2 text-slate-800 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Full Engineering Credentials Summary</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Commercial & Solar Experience Log</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Direct Client References & Contact Details</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={handleDownload}
              className="w-full btn btn-primary py-3.5 text-slate-950 font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <Download className="w-5 h-5 stroke-[2.5]" />
              <span>Download CV File</span>
            </button>
            <button
              onClick={onClose}
              className="w-full btn btn-secondary text-xs"
            >
              Cancel
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
