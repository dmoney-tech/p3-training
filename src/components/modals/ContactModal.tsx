import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Training Programmes');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

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
        className="bg-white border border-[#DCE5EB] rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#061D36] p-6 text-white text-left relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#078A87]/30 text-[#16B8AC] text-xs font-semibold mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            Connect With P3 Training
          </div>
          <h3 className="text-xl font-bold font-['Manrope']">
            Contact Our Advisory Team
          </h3>
          <p className="text-xs text-white/70 mt-1">
            Let's discuss how structured training, repeatable business systems, or compliance support can advance your property agency.
          </p>
        </div>

        <div className="p-6 text-left">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-[#E6F4F3] text-[#078A87] rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#061D36] mb-1">
                Message Received!
              </h4>
              <p className="text-xs text-[#586B7A] mb-5">
                Thank you, {name}. A member of our South African training team will get in touch at {email} within 24 hours.
              </p>
              <button 
                onClick={() => { setSubmitted(false); onClose(); }}
                className="py-2.5 px-6 bg-[#078A87] text-white text-xs font-bold rounded-lg hover:bg-[#067572]"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#172B3A] mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Lerato Khumalo" 
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#DCE5EB] rounded-lg focus:outline-none focus:border-[#078A87]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#172B3A] mb-1">Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="lerato@realty.co.za" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#DCE5EB] rounded-lg focus:outline-none focus:border-[#078A87]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#172B3A] mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+27 83 123 4567" 
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#DCE5EB] rounded-lg focus:outline-none focus:border-[#078A87]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#172B3A] mb-1">Primary Area of Interest</label>
                <select 
                  value={interest}
                  onChange={e => setInterest(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#DCE5EB] rounded-lg focus:outline-none focus:border-[#078A87] bg-white"
                >
                  <option value="Training Programmes">Training Programmes (Listing & Conversion)</option>
                  <option value="Business Systems">Business Systems & Operational Structure</option>
                  <option value="Compliance Services">Compliance Services (RMCP, PAIA, POPIA)</option>
                  <option value="General Consultation">General Property Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#172B3A] mb-1">How can we help your business?</label>
                <textarea 
                  rows={3}
                  required
                  placeholder="Tell us about your agency size, current hurdles, or compliance questions..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#DCE5EB] rounded-lg focus:outline-none focus:border-[#078A87]"
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#078A87] hover:bg-[#067572] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to P3 Team</span>
                </button>
              </div>
            </form>
          )}

          <div className="mt-5 pt-4 border-t border-[#DCE5EB] grid grid-cols-2 gap-2 text-[11px] text-[#586B7A]">
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#078A87]" />
              <span>info@p3training.co.za</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#078A87]" />
              <span>South Africa Nationwide</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
