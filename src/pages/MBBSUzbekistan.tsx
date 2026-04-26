import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Globe, Award, CheckCircle2, Building2 } from 'lucide-react';

const universities = [
  {
    name: "Tashkent Medical Academy",
    logo: "https://shriiharieducation.com/wp-content/uploads/2026/04/uz-1.png", // Placeholder/Mock - I will use professional generic icons if these fail
    icon: <Building2 className="w-12 h-12 text-[#0b1c3f]" />
  },
  {
    name: "Samarkand State Medical University",
    icon: <Building2 className="w-12 h-12 text-[#0b1c3f]" />
  },
  {
    name: "Bukhara State Medical Institute",
    icon: <Building2 className="w-12 h-12 text-[#0b1c3f]" />
  },
  {
    name: "Andijan State Medical Institute",
    icon: <Building2 className="w-12 h-12 text-[#0b1c3f]" />
  },
  {
    name: "Fergana Medical Institute of Public Health",
    icon: <Building2 className="w-12 h-12 text-[#0b1c3f]" />
  },
  {
    name: "Tashkent Pediatric Medical Institute",
    icon: <Building2 className="w-12 h-12 text-[#0b1c3f]" />
  },
  {
    name: "Urgench State University (Medical Faculty)",
    icon: <Building2 className="w-12 h-12 text-[#0b1c3f]" />
  },
  {
    name: "Namangan State University (Medical Faculty)",
    icon: <Building2 className="w-12 h-12 text-[#0b1c3f]" />
  },
  {
    name: "Nukus State Medical Institute",
    icon: <Building2 className="w-12 h-12 text-[#0b1c3f]" />
  },
  {
    name: "Termez State University (Medical Faculty)",
    icon: <Building2 className="w-12 h-12 text-[#0b1c3f]" />
  }
];

const features = [
  {
    title: "MCI/NMC & WHO Approved",
    desc: "Degrees are globally recognized, allowing students to practice in India and worldwide.",
    icon: <Award className="w-6 h-6" />
  },
  {
    title: "Affordable Fee Structure",
    desc: "Low tuition fees and cost of living compared to other European or Asian countries.",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    title: "English Medium",
    desc: "Complete 6-year course is taught in English for international students.",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    title: "Direct Admission",
    desc: "Simplified admission process with no donation or entrance exams like IELTS/TOEFL.",
    icon: <GraduationCap className="w-6 h-6" />
  }
];

const MBBSUzbekistan = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0b1c3f] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Globe className="absolute -right-20 -top-20 w-96 h-96 text-white" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-bold tracking-widest uppercase mb-6"
          >
            Study Abroad 2026
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 italic font-serif"
          >
            MBBS in <span className="text-[#f26522]">Uzbekistan</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/70 max-w-2xl mx-auto"
          >
            Unlock your medical career with world-class education, modern infrastructure, and affordable fees in the heart of Central Asia.
          </motion.p>
        </div>
      </section>

      {/* Why Uzbekistan Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-gray-50 rounded-[2rem] hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 border border-transparent hover:border-gray-100"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#f26522] shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0b1c3f] mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-24 bg-[#fffdfa] rounded-[4rem] mx-4 mb-20 border border-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-[#f26522] rounded-full"></div>
                <span className="text-[#f26522] font-black uppercase tracking-widest text-xs">Top Rated</span>
                <div className="w-8 h-1 bg-[#f26522] rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1c3f] mb-6">
              TOP MBBS IN <span className="text-[#f26522]">UZBEKISTAN</span> UNIVERSITIES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {universities.map((uni, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-[2.5rem] border border-orange-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100 group-hover:border-[#f26522]/30 transition-colors">
                  {uni.icon}
                </div>
                <h4 className="text-[#0b1c3f] font-bold leading-tight group-hover:text-[#f26522] transition-colors uppercase text-sm tracking-wide">
                  {uni.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-[#f26522] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Ready to Start Your Medical <br/> Journey in Uzbekistan?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-[#f26522] px-10 py-5 rounded-full font-black text-lg hover:bg-[#0b1c3f] hover:text-white transition-all transform hover:scale-105 shadow-xl">
                Apply Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MBBSUzbekistan;
