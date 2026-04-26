import { motion } from 'motion/react';

const Gallery = () => {
  const images = [
    {
      url: "https://shriiharieducation.com/wp-content/uploads/2026/01/Sriihari-Education.jpg",
      title: "Educational Excellence",
      desc: "Connecting students with world-class faculty and facilities.",
      span: "md:col-span-8 md:row-span-2"
    },
    {
      url: "https://shriiharieducation.com/wp-content/uploads/2026/01/Sriihari-Education-6.jpg",
      title: "Student Success",
      span: "md:col-span-4 md:row-span-1"
    },
    {
      url: "https://shriiharieducation.com/wp-content/uploads/2026/01/Sriihari-Education-5.jpg",
      title: "Expert Counseling",
      span: "md:col-span-4 md:row-span-1"
    },
    {
      url: "https://shriiharieducation.com/wp-content/uploads/2026/01/Sriihari-Education-1-980x733.jpg",
      title: "International Reach",
      span: "md:col-span-7 md:row-span-1"
    },
    {
      url: "https://shriiharieducation.com/wp-content/uploads/2026/01/7.jpeg",
      title: "Global Community",
      span: "md:col-span-5 md:row-span-1"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-6 bg-[#f26522] rounded-full"></div>
              <span className="text-[#f26522] font-black uppercase tracking-[0.2em] text-[10px]">Life at Campus</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-[#0b1c3f] tracking-tighter italic font-serif leading-[0.95]">
              Our Success <br/> <span className="text-[#f26522]">Gallery.</span>
            </h1>
          </div>
          <p className="text-xl text-gray-500 font-medium md:max-w-sm mb-2 leading-relaxed">
            Glimpses of our students' journey, university collaborations, and the vibrant campus life waiting for you abroad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[1100px]">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`${img.span} relative group rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(242,101,34,0.15)] transition-all duration-500`}
            >
              <div className="absolute inset-0 z-10 transition-colors duration-500 group-hover:bg-[#0b1c3f]/10" />
              
              <motion.img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c3f] via-[#0b1c3f]/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="relative z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span className="inline-block px-4 py-1.5 bg-[#f26522] text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                    Captured Moments
                  </span>
                  <h4 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight tracking-tighter">
                    {img.title}
                  </h4>
                  {img.desc && (
                    <p className="text-white/70 text-sm max-w-sm font-medium leading-relaxed">
                      {img.desc}
                    </p>
                  )}
                </div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
