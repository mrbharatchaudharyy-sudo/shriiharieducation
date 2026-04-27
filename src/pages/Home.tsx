import { motion } from 'motion/react';
import { COUNTRIES } from '../lib/data';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Users, Globe, Building2, CheckCircle2, 
  ArrowRight, Briefcase, MapPin, Calendar, Star, Quote, 
  ChevronLeft, ChevronRight 
} from 'lucide-react';
import Hero from '../components/Hero';
import CountryMarquee from '../components/CountryMarquee';
import DestinationTabs from '../components/DestinationTabs';
import { WhyStudyAbroad } from '../components/WhyStudyAbroad';
import FeaturedIn from '../components/FeaturedIn';

const stats = [
  { label: 'Successful Placements', value: '5K+', icon: Users },
  { label: 'Partner Universities', value: '150+', icon: Building2 },
  { label: 'Countries Covered', value: '12+', icon: Globe },
  { label: 'Years of Excellence', value: '15+', icon: GraduationCap },
];

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />

      {/* Decorative Line Separator */}
      <div className="relative h-px w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <motion.div 
          animate={{ x: [-1000, 1000] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f26522]/20 to-transparent w-full opacity-50"
        />
      </div>

      {/* Stats Bar */}
      <section className="bg-white relative z-20">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
          {/* Vertical Decorative Accents */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-100 to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-100 to-transparent"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 px-4">
            
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-[#f26522] transition-colors group-hover:bg-[#0b1c3f] group-hover:text-white">
                <Users size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#0b1c3f] leading-none">5,000+</span>
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-1">Students Placed • 15+ countries</span>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-100" />

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-[#f26522] transition-colors group-hover:bg-[#0b1c3f] group-hover:text-white">
                <CheckCircle2 size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#0b1c3f] leading-none">99%</span>
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-1">Visa Success Rate</span>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-100" />

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-[#f26522] transition-colors group-hover:bg-[#0b1c3f] group-hover:text-white">
                <Briefcase size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#0b1c3f] leading-none">100%</span>
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-1">Transparent • No Hidden Fees</span>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-100" />

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-[#f26522] transition-colors group-hover:bg-[#0b1c3f] group-hover:text-white">
                <Building2 size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#0b1c3f] leading-none">100+</span>
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-1">Top Medical Universities</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
      </div>

      <FeaturedIn />

      {/* Decorative Separator */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
      </div>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        {/* Background Vector - Refined Single Line Style */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.05] pointer-events-none select-none overflow-hidden">
          <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-900">
            <path 
              d="M-100 500 Q250 300 500 500 T1100 500" 
              stroke="currentColor" 
              strokeWidth="1" 
              fill="none"
            />
            <path 
              d="M300 400 L500 280 L700 400 L500 520 L300 400 M700 400 V550 C700 580 750 600 800 600 C850 600 900 580 900 550 V400" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none" 
            />
            <path 
              d="M700 400 V480 C700 490 710 490 710 480 V400 M710 480 L730 540 C740 560 760 560 770 540 L790 480" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none"
            />
            <circle cx="500" cy="280" r="4" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#f26522] font-bold uppercase tracking-wider text-sm">Our Expertise</span>
              <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight text-gray-900 font-serif">
                Why thousands of parents trust <span className="text-[#0b1c3f]">Shriihari Education</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Choosing a university abroad is a life-changing decision. At Shriihari, we make sure it's the right one. Our end-to-end support ensures that you focus on your studies while we handle the complexities of admission and relocation.
              </p>
              
              <div className="space-y-4">
                {[
                  'NMC & WHO recognized top-tier universities only.',
                  'Direct university admissions with no hidden charges.',
                  'Comprehensive pre-departure & post-landing support.',
                  'Assistance with education loans & scholarship programs.',
                  'MCI/FMGE coaching assistance in university campuses.'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#f26522] shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="inline-flex items-center gap-2 mt-10 font-bold text-[#f26522] hover:gap-3 transition-all">
                Learn more about our legacy <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-full overflow-hidden shadow-2xl border-[16px] border-white max-w-[500px] mx-auto relative z-10">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipO8XBP91FHsWFf9XXom5ZgZ4g9OmayJntPSfyrs=w1200-h1200-n-k-no-nu"
                  alt="Our Expertise - Shriihari Education"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Circular Decorative element */}
              <div className="absolute -inset-4 border-2 border-dashed border-[#f26522]/20 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none"></div>

              {/* Floating Badge - repositioned for round shape */}
              <div className="absolute bottom-4 -left-4 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 max-w-[200px] z-20">
                <div className="text-4xl font-bold text-[#0b1c3f] mb-1">15+</div>
                <div className="text-gray-600 text-sm font-semibold uppercase tracking-tight">Years of Academic Success</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Showcase Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#f26522]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#f26522]/5 rounded-[3rem] blur-2xl group-hover:bg-[#f26522]/10 transition-all duration-700"></div>
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" 
                    alt="Indian Female Medical Student" 
                    className="w-full h-full object-cover aspect-[4/5] scale-105 group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c3f] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-0.5 w-8 bg-[#f26522]"></div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f26522]">Success Journey</p>
                    </div>
                    <h3 className="text-3xl font-bold font-serif italic mb-2">Empowering Doctors of Tomorrow</h3>
                    <p className="text-white/70 text-sm leading-relaxed">Join thousands of students who have embarked on their successful medical careers with our direct guidance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white/40 backdrop-blur-sm p-10 md:p-14 rounded-[3.5rem] border border-gray-100 shadow-xl shadow-gray-200/20 relative overflow-hidden">
                <div className="relative z-10">
                  <span className="text-[#f26522] font-black uppercase tracking-[0.2em] text-[10px] mb-6 block border-l-4 border-[#f26522] pl-4">Premium Global Education</span>
                  <h2 className="text-4xl md:text-5xl font-black text-[#0b1c3f] mb-8 leading-[1.1] tracking-tight">
                    Professional Recognition for Your <span className="text-[#f26522] italic font-serif">Medical Career</span>
                  </h2>
                  <div className="space-y-10">
                    <div className="flex gap-6 items-start group">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-xl shadow-gray-200/50 group-hover:bg-[#f26522] group-hover:text-white transition-all">
                        <GraduationCap size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Global Accreditation</h4>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">Earn a prestigious degree recognized by WHO, NMC, ECFMG and other global medical councils.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start group">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-xl shadow-gray-200/50 group-hover:bg-[#0b1c3f] group-hover:text-white transition-all">
                        <Users size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Modern Infrastructure</h4>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">Study in world-class campuses equipped with high-tech laboratories and advanced clinical centers.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 pt-12 border-t border-gray-100 flex items-center gap-10">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100 ring-2 ring-gray-50">
                          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=doctor${i}`} alt="" />
                        </div>
                      ))}
                    </div>
                    <p className="text-sm font-bold text-gray-600">5,000+ <span className="text-gray-400 font-medium">Students placed globally</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DestinationTabs />
      <WhyStudyAbroad />
      <section className="bg-gray-50 py-24 relative overflow-hidden">
        {/* Decorative Separator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        <CountryMarquee />
      </section>

      {/* Student Feedback Section */}
      <section className="py-24 bg-gray-50/50 overflow-hidden relative">
        {/* Decorative Separator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-px h-64 bg-gradient-to-b from-transparent via-[#f26522]/10 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-px h-64 bg-gradient-to-b from-transparent via-[#f26522]/10 to-transparent"></div>
        {/* Background Decorative Quote */}
        <div className="absolute top-10 left-10 text-gray-200/40 select-none pointer-events-none">
          <Quote size={400} className="fill-current" />
        </div>

        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-6 bg-[#f26522] rounded-full"></div>
                <span className="text-[#f26522] font-black uppercase tracking-[0.2em] text-[10px]">Student Feedback</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-[#0b1c3f] tracking-tighter italic font-serif leading-[0.95]">
                Hear from <br/> <span className="text-[#f26522]">students.</span>
              </h2>
            </div>
            
            <div className="hidden lg:flex items-center gap-12">
              <div className="text-right">
                <div className="text-6xl font-black text-[#0b1c3f] tracking-tighter">4.82</div>
                <div className="flex items-center justify-end gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} size={14} className="fill-[#f26522] text-[#f26522]" />
                  ))}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">2,488 Ratings</div>
              </div>
            </div>
          </div>

          {/* Testimonial Marquee */}
          <div className="relative flex overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee py-12 gap-8">
              {[1, 2].map((group) => (
                <div key={group} className="flex gap-8">
                  {[
                    {
                      name: 'Chirag Chaudhary',
                      country: 'India',
                      text: 'Very professional team for MBBS abroad admission. They explained everything clearly and helped me with documents and university selection.',
                      image: 'https://shriiharieducation.com/wp-content/uploads/2026/03/3.jpg'
                    },
                    {
                      name: 'Dhruv',
                      country: 'India',
                      text: 'Highly recommended consultancy for MBBS abroad. The team is supportive and helped me complete admission and documentation smoothly.',
                      image: 'https://shriiharieducation.com/wp-content/uploads/2026/03/4.jpg'
                    },
                    {
                      name: 'Kavyaraj Parmar',
                      country: 'India',
                      text: 'Great guidance for students planning to study abroad. The team is helpful, professional, and always ready to support.',
                      image: 'https://shriiharieducation.com/wp-content/uploads/2026/03/5.jpg'
                    },
                    {
                      name: 'Meet Mesara',
                      country: 'India',
                      text: 'Very good experience with Shriihari Education Consultancy. They provided clear information and guided me throughout my study abroad process.',
                      image: 'https://shriiharieducation.com/wp-content/uploads/2026/03/6.jpg'
                    },
                    {
                      name: 'Panchal Janaki',
                      country: 'India',
                      text: 'Great experience with Shriihari Education Consultancy. Their team guided me properly for MBBS abroad admission and supported me throughout process.',
                      image: 'https://shriiharieducation.com/wp-content/uploads/2026/03/1.jpg'
                    },
                    {
                      name: 'Kumkum Sambharia',
                      country: 'India',
                      text: 'Excellent consultancy for MBBS abroad. The counselors helped me choose the right university and guided me step by step.',
                      image: 'https://shriiharieducation.com/wp-content/uploads/2026/03/2.jpg'
                    },
                    {
                      name: 'Jatin Prajapati',
                      country: 'India',
                      text: 'Professional consultancy with experienced counselors. They helped me understand the admission process and choose the right course.',
                      image: 'https://shriiharieducation.com/wp-content/uploads/2026/03/7.jpg'
                    },
                    {
                      name: 'Atul Chaudhary',
                      country: 'India',
                      text: 'Excellent support for students planning to study abroad. The team guided me properly from admission to documentation process.',
                      image: 'https://shriiharieducation.com/wp-content/uploads/2026/03/8.jpg'
                    }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="w-[320px] md:w-[420px] bg-white p-10 md:p-14 rounded-[3.5rem] border border-gray-100 shadow-xl shadow-gray-200/20 relative group whitespace-normal shrink-0"
                    >
                      <div className="flex items-center gap-1 mb-8">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star key={star} size={16} className="fill-orange-400 text-orange-400" />
                        ))}
                      </div>
                      <p className="text-gray-500 font-medium leading-relaxed mb-12 h-24 overflow-hidden italic">
                        "{item.text}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-black text-[#0b1c3f] tracking-tight">{item.name}</h4>
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.country}</span>
                        </div>
                        <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden ring-1 ring-orange-100 shadow-xl shadow-gray-200/50 shrink-0">
                          {item.image ? (
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          ) : (
                            <div className="w-full h-full bg-orange-50 flex items-center justify-center text-orange-400">
                              <Users size={32} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Dedicated Booking Section (The "Ad") */}
      <section className="py-24 bg-white overflow-hidden relative">
        {/* Decorative Separator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-16 bg-[#0b1c3f] rounded-[4rem] p-12 md:p-20 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#f26522]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="lg:w-1/2 relative z-10 text-white">
              <span className="inline-block px-6 py-2 bg-[#f26522]/20 border border-[#f26522]/30 rounded-full text-[#f26522] text-xs font-black uppercase tracking-widest mb-8">
                Limited Slots Available
              </span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 italic font-serif leading-[1.1] tracking-tight">
                Unlock Your Path to a <span className="text-[#f26522]">Medical Degree</span> Abroad.
              </h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed font-medium">
                Talk to our senior educational consultants for a personalized roadmap. We cover everything from choosing the right university to visa acceptance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  to="/book-counseling" 
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#f26522] text-white rounded-2xl font-black text-xl hover:bg-white hover:text-[#0b1c3f] transition-all shadow-2xl group"
                >
                  Book My Free Counselling
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=expert${i}`} className="w-10 h-10 rounded-full border-2 border-[#0b1c3f] bg-gray-100" />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Experts Online</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
                  alt="Counseling Session" 
                  className="w-full h-full object-cover aspect-video"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c3f]/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#f26522] rounded-full flex items-center justify-center text-white">
                    <Calendar size={24} />
                  </div>
                  <span className="text-white font-bold text-lg">Next session available: Today</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Marquee Section */}
      <section className="relative py-16 overflow-hidden bg-white border-y border-gray-100">
        <div className="relative flex overflow-hidden group">
          <div className="flex whitespace-nowrap animate-marquee py-6">
            {[1, 2, 3, 4].map((group) => (
              <div key={group} className="flex items-center gap-16 px-8">
                <span className="text-6xl md:text-9xl font-black text-gray-100 uppercase tracking-tighter select-none italic">Innovation</span>
                <span className="text-gray-100 text-4xl">•</span>
                <span className="text-6xl md:text-9xl font-black text-gray-100 uppercase tracking-tighter select-none italic">Purity</span>
                <span className="text-gray-100 text-4xl">•</span>
                <span className="text-6xl md:text-9xl font-black text-gray-100 uppercase tracking-tighter select-none italic">Reliability</span>
                <span className="text-gray-100 text-4xl">•</span>
                <span className="text-6xl md:text-9xl font-black text-gray-100 uppercase tracking-tighter select-none italic">Excellence</span>
                <span className="text-gray-100 text-4xl">•</span>
                <span className="text-6xl md:text-9xl font-black text-gray-100 uppercase tracking-tighter select-none italic">Trust</span>
                <span className="text-gray-100 text-4xl">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
