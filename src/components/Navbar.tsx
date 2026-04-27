import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, GraduationCap, Calendar, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { COUNTRIES } from '../lib/data';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar({ onOpenBooking }: { onOpenBooking?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showDestinations, setShowDestinations] = useState(false);
  const [showStudyAbroad, setShowStudyAbroad] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [activeExploreCountry, setActiveExploreCountry] = useState(COUNTRIES[3]); // Default to Kyrgyzstan or Georgia? Choosing Georgia as per image.
  const location = useLocation();

  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'MBBS Destination', path: '/countries', hasDropdown: true },
    { name: 'Study In Abroad', path: '/countries', hasDropdown: true, dropdownType: 'study' },
    { name: 'Services', path: '/services' },
    { name: 'Book Counseling', path: '/book-counseling' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#0b1c3f] text-white py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1500px] mx-auto flex justify-between items-center text-xs font-medium">
          <div className="flex items-center gap-6">
            <a href="tel:+919924495268" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Phone size={14} fill="currentColor" className="text-white" />
              +91 99244 95268, +91 81281 06896
            </a>
            <a href="mailto:Shriiharieducation@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Mail size={14} fill="currentColor" className="text-white" />
              Shriiharieducation@gmail.com
            </a>
          </div>
          <Link 
            to="/book-counseling"
            className="hidden md:flex items-center gap-2 border border-white/50 px-4 py-1.5 rounded-lg hover:bg-white/10 transition-all text-[11px] font-bold"
          >
            <Calendar size={14} />
            Get Free Consultation
          </Link>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white py-3 border-b border-gray-100 shadow-sm relative">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6 md:gap-8">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://shriiharieducation.com/wp-content/uploads/2025/12/SHRIIHARI-LOGO.png" 
                  alt="Shriihari Education Logo" 
                  className="h-9 md:h-11 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </Link>

              <div className="relative">
                <button 
                  onClick={() => setShowExplore(!showExplore)}
                  className={cn(
                    "hidden lg:flex items-center gap-3 px-6 py-2.5 border rounded-xl text-sm font-bold transition-all duration-300",
                    showExplore 
                      ? "bg-gray-50 border-[#f26522] text-[#f26522]" 
                      : "border-gray-300 text-gray-700 hover:bg-gray-50 bg-white"
                  )}
                >
                  Explore Universities
                  <ChevronDown size={14} className={cn("transition-transform duration-300", showExplore && "rotate-180")} strokeWidth={3} />
                </button>

                {/* Mega Menu Explore Universities */}
                <AnimatePresence>
                  {showExplore && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="fixed left-0 right-0 top-[110px] bg-white border-y border-gray-100 shadow-2xl z-40 hidden lg:block"
                    >
                      <div className="max-w-[1500px] mx-auto flex min-h-[500px]">
                        {/* Left Side: Countries */}
                        <div className="w-1/3 border-r border-gray-100 p-8 space-y-1 max-h-[80vh] overflow-y-auto custom-scrollbar">
                           {COUNTRIES.map((country) => (
                             <button
                               key={country.id}
                               onMouseEnter={() => setActiveExploreCountry(country)}
                               className={cn(
                                 "w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left group",
                                 activeExploreCountry?.id === country.id 
                                   ? "bg-orange-50 text-[#f26522]" 
                                   : "hover:bg-gray-50 text-gray-600"
                               )}
                             >
                                <div className={cn(
                                  "w-1 h-6 rounded-full transition-all shrink-0",
                                  activeExploreCountry?.id === country.id ? "bg-[#f26522]" : "bg-transparent group-hover:bg-gray-200"
                                )} />
                                <img 
                                  src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                  alt={country.name}
                                  className="w-5 h-5 rounded-full object-cover border border-gray-100 shadow-sm flex-shrink-0"
                                  referrerPolicy="no-referrer"
                                />
                                <span className="font-bold text-sm tracking-tight capitalize">MBBS in {country.name}</span>
                             </button>
                           ))}
                        </div>

                        {/* Right Side: University List */}
                        <div className="w-2/3 p-10 max-h-[80vh] overflow-y-auto custom-scrollbar">
                           <div className="flex items-center gap-2 mb-8 border-b-2 border-[#0b1c3f] pb-4">
                              <div className="w-1.5 h-6 bg-[#f26522]" />
                              <h3 className="text-xl font-bold text-[#0b1c3f]">Top Universities in {activeExploreCountry?.name}</h3>
                           </div>
                           
                           <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                              {activeExploreCountry?.universities && activeExploreCountry.universities.length > 0 ? (
                                activeExploreCountry.universities.map((uni, idx) => (
                                  <Link 
                                    key={idx}
                                    to={activeExploreCountry.id === 'russia' ? '/mbbs-in-russia' : activeExploreCountry.id === 'uzbekistan' ? '/mbbs-in-uzbekistan' : `/countries/${activeExploreCountry.id}`}
                                    onClick={() => setShowExplore(false)}
                                    className="text-sm font-medium text-gray-700 hover:text-[#f26522] hover:translate-x-1 transition-all"
                                  >
                                    {uni.name}
                                  </Link>
                                ))
                              ) : (
                                <p className="text-gray-400 text-sm italic">Universities data coming soon...</p>
                              )}
                           </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isStudyAbroad = link.dropdownType === 'study';
                const isDestinations = link.hasDropdown && !isStudyAbroad;
                const isDropdownOpen = isStudyAbroad ? showStudyAbroad : showDestinations;

                return (
                  <div 
                    key={link.name} 
                    className="relative group py-2"
                    onMouseEnter={() => {
                      if (isStudyAbroad) setShowStudyAbroad(true);
                      else if (isDestinations) setShowDestinations(true);
                    }}
                    onMouseLeave={() => {
                      if (isStudyAbroad) setShowStudyAbroad(false);
                      else if (isDestinations) setShowDestinations(false);
                    }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        "text-[14px] font-bold transition-colors hover:text-[#f26522] flex items-center gap-1.5 whitespace-nowrap",
                        location.pathname === link.path ? "text-[#f26522]" : "text-[#0b1c3f]"
                      )}
                    >
                      {link.name}
                      {link.hasDropdown && <ChevronDown size={14} className={cn("transition-transform duration-300", isDropdownOpen && "rotate-180")} strokeWidth={2.5} />}
                    </Link>

                    {/* MBBS Destination Dropdown */}
                    {isDestinations && (
                      <AnimatePresence>
                        {showDestinations && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 grid grid-cols-3 gap-y-4 gap-x-8 z-50"
                          >
                            {COUNTRIES.map((country) => (
                              <Link
                                key={country.id}
                                to={country.id === 'russia' ? '/mbbs-in-russia' : country.id === 'uzbekistan' ? '/mbbs-in-uzbekistan' : `/countries/${country.id}`}
                                className="group/item hover:bg-gray-50 p-2 rounded-xl transition-colors flex items-center gap-3"
                                onClick={() => setShowDestinations(false)}
                              >
                                <img 
                                  src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                  alt={country.name}
                                  className="w-5 h-5 rounded-full object-cover border border-gray-100 shadow-sm flex-shrink-0"
                                  referrerPolicy="no-referrer"
                                />
                                <span className="text-sm font-semibold text-gray-700 group-hover/item:text-[#f26522]">
                                  MBBS in {country.name}
                                </span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {/* Study In Abroad Dropdown */}
                    {isStudyAbroad && (
                      <AnimatePresence>
                        {showStudyAbroad && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-[280px] bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50 overflow-hidden"
                          >
                            {['russia', 'singapore', 'georgia', 'mauritius', 'malta', 'belarus', 'cyprus'].map((id) => {
                              const country = COUNTRIES.find(c => c.id === id);
                              if (!country) return null;
                              return (
                                <Link
                                  key={country.id}
                                  to={id === 'russia' ? '/study-in-russia' : `/countries/${id}`}
                                  className="block px-6 py-3 text-[15px] font-bold text-gray-900 border-l-4 border-transparent hover:border-[#f26522] hover:bg-gray-50 flex items-center gap-3 group/item transition-all"
                                  onClick={() => setShowStudyAbroad(false)}
                                >
                                  <img 
                                    src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                    alt={country.name}
                                    className="w-5 h-5 rounded-full object-cover border border-gray-100 shadow-sm flex-shrink-0"
                                    referrerPolicy="no-referrer"
                                  />
                                  <span>Study In {country.name}</span>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-[#f26522]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <button 
                      className="w-full flex justify-between items-center text-gray-700 hover:text-[#f26522] py-2 border-b border-gray-50 last:border-0 font-medium"
                      onClick={() => link.hasDropdown ? setShowDestinations(!showDestinations) : setIsOpen(false)}
                    >
                      {link.name}
                      {link.hasDropdown && <ChevronDown size={16} className={cn("transition-transform", showDestinations && "rotate-180")} />}
                    </button>
                    
                    {link.hasDropdown && showDestinations && (
                      <div className="pl-4 mt-2 grid grid-cols-1 gap-2">
                        {COUNTRIES.map((country) => (
                          <Link
                            key={country.id}
                            to={country.id === 'russia' ? '/mbbs-in-russia' : country.id === 'uzbekistan' ? '/mbbs-in-uzbekistan' : `/countries/${country.id}`}
                            className="text-sm text-gray-500 hover:text-[#f26522] py-2 flex items-center gap-3 border-b border-gray-50 last:border-0"
                            onClick={() => {
                              setIsOpen(false);
                              setShowDestinations(false);
                            }}
                          >
                            <img 
                               src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                               alt={country.name}
                               className="w-5 h-5 rounded-full object-cover border border-gray-100"
                               referrerPolicy="no-referrer"
                            />
                            MBBS in {country.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link 
                  to="/book-counseling"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-[#f26522] text-white py-3 rounded-xl font-bold mt-4 shadow-lg shadow-[#f26522]/20 flex items-center justify-center"
                >
                  Get Free Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
