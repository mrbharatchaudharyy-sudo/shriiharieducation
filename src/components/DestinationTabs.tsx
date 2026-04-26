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
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800',
    fees: '₹3 - 5 Lakh / Year',
    duration: '6 Years',
    features: ['NMC Approved', 'Safe & Friendly Environment', 'Modern Hospitals', 'Top-Ranked Universities'],
    path: '/countries/kazakhstan'
  },
  {
    id: 'kyrgyzstan',
    name: 'Kyrgyzstan',
    flag: 'https://flagcdn.com/w40/kg.png',
    image: 'https://images.unsplash.com/photo-1569429538303-34e857492cff?auto=format&fit=crop&q=80&w=800',
    fees: '₹2 - 3.5 Lakh / Year',
    duration: '6 Years',
    features: ['NMC Approved', 'Low Cost of Living', 'Large Indian Community', 'WHO Recognized'],
    path: '/countries/kyrgyzstan'
  },
  {
    id: 'georgia',
    name: 'Georgia',
    flag: 'https://flagcdn.com/w40/ge.png',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985b?auto=format&fit=crop&q=80&w=800',
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
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-24">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 border-2 ${
                activeTab === tab.name 
                  ? 'bg-[#f26522] text-white border-[#f26522] shadow-[0_15px_40px_rgba(242,101,34,0.4)] scale-110' 
                  : 'bg-white/5 text-white/40 border-white/10 hover:border-white/30 backdrop-blur-xl'
              } flex items-center gap-3 group`}
            >
              {tab.flag && <img src={tab.flag} alt="" className="w-6 h-4 object-cover rounded-sm group-hover:scale-125 transition-transform" />}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8">
          <AnimatePresence mode="popLayout">
            {filteredCountries.map((country) => (
              <motion.div
                key={country.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/11] overflow-hidden m-2 rounded-[1.5rem]">
                  <img 
                    src={country.image} 
                    alt={country.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="px-6 py-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black text-[#0b1c3f] tracking-tight group-hover:text-[#f26522] transition-colors">{country.name}</h3>
                    <img 
                      src={country.flag} 
                      alt="" 
                      className="w-7 h-4.5 object-cover rounded shadow-sm border border-gray-100" 
                    />
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-green-500" strokeWidth={5} />
                      </div>
                      <span className="text-sm text-gray-500 font-bold uppercase tracking-tight">Fees: <span className="text-gray-900">{country.fees.split('/')[0]}</span></span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-green-500" strokeWidth={5} />
                      </div>
                      <span className="text-sm text-gray-500 font-bold uppercase tracking-tight">Duration: <span className="text-gray-900">{country.duration}</span></span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-green-500" strokeWidth={5} />
                      </div>
                      <span className="text-sm text-gray-500 font-bold uppercase tracking-tight">NMC Approved</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-green-500" strokeWidth={5} />
                      </div>
                      <span className="text-sm text-gray-500 font-bold uppercase tracking-tight">Globally Recognized</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/countries/${country.id}`}
                    className="mt-auto w-full py-4 bg-[#0b1c3f] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#f26522] transition-all shadow-lg hover:shadow-[#f26522]/20 active:scale-95 group/btn"
                  >
                    View Details
                    <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
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
