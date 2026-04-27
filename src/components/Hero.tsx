import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, GraduationCap, Plane, Check, Users } from 'lucide-react';
import { Link, useOutletContext } from 'react-router-dom';

const heroCountries = [
  { id: 'russia', name: 'Russia', code: 'RU' },
  { id: 'georgia', name: 'Georgia', code: 'GE' },
  { id: 'kazakhstan', name: 'Kazakhstan', code: 'KZ' },
  { id: 'kyrgyzstan', name: 'Kyrgyzstan', code: 'KG' },
  { id: 'philippines', name: 'Philippines', code: 'PH' },
  { id: 'singapore', name: 'Singapore', code: 'SG' },
  { id: 'china', name: 'China', code: 'CN' },
  { id: 'nepal', name: 'Nepal', code: 'NP' },
  { id: 'bangladesh', name: 'Bangladesh', code: 'BD' },
  { id: 'armenia', name: 'Armenia', code: 'AM' },
  { id: 'uk', name: 'UK', code: 'GB' },
  { id: 'uzbekistan', name: 'Uzbekistan', code: 'UZ' },
];

const rotateCountries = [
  { 
    name: "Russia", 
    code: "ru", 
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    name: "Georgia", 
    code: "ge", 
    image: "https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    name: "Kazakhstan", 
    code: "kz", 
    image: "https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    name: "Kyrgyzstan", 
    code: "kg", 
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    name: "Philippines", 
    code: "ph", 
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    name: "Singapore", 
    code: "sg", 
    image: "https://images.unsplash.com/photo-1525625232754-557d9f505836?auto=format&fit=crop&q=80&w=800" 
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const { onOpenBooking } = useOutletContext<{ onOpenBooking: () => void }>();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotateCountries.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentCountry = rotateCountries[index];

  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0b1c3f] via-[#1a2b5d] to-[#0f172a] pt-24 lg:pt-32">
      {/* Background Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-40 w-96 h-96 bg-white rounded-full blur-[120px]" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-400 rounded-full blur-[100px]" />
        
        {/* Graduation Vector Background - Refined Single Line Style */}
        <div className="absolute -bottom-10 -right-20 w-[800px] h-[400px] opacity-[0.15] hidden lg:block pointer-events-none select-none">
          <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600">
            {/* The single line path representing the cap and diploma */}
            <path 
              d="M10 350 C50 350 100 370 150 350 C250 310 200 250 150 200 C140 180 160 160 180 170 L350 300 C370 315 400 300 400 280 L400 250 M180 170 L50 250 C30 260 30 290 50 300 L180 380 C200 390 230 380 240 360 L380 230 M300 150 L550 50 L780 150 L550 250 L300 150 M550 250 V330 C550 350 580 370 650 370 C720 370 750 350 750 330 V250 M780 150 V220 C780 230 790 230 790 220 V150 M790 220 L810 280 C820 300 840 300 850 280 L870 220" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
            {/* Swirly line decoration */}
            <path 
              d="M400 320 C450 340 500 280 550 300 C600 320 650 380 750 350 S900 320 950 360" 
              stroke="currentColor" 
              strokeWidth="1" 
              strokeDasharray="5 5"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-[#f26522] font-black text-xl mb-6 italic tracking-[0.2em] uppercase">Start Your Global Journey</h4>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 leading-[1.1] tracking-tighter uppercase font-display italic">
                Study <span className="text-[#f26522]">MBBS</span> <br />
                <span className="text-white">In Premium Destinations</span>
              </h1>

              <div className="flex flex-wrap gap-4 mb-12">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-white font-black text-xs uppercase tracking-widest leading-none">NMC Approved</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-white font-black text-xs uppercase tracking-widest leading-none">WHO Recognized</span>
                </div>
              </div>

              <p className="text-lg text-white/50 font-medium max-w-lg mb-12 leading-relaxed">
                Empowering medical aspirants with direct admissions to world-class medical universities recognized by NMC & WHO.
              </p>

              {/* Country Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 max-w-lg">
                {heroCountries.map((country, i) => (
                  <Link
                    key={country.name}
                    to={`/countries/${country.id}`}
                  >
                    <div
                      className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-3 py-2.5 rounded-xl shadow-lg border border-white/20 cursor-pointer group h-full"
                    >
                      <img 
                        src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`} 
                        alt={country.name}
                        className="w-6 h-6 rounded-full object-cover shadow-sm border border-gray-100 flex-shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <span className="text-[10px] sm:text-xs font-bold text-gray-900 group-hover:text-[#f26522] transition-colors uppercase tracking-tight truncate">
                        {country.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#f26522] hover:bg-white text-white hover:text-[#0b1c3f] font-black rounded-2xl text-xl shadow-[0_20px_40px_-10px_rgba(242,101,34,0.5)] transition-all active:scale-95 group border-2 border-[#f26522] uppercase tracking-widest"
                >
                  Enquiry Now
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/countries"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/5 hover:bg-white text-white hover:text-[#0b1c3f] font-black rounded-2xl text-xl shadow-xl transition-all active:scale-95 group border-2 border-white/10 backdrop-blur-xl uppercase tracking-widest"
                >
                  MBBS Destination
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Visuals - Sophisticated Arched Portal */}
          <div className="lg:w-1/2 flex items-center justify-center min-h-[600px] relative">
            <div className="relative w-full flex items-center justify-center">
              
              {/* Central Premium Arched Portal */}
              <div className="w-[300px] md:w-[460px] aspect-[4/6] z-20 relative">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentCountry.name}
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.05, y: -40 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full rounded-t-full rounded-b-[5rem] overflow-hidden border-[12px] md:border-[20px] border-[#f26522] shadow-[0_80px_150px_rgba(242,101,34,0.3)] bg-slate-900 group relative"
                  >
                    {/* Internal Light Glare */}
                    <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white/20 to-transparent pointer-events-none z-10"></div>
                    
                    <motion.img 
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 2 }}
                      src={currentCountry.image} 
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000" 
                      alt={currentCountry.name} 
                      referrerPolicy="no-referrer" 
                    />
                    
                    {/* Content Overlay - Refined Branding */}
                    <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-[#0b1c3f] via-[#0b1c3f]/90 to-transparent">
                      <div className="flex flex-col items-center">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5, type: 'spring' }}
                          className="mb-5 p-2 bg-white rounded-xl shadow-2xl"
                        >
                          <img 
                            src={`https://flagcdn.com/w80/${currentCountry.code.toLowerCase()}.png`} 
                            alt="" 
                            className="w-10 h-7 object-cover rounded-sm" 
                            referrerPolicy="no-referrer"
                          />
                        </motion.div>
                        <motion.h3 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="text-white text-5xl md:text-6xl font-black tracking-tighter uppercase italic leading-none"
                        >
                          {currentCountry.name}
                        </motion.h3>
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: 60 }}
                          transition={{ delay: 0.8, duration: 1 }}
                          className="h-1 bg-[#f26522] mt-4 mb-3"
                        />
                        <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.5em] italic">Top Global Destination</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Re-added Airplane Animation */}
        <motion.div 
          animate={{ 
            x: [-200, 1800],
            y: [200, -400],
            rotate: [15, 5],
            opacity: [0, 0.4, 0.4, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear",
            delay: 1
          }}
          className="absolute bottom-20 left-0 z-0 text-white pointer-events-none select-none"
        >
          <Plane size={150} strokeWidth={0.2} fill="white" fillOpacity={0.05} />
        </motion.div>
      </div>
    </div>
  );
}
