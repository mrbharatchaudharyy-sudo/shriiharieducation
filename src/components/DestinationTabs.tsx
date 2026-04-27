import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronRight, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

const countryData = [
  {
    id: 'russia',
    name: 'Russia',
    flag: 'https://flagcdn.com/w40/ru.png',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=800',
    fees: '₹3 - 5 Lakh / Year',
    duration: '6 Years',
    features: ['NMC Approved', 'Globally Recognized', 'High-Quality Education', 'English Medium'],
    path: '/countries/russia'
  },
  {
    id: 'uzbekistan',
    name: 'Uzbekistan',
    flag: 'https://flagcdn.com/w40/uz.png',
    image: 'https://images.unsplash.com/photo-1528154291023-e60315a176d0?auto=format&fit=crop&q=80&w=800',
    fees: '₹2.5 - 4 Lakh / Year',
    duration: '6 Years',
    features: ['NMC Approved', 'Affordable Living Cost', 'Direct Admission', 'No Donation'],
    path: '/countries/uzbekistan'
  },
  {
    id: 'kazakhstan',
    name: 'Kazakhstan',
    flag: 'https://flagcdn.com/w40/kz.png',
    image: 'https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&q=80&w=800',
    fees: '₹3 - 5 Lakh / Year',
    duration: '6 Years',
    features: ['NMC Approved', 'Safe & Friendly Environment', 'Modern Hospitals', 'Top-Ranked Universities'],
    path: '/countries/kazakhstan'
  },
  {
    id: 'kyrgyzstan',
    name: 'Kyrgyzstan',
    flag: 'https://flagcdn.com/w40/kg.png',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800',
    fees: '₹2 - 3.5 Lakh / Year',
    duration: '6 Years',
    features: ['NMC Approved', 'Low Cost of Living', 'Large Indian Community', 'WHO Recognized'],
    path: '/countries/kyrgyzstan'
  },
  {
    id: 'georgia',
    name: 'Georgia',
    flag: 'https://flagcdn.com/w40/ge.png',
    image: 'https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?auto=format&fit=crop&q=80&w=800',
    fees: '₹3.5 - 6 Lakh / Year',
    duration: '6 Years',
    features: ['NMC Approved', 'European Standards', 'Safe for International Students', 'No Entrance Exam'],
    path: '/countries/georgia'
  }
];

const DestinationTabs = () => {
  const [activeTab, setActiveTab] = useState('All Countries');
  
  const tabs = [
    { name: 'All Countries', flag: null },
    { name: 'Russia', flag: 'https://flagcdn.com/w40/ru.png' },
    { name: 'Uzbekistan', flag: 'https://flagcdn.com/w40/uz.png' },
    { name: 'Kazakhstan', flag: 'https://flagcdn.com/w40/kz.png' },
    { name: 'Kyrgyzstan', flag: 'https://flagcdn.com/w40/kg.png' },
    { name: 'Georgia', flag: 'https://flagcdn.com/w40/ge.png' }
  ];
  
  const filteredCountries = activeTab === 'All Countries' 
    ? countryData 
    : countryData.filter(c => c.name === activeTab);

  return (
    <section className="py-24 bg-[#0b1c3f] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,#f265220a_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,#4f46e50a_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <span className="text-[#f26522] font-black uppercase text-xs mb-6 block tracking-[0.5em]">
            World Class Education
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-8 leading-none">
            TOP <span className="text-[#f26522]">MBBS</span> DESTINATIONS
          </h2>
          <div className="w-32 h-1.5 bg-[#f26522] mx-auto rounded-full shadow-[0_0_20px_rgba(242,101,34,0.5)]"></div>
        </div>

        {/* Custom Tab Bar */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-24">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`min-w-[140px] md:min-w-[180px] flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 border ${
                activeTab === tab.name 
                  ? 'bg-[#f26522] text-white border-[#f26522] shadow-[0_15px_40px_rgba(242,101,34,0.4)]' 
                  : 'bg-white/5 text-white/40 border-white/10 hover:border-white/20 hover:text-white/70'
              } group`}
            >
              {tab.flag && <img src={tab.flag} alt="" className="w-6 h-4 object-cover rounded-sm group-hover:scale-110 transition-transform shadow-sm" />}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Destination Grid - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-5 px-4 md:px-8 items-stretch pb-12">
          <AnimatePresence mode="wait">
            {filteredCountries.map((country) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col w-full h-auto min-h-[500px] hover:shadow-[0_40px_80px_rgba(0,0,0,0.25)] transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/11] overflow-hidden m-3 rounded-[2rem]">
                  <img 
                    src={country.image} 
                    alt={country.name}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>

                {/* Content Section */}
                <div className="px-6 py-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-xl font-black text-[#0b1c3f] tracking-tight group-hover:text-[#f26522] transition-colors uppercase italic">{country.name}</h3>
                    <div className="p-1.5 bg-gray-50 rounded-lg border border-gray-100">
                      <img 
                        src={country.flag} 
                        alt="" 
                        className="w-6 h-4 object-cover rounded shadow-sm" 
                      />
                    </div>
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
                        <Check className="w-2.5 h-2.5 text-green-600" strokeWidth={4} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">Fees</span>
                        <span className="text-xs text-[#0b1c3f] font-black">{country.fees.split('/')[0]}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
                        <Check className="w-2.5 h-2.5 text-green-600" strokeWidth={4} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">Duration</span>
                        <span className="text-xs text-[#0b1c3f] font-black">{country.duration}</span>
                      </div>
                    </div>
 
                    {country.features.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
                          <Check className="w-2.5 h-2.5 text-green-600" strokeWidth={4} />
                        </div>
                        <span className="text-xs text-[#0b1c3f] font-black uppercase tracking-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/countries/${country.id}`}
                    className="mt-auto w-full py-4 bg-[#0b1c3f] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-[#f26522] transition-all shadow-xl hover:shadow-[#f26522]/30 active:scale-95 group/btn border-2 border-[#0b1c3f] hover:border-[#f26522]"
                  >
                    View Details
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DestinationTabs;
