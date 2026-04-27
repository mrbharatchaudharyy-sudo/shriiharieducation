import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, MessageCircle, Send, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, color: 'bg-[#E1306C]', href: '#' },
    { icon: Facebook, color: 'bg-[#1877F2]', href: '#' },
    { icon: MessageCircle, color: 'bg-[#25D366]', href: '#' },
    { icon: Linkedin, color: 'bg-[#0077B5]', href: '#' },
    { icon: Youtube, color: 'bg-[#FF0000]', href: '#' },
  ];

  return (
    <footer className="bg-[#0b1c3f] text-white pt-16 relative overflow-hidden font-sans">
      {/* Decorative World Map Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
          alt="" 
          className="w-full h-full object-cover scale-125"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Left Section: Brand & Primary Contact */}
          <div className="lg:col-span-4 space-y-8 lg:border-r lg:border-white/5 lg:pr-12">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center p-2">
                <GraduationCap className="text-[#f26522]" size={32} />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter leading-none">SHRIIHARI</span>
                <span className="text-[10px] tracking-[0.3em] font-black uppercase text-[#f26522] mt-1">Education Consultancy</span>
              </div>
            </Link>

            <div className="space-y-4">
              <h4 className="text-lg font-black tracking-tight">We are here to guide you</h4>
              <p className="text-white/50 text-sm leading-relaxed">
                Our top consultants are ready to help you build a successful career — completely free.
              </p>
              
              <Link 
                to="/book-counseling"
                className="flex items-center justify-center gap-3 w-full max-w-xs py-4 bg-[#f26522] text-white font-black rounded-xl shadow-2xl hover:bg-white hover:text-[#0b1c3f] transition-all transform hover:-translate-y-1"
              >
                <Headphones size={20} strokeWidth={3} />
                Talk To Advisor
              </Link>
            </div>

            <div className="pt-8 space-y-6">
              <h5 className="text-xs font-black uppercase tracking-[0.2em] text-white/40">Contact Us</h5>
              <div className="space-y-4 text-sm font-bold text-white/80">
                <div className="flex gap-4">
                  <Phone size={18} className="text-[#f26522]" />
                  <span>+91 99244 95268</span>
                </div>
                <div className="flex gap-4">
                  <Phone size={18} className="text-[#f26522]" />
                  <span>+91 81281 06896</span>
                </div>
                <div className="flex gap-4">
                  <Mail size={18} className="text-[#f26522]" />
                  <span>Shriiharieducation@gmail.com</span>
                </div>
                <div className="flex gap-4">
                  <MapPin size={18} className="text-[#f26522] shrink-0" />
                  <span className="leading-relaxed">Shop No. B-10, First Floor – Front Side, New Busport, Palanpur, Gujarat – 385001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Multiple Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 pb-2 border-b-2 border-[#f26522] w-fit">Company</h4>
              <ul className="space-y-4 text-sm font-bold text-white/60">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 pb-2 border-b-2 border-[#f26522] w-fit">Study MBBS In</h4>
              <ul className="space-y-4 text-sm font-bold text-white/60">
                {['Russia', 'Georgia', 'Kyrgyzstan', 'Kazakhstan', 'Uzbekistan', 'Philippines', 'Bangladesh'].map(c => (
                  <li key={c}><Link to={`/countries/${c.toLowerCase()}`} className="hover:text-white transition-colors">{c}</Link></li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 pb-2 border-b-2 border-[#f26522] w-fit">Social Icons</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    className={`w-10 h-10 rounded-full ${social.color} flex items-center justify-center hover:scale-110 transition-transform shadow-lg group`}
                  >
                    <social.icon size={20} fill={social.icon === MessageCircle ? "white" : "none"} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-white/30 uppercase tracking-[0.3em]">
          <p>© {currentYear} Shriihari Education. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookies Settings</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/919924495268" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group"
      >
        <MessageCircle size={32} fill="white" className="group-hover:rotate-12 transition-transform" />
      </a>

      {/* Side Enquiry Badge */}
      <Link 
        to="/book-counseling"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#f26522] text-white font-black px-4 py-8 rounded-l-3xl shadow-2xl hover:bg-white hover:text-[#0b1c3f] transition-all flex flex-col items-center gap-6 group hover:-translate-x-2"
      >
        <span className="[writing-mode:vertical-lr] uppercase text-xs tracking-[0.4em] mb-2 font-black">Enquiry Now</span>
        <Send size={20} className="transform -rotate-45 group-hover:scale-125 transition-transform" />
      </Link>
    </footer>
  );
}



