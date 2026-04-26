import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, GraduationCap } from 'lucide-react';
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

const rotateCountries = ["Russia", "Georgia", "Kazakhstan", "Kyrgyzstan", "Philippines", "China", "Uzbekistan"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const { onOpenBooking } = useOutletContext<{ onOpenBooking: () => void }>();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotateCountries.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-[#f26522] font-bold text-lg mb-4 italic tracking-wide uppercase">Your Gateway to Success</h4>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-10 leading-[1.05] tracking-tight">
                Study <span className="text-[#f26522]">MBBS</span> In <br />
                <div className="relative h-[1.1em] overflow-hidden inline-flex items-center min-w-[250px] mt-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={rotateCountries[index]}
                      initial={{ y: 60, opacity: 0, rotateX: 45 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -60, opacity: 0, rotateX: -45 }}
                      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                      className="text-[#f26522] block w-fit"
                    >
                      {rotateCountries[index]}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <br />
                With confidence
              </h1>

              {/* Country Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 max-w-lg">
                {heroCountries.map((country, i) => (
                  <Link
                    key={country.name}
                    to={`/countries/${country.id}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-3 py-2.5 rounded-xl shadow-lg border border-white/20 transition-transform hover:scale-105 cursor-pointer group h-full"
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
                    </motion.div>
                  </Link>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link
                  to="/book-counseling"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#f26522] hover:bg-white text-white hover:text-[#0b1c3f] font-bold rounded-xl text-lg shadow-xl transition-all hover:scale-105 active:scale-95 group border-2 border-[#f26522]"
                >
                  Get Free Consultation
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/countries"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white text-white hover:text-[#0b1c3f] font-bold rounded-xl text-lg shadow-xl transition-all hover:scale-105 active:scale-95 group border-2 border-white/20"
                >
                  MBBS Destination
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative h-full flex justify-center items-center lg:items-end pt-12 lg:pt-0">
             <motion.div
               initial={{ opacity: 0, scale: 0.9, y: 50 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ duration: 1, ease: 'easeOut' }}
               className="relative z-10 w-full max-w-[450px]"
             >
                {/* Decorative glow behind portal */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square bg-[#f26522]/10 rounded-full blur-[120px] -z-10" />
                
                {/* Arch Portal Container */}
                <div className="relative bg-white rounded-t-full overflow-hidden aspect-[1/1.5] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-[14px] border-white ring-1 ring-white/20">
                  {/* Internal background for the arch */}
                  <div className="absolute inset-0 bg-white"></div>
                  
                  {/* Main Student Image */}
                  <img 
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800" 
                    alt="Indian Female MBBS Student" 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[94%] w-full object-contain z-10 scale-110 origin-bottom brightness-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
