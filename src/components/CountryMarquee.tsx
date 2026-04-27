import { motion } from 'motion/react';
import { COUNTRIES as countries } from '../lib/data';
import { Link } from 'react-router-dom';

export default function CountryMarquee() {
  // Triple the countries array to ensure smooth infinite loop
  const displayCountries = [...countries, ...countries, ...countries];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-[#002147] text-3xl md:text-4xl font-black mb-4">
          Our Services – Study Abroad Countries
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          We provide expert education and visa services for the following countries:
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex gap-16 py-4 px-4 items-center"
          animate={{
            x: [0, -3000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
        >
          {displayCountries.map((country, i) => (
            <Link 
              key={`${country.id}-${i}`}
              to={`/countries/${country.id}`}
              className="flex-shrink-0 group"
            >
              <div className="relative flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl border-4 border-gray-50 transition-all group-hover:scale-110 group-hover:border-[#f26522] group-hover:shadow-[#f26522]/20">
                  <img 
                    src={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png`} 
                    alt={country.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -inset-4 bg-[#f26522]/10 blur-2xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center gap-2 mt-12">
        <div className="w-2 h-2 rounded-full bg-gray-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#f26522]" />
        <div className="w-2 h-2 rounded-full bg-gray-200" />
      </div>
    </section>
  );
}
