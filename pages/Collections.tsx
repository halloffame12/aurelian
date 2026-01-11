
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COLLECTIONS } from '../constants';
import { SlidersHorizontal, Info, Target, Droplets, MapPin } from 'lucide-react';

const Categories = ['All', 'Men', 'Women', 'Kids', 'Seasonal'] as const;

const Collections: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<typeof Categories[number]>('All');

  const filteredItems = useMemo(() => {
    return activeCategory === 'All' 
      ? COLLECTIONS 
      : COLLECTIONS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-48 pb-32 px-6 bg-[#0c0c0c] min-h-screen selection:bg-[#c1af94]/20">
      <div className="max-w-[1700px] mx-auto">
        <header className="mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="h-[1px] w-20 bg-[#c1af94]" />
              <span className="text-[#c1af94] text-[10px] uppercase tracking-[0.6em] font-black">Archive Series // Edition 04</span>
            </motion.div>
            <h1 className="text-7xl md:text-[10rem] font-serif tracking-tighter leading-[0.85] mb-12">
              The Material <br /> <span className="italic">Fragments</span>
            </h1>
            <p className="text-gray-500 text-xl md:text-3xl font-light leading-relaxed max-w-3xl border-l border-white/10 pl-12">
              An exploration of structural weight and textile fluidness. Every garment is a response to the geometry of the human form.
            </p>
          </div>
          
          <div className="flex items-center gap-10">
             <div className="flex flex-col items-end">
               <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2 font-bold">Currently Curating</span>
               <span className="text-2xl font-serif italic text-[#c1af94]">{filteredItems.length} Pieces</span>
             </div>
          </div>
        </header>

        {/* Dynamic Category Toggle */}
        <nav className="flex items-center gap-x-20 gap-y-10 mb-24 border-y border-white/5 py-12 overflow-x-auto no-scrollbar">
          {Categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative py-2 group whitespace-nowrap focus:outline-none"
            >
              <span className={`text-[12px] uppercase tracking-[0.5em] font-black transition-all duration-700 ${
                activeCategory === cat ? 'text-[#c1af94]' : 'text-gray-600 group-hover:text-white'
              }`}>
                {cat}
              </span>
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute bottom-[-13px] left-0 right-0 h-[2px] bg-[#c1af94]"
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Staggered Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-32 md:gap-y-48">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <CollectionCard key={item.id} item={item} index={idx} />
            ))}
          </AnimatePresence>
        </div>
        
        {filteredItems.length === 0 && (
          <div className="py-60 text-center">
             <p className="text-gray-500 text-3xl font-serif italic">The silence of an empty archive.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Fixed: Wrapping CollectionCard with React.FC to handle iteration keys properly in TS
const CollectionCard: React.FC<{ item: any; index: number }> = ({ item, index }) => {
  // Staggering logic based on index
  const gridSpan = index % 5 === 0 ? 'md:col-span-8' : index % 5 === 1 ? 'md:col-span-4' : 'md:col-span-4';
  const aspectClass = index % 5 === 0 ? 'aspect-[16/9]' : 'aspect-[3/4]';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative ${gridSpan}`}
    >
      <div className={`relative ${aspectClass} overflow-hidden bg-neutral-900 rounded-[2px] mb-12 shadow-2xl`}>
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover grayscale transition-all duration-[2.5s] ease-out group-hover:scale-110 group-hover:grayscale-0 brightness-[0.7]"
          loading="lazy"
        />
        
        {/* Technical Specification Overlay */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-700 p-12 flex flex-col justify-between">
           <div className="space-y-12">
             <div className="flex justify-between items-start">
               <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#c1af94]">Technical Specs</span>
               <Info size={16} className="text-[#c1af94]/40" />
             </div>
             
             <div className="space-y-8">
               <div className="flex items-center gap-6">
                 <MapPin size={18} className="text-white/40" />
                 <div>
                   <p className="text-[9px] uppercase tracking-widest text-gray-500">Origin</p>
                   <p className="text-white font-serif">{item.specs?.origin || 'Milano, IT'}</p>
                 </div>
               </div>
               <div className="flex items-center gap-6">
                 <Target size={18} className="text-white/40" />
                 <div>
                   <p className="text-[9px] uppercase tracking-widest text-gray-500">Weight</p>
                   <p className="text-white font-serif">{item.specs?.weight || '240gsm'}</p>
                 </div>
               </div>
               <div className="flex items-center gap-6">
                 <Droplets size={18} className="text-white/40" />
                 <div>
                   <p className="text-[9px] uppercase tracking-widest text-gray-500">Finish</p>
                   <p className="text-white font-serif">{item.specs?.details || 'Hand-finished'}</p>
                 </div>
               </div>
             </div>
           </div>

           <div className="border-t border-white/10 pt-8">
              <button className="text-[10px] uppercase tracking-[0.6em] font-black text-white hover:text-[#c1af94] transition-colors">
                Enquire for Appointment
              </button>
           </div>
        </div>

        {/* Static Badge */}
        <div className="absolute top-10 left-10">
           <span className="text-[9px] font-black tracking-[0.4em] uppercase glass-dark px-6 py-3 rounded-full border border-white/5 opacity-80">
              {item.category}
           </span>
        </div>
      </div>

      <div className="space-y-6">
         <div className="flex justify-between items-end">
            <h3 className="text-4xl md:text-5xl font-serif tracking-tighter leading-none group-hover:text-[#c1af94] transition-colors">
              {item.name}
            </h3>
            <span className="text-[9px] text-gray-600 font-black tracking-widest italic">AURELIAN ATELIER</span>
         </div>
         <div className="flex items-center gap-8">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#c1af94]/60 font-black">{item.fabric}</span>
            <div className="h-[1px] flex-grow bg-white/5" />
         </div>
         <p className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default Collections;
