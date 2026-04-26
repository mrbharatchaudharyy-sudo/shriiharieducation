import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { COUNTRIES } from '../lib/data';
import { CheckCircle2, ChevronRight, GraduationCap, MapPin, DollarSign, Clock, Trophy, ArrowLeft } from 'lucide-react';

interface CountryDetailProps {
  forcedId?: string;
  type?: 'mbbs' | 'study';
}

export default function CountryDetail({ forcedId, type }: CountryDetailProps) {
  const { id } = useParams();
  const countryId = forcedId || id;
  const country = COUNTRIES.find(c => c.id === countryId);

  if (!country) return <div className="py-32 text-center">Country not found</div>;

  const pageTitle = type === 'mbbs' 
    ? `MBBS in ${country.name}` 
    : `Study in ${country.name}`;

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 text-xs font-medium text-gray-500 uppercase tracking-widest flex items-center gap-2">
          <Link to="/" className="hover:text-[#f26522]">Home</Link>
          <ChevronRight size={12} />
          <Link to="/countries" className="hover:text-[#f26522]">Destinations</Link>
          <ChevronRight size={12} />
          <span className="text-[#f26522] font-bold">{pageTitle}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center overflow-hidden">
        <img
          src={country.image}
          alt={country.name}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="inline-flex items-center gap-4 px-10 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl mb-8">
              <img 
                src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                alt=""
                className="w-8 h-8 rounded-full border-2 border-white/30 shadow-sm object-cover"
                referrerPolicy="no-referrer"
              />
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">{pageTitle}</h1>
              {type === 'mbbs' && (
                <div className="hidden md:block bg-[#f26522] text-white text-[10px] uppercase font-black px-4 py-1.5 rounded-full tracking-widest shadow-lg">Medical Focus</div>
              )}
            </div>
            <p className="max-w-4xl mx-auto text-lg md:text-xl font-medium text-white/90 leading-relaxed drop-shadow-lg">
                {type === 'mbbs' 
                  ? `${country.name} medical universities offer some of the most advanced MBBS programs globally. With a curriculum designed for international standards, students gain unparalleled clinical exposure and world-class research opportunities.`
                  : `${country.name} remains a top destination for international students seeking high-quality higher education at an affordable cost. Its universities are recognized for academic excellence across various disciplines, particularly medicine and engineering.`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modern Info Cards */}
      <section className="py-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Key Benefits */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-[#FFF9F2] p-8 rounded-2xl border-b-8 border-r-8 border-[#FDE0C3] relative shadow-lg"
                >
                    <div className="w-12 h-12 flex items-center justify-center bg-transparent border-2 border-orange-400 rounded-full mb-6">
                        <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">Key Benefits</h3>
                    <ul className="space-y-2 text-sm font-bold text-gray-700">
                        {country.benefits.slice(0, 5).map((b, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-gray-900 font-black">✓</span>
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Course Duration */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-[#F8F4FF] p-8 rounded-2xl border-b-8 border-r-8 border-[#EADFFF] relative shadow-lg"
                >
                    <div className="w-12 h-12 flex items-center justify-center bg-transparent border-2 border-purple-400 rounded-full mb-6 text-purple-400">
                        <Clock size={28} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">Course Duration</h3>
                    <p className="text-sm font-bold text-gray-700 leading-relaxed">
                        6 years (including clinical internship)
                    </p>
                </motion.div>

                {/* Eligibility Criteria */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-[#F4FFF4] p-8 rounded-2xl border-b-8 border-r-8 border-[#D8F2D8] relative shadow-lg"
                >
                    <div className="w-12 h-12 flex items-center justify-center bg-transparent border-2 border-green-400 rounded-full mb-6 text-green-400">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">Eligibility Criteria</h3>
                    <ul className="space-y-4 text-sm font-bold text-gray-700">
                        <li>Minimum 50% in PCB (Physics, Chemistry, Biology)</li>
                        <li>NEET qualification is mandatory</li>
                        <li>Minimum age 17 years</li>
                    </ul>
                </motion.div>

                {/* Average Fees */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-[#F0FAFF] p-8 rounded-2xl border-b-8 border-r-8 border-[#CCE9FF] relative shadow-lg"
                >
                    <div className="w-12 h-12 flex items-center justify-center bg-[#00D1FF] rounded-full mb-6 text-white shadow-lg shadow-[#00D1FF]/40">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 7v6"/><path d="M9 10h6"/></svg>
                        <span className="absolute text-[10px] font-black tracking-tighter">$</span>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">Average Fees</h3>
                    <p className="text-sm font-bold text-gray-700 leading-relaxed">
                        ₹3,00,000 – ₹6,00,000 per year
                    </p>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif italic border-l-4 border-[#0b1c3f] pl-4 uppercase tracking-tight">Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {country.longDescription}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif italic border-l-4 border-[#0b1c3f] pl-4 uppercase tracking-tight">Key Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {country.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-orange-50 rounded-2xl border border-orange-100">
                    <CheckCircle2 className="text-[#f26522] shrink-0" size={20} />
                    <span className="font-semibold text-gray-800 tracking-tight">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-black text-[#0b1c3f] mb-12 font-serif italic border-l-8 border-[#f26522] pl-6 tracking-tight">Top Universities In {country.name}</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {country.universities.map((uni, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-[#0b1c3f] rounded-[2.5rem] p-10 border border-white/5 shadow-2xl hover:shadow-[0_20px_60px_rgba(242,101,34,0.15)] transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative"
                  >
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#f26522]/5 rounded-full translate-x-16 -translate-y-16 group-hover:bg-[#f26522]/10 transition-all duration-700"></div>

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-[#f26522] flex items-center justify-center text-white shadow-xl shadow-[#f26522]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <GraduationCap size={32} strokeWidth={2.5} />
                        </div>
                        {uni.ranking && (
                          <span className="bg-white/5 text-[#f26522] text-[10px] font-black px-4 py-2 rounded-full border border-[#f26522]/20 tracking-widest uppercase">
                            {uni.ranking}
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-[#f26522] transition-colors">{uni.name}</h3>
                      <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-10">
                        <MapPin size={14} className="text-[#f26522]" />
                        {uni.location}, {country.name}
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Annual Tuition</span>
                          <span className="text-white font-black text-xl tracking-tight">{uni.fees}</span>
                        </div>
                        <Link 
                          to="/contact" 
                          className="w-14 h-14 rounded-2xl bg-white/5 text-[#f26522] flex items-center justify-center hover:bg-[#f26522] hover:text-white transition-all shadow-lg border border-white/5 group/btn"
                        >
                          <ChevronRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-[#0b1c3f] p-8 rounded-[2rem] text-white shadow-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 italic font-serif border-b border-gray-800 pb-4">Interested in {country.name}?</h3>
              <p className="text-gray-400 mb-8 text-sm">Fill out the form below and our experts will contact you for a personalized counseling session regarding universities in {country.name}.</p>
              
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-[#f26522] transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-[#f26522] transition-colors" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-[#f26522] transition-colors" />
                <select className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-[#f26522] transition-colors appearance-none">
                  <option>Select University</option>
                  {country.universities.map((u, i) => (
                    <option key={i}>{u.name}</option>
                  ))}
                </select>
                <button type="submit" className="w-full bg-[#f26522] hover:bg-[#d54e12] py-4 rounded-xl font-bold transition-all shadow-xl shadow-[#f26522]/20">
                  Quick Enquiry
                </button>
              </form>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#f26522] text-white shadow-xl shadow-[#f26522]/20">
                <h3 className="text-xl font-bold mb-4 italic font-serif">Quick Document Checklist</h3>
                <ul className="space-y-3 text-sm text-orange-50">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} /> 10th & 12th Marksheets</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} /> NEET Scorecard</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Valid Passport</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Medical Fitness Certificate</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} /> ID Photographs</li>
                </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
