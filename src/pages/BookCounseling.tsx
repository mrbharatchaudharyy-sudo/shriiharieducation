import { motion } from 'motion/react';
import { Calendar, BrainCircuit, GraduationCap, Globe, Clock, UserCheck, Phone, Mail, MapPin } from 'lucide-react';
import React, { useState } from 'react';

export default function BookCounseling() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-24 min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-[3.5rem] shadow-2xl text-center border border-gray-100"
        >
          <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-500/10">
            <UserCheck size={48} strokeWidth={2.5} />
          </div>
          <h2 className="text-4xl font-black text-[#0b1c3f] mb-4 tracking-tight italic font-serif">Success!</h2>
          <p className="text-gray-500 font-medium leading-relaxed mb-8">Your counseling session has been booked. Our expert counselor will reach out to you within 24 hours.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full py-5 bg-[#0b1c3f] text-white rounded-2xl font-black text-lg hover:bg-[#f26522] transition-all shadow-xl"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f26522]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0b1c3f]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-orange-50 rounded-full border border-orange-100 mb-8">
              <Calendar size={18} className="text-[#f26522]" />
              <span className="text-[#f26522] font-black text-xs uppercase tracking-widest">Free Consultation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-8 italic font-serif leading-[1.1] text-[#0b1c3f]">
              Book Your <span className="text-[#f26522]">Free Counseling</span> Session Today.
            </h1>
            
            <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12">
              Our expert educational consultants are ready to help you navigate your path to becoming a doctor in top international universities.
            </p>

            <div className="space-y-8">
              {[
                { icon: BrainCircuit, title: "Psychometric Analysis", desc: "We understand your personality and aptitude to suggest perfect destinations." },
                { icon: GraduationCap, title: "University Comparison", desc: "Detailed breakdown of fees, ranking, and infrastructure of global medical schools." },
                { icon: Globe, title: "Global Exposure", desc: "Information on clinical rotations and practice opportunities in multiple countries." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-xl shadow-gray-200/50 group-hover:bg-[#f26522] group-hover:text-white transition-all">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0b1c3f] mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-12 border-t border-gray-100">
               <div className="flex items-center gap-10">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest text-gray-400">Trusted By</h4>
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100 ring-2 ring-gray-50">
                          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=counsel${i}`} alt="" />
                        </div>
                      ))}
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-[#0b1c3f] flex items-center justify-center text-white text-[10px] font-black">
                        +5k
                      </div>
                    </div>
                  </div>
                  <div className="h-12 w-px bg-gray-100"></div>
                  <div>
                    <h4 className="font-bold text-[#f26522] text-xl">100% Success Rate</h4>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">In Admissions & Visas</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-8 italic font-serif text-[#0b1c3f]">Counseling Form</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-4">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. John Doe" 
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:border-[#f26522]/20 focus:bg-white transition-all font-bold text-[#0b1c3f]" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-4">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="e.g. +91 99887 76655" 
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:border-[#f26522]/20 focus:bg-white transition-all font-bold text-[#0b1c3f]" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-4">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="e.g. john@example.com" 
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:border-[#f26522]/20 focus:bg-white transition-all font-bold text-[#0b1c3f]" 
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-4">Country of Interest</label>
                    <select 
                      required
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:border-[#f26522]/20 focus:bg-white transition-all font-bold text-[#0b1c3f] appearance-none"
                    >
                      <option value="">Select Country</option>
                      <option value="russia">Russia</option>
                      <option value="uzbekistan">Uzbekistan</option>
                      <option value="kazakhstan">Kazakhstan</option>
                      <option value="georgia">Georgia</option>
                      <option value="kyrgyzstan">Kyrgyzstan</option>
                      <option value="egypt">Egypt</option>
                      <option value="philippines">Philippines</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-4">Message (Optional)</label>
                    <textarea 
                      placeholder="Share your academic background or specific queries..." 
                      rows={4} 
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:border-[#f26522]/20 focus:bg-white transition-all font-bold text-[#0b1c3f] resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full py-6 bg-[#f26522] text-white rounded-2xl font-black text-xl hover:bg-[#0b1c3f] transition-all shadow-2xl flex items-center justify-center gap-3 group">
                    Book My Session
                    <Clock size={20} className="group-hover:rotate-12 transition-transform" />
                  </button>

                  <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest mt-6">
                    By submitting, you agree to our terms & we will contact you shortly.
                  </p>
                </form>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="p-6 bg-[#0b1c3f] rounded-3xl text-white">
                <Phone size={20} className="text-[#f26522] mb-3" />
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Call Support</p>
                <p className="font-bold text-sm tracking-tight">+91 99244 95268</p>
              </div>
              <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/20">
                <Mail size={20} className="text-[#f26522] mb-3" />
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Email Support</p>
                <p className="font-bold text-sm tracking-tight text-[#0b1c3f] truncate">Shriiharieducation@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
