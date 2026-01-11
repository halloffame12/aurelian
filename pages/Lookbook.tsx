
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LOOKBOOK_IMAGES, BRAND_NAME } from '../constants';
import { Maximize2, MoveRight, Layers, Eye } from 'lucide-react';

const Lookbook: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="bg-[#0c0c0c] overflow-x-hidden">
      {/* Editorial Intro */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center relative pt-48 md:pt-64">
        {/* Background Text - Fixed Overlap with absolute positioning and low Z */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
           <motion.span 
             initial={{ opacity: 0, scale: 1.1 }}
             animate={{ opacity: 0.02, scale: 1 }}
             transition={{ duration: 2.5 }}
             className="text-[40vw] font-serif font-black tracking-tighter uppercase whitespace-nowrap leading-none text-white blur-[2px]"
           >
             {BRAND_NAME}
           </motion.span>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.5 }}
           className="max-w-4xl relative z-10"
        >
          <span className="text-[#c1af94] text-[10px] uppercase tracking-[0.8em] font-black mb-10 block">
            The Digital Anthology // Vol. XII
          </span>
          <h1 className="text-6xl md:text-[10rem] lg:text-[12rem] font-serif tracking-tighter leading-[0.8] mb-12 text-[#faf9f6]">
            Light & <br /> <span className="italic">Texture</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-2xl font-light italic leading-relaxed max-w-2xl mx-auto mb-16">
            "We do not capture the garment. We capture the conversation between the body and the silence of the room."
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="w-[1px] h-20 bg-gradient-to-b from-[#c1af94]/50 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Main Narrative Horizontal Section */}
      <section className="py-40">
        <div className="flex flex-col gap-64 md:gap-96">
          {LOOKBOOK_IMAGES.map((item, idx) => (
            <LookbookScene key={item.id} item={item} index={idx} />
          ))}
        </div>
      </section>

      {/* Advanced Full Width "Motion" Section */}
      <section className="relative h-[120vh] flex items-center justify-center overflow-hidden py-40">
         <div className="absolute inset-0 z-0">
           <motion.img 
             initial={{ scale: 1.2 }}
             whileInView={{ scale: 1 }}
             transition={{ duration: 4 }}
             src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=2600"
             className="w-full h-full object-cover grayscale brightness-[0.2]"
             alt="Motion"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-transparent to-[#0c0c0c]" />
         </div>

         <div className="relative z-10 text-center px-6">
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 2 }}
            >
              <h2 className="text-5xl md:text-[10rem] font-serif italic text-white/90 tracking-tighter mb-12">
                 Structural <br /> Fluidity
              </h2>
              <p className="text-[#c1af94]/60 text-[10px] uppercase tracking-[1em] font-black">Movement Anthology</p>
            </motion.div>
         </div>
      </section>

      <footer className="py-60 px-6 text-center bg-black">
         <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex flex-col items-center"
         >
           <span className="text-gray-600 text-[10px] uppercase tracking-[0.5em] font-black mb-12">End of Anthology</span>
           <h3 className="text-4xl md:text-6xl font-serif mb-12 text-[#faf9f6]">Experience the tactile reality.</h3>
           <button className="group flex items-center gap-6 border border-white/10 px-16 py-8 rounded-full hover:bg-white hover:text-black transition-all">
             <span className="text-[10px] uppercase tracking-[0.4em] font-black">Boutique Appointment</span>
             <MoveRight className="group-hover:translate-x-4 transition-transform text-[#c1af94]" size={20} />
           </button>
         </motion.div>
      </footer>
    </div>
  );
};

// Fixed: Using React.FC for LookbookScene to allow React's key prop in iterations
const LookbookScene: React.FC<{ item: any; index: number }> = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-24 md:gap-32 px-6 md:px-24`}>
       <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
         className="relative flex-1 w-full aspect-[4/5] overflow-hidden group shadow-[0_100px_150px_-50px_rgba(0,0,0,0.8)] rounded-sm"
       >
          <img 
            src={item.url} 
            alt={item.caption}
            className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105"
          />
          {/* Visual Hotspot Simulation */}
          <div className="absolute top-[30%] right-[25%] group/hot cursor-pointer">
             <motion.div 
               animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
               transition={{ repeat: Infinity, duration: 3 }}
               className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center"
             />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full" />
             <div className="absolute left-full ml-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover/hot:opacity-100 transition-opacity translate-x-4 group-hover/hot:translate-x-0">
                <span className="text-[9px] uppercase tracking-widest bg-black/80 backdrop-blur px-4 py-2 rounded-full border border-white/10 text-white">Hand-Rolled Edges</span>
             </div>
          </div>

          <div className="absolute bottom-12 left-12 flex items-center gap-4">
             <Maximize2 size={16} className="text-white/40" />
             <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{item.meta || 'Scene 0' + (index + 1)}</span>
          </div>
       </motion.div>

       <motion.div 
         initial={{ opacity: 0, x: isEven ? 40 : -40 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 1.2, delay: 0.2 }}
         className="flex-1 space-y-12"
       >
          <div className="flex items-center gap-6">
            <span className="text-[#c1af94] font-serif italic text-3xl">0{index + 1}</span>
            <div className="h-[1px] w-20 bg-white/10" />
          </div>
          <h3 className="text-4xl md:text-7xl font-serif tracking-tighter leading-none italic text-[#faf9f6]">
            {item.caption}
          </h3>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-md">
            Capturing the intersection of morning light and deep texture. A study in the architectural silence of our permanent collection.
          </p>
          <button className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-black text-white hover:text-[#c1af94] transition-colors group">
            <Eye size={18} className="text-[#c1af94]" /> Reveal Details
          </button>
       </motion.div>
    </div>
  );
};

export default Lookbook;
