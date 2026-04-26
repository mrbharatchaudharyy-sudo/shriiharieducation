import { motion } from 'motion/react';
import { COUNTRIES } from '../lib/data';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, CheckCircle } from 'lucide-react';

export default function Countries() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-[#0b1c3f] py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1920" alt="World Map" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 italic font-serif"
          >
            Choose Your <span className="text-[#f26522]">Destination</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We have partnered with the highest-ranked medical universities globally to ensure you get the best medical education possible.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {COUNTRIES.map((country, i) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all group"
            >
              <div className="md:w-2/5 relative overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase text-[#f26522] tracking-wider">
                  Top Recommended
                </div>
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{country.name}</h2>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{country.longDescription}</p>
                  
                  <div className="space-y-2 mb-8">
                    {country.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                        <CheckCircle size={16} className="text-[#f26522]" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/countries/${country.id}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-4 bg-[#0b1c3f] text-white rounded-2xl font-bold hover:bg-[#f26522] transition-colors group"
                >
                  Explore Universities
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-orange-50 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-3 rounded-2xl bg-orange-100 text-[#f26522] mb-6">
                <Info size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 italic font-serif">Quick Note on University Selection</h2>
            <p className="text-gray-600 leading-relaxed italic">
                "Not every university is the right fit. We help you choose based on MCI (NMC) approval status, alumni network, clinical exposure, and total budget including living expenses. Our guidance is 100% transparent and student-centric."
            </p>
        </div>
      </section>
    </div>
  );
}
