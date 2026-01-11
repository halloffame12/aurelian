
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, MapPin, Play, Volume2, ChevronRight, Layers, Sparkles, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COLLECTIONS, BRAND_NAME, SITE_DATA } from '../constants';

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 45, damping: 20 });
  
  // Parallax and Opacity Values
  const scale = useTransform(smoothProgress, [0, 0.4], [1, 1.15]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const yContent = useTransform(smoothProgress, [0, 0.3], [0, -60]);
  const bgTextX = useTransform(smoothProgress, [0, 0.8], [0, -400]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#0c0c0c]">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale, x: mousePos.x * -0.3, y: mousePos.y * -0.3 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={SITE_DATA.home.hero.image} 
            alt="Aurelian Hero" 
            className="w-full h-full object-cover brightness-[0.25]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/80 via-transparent to-[#0c0c0c]" />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.h2 
            style={{ x: bgTextX, opacity: heroOpacity }}
            className="text-[40vw] font-serif font-black text-outline opacity-[0.06] whitespace-nowrap uppercase tracking-tighter"
          >
            {BRAND_NAME}
          </motion.h2>
        </div>

        <motion.div 
          style={{ y: yContent, opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-[1600px] w-full pt-40"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <span className="inline-block text-[10px] md:text-xs uppercase tracking-[0.8em] text-[#c1af94] font-bold glass-dark px-12 py-5 rounded-full border border-white/5">
              {SITE_DATA.home.hero.subtitle}
            </span>
          </motion.div>

          <div className="overflow-hidden mb-12">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[10rem] lg:text-[11rem] font-serif leading-[0.8] tracking-tighter"
            >
              Quiet <br /> 
              <span className="italic relative inline-block">
                Luxury
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "115%" }}
                  transition={{ delay: 1.2, duration: 2.5, ease: "circOut" }}
                  className="absolute -bottom-4 left-[-7.5%] h-[1px] bg-gradient-to-r from-transparent via-[#c1af94]/50 to-transparent"
                />
              </span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="text-gray-400 text-sm md:text-xl max-w-2xl mx-auto mb-16 tracking-wide font-light leading-relaxed"
          >
            {SITE_DATA.home.hero.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-10"
          >
            <Link 
              to="/collections" 
              className="group relative overflow-hidden bg-[#faf9f6] text-[#0c0c0c] px-16 py-6 rounded-full font-black uppercase text-[11px] tracking-[0.35em] transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center">
                The Archive <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={18} />
              </span>
              <motion.div 
                className="absolute inset-0 bg-[#c1af94] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out"
              />
            </Link>
            <button className="flex items-center text-white/50 hover:text-white transition-all group px-4 py-2">
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center mr-6 group-hover:border-[#c1af94] group-hover:bg-[#c1af94]/10 transition-all duration-500 overflow-hidden relative">
                <img src={SITE_DATA.home.hero.videoThumbnail} className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Video thumb" />
                <Play size={20} className="ml-1 fill-current relative z-10 text-[#c1af94]" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Watch The Craft</span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 via-[#c1af94]/40 to-transparent relative overflow-hidden">
            <motion.div 
              animate={{ y: [-100, 100] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-transparent via-white/80 to-transparent"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.6em] text-white/20 font-black text-center">Scroll to Discover</span>
        </motion.div>
      </section>

      {/* --- MATERIALITY DIALOGUE --- */}
      <section className="py-40 md:py-60 px-6 border-b border-white/5 bg-[#0c0c0c] overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.5 }}
               className="relative aspect-[4/5] overflow-hidden rounded-sm"
             >
                <img 
                  src={SITE_DATA.home.materiality.mainImage} 
                  alt="Fabric Detail"
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-[3s]"
                />
                <div className="absolute inset-0 bg-black/20" />
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '80%' }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute bottom-12 left-12 h-[1px] bg-white/30" 
                />
                <span className="absolute bottom-16 left-12 text-[10px] uppercase tracking-[0.6em] font-bold text-white/50">Magnified Detail // Silk Cashmere Blend</span>
             </motion.div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#c1af94] text-[10px] uppercase tracking-[0.8em] font-black block mb-12"
            >
              {SITE_DATA.home.materiality.subheadline}
            </motion.span>
            <h2 className="text-5xl md:text-8xl font-serif tracking-tighter leading-none mb-12">
              {SITE_DATA.home.materiality.headline}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Wind size={20} className="text-[#c1af94]" />
                </div>
                <h4 className="text-2xl font-serif">Structural Fluidity</h4>
                <p className="text-gray-500 font-light leading-relaxed">
                  Our garments interact with the wearer's movement. The weight is calculated for both drape and presence.
                </p>
              </div>
              <div className="space-y-8">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Sparkles size={20} className="text-[#c1af94]" />
                </div>
                <h4 className="text-2xl font-serif">Organic Purity</h4>
                <p className="text-gray-500 font-light leading-relaxed">
                  {SITE_DATA.home.materiality.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CURRENT ANTHOLOGY --- */}
      <section className="py-40 md:py-60 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#c1af94] text-[10px] uppercase tracking-[0.7em] font-bold block mb-8"
            >
              Featured Collections // 2024
            </motion.span>
            <h2 className="text-6xl md:text-[7rem] lg:text-[9rem] font-serif tracking-tighter leading-[0.85]">The Permanent <br /> <span className="italic">Silhouette.</span></h2>
          </div>
          <Link to="/collections" className="group flex items-center text-[10px] uppercase tracking-[0.5em] font-black border-b border-white/10 pb-4 hover:border-[#c1af94] transition-all">
            Explore All Fragments <ChevronRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
          {COLLECTIONS.slice(0, 2).map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ delay: idx * 0.2 }}
              className={`group cursor-pointer ${idx === 0 ? 'md:col-span-7' : 'md:col-span-5 md:mt-64'}`}
            >
              <div className="relative aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-sm mb-12 bg-neutral-900 shadow-2xl">
                <img 
                  src={item.imageUrl} 
                  className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105 brightness-[0.8]" 
                  alt={item.name}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000" />
                <div className="absolute bottom-8 right-8 flex flex-col items-end opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 text-right">
                   <span className="text-[9px] font-black uppercase tracking-[0.5em] mb-2">{item.fabric}</span>
                   <div className="h-[1px] w-12 bg-[#c1af94]" />
                </div>
              </div>
              <div className="max-w-xl">
                <h4 className="text-4xl md:text-5xl font-serif mb-6 group-hover:text-[#c1af94] transition-colors">{item.name}</h4>
                <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- THE CRAFT & PROCESS --- */}
      <section className="py-40 md:py-60 px-6 bg-[#faf9f6] text-[#0c0c0c] overflow-hidden relative">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-16">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#c1af94] text-[10px] font-black tracking-[0.7em] uppercase block"
            >
              Patience as Method
            </motion.span>
            <h2 className="text-5xl md:text-[7rem] font-serif leading-[0.85] tracking-tighter">
              {SITE_DATA.home.craft.headline}
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light italic">
              {SITE_DATA.home.craft.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-12 pt-8">
               <div className="flex flex-col gap-4">
                  <span className="text-4xl font-serif tracking-tighter">140+</span>
                  <span className="text-[9px] uppercase tracking-[0.4em] font-black text-gray-400">Hours per garment</span>
               </div>
               <div className="w-[1px] h-16 bg-gray-200 hidden sm:block" />
               <div className="flex flex-col gap-4">
                  <span className="text-4xl font-serif tracking-tighter">100%</span>
                  <span className="text-[9px] uppercase tracking-[0.4em] font-black text-gray-400">Traceable fiber</span>
               </div>
            </div>
          </div>
          
          <div className="relative">
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
               className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl"
            >
               <img 
                 src={SITE_DATA.home.craft.image} 
                 className="w-full h-full object-cover" 
                 alt="Craftsmanship Process"
               />
            </motion.div>
            <div className="absolute -bottom-16 -left-16 w-64 p-10 bg-[#0c0c0c] text-[#faf9f6] hidden xl:block shadow-2xl">
               <Layers size={24} className="text-[#c1af94] mb-6" />
               <p className="text-xs font-light leading-relaxed text-gray-400 italic">
                 "A single stitch is a dialogue between the hand and the soul."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FLAGSHIP EXPERIENCE --- */}
      <section className="relative py-60 px-6 overflow-hidden">
        <motion.div 
            style={{ y: useTransform(smoothProgress, [0.75, 1], [0, 200]) }}
            className="absolute inset-0 z-0"
        >
          <img 
            src={SITE_DATA.store.image} 
            className="w-full h-full object-cover brightness-[0.2] grayscale"
            alt="Flagship Boutique"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-transparent to-[#0c0c0c]" />
        </motion.div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-5xl md:text-[8rem] lg:text-[10rem] font-serif mb-16 tracking-tighter leading-none text-white">
              Inhabit the <br /> <span className="italic font-light text-[#c1af94]/80">Feeling.</span>
            </h2>
            <p className="text-gray-400 text-xl md:text-3xl mb-24 max-w-3xl mx-auto font-light leading-relaxed italic">
              "To enter an Aurelian space is to step out of time."
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16">
              <Link 
                to="/store" 
                className="bg-[#faf9f6] text-[#0c0c0c] px-24 py-8 rounded-full font-black uppercase text-[12px] tracking-[0.4em] hover:bg-[#c1af94] hover:text-[#faf9f6] active:scale-95 transition-all shadow-2xl"
              >
                The Flagship Experience
              </Link>
              <Link 
                to="/contact" 
                className="text-white flex items-center gap-4 text-[12px] uppercase tracking-[0.5em] font-black hover:text-[#c1af94] transition-all group"
              >
                <MapPin size={24} strokeWidth={1.5} /> Directions to Sanctuary
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
