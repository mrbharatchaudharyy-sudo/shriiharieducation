import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Video, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  
  const currentMonth = "April 2026";
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] cursor-pointer"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl bg-[#111111] text-white rounded-3xl z-[101] overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row"
          >
            {/* Left Sidebar: Info */}
            <div className="w-full md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-white/5">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-8">
                <Calendar className="text-[#f26522]" size={24} />
              </div>
              
              <h2 className="text-3xl font-black mb-4">Book a call</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Pick a time that works for you and we will walk through your goals together. 
                Schedule a free intro call with our expert advisors. 🌍
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-bold text-white/70">
                  <Clock size={18} className="text-white/30" />
                  <span>30m</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-white/70">
                  <Video size={18} className="text-white/30" />
                  <span>Video Call</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-white/70">
                  <Globe size={18} className="text-white/30" />
                  <span>Asia/Kolkata</span>
                </div>
              </div>
            </div>

            {/* Right Side: Calendar */}
            <div className="flex-1 p-8 overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-black">{currentMonth}</h3>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-white/5 rounded-lg transition-colors border border-white/5">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="p-2 hover:bg-white/5 rounded-lg transition-colors border border-white/5">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Weekdays */}
              <div className="grid grid-cols-7 gap-1 mb-4 text-center">
                {weekDays.map(day => (
                  <div key={day} className="text-[10px] font-black text-white/30 tracking-widest">{day}</div>
                ))}
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7 gap-2">
                {/* Empty slots for April (starts on Wednesday) */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}
                
                {days.map(day => {
                  const isAvailable = day >= 27;
                  return (
                    <button
                      key={day}
                      disabled={!isAvailable}
                      onClick={() => setSelectedDate(day)}
                      className={`
                        aspect-square rounded-xl flex items-center justify-center font-bold text-sm transition-all
                        ${isAvailable 
                          ? 'hover:bg-[#f26522] hover:text-white bg-white/5' 
                          : 'text-white/10 cursor-not-allowed'}
                        ${selectedDate === day ? 'bg-[#f26522] text-white ring-4 ring-[#f26522]/20' : ''}
                      `}
                    >
                      {day}
                      {day === 24 && (
                        <div className="absolute w-1 h-1 bg-[#f26522] rounded-full mt-6" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-12 flex justify-end gap-4">
                <button 
                  onClick={onClose}
                  className="px-6 py-3 font-bold text-sm hover:text-[#f26522] transition-colors"
                >
                  Cancel
                </button>
                <button 
                  disabled={!selectedDate}
                  className="px-10 py-3 bg-[#f26522] text-white font-black rounded-xl hover:bg-white hover:text-[#0b1c3f] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-[#f26522]/20"
                >
                  Confirm
                </button>
              </div>
            </div>

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white"
            >
              <X size={20} />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
