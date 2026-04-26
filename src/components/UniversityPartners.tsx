import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, CheckCircle2, Award, DollarSign, ArrowRight } from 'lucide-react';

interface University {
  id: string;
  name: string;
  logo: string;
  location: string;
  country: string;
  estYear: string;
  nmcApproved: boolean;
  intake: string;
  rank: string;
  tuitionFee: string;
}

const PARTNER_COUNTRIES = [
  { name: 'Georgia', code: 'GE' },
  { name: 'Russia', code: 'RU' },
  { name: 'Kazakhstan', code: 'KZ' },
  { name: 'Kyrgyzstan', code: 'KG' },
  { name: 'Uzbekistan', code: 'UZ' },
  { name: 'Nepal', code: 'NP' },
  { name: 'Bangladesh', code: 'BD' },
  { name: 'Philippines', code: 'PH' },
  { name: 'China', code: 'CN' },
];

const UNIVERSITIES: University[] = [
  // Georgia
  {
    id: 'ge-1',
    name: 'Tbilisi State Medical University',
    logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=tsmu',
    location: 'Tbilisi, Georgia',
    country: 'Georgia',
    estYear: '1918',
    nmcApproved: true,
    intake: 'Feb & Sept',
    rank: '#1 in Georgia',
    tuitionFee: '8000 USD/Yr',
  },
  {
    id: 'ge-2',
    name: 'BAU International University Batumi',
    logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=bau',
    location: 'Batumi, Georgia',
    country: 'Georgia',
    estYear: '2015',
    nmcApproved: true,
    intake: 'Feb & Sept',
    rank: '#5 in Georgia',
    tuitionFee: '4,800 USD/Yr',
  },
  {
    id: 'ge-3',
    name: 'East European University',
    logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=eeu',
    location: 'Tbilisi, Georgia',
    country: 'Georgia',
    estYear: '2012',
    nmcApproved: true,
    intake: 'Feb & Sept',
    rank: '#8 in Georgia',
    tuitionFee: '5,500 USD/Yr',
  },
  {
    id: 'ge-4',
    name: 'Georgian American University',
    logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=gau',
    location: 'Tbilisi, Georgia',
    country: 'Georgia',
    estYear: '2001',
    nmcApproved: true,
    intake: 'Feb & Sept',
    rank: '#6 in Georgia',
    tuitionFee: '6,000 USD/Yr',
  },
  {
    id: 'ge-5',
    name: 'Ilia State University',
    logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=ilia',
    location: 'Tbilisi, Georgia',
    country: 'Georgia',
    estYear: '2006',
    nmcApproved: true,
    intake: 'Feb & Sept',
    rank: '#3 in Georgia',
    tuitionFee: '6,200 USD/Yr',
  },
  {
    id: 'ge-6',
    name: 'Georgian National University SEU',
    logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=seu',
    location: 'Tbilisi, Georgia',
    country: 'Georgia',
    estYear: '2001',
    nmcApproved: true,
    intake: 'Feb & Sept',
    rank: '#7 in Georgia',
    tuitionFee: '6,300 USD/Yr',
  },
  // Add some for other countries to make filter useful
  {
    id: 'ru-1',
    name: 'First Moscow State Medical University',
    logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=moscow',
    location: 'Moscow, Russia',
    country: 'Russia',
    estYear: '1758',
    nmcApproved: true,
    intake: 'Sept',
    rank: '#1 in Russia',
    tuitionFee: '9,500 USD/Yr',
  },
  {
    id: 'kz-1',
    name: 'Asfendiyarov Kazakh National Medical University',
    logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=kazakh',
    location: 'Almaty, Kazakhstan',
    country: 'Kazakhstan',
    estYear: '1930',
    nmcApproved: true,
    intake: 'Sept',
    rank: '#1 in Kazakhstan',
    tuitionFee: '4,500 USD/Yr',
  }
];

export default function UniversityPartners() {
  const [activeCountry, setActiveCountry] = useState('Georgia');

  const filteredUniversities = UNIVERSITIES.filter(uni => uni.country === activeCountry);

  return (
    <section className="py-24 bg-gradient-to-br from-[#0b1c3f] via-[#0b1c3f] to-[#04122d] relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f26522]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f26522]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Our Trusted Exclusive <span className="text-[#fdd835]">MBBS Abroad Partners</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-[#f26522] mx-auto rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {PARTNER_COUNTRIES.map((country) => (
            <button
              key={country.name}
              onClick={() => setActiveCountry(country.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 border-2 ${
                activeCountry === country.name
                  ? 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-white border-transparent shadow-[0_0_20px_rgba(52,211,153,0.4)] scale-105'
                  : 'bg-white/10 text-white/70 border-white/10 hover:bg-white/20 hover:text-white'
              }`}
            >
              <img 
                src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`} 
                alt="" 
                className="w-5 h-5 rounded-full object-cover shadow-sm"
              />
              {country.name}
            </button>
          ))}
        </div>

        {/* University Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredUniversities.length > 0 ? (
              filteredUniversities.map((uni, i) => (
                <motion.div
                  key={uni.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-white rounded-[2rem] p-8 shadow-2xl relative group overflow-hidden"
                >
                  {/* Card Background Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-0 opacity-50 group-hover:bg-[#fdd835]/20 transition-colors" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-20 h-20 bg-gray-50 rounded-2xl p-3 shadow-inner border border-gray-100 flex items-center justify-center shrink-0">
                        <img src={uni.logo} alt={uni.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase ring-1 ring-emerald-100 italic">
                          <CheckCircle2 size={12} strokeWidth={3} />
                          NMC Approved
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-orange-50 text-[#f26522] rounded-full text-[10px] font-black uppercase ring-1 ring-orange-100">
                          <Award size={12} strokeWidth={3} />
                          EST. {uni.estYear}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-[#0b1c3f] mb-4 leading-tight min-h-[3.5rem] flex items-center">
                      {uni.name}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-500 font-bold text-sm mb-8">
                      <MapPin size={18} className="text-[#f26522]" />
                      {uni.location}
                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-10 pt-6 border-t border-gray-100">
                      <div>
                        <div className="text-[11px] font-black uppercase text-gray-400 tracking-wider mb-1 flex items-center gap-1.5">
                          <Calendar size={12} strokeWidth={3} />
                          Intake
                        </div>
                        <div className="text-lg font-black text-[#0b1c3f]">{uni.intake}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] font-black uppercase text-gray-400 tracking-wider mb-1 flex items-center justify-end gap-1.5">
                          Country Rank
                          <Award size={12} strokeWidth={3} />
                        </div>
                        <div className="text-lg font-black text-[#0b1c3f]">{uni.rank}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[11px] font-black uppercase text-gray-400 tracking-wider mb-1">Tuition Fee :</div>
                        <div className="text-xl font-black text-[#0b1c3f] flex items-center gap-0.5">
                          {uni.tuitionFee}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <button className="px-6 py-2 border-2 border-[#0b1c3f] text-[#0b1c3f] font-black rounded-full text-xs hover:bg-[#0b1c3f] hover:text-white transition-all transform hover:scale-105">
                          View details
                        </button>
                        <button className="px-6 py-2 bg-[#fdd835] text-[#0b1c3f] font-black rounded-full text-xs shadow-lg shadow-[#fdd835]/30 hover:scale-105 active:scale-95 transition-all">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-white/50 font-bold italic">
                Coming soon for {activeCountry}...
              </div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-12 py-5 bg-[#f26522] text-white font-black rounded-2xl text-xl shadow-2xl shadow-[#f26522]/20 hover:opacity-90 transition-all border-b-4 border-[#c7501a]"
          >
            Get Expert Counseling <ArrowRight size={24} strokeWidth={3} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
