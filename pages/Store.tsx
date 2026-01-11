
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Compass, ExternalLink, Sun, Moon, Calendar, User, ArrowRight, Layers } from 'lucide-react';
import { SITE_DATA, BRAND_NAME } from '../constants';

const Store: React.FC = () => {
  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: false }));

  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTime(new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-48 pb-32 px-6 bg-[#0c0c0c] min-h-screen selection:bg-[#c1af94]/20">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <header className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center gap-6 mb-12">
               <span className="text-[#c1af94] text-[10px] uppercase tracking-[0.5em] font-black">Global Flagship // Madison Ave</span>
               <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Atmosphere: Quiet</span>
               </div>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-serif mb-12 tracking-tighter leading-[0.85]">The <br /> <span className="italic">Sanctuary</span></h1>
            
            <div className="grid grid-cols-2 gap-12 border-t border-white/5 pt-12">
               <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Local Time</p>
                  <p className="text-2xl font-serif text-white">{localTime} <span className="text-xs text-[#c1af94]">EST</span></p>
               </div>
               <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Current Status</p>
                  <p className="text-2xl font-serif text-white">Open for Viewings</p>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-sm group shadow-2xl"
          >
            <img 
               src={SITE_DATA.store.image} 
               alt="Boutique" 
               className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-1000" />
            <div className="absolute bottom-12 right-12">
               <button className="bg-white text-black p-6 rounded-full hover:bg-[#c1af94] hover:text-[#0c0c0c] transition-all shadow-2xl">
                  <ExternalLink size={24} />
               </button>
            </div>
          </motion.div>
        </header>

        {/* The Boutique Atmosphere (Sensory Section) */}
        <section className="mb-60 py-40 bg-white/5 border-y border-white/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 text-white/5 pointer-events-none select-none">
              <span className="text-[15vw] font-serif font-black tracking-tighter uppercase">Sensory</span>
           </div>

           <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24 relative z-10 px-6">
              {[
                { label: 'Olfactory Signature', value: SITE_DATA.store.sensory.scent, icon: Sun },
                { label: 'Auditory Landscape', value: SITE_DATA.store.sensory.sound, icon: Moon },
                { label: 'Tactile Palette', value: SITE_DATA.store.sensory.material, icon: Layers }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-8"
                >
                  <item.icon size={24} className="text-[#c1af94]" />
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500">{item.label}</h4>
                  <p className="text-2xl font-serif italic text-white/90 leading-relaxed">{item.value}</p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Detailed Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 mb-60">
           <div className="lg:col-span-7 space-y-32">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                 {SITE_DATA.store.atmosphereImages.slice(0, 2).map((img, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -10 }}
                      className="aspect-[3/4] overflow-hidden rounded-sm"
                    >
                       <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Atmosphere" />
                    </motion.div>
                 ))}
              </div>
              <div className="p-12 md:p-24 bg-neutral-900/50 border border-white/5 rounded-sm">
                 <h3 className="text-4xl md:text-6xl font-serif mb-12">The Bespoke <br /> Appointment</h3>
                 <p className="text-gray-400 text-xl font-light mb-16 leading-relaxed">
                   Experience the collection in absolute privacy. Our concierge team is available to curate a selection tailored to your architectural silhouette and aesthetic requirements.
                 </p>
                 <button className="w-full bg-white text-black py-8 rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-[#c1af94] hover:text-[#0c0c0c] transition-all flex items-center justify-center gap-6 group">
                   Schedule Private Viewing <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </div>

           <div className="lg:col-span-5 space-y-32 sticky top-40 h-fit">
              <section className="space-y-12">
                 <div className="flex items-center gap-6">
                    <Compass className="text-[#c1af94]" size={20} />
                    <span className="text-[10px] uppercase tracking-[0.5em] font-black text-gray-500">Location Details</span>
                 </div>
                 <h3 className="text-4xl font-serif">427 Madison Avenue</h3>
                 <p className="text-gray-400 text-xl font-light leading-relaxed">
                   Situated on the 14th floor, overlooking the architectural rhythm of Midtown Manhattan. Entry via private elevator on 49th Street.
                 </p>
              </section>

              <section className="space-y-12">
                 <div className="flex items-center gap-6">
                    <Clock className="text-[#c1af94]" size={20} />
                    <span className="text-[10px] uppercase tracking-[0.5em] font-black text-gray-500">The Availability</span>
                 </div>
                 <div className="space-y-8">
                    {[
                      { day: 'Mon — Fri', hours: SITE_DATA.store.hours.weekday },
                      { day: 'Saturday', hours: SITE_DATA.store.hours.saturday },
                      { day: 'Sunday', hours: SITE_DATA.store.hours.sunday, italic: true }
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                        <span className="text-gray-400 text-sm">{row.day}</span>
                        <span className={`text-white font-bold tracking-widest text-sm ${row.italic ? 'italic text-[#c1af94]/60' : ''}`}>{row.hours}</span>
                      </div>
                    ))}
                 </div>
              </section>

              <section className="pt-12 border-t border-white/10 flex flex-col gap-6">
                 <div className="flex items-center gap-6">
                    <Phone size={18} className="text-[#c1af94]" />
                    <span className="text-white text-lg font-serif">{SITE_DATA.brand.phone}</span>
                 </div>
                 <div className="flex items-center gap-6">
                    <Mail size={18} className="text-[#c1af94]" />
                    <span className="text-gray-500 hover:text-white transition-colors cursor-pointer text-sm tracking-widest font-black uppercase">{SITE_DATA.brand.email}</span>
                 </div>
              </section>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
