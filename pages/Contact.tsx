
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Instagram, Twitter, Linkedin, CheckCircle, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-48 pb-32 px-6 bg-[#0c0c0c] min-h-screen selection:bg-[#c1af94]/20">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center gap-6 mb-12">
               <div className="h-[1px] w-20 bg-[#c1af94]" />
               <span className="text-[#c1af94] text-[10px] uppercase tracking-[0.5em] font-black">Direct Correspondence</span>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-serif mb-16 tracking-tighter leading-[0.85]">The <br /> <span className="italic">Dialogue</span></h1>
            <p className="text-gray-400 text-xl md:text-3xl font-light leading-relaxed max-w-lg mb-20 italic">
              "Every garment begins with a conversation."
            </p>

            <div className="space-y-32">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                   <div>
                     <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#c1af94] mb-8 font-black">Digital Echoes</h4>
                     <div className="flex flex-col space-y-6">
                       <a href="#" className="flex items-center text-gray-500 hover:text-white transition-all group">
                         <Instagram size={18} className="mr-4 group-hover:text-[#c1af94]" />
                         <span className="text-sm uppercase tracking-[0.3em] font-bold">Instagram</span>
                       </a>
                       <a href="#" className="flex items-center text-gray-500 hover:text-white transition-all group">
                         <Twitter size={18} className="mr-4 group-hover:text-[#c1af94]" />
                         <span className="text-sm uppercase tracking-[0.3em] font-bold">Twitter</span>
                       </a>
                     </div>
                   </div>

                   <div>
                     <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#c1af94] mb-8 font-black">Global HQ</h4>
                     <address className="not-italic text-gray-500 leading-relaxed font-light text-lg">
                        Via Montenapoleone, 12 <br />
                        20121 Milano MI, Italy
                     </address>
                   </div>
               </div>

               <div className="border-t border-white/5 pt-16">
                 <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#c1af94] mb-8 font-black">Concierge Service</h4>
                 <p className="text-3xl md:text-5xl font-serif hover:text-[#c1af94] transition-all cursor-pointer group flex items-center gap-6">
                   concierge@aurelian.com <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all" />
                 </p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="bg-[#111] p-12 md:p-24 rounded-sm border border-white/5 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c1af94]/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <AnimatePresence mode="wait">
                {submitted ? (
                <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full min-h-[550px] flex flex-col items-center justify-center text-center space-y-12 relative z-10"
                >
                    <motion.div 
                        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-32 h-32 bg-[#c1af94]/10 rounded-full flex items-center justify-center border border-[#c1af94]/20"
                    >
                      <CheckCircle className="text-[#c1af94]" size={48} strokeWidth={1} />
                    </motion.div>
                    <div className="space-y-6">
                       <h3 className="text-5xl font-serif">Correspondence Received</h3>
                       <p className="text-gray-500 max-w-sm text-xl font-light leading-relaxed">
                          Your enquiry is being processed by our Milanese atelier. A specialist will be in touch within 24 hours.
                       </p>
                    </div>
                    <button 
                        onClick={() => setSubmitted(false)} 
                        className="text-[10px] uppercase tracking-[0.5em] text-[#c1af94] font-black border-b border-[#c1af94]/20 pb-4 mt-16 hover:border-[#c1af94] transition-all"
                    >
                        Draft New Inquiry
                    </button>
                </motion.div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-20 relative z-10" key="form">
                    <div className="relative group">
                    <input 
                        type="text" 
                        required
                        placeholder=" "
                        className="w-full bg-transparent border-b border-white/10 py-8 text-2xl focus:outline-none focus:border-[#c1af94] transition-all peer font-light text-white"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                    <label className="absolute top-8 left-0 text-gray-600 text-[10px] uppercase tracking-[0.5em] transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:top-8 peer-placeholder-shown:text-gray-500 peer-focus:top-[-10px] peer-focus:text-[10px] peer-focus:text-[#c1af94] pointer-events-none font-black">
                        Name / Identity
                    </label>
                    </div>

                    <div className="relative group">
                    <input 
                        type="email" 
                        required
                        placeholder=" "
                        className="w-full bg-transparent border-b border-white/10 py-8 text-2xl focus:outline-none focus:border-[#c1af94] transition-all peer font-light text-white"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                    <label className="absolute top-8 left-0 text-gray-600 text-[10px] uppercase tracking-[0.5em] transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:top-8 peer-placeholder-shown:text-gray-500 peer-focus:top-[-10px] peer-focus:text-[10px] peer-focus:text-[#c1af94] pointer-events-none font-black">
                        Email Address
                    </label>
                    </div>

                    <div className="relative group">
                    <textarea 
                        required
                        placeholder=" "
                        rows={4}
                        className="w-full bg-transparent border-b border-white/10 py-8 text-2xl focus:outline-none focus:border-[#c1af94] transition-all peer resize-none font-light text-white"
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                    />
                    <label className="absolute top-8 left-0 text-gray-600 text-[10px] uppercase tracking-[0.5em] transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:top-8 peer-placeholder-shown:text-gray-500 peer-focus:top-[-10px] peer-focus:text-[10px] peer-focus:text-[#c1af94] pointer-events-none font-black">
                        The Message
                    </label>
                    </div>

                    <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#faf9f6] text-[#0c0c0c] py-10 rounded-full text-[11px] font-black uppercase tracking-[0.5em] hover:bg-[#c1af94] hover:text-[#faf9f6] transition-all transform active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-6 shadow-2xl"
                    >
                    {loading ? (
                        <div className="w-6 h-6 border-2 border-[#0c0c0c]/20 border-t-[#0c0c0c] rounded-full animate-spin" />
                    ) : (
                        <>Transmit Inquiry <Send size={18} /></>
                    )}
                    </button>
                </form>
                )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
