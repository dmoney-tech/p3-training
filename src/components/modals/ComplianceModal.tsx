import React, { useState } from 'react';
import { X, Shield, CheckCircle, ArrowRight, FileCheck, AlertTriangle } from 'lucide-react';

interface ComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComplianceModal: React.FC<ComplianceModalProps> = ({ isOpen, onClose }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'RMCP Development & Implementation',
    'POPIA Compliance Framework'
  ]);
  const [fullName, setFullName] = useState('');
  const [agency, setAgency] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const servicesList = [
    'RMCP development and implementation (FIC Act)',
    'PAIA manuals and operational alignment',
    'POPIA documentation and client data processes',
    'Evidence and compliance record organisation',
    'FIC & PPRA inspection readiness audit'
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter(s => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white border border-[#DCE5EB] rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#061D36] p-6 text-white text-left relative flex-shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#078A87]/30 text-[#16B8AC] text-xs font-semibold mb-2">
            <Shield className="w-3.5 h-3.5" />
            FIC, PAIA & POPIA Regulatory Support
          </div>
          <h3 className="text-xl font-bold font-['Manrope']">
            Enquire About Compliance Support
          </h3>
          <p className="text-xs text-white/70 mt-1">
            Get practical compliance frameworks customized for your South African estate agency operations.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-[#E6F4F3] text-[#078A87] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-[#061D36] mb-2 font-['Manrope']">
                Enquiry Successfully Logged
              </h4>
              <p className="text-xs text-[#586B7A] mb-6 leading-relaxed max-w-sm mx-auto">
                Thank you, {fullName}. Our senior compliance advisor will review your agency details ({agency}) and reach out via {email} within 1 business day with a structured implementation scope.
              </p>
              <button 
                onClick={() => { setSubmitted(false); onClose(); }}
                className="py-2.5 px-6 bg-[#078A87] hover:bg-[#067572] text-white text-xs font-bold rounded-lg transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-[#172B3A] mb-2">
                  Select Required Compliance Focus Areas:
                </label>
                <div className="space-y-2">
                  {servicesList.map((srv, i) => (
                    <label 
                      key={i} 
                      className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                        selectedServices.includes(srv) 
                          ? 'border-[#078A87] bg-[#E6F4F3]/50 text-[#061D36]' 
                          : 'border-[#DCE5EB] hover:bg-[#F5F8FA] text-[#586B7A]'
                      }`}
                    >
                      <input 
                        type="checkbox"
                        checked={selectedServices.includes(srv)}
                        onChange={() => toggleService(srv)}
                        className="rounded border-[#DCE5EB] text-[#078A87] focus:ring-[#078A87]"
                      />
                      <span className="font-medium">{srv}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-[#172B3A] mb-1">
                    Your Full Name
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Sipho Ndlovu" 
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#DCE5EB] rounded-lg focus:outline-none focus:border-[#078A87]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#172B3A] mb-1">
                    Agency / Firm Name
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Apex Property Group" 
                    value={agency}
                    onChange={e => setAgency(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#DCE5EB] rounded-lg focus:outline-none focus:border-[#078A87]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#172B3A] mb-1">
                    Business Email
                  </label>
                  <input 
                    type="email" 
                    required 
                    placeholder="sipho@apexproperties.co.za" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#DCE5EB] rounded-lg focus:outline-none focus:border-[#078A87]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#172B3A] mb-1">
                    Direct Phone / WhatsApp
                  </label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+27 82 000 0000" 
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#DCE5EB] rounded-lg focus:outline-none focus:border-[#078A87]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F5F8FA] border border-[#DCE5EB] text-[11px] text-[#586B7A]">
                <FileCheck className="w-4 h-4 text-[#078A87] flex-shrink-0" />
                <span>Includes a free compliance gap audit scorecard for South African agencies.</span>
              </div>

              <button 
                type="submit"
                className="w-full py-2.5 px-4 bg-[#078A87] hover:bg-[#067572] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Submit Compliance Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
