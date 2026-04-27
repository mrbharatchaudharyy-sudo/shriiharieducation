import React from 'react';
import { motion } from 'motion/react';
import { Wallet, GraduationCap, ShieldCheck, Trophy } from 'lucide-react';

const WHY_FEATURES = [
  {
    icon: Wallet,
    title: 'Affordable Fees',
    description: 'Save up to 50% on education cost',
  },
  {
    icon: GraduationCap,
    title: 'World Class Education',
    description: 'Globally recognized universities',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure',
    description: 'Safe environment for international students',
  },
  {
    icon: Trophy,
    title: 'Better Opportunities',
    description: 'Bright career prospects worldwide',
  },
];

export const WhyStudyAbroad = () => {
  return (
    <section id="why-study-abroad" className="py-24 px-4 md:px-8 max-w-[1500px] mx-auto">
      <div className="relative bg-[#0b1c3f] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f26522] blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-2/3 p-8 md:p-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight"
            >
              Why Study MBBS Abroad?
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {WHY_FEATURES.map((feature, i) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#f26522]/50 group-hover:bg-[#f26522]/10 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-[#00c6ff] group-hover:text-[#f26522] transition-colors drop-shadow-[0_0_8px_rgba(0,198,255,0.5)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white mb-1.5 uppercase tracking-wide group-hover:text-[#f26522] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/50 text-sm font-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Visual (Student Image) */}
          <div className="lg:w-1/3 w-full h-[300px] lg:h-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 overflow-hidden">
             <div className="w-full h-full relative">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
                  alt="Happy Students"
                  className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c3f] via-[#0b1c3f]/20 to-transparent lg:block hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c3f] via-transparent to-transparent lg:hidden block"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
