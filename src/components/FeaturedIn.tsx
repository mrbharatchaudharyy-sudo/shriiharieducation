import React from 'react';
import { motion } from 'motion/react';

const partners = [
  {
    name: 'Hindustan Bytes',
    logo: 'https://shriiharieducation.com/wp-content/uploads/2026/04/hindustan-bytes.png', // Assuming or placeholder
    color: '#ff0000',
    type: 'text',
    displayText: 'Hindustan Bytes',
    icon: 'W'
  },
  {
    name: 'PUNJAB BYTES',
    logo: 'https://shriiharieducation.com/wp-content/uploads/2026/04/punjab-bytes.png',
    type: 'text',
    displayText: 'PUNJAB BYTES',
  },
  {
    name: 'Entrepreneur Hunt',
    logo: 'https://shriiharieducation.com/wp-content/uploads/2026/04/entrepreneur-hunt.png',
    type: 'text',
    displayText: 'Entrepreneur Hunt',
    icon: 'EH'
  },
  {
    name: 'The CEO Magazine',
    logo: 'https://shriiharieducation.com/wp-content/uploads/2026/04/ceo-magazine.png',
    color: '#d91e18',
    type: 'text',
    displayText: 'The CEO Magazine',
  },
  {
    name: 'Education Post',
    logo: 'https://shriiharieducation.com/wp-content/uploads/2026/04/education-post.png',
    type: 'text',
    displayText: 'Education Post',
    icon: 'EP'
  }
];

export default function FeaturedIn() {
  return (
    <section className="bg-white py-8 md:py-10 border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0 flex items-center gap-3 bg-white z-10 md:pr-10">
            <div className="w-1.5 h-6 bg-[#f26522] rounded-full"></div>
            <h3 className="text-[#0b1c3f] font-black text-2xl tracking-tighter whitespace-nowrap">Featured In</h3>
          </div>
          
          <div className="flex-1 relative overflow-hidden">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex items-center gap-24 whitespace-nowrap"
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-24 shrink-0">
                  {/* Hindustan Bytes */}
                  <div className="flex items-center gap-3 transition-opacity hover:opacity-100 opacity-80 cursor-default group shrink-0">
                    <motion.div 
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-9 h-9 bg-[#ed1c24] rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-500/10 group-hover:scale-110 transition-transform"
                    >
                      W
                    </motion.div>
                    <span className="font-bold text-[#333] text-lg font-sans">Hindustan Bytes</span>
                  </div>

                  <div className="w-px h-8 bg-gray-100 shrink-0"></div>

                  {/* Punjab Bytes */}
                  <div className="flex flex-col transition-opacity hover:opacity-100 opacity-80 cursor-default group shrink-0">
                    <span className="font-black text-[#0b1c3f] leading-[0.8] text-[22px] tracking-tighter">PUNJAB</span>
                    <span className="font-black text-[#0b1c3f] leading-[0.8] text-[22px] tracking-tighter">BYTES</span>
                  </div>

                  <div className="w-px h-8 bg-gray-100 shrink-0"></div>

                  {/* Entrepreneur Hunt */}
                  <div className="flex items-center gap-3 transition-opacity hover:opacity-100 opacity-80 cursor-default group shrink-0">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-9 h-9 rounded-full bg-[#ed1c24] flex items-center justify-center p-1.5 group-hover:rotate-12 transition-transform shadow-lg shadow-red-500/10"
                    >
                      <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
                        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                      </svg>
                    </motion.div>
                    <span className="font-black text-[#333] text-lg tracking-tight">Entrepreneur Hunt</span>
                  </div>

                  <div className="w-px h-8 bg-gray-100 shrink-0"></div>

                  {/* CEO Magazine */}
                  <div className="transition-opacity hover:opacity-100 opacity-80 cursor-default group shrink-0">
                    <span className="text-[#d91e18] font-serif text-[26px] font-bold italic tracking-tight uppercase">The CEO Magazine</span>
                  </div>

                  <div className="w-px h-8 bg-gray-100 shrink-0"></div>

                  {/* Education Post */}
                  <div className="flex items-center gap-2 transition-opacity hover:opacity-100 opacity-100 cursor-default group shrink-0">
                     <motion.div 
                      animate={{ y: [0, -5, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="w-8 h-8 flex items-center justify-center text-[#21a4de] group-hover:rotate-6 transition-transform"
                    >
                      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                      </svg>
                    </motion.div>
                    <span className="font-bold text-[#333] text-lg tracking-tight">Education Post</span>
                  </div>
                  <div className="w-px h-8 bg-gray-100 shrink-0"></div>
                </div>
              ))}
            </motion.div>
            
            {/* Gradient Fades for Smoothness */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
