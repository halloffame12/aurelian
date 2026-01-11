
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Wind, Layers, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const journeySteps = [
    { year: '1994', title: 'The Milanese Atelier', desc: 'Aurelian opens its doors as a boutique silk house on a quiet corner in Milan.' },
    { year: '2005', title: 'Material Innovation', desc: 'Introduction of our proprietary organic silk-cashmere blend, setting a new industry standard.' },
    { year: '2012', title: 'Global Presence', desc: 'Opening our first international flagship on Madison Avenue, New York.' },
    { year: '2024', title: 'Circular Future', desc: 'Achieving 100% traceability for every fiber used in our seasonal collections.' },
  ];

  return (
    <div className="pt-40 pb-32 bg-[#0c0c0c] selection:bg-[#c1af94]/30">
      {/* Intro Section */}
      <section className="px-6 mb-40">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-6 mb-12"
              >
                <div className="h-[1px] w-20 bg-[#c1af94]" />
                <span className="text-[#c1af94] text-[10px] uppercase tracking-[0.8em] font-black">Our Manifesto // Since 1994</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="text-6xl md:text-[9rem] font-serif tracking-tighter leading-[0.85] mb-12"
              >
                Weaving the <br /> <span className="italic">Intangible.</span>
              </motion.h1>
            </div>
            <div className="lg:col-span-5 lg:pt-32">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="text-gray-400 text-xl md:text-3xl leading-relaxed font-light mb-12 italic"
              >
                "Aurelian was founded on a simple, radical premise: that the most profound luxury is found in the things you cannot see."
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1.5 }}
                className="text-gray-500 text-lg leading-relaxed font-light max-w-xl"
              >
                The heritage of a weave, the ethics of a farm, and the silence of a perfect fit. We don't design for the season; we design for the era.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Image Section */}
      <section className="relative h-[90vh] overflow-hidden mb-40">
        <motion.img 
          style={{ y: yParallax }}
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=90&w=2400" 
          className="w-full h-[130%] object-cover grayscale brightness-[0.3]"
          alt="Artisan at work"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-5xl">
             <motion.div
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 2 }}
             >
               <h2 className="text-4xl md:text-7xl font-serif italic text-[#faf9f6] tracking-tighter leading-tight mb-12">
                 "Patience is our primary material. Every stitch is a deliberate act of architectural grace."
               </h2>
               <div className="w-[1px] h-20 bg-gradient-to-b from-[#c1af94] to-transparent mx-auto" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="max-w-[1600px] mx-auto px-6 mb-60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {[
            { title: 'The Traceability', icon: Wind, desc: 'Every thread has a passport. From the high plateaus of Mongolia to our looms in Italy.' },
            { title: 'The Longevity', icon: Sparkles, desc: 'We design for decades, not seasons. A garment is a legacy to be passed down.' },
            { title: 'The Silence', icon: Layers, desc: 'Luxury shouldn’t shout. Our aesthetic is defined by the grace of restraint.' }
          ].map((v, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
              className="p-16 md:p-24 bg-[#0c0c0c] transition-colors group"
            >
              <v.icon size={32} className="text-[#c1af94]/40 group-hover:text-[#c1af94] transition-colors mb-12" />
              <h3 className="text-3xl font-serif mb-8">{v.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-light">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Journey Timeline */}
      <section className="max-w-5xl mx-auto px-6 mb-60">
        <div className="text-center mb-32">
           <span className="text-[#c1af94] text-[10px] uppercase tracking-[0.5em] font-black mb-6 block">Evolution of Form</span>
           <h2 className="text-5xl md:text-7xl font-serif italic">The Aurelian Journey</h2>
        </div>
        
        <div className="space-y-32 relative">
          <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5" />
          {journeySteps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className={`flex flex-col md:flex-row items-center gap-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full md:text-right text-left px-8">
                 {i % 2 === 0 ? (
                   <div className="space-y-6">
                     <span className="text-[#c1af94] font-black tracking-[0.3em] text-[10px] glass-dark px-6 py-2 rounded-full border border-white/5">{step.year}</span>
                     <h4 className="text-3xl font-serif mt-4">{step.title}</h4>
                     <p className="text-gray-500 text-lg leading-relaxed font-light">{step.desc}</p>
                   </div>
                 ) : null}
              </div>
              
              <div className="relative z-10 w-8 h-8 rounded-full bg-[#0c0c0c] border border-[#c1af94]/30 flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-[#c1af94]" />
              </div>
              
              <div className="flex-1 w-full text-left px-8">
                {i % 2 !== 0 ? (
                   <div className="space-y-6">
                     <span className="text-[#c1af94] font-black tracking-[0.3em] text-[10px] glass-dark px-6 py-2 rounded-full border border-white/5">{step.year}</span>
                     <h4 className="text-3xl font-serif mt-4">{step.title}</h4>
                     <p className="text-gray-500 text-lg leading-relaxed font-light">{step.desc}</p>
                   </div>
                 ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Quote */}
      <section className="py-40 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-20 md:p-32 border border-white/5 bg-white/[0.01] rounded-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c1af94]/20 to-transparent" />
            <p className="text-3xl md:text-5xl font-serif italic text-gray-400 mb-12 leading-tight">
              "We don't sell clothes. We curate the armor for the modern soul."
            </p>
            <div className="flex flex-col items-center gap-6">
               <div className="h-[1px] w-12 bg-[#c1af94]" />
               <span className="text-[10px] uppercase tracking-[0.6em] font-black text-[#faf9f6]">Alessandra Aurelian</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
