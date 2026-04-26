import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  Star, Shield, ClipboardCheck, DollarSign, ChevronRight, Check, 
  BookOpen, FileText, CheckSquare, Lightbulb, BarChart3, Timer,
  Users, Globe, Zap, Target, Award, Plane, GraduationCap, Stethoscope,
  Phone, Mail, MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Countries from './pages/Countries';
import CountryDetail from './pages/CountryDetail';
import BookCounseling from './pages/BookCounseling';
import MBBSUzbekistan from './pages/MBBSUzbekistan';

// Remaining pages
const About = () => (
  <div className="pt-32 pb-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#f26522] font-black uppercase tracking-[0.2em] text-xs mb-6 block">Our Legacy</span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 italic font-serif leading-[1.0] text-gray-900 tracking-tighter">
            Shaping the Doctors <br/> of <span className="text-[#f26522]">Tomorrow</span>.
          </h1>
          <p className="text-xl text-gray-500 font-medium leading-relaxed mb-8">
            Shriihari Education is a premier educational consultancy dedicated to helping aspiring medical students achieve their dreams of studying abroad.
          </p>
          <p className="text-gray-500 leading-relaxed font-normal">
            With over 15 years of experience, we have successfully placed thousands of students in top-ranked medical universities in Russia, Uzbekistan, Kazakhstan, Georgia, and more. Our mission is to provide transparent, reliable, and comprehensive support throughout the entire admission process.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
               src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
               alt="Medical Students" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#f26522] rounded-full flex items-center justify-center text-white p-8 text-center rotate-12 shadow-2xl">
            <span className="font-serif italic font-bold text-lg leading-tight">15+ Years of Trust</span>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Professional MBBS Abroad Section */}
    <section className="py-24 bg-white relative overflow-hidden mb-32">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#f26522]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0b1c3f]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-20">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#f26522] font-black uppercase tracking-[0.25em] text-xs mb-6 block"
            >
              Academic Excellence
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-black text-[#0b1c3f] tracking-tighter italic font-serif leading-[0.9]">
              MBBS Abroad & Global <br/> Medical <span className="text-[#f26522]">Education.</span>
            </h2>
          </div>
          <div className="max-w-md pb-2">
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Unlock prestigious medical careers with globally recognized degrees from world-class international universities.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "MBBS Abroad Admissions", 
                desc: "Strategic guidance through the entire admission lifecycle—from university selection to final enrollment.",
                icon: <GraduationCap className="w-8 h-8"/>,
                accent: "border-blue-500/20",
                bg: "bg-blue-50/30"
              },
              { 
                title: "World-Class Infrastructure", 
                desc: "Access state-of-the-art medical labs, modern hospitals, and highly experienced international faculty.",
                icon: <Stethoscope className="w-8 h-8"/>,
                accent: "border-orange-500/20",
                bg: "bg-orange-50/30"
              },
              { 
                title: "Global Medical Exposure", 
                desc: "Gain invaluable clinical experience in diverse healthcare systems with globally recognized certifications.",
                icon: <Globe className="w-8 h-8"/>,
                accent: "border-emerald-500/20",
                bg: "bg-emerald-50/30"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group p-10 bg-white rounded-[2.5rem] border ${item.accent} shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-2 flex flex-col items-start`}
              >
                <div className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-[#0b1c3f] group-hover:bg-[#f26522] group-hover:text-white transition-all`}>
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-[#0b1c3f] mb-4 tracking-tight leading-tight">{item.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed text-sm">{item.desc}</p>
                <div className="mt-10 pt-6 border-t border-gray-50 w-full flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-black uppercase tracking-widest text-[#f26522]">Learn More</span>
                  <ChevronRight className="w-4 h-4 text-[#f26522]" />
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-4">
      <div className="grid sm:grid-cols-2 gap-8 mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-16 bg-[#fffcf8] rounded-[3.5rem] border border-orange-100/50 shadow-[0_15px_60px_rgba(242,101,34,0.03)] hover:shadow-[0_25px_80px_rgba(242,101,34,0.08)] transition-all flex flex-col justify-center items-center text-center"
        >
          <div className="w-16 h-16 bg-[#fef5ec] rounded-2xl flex items-center justify-center mb-10 text-[#f26522]">
            <Target className="w-8 h-8" />
          </div>
          <h3 className="font-black text-3xl mb-6 text-[#0b1c3f] tracking-tight italic font-serif">Our Vision</h3>
          <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-sm">To be the most trusted name in overseas medical education consultancy, empowering students with global opportunities and professional guidance.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-16 bg-[#fafdff] rounded-[3.5rem] border border-blue-100/50 shadow-[0_15px_60px_rgba(11,28,63,0.02)] hover:shadow-[0_25px_80px_rgba(11,28,63,0.06)] transition-all flex flex-col justify-center items-center text-center"
        >
          <div className="w-16 h-16 bg-[#f0f7ff] rounded-2xl flex items-center justify-center mb-10 text-blue-600">
            <Zap className="w-8 h-8" />
          </div>
          <h3 className="font-black text-3xl mb-6 text-[#0b1c3f] tracking-tight italic font-serif">Our Mission</h3>
          <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-sm">To simplify the complex process of international admissions and provide end-to-end support for a seamless, transparent experience.</p>
        </motion.div>
      </div>

      <div className="text-center mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#f26522] font-black uppercase tracking-[0.2em] text-xs mb-6 block"
        >
          Competitive Advantage
        </motion.span>
        <h2 className="text-6xl md:text-8xl font-black text-[#0b1c3f] tracking-tighter italic font-serif leading-[1.0] mb-8">
          Why Partner <br/> With <span className="text-[#f26522]">Shriihari.</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
          We provide unparalleled support to ensure your journey to becoming a doctor is smooth and successful.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-10 bg-[#FFF9F2] rounded-[40px] shadow-2xl shadow-orange-500/5 transition-transform hover:-translate-y-2"
          >
              <div className="w-14 h-14 border-2 border-orange-400 rounded-full flex items-center justify-center mb-8 text-orange-400">
                <Star size={24} strokeWidth={2.5} />
              </div>
              <h4 className="font-black text-2xl text-gray-900 mb-4 leading-tight">15+ Years<br/>Exp</h4>
              <p className="text-sm font-bold text-gray-600 leading-relaxed">Decades of expertise in guiding medical aspirants.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 bg-[#F8F4FF] rounded-[40px] shadow-2xl shadow-purple-500/5 transition-transform hover:-translate-y-2"
          >
              <div className="w-14 h-14 border-2 border-purple-400 rounded-full flex items-center justify-center mb-8 text-purple-400">
                <Shield size={24} strokeWidth={2.5} />
              </div>
              <h4 className="font-black text-2xl text-gray-900 mb-4 leading-tight">Safe &<br/>Secure</h4>
              <p className="text-sm font-bold text-gray-600 leading-relaxed">Reliable admissions with 100% transparency.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-10 bg-[#F4FFF4] rounded-[40px] shadow-2xl shadow-green-500/5 transition-transform hover:-translate-y-2"
          >
              <div className="w-14 h-14 border-2 border-green-400 rounded-full flex items-center justify-center mb-8 text-green-400">
                <ClipboardCheck size={24} strokeWidth={2.5} />
              </div>
              <h4 className="font-black text-2xl text-gray-900 mb-4 leading-tight">Expert<br/>Counsel</h4>
              <p className="text-sm font-bold text-gray-600 leading-relaxed">Direct guidance from experienced educationists.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-10 bg-[#F0FAFF] rounded-[40px] shadow-2xl shadow-blue-500/5 transition-transform hover:-translate-y-2"
          >
              <div className="w-14 h-14 bg-[#00D1FF] rounded-full flex items-center justify-center mb-8 text-white shadow-lg shadow-[#00D1FF]/40">
                <DollarSign size={24} strokeWidth={3} />
              </div>
              <h4 className="font-black text-2xl text-gray-900 mb-4 leading-tight">Low<br/>Cost</h4>
              <p className="text-sm font-bold text-gray-600 leading-relaxed">Affordable solutions for every student's budget.</p>
          </motion.div>
      </div>
    </div>
  </div>
);

const Services = () => (
  <div className="pt-32 pb-24 bg-white min-h-screen">
    <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="mb-24 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#f26522] font-black uppercase tracking-[0.2em] text-xs mb-4 block"
        >
          Our Capabilities
        </motion.span>
        <h1 className="text-6xl md:text-8xl font-black mb-8 italic font-serif leading-[0.9] text-gray-900 tracking-tighter">
          Crafting Your <br/> Global <span className="text-[#f26522]">Future</span>.
        </h1>
        <p className="text-xl text-gray-500 max-w-xl mx-auto font-medium leading-relaxed">
          Comprehensive, end-to-end guidance for medical aspirants aiming for international excellence.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
        {[
          { title: 'Free Counseling', icon: <Users className="w-6 h-6"/>, desc: 'Insightful sessions to align your medical aspirations with the right global opportunities.' },
          { title: 'University Selection', icon: <Globe className="w-6 h-6"/>, desc: 'Strategic institutional matching based on global rankings, curriculum, and your budget.' },
          { title: 'Admission Support', icon: <Zap className="w-6 h-6"/>, desc: 'Seamless handling of the entire application lifecycle, from forms to offer letters.' },
          { title: 'Documentation', icon: <FileText className="w-6 h-6"/>, desc: 'Expert curation, translation, and notarization of academic records for international standards.' },
          { title: 'Visa Assistance', icon: <Shield className="w-6 h-6"/>, desc: 'Meticulous visa documentation and interview preparation with a high success trajectory.' },
          { title: 'Travel & Relocation', icon: <Timer className="w-6 h-6"/>, desc: 'Coordinated travel logistics and on-ground relocation support for a smooth transition.' },
        ].map((s, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-10 bg-white border border-gray-100 rounded-3xl hover:border-[#f26522]/30 hover:shadow-[0_20px_50px_rgba(242,101,34,0.05)] transition-all group"
          >
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 text-[#0b1c3f] group-hover:bg-[#f26522] group-hover:text-white transition-all">
              {s.icon}
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{s.title}</h3>
            <p className="text-gray-500 font-medium leading-relaxed text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Modern Process Section */}
      <div className="bg-[#0b1c3f] rounded-[4rem] p-12 md:p-24 text-white overflow-hidden relative mb-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f26522] blur-[150px] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-20 italic font-serif leading-tight">Our Simple <br/> Four-Step Process</h2>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { num: '01', title: 'Consultation', desc: 'Expert evaluation of your profile and career goals.' },
              { num: '02', title: 'Strategy', desc: 'Selection of optimal country and medical institution.' },
              { num: '03', title: 'Filing', desc: 'Precise preparation and submission of all applications.' },
              { num: '04', title: 'Success', desc: 'Visa approval and comprehensive pre-departure briefing.' }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-5xl font-black text-[#f26522]/20 mb-6 group-hover:text-[#f26522]/40 transition-colors">{step.num}</div>
                <h4 className="text-xl font-black mb-4 tracking-tight">{step.title}</h4>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">{step.desc}</p>
                {i < 3 && <div className="hidden lg:block absolute top-[1.5rem] left-[6rem] w-[calc(100%-4rem)] h-[1px] bg-white/10"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Professional Why Choose Us Section - Re-designed */}
    <section className="py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-[#f26522] font-black uppercase tracking-widest text-xs mb-6 block">Why Partner With Us?</span>
            <h2 className="text-5xl md:text-7xl font-black mb-10 italic font-serif leading-[1.1] tracking-tighter text-gray-900">
              Excellence defined by <span className="text-[#f26522]">Results</span>.
            </h2>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-1 h-full bg-[#f26522]"></div>
                 <div className="text-4xl font-black text-gray-900 mb-2">15+</div>
                 <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Years Exp</div>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-1 h-full bg-[#f26522]"></div>
                 <div className="text-4xl font-black text-gray-900 mb-2">98%</div>
                 <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Visa Success</div>
              </div>
            </div>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              We leverage deep institutional relationships and years of field expertise to ensure your medical education journey is seamless, transparent, and successful.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              { title: "Honest Guidance", icon: <Target className="w-5 h-5"/>, desc: "Ethical and transparent advice at every milestone of your admission process." },
              { title: "Hassle-Free Processing", icon: <Award className="w-5 h-5"/>, desc: "End-to-end management of complex documentation and institutional requirements." },
              { title: "Financial Optimization", icon: <DollarSign className="w-5 h-5"/>, desc: "Sourcing world-class medical education that respects your budgetary constraints." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 p-10 bg-white rounded-[2rem] border border-gray-100 hover:border-[#f26522]/20 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 text-[#f26522] group-hover:bg-[#f26522] group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div>
                   <h4 className="text-xl font-black text-gray-900 mb-3 tracking-tight">{item.title}</h4>
                   <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Vision Marquee Section */}
    <section className="relative py-16 overflow-hidden bg-white border-y border-gray-100">
      <div className="relative flex overflow-hidden group">
        <div className="flex whitespace-nowrap animate-marquee py-6">
          {[1, 2, 3, 4].map((group) => (
            <div key={group} className="flex items-center gap-16 px-8">
              <span className="text-6xl md:text-9xl font-black text-gray-100 uppercase tracking-tighter select-none italic">Innovation</span>
              <span className="text-gray-100 text-4xl">•</span>
              <span className="text-6xl md:text-9xl font-black text-gray-100 uppercase tracking-tighter select-none italic">Purity</span>
              <span className="text-gray-100 text-4xl">•</span>
              <span className="text-6xl md:text-9xl font-black text-gray-100 uppercase tracking-tighter select-none italic">Reliability</span>
              <span className="text-gray-100 text-4xl">•</span>
              <span className="text-6xl md:text-9xl font-black text-gray-100 uppercase tracking-tighter select-none italic">Excellence</span>
              <span className="text-gray-100 text-4xl">•</span>
              <span className="text-6xl md:text-9xl font-black text-gray-100 uppercase tracking-tighter select-none italic">Trust</span>
              <span className="text-gray-100 text-4xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const Contact = () => {
  const [index, setIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const greetings = ["નમસ્તે", "HELLO", "नमस्ते"];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [greetings.length]);

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
          <div className="w-24 h-24 bg-orange-50 text-[#f26522] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#f26522]/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h2 className="text-4xl font-black text-[#0b1c3f] mb-4 tracking-tight italic font-serif">Thank You!</h2>
          <p className="text-gray-500 font-medium leading-relaxed mb-8">Your message has been received. Our team will get back to you shortly to help with your medical journey.</p>
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
    <div className="bg-[#fcfdfd] min-h-screen">
      {/* Visual Header Section */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0 opacity-60">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, 40, 0],
                y: [0, -30, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-50 rounded-full blur-[120px] mix-blend-multiply"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.15, 1],
                x: [0, -50, 0],
                y: [0, 40, 0]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-orange-50 rounded-full blur-[140px] mix-blend-multiply"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                x: [0, 60, 0],
                y: [0, 50, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-indigo-50 rounded-full blur-[130px] mix-blend-multiply"
            />
          </div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#0b1c3f_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]"></div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-[#fcfdfd]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <span className="text-[#f26522] font-black uppercase tracking-[0.3em] text-xs mb-6 px-5 py-2 bg-[#f26522]/5 rounded-full border border-[#f26522]/10 backdrop-blur-sm">
              Connect With Us
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-[#0b1c3f] tracking-tighter leading-relaxed mb-1 uppercase font-display">
              DON'T BE SHY.
            </h1>
            <span className="text-2xl md:text-4xl font-black text-[#0b1c3f]/30 tracking-widest uppercase mb-4 font-display">
              SAY
            </span>
            
            <div className="flex flex-col items-center">
              <div className="relative h-20 md:h-28 flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    exit={{ opacity: 0, filter: "blur(8px)", y: -15 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-black text-[#f26522] tracking-tight font-display"
                  >
                    {greetings[index]}
                  </motion.div>
                </AnimatePresence>
                {/* Decorative underline */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3 }}
                  className="h-2 w-32 md:w-64 bg-[#f26522] rounded-full mt-4 shadow-lg shadow-[#f26522]/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="pb-32 -mt-32 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-14 rounded-[3rem] shadow-[0_32px_80px_-16px_rgba(11,28,63,0.08)] order-2 lg:order-1 border border-gray-100 flex flex-col h-full hover:shadow-[0_48px_100px_-24px_rgba(11,28,63,0.12)] transition-shadow duration-500"
            >
              <div className="mb-10">
                <h3 className="text-3xl font-black text-[#0b1c3f] mb-2 tracking-tight">Post Your Query</h3>
                <p className="text-gray-400 font-medium tracking-wide">We usually respond within 2-4 business hours.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group space-y-1.5 focus-within:text-[#f26522] transition-colors">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 block">First Name</label>
                    <input type="text" placeholder="e.g. John" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#f26522] focus:bg-white focus:ring-4 focus:ring-[#f26522]/5 transition-all text-[#0b1c3f] font-semibold" />
                  </div>
                  <div className="group space-y-1.5 focus-within:text-[#f26522] transition-colors">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 block">Last Name</label>
                    <input type="text" placeholder="e.g. Doe" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#f26522] focus:bg-white focus:ring-4 focus:ring-[#f26522]/5 transition-all text-[#0b1c3f] font-semibold" />
                  </div>
                </div>
                <div className="group space-y-1.5 focus-within:text-[#f26522] transition-colors">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 block">Inquiry Type</label>
                  <div className="relative">
                    <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#f26522] focus:bg-white focus:ring-4 focus:ring-[#f26522]/5 transition-all appearance-none font-bold text-[#0b1c3f]">
                      <option value="">Select Category</option>
                      <option value="admission">MBBS Admission</option>
                      <option value="visa">Visa Assistance</option>
                      <option value="loan">Education Loan</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
                <div className="group space-y-1.5 focus-within:text-[#f26522] transition-colors">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 block">Email Address</label>
                  <input type="email" placeholder="john.doe@company.com" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#f26522] focus:bg-white focus:ring-4 focus:ring-[#f26522]/5 transition-all text-[#0b1c3f] font-semibold" />
                </div>
                <div className="group space-y-1.5 focus-within:text-[#f26522] transition-colors">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 block">How can we help?</label>
                  <textarea placeholder="Describe your dream medical destination..." rows={4} className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#f26522] focus:bg-white focus:ring-4 focus:ring-[#f26522]/5 transition-all resize-none text-[#0b1c3f] font-semibold"></textarea>
                </div>
                <button className="w-full py-5 bg-[#0b1c3f] text-white rounded-2xl font-black text-lg hover:bg-[#f26522] transition-all transform hover:shadow-2xl hover:shadow-[#f26522]/30 active:scale-[0.98]">
                  Send Your Message
                </button>
              </form>
            </motion.div>

            <div className="order-1 lg:order-2 flex flex-col justify-center space-y-12 lg:pl-10 pb-12 lg:pb-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f26522]/10 text-[#f26522] rounded-lg text-[10px] font-black uppercase tracking-widest mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#f26522] animate-pulse"></span>
                  Contact Information
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-[#0b1c3f] mb-6 leading-tight tracking-tighter">
                  Let's craft <br/><span className="text-[#f26522]">your future.</span>
                </h2>
                <p className="text-gray-500 font-medium max-w-md text-lg leading-relaxed">
                  Navigating medical admissions abroad can be complex. We're here to simplify every step of your journey.
                </p>
              </motion.div>
              
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#f26522] group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-400 text-[10px] uppercase tracking-[0.2em] mb-1.5">Direct Line</h4>
                    <p className="text-2xl font-black text-[#0b1c3f] transition-colors group-hover:text-[#f26522]">+91 99244 95268</p>
                    <p className="text-2xl font-black text-[#0b1c3f] transition-colors group-hover:text-[#f26522] tracking-tight">+91 81281 06896</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#f26522] group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-400 text-[10px] uppercase tracking-[0.2em] mb-1.5">Email Us</h4>
                    <p className="text-2xl font-black text-[#0b1c3f] break-all transition-colors group-hover:text-[#f26522]">Shriiharieducation@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#f26522] group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-400 text-[10px] uppercase tracking-[0.2em] mb-1.5">Visit Office</h4>
                    <p className="text-xl font-bold text-[#0b1c3f] leading-snug max-w-sm">
                      Shop No. B-10, First Floor, New Busport, Palanpur, Gujarat – 385001
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FAQ = () => (
  <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
    <h1 className="text-5xl font-bold mb-16 italic font-serif text-center">Frequently Asked <span className="text-[#f26522]">Questions</span></h1>
    <div className="space-y-6">
      {[
        { q: "Is the MBBS degree from abroad recognized in India?", a: "Yes, all universities we recommend are recognized by the National Medical Commission (NMC) and WHO. Graduates can practice in India after clearing the FMGE (NExT) exam." },
        { q: "Do I need to clear NEET for MBBS abroad?", a: "Yes, qualifying NEET is mandatory as per NMC guidelines for Indian students wanting to study medicine in foreign medical institutions." },
        { q: "What is the medium of instruction?", a: "All the universities we partner with offer 100% English medium instruction for the entire duration of the course." },
        { q: "What is the average cost of MBBS abroad?", a: "The tuition fee varies by country and university, typically ranging from 3 Lakhs to 6 Lakhs INR per year. Living expenses are also comparable to major Indian cities." },
        { q: "How long is the MBBS course abroad?", a: "In most countries like Russia, Uzbekistan, and Georgia, the course duration is 6 years, which includes a 1-year clinical internship." },
      ].map((item, i) => (
        <details key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" open={i === 0}>
          <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg text-gray-900 list-none">
            {item.q}
            <span className="group-open:rotate-180 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </span>
          </summary>
          <div className="px-6 pb-6 text-gray-600 leading-relaxed">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="countries" element={<Countries />} />
          <Route path="countries/:id" element={<CountryDetail />} />
          <Route path="mbbs-in-russia" element={<CountryDetail forcedId="russia" type="mbbs" />} />
          <Route path="mbbs-in-uzbekistan" element={<MBBSUzbekistan />} />
          <Route path="study-in-russia" element={<CountryDetail forcedId="russia" type="study" />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="book-counseling" element={<BookCounseling />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
