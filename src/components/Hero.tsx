import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, GraduationCap, Plane, Check } from 'lucide-react';
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

          {/* Right Visuals - Collage Style */}
          <div className="lg:w-1/2 flex items-center justify-center min-h-[600px]">
            <div className="relative w-full flex items-center justify-center h-[500px] md:h-[700px]">
              {/* Collage Elements */}
              <div className="relative z-10 w-full flex items-center justify-center -space-x-16 md:-space-x-24 -translate-x-[30px]">
                {/* Uzbekistan Arch */}
                <div 
                  style={{ opacity: 1, transform: 'rotate(-15deg) translate(-70px, 15px)' }}
                  className="w-[100px] md:w-[200px] aspect-[4/6] rounded-t-full overflow-hidden border-4 md:border-8 border-white/5 shadow-2xl z-10 relative group bg-slate-900"
                >
                  <img src="https://images.unsplash.com/photo-1528154291023-e60315a176d0?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Uzbekistan" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                {/* Russia Arch (Center Focus) */}
                <div 
                   style={{ opacity: 1, transform: 'scale(1.3) translateY(-25px)' }}
                   className="w-[180px] md:w-[380px] aspect-[4/5.5] rounded-t-full overflow-hidden border-4 md:border-[12px] border-[#f26522] shadow-[0_0_60px_rgba(242,101,34,0.5)] z-30 relative group bg-slate-900"
                >
                  {/* Portal Inner Shimmer */}
                  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/20 to-transparent z-20 pointer-events-none" />
                  
                  <img src="https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Russia" referrerPolicy="no-referrer" />
                  
                  {/* Portal Depth Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c3f] via-transparent to-transparent opacity-80 z-10"></div>
                  <div className="absolute inset-0 ring-inset ring-1 ring-white/30 z-20 rounded-t-full"></div>
                </div>

                {/* Georgia Arch (Moved Further Right) */}
                <div 
                  style={{ opacity: 1, transform: 'rotate(15deg) translate(100px, 20px)' }}
                  className="w-[100px] md:w-[200px] aspect-[4/6] rounded-t-full overflow-hidden border-4 md:border-8 border-white/5 shadow-2xl z-20 relative group bg-slate-900"
                >
                  <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Georgia" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#f26522]/5 rounded-full blur-[100px] z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
