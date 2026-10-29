import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, CheckCircle, ShieldCheck, User } from 'lucide-react';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortalModal: React.FC<PortalModalProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agency, setAgency] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    setPassword('');
    setAgency('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white border border-[#DCE5EB] rounded-2xl max-w-md w-full shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#061D36] p-6 text-white text-left relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#078A87]/30 text-[#16B8AC] text-xs font-semibold mb-2">
            <User className="w-3.5 h-3.5" />
            P3 Training Student Portal
          </div>
          <h3 className="text-xl font-bold font-['Manrope']">
            Property Professional Access
          </h3>
          <p className="text-xs text-white/70 mt-1">
            Access your course curriculum, listing scripts, RMCP templates & webinar recordings.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex border-b border-[#DCE5EB] bg-[#F5F8FA]">
          <button 
            onClick={() => { setTab('login'); setSubmitted(false); }}
            className={`flex-1 py-3 text-xs font-bold transition-colors ${tab === 'login' ? 'border-b-2 border-[#078A87] text-[#078A87] bg-white' : 'text-[#586B7A] hover:text-[#061D36]'}`}
          >
            Agent Sign In
          </button>
          <button 
            onClick={() => { setTab('register'); setSubmitted(false); }}
            className={`flex-1 py-3 text-xs font-bold transition-colors ${tab === 'register' ? 'border-b-2 border-[#078A87] text-[#078A87] bg-white' : 'text-[#586B7A] hover:text-[#061D36]'}`}
          >
            New Student Enrolment
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 bg-[#E6F4F3] text-[#078A87] rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#061D36] mb-1">
                {tab === 'login' ? 'Welcome Back!' : 'Registration Received'}
              </h4>
              <p className="text-xs text-[#586B7A] mb-5 leading-relaxed">
                {tab === 'login' 
                  ? `Authenticated session established for ${email}. Redirecting to your active courses dashboard...` 
                  : `Your access application for ${agency || 'your agency'} has been routed to the P3 admissions coordinator. Check your inbox for confirmation.`}
              </p>
              <button 
                onClick={handleReset}
                className="w-full py-2.5 px-4 bg-[#078A87] hover:bg-[#067572] text-white text-xs font-bold rounded-lg transition-colors"
              >
                Proceed to Learning Modules
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-[#172B3A] mb-1">
                  Professional Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#586B7A] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="email" 
                    required
                    placeholder="agent@agency.co.za" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-[#DCE5EB] rounded-lg focus:outline-none focus:border-[#078A87] focus:ring-1 focus:ring-[#078A87]"
                  />
                </div>
              </div>

              {tab === 'register' && (
                <div>
                  <label className="block text-xs font-semibold text-[#172B3A] mb-1">
                    Real Estate Agency / Principal
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Pam Golding, RE/MAX, Seeff, Independent" 
                    value={agency}
                    onChange={(e) => setAgency(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#DCE5EB] rounded-lg focus:outline-none focus:border-[#078A87] focus:ring-1 focus:ring-[#078A87]"
                  />
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-[#172B3A]">
                    Password
                  </label>
                  {tab === 'login' && (
                    <button type="button" className="text-[11px] text-[#078A87] hover:underline">
                      Forgot Password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#586B7A] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="password" 
                    required
                    placeholder="••••••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-[#DCE5EB] rounded-lg focus:outline-none focus:border-[#078A87] focus:ring-1 focus:ring-[#078A87]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 text-xs text-[#586B7A]">
                <ShieldCheck className="w-4 h-4 text-[#078A87] flex-shrink-0" />
                <span>POPIA-compliant secure authentication</span>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 py-2.5 px-4 bg-[#078A87] hover:bg-[#067572] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>{tab === 'login' ? 'Sign In to Portal' : 'Register for Portal Access'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Quick footer helper */}
        <div className="p-4 bg-[#F5F8FA] border-t border-[#DCE5EB] text-center text-xs text-[#586B7A]">
          Need immediate support? Contact <span className="text-[#078A87] font-semibold">support@p3training.co.za</span>
        </div>
      </div>
    </div>
  );
};
