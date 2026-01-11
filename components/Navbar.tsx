
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, ArrowRight } from 'lucide-react';
import { NAV_LINKS, BRAND_NAME } from '../constants';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  // Optimized Scroll handling via Framer Motion's useMotionValueEvent
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Smooth blur transition trigger
    if (latest > 50) setScrolled(true);
    else setScrolled(false);

    // Header hide/show logic with speed threshold to avoid twitchiness
    if (latest > previous && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Handle route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const mainLinks = NAV_LINKS.filter(l => l.label !== 'Home' && l.label !== 'Contact');

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-6"
      >
        <motion.div 
          animate={{
            backgroundColor: scrolled ? "rgba(12, 12, 12, 0.85)" : "rgba(12, 12, 12, 0.3)",
            backdropFilter: scrolled ? "blur(24px)" : "blur(4px)",
            borderColor: scrolled ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.05)",
            y: scrolled ? 0 : 4,
          }}
          className="max-w-[1700px] mx-auto flex justify-between items-center px-6 md:px-10 py-5 rounded-full border shadow-2xl transition-all duration-700"
        >
          {/* Mobile Menu Trigger (Only < lg) */}
          <div className="lg:hidden flex-1">
            <button 
              onClick={() => setIsOpen(true)}
              className="text-[#faf9f6] hover:text-[#c1af94] transition-colors p-2 -ml-2"
              aria-label="Open Menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Desktop Nav Links (Left - Only > lg) */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
            {mainLinks.slice(0, 2).map((link) => (
              <NavLinkItem key={link.path} link={link} currentPath={location.pathname} />
            ))}
          </div>

          {/* Center: Brand Logo (Always Centered) */}
          <Link 
            to="/" 
            className="flex items-center justify-center group z-10"
          >
            <motion.span 
              whileHover={{ letterSpacing: '0.6em' }}
              className="text-lg md:text-2xl font-serif font-black tracking-[0.4em] text-[#faf9f6] transition-all duration-700"
            >
              {BRAND_NAME}
            </motion.span>
          </Link>

          {/* Desktop Nav Links (Right - Only > lg) */}
          <div className="hidden lg:flex items-center justify-end gap-8 flex-1">
            {mainLinks.slice(2).map((link) => (
              <NavLinkItem key={link.path} link={link} currentPath={location.pathname} />
            ))}
            <div className="w-[1px] h-4 bg-white/10 mx-2" />
            <button className="text-[#faf9f6]/40 hover:text-[#faf9f6] transition-colors">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button className="relative p-2 group" aria-label="Shopping archive">
              <ShoppingBag size={20} strokeWidth={1.5} className="group-hover:text-[#c1af94] transition-colors" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#c1af94] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Right Utility (Only < lg) */}
          <div className="lg:hidden flex-1 flex justify-end">
            <button className="p-2" aria-label="Shopping archive">
              <ShoppingBag size={22} strokeWidth={1.5} className="text-[#faf9f6]" />
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Immersive Mobile & Tablet Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 w-full h-screen bg-[#0c0c0c] z-[150] flex flex-col p-10 md:p-24 overflow-hidden"
          >
            {/* Background Texture for Menu */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden flex items-center justify-center">
               <span className="text-[60vw] font-serif font-black tracking-tighter uppercase whitespace-nowrap leading-none text-white">
                 {BRAND_NAME}
               </span>
            </div>

            <div className="flex justify-between items-center mb-16 relative z-10">
               <span className="text-xl font-serif tracking-[0.4em] font-bold text-[#c1af94]">{BRAND_NAME}</span>
               <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-white hover:text-[#c1af94] transition-all p-3 border border-white/5 rounded-full"
                >
                 <X size={24} strokeWidth={1.5} />
               </button>
            </div>
            
            <nav className="flex flex-col space-y-6 md:space-y-10 relative z-10">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + idx * 0.05, duration: 0.5 }}
                >
                  <Link 
                    to={link.path}
                    className="text-5xl md:text-8xl font-serif tracking-tighter text-[#faf9f6] hover:text-[#c1af94] transition-all flex items-center group"
                  >
                    <span className="text-[10px] mr-8 text-[#c1af94]/40 font-bold tracking-widest font-sans self-start pt-4">0{idx + 1}</span>
                    {link.label}
                    <ArrowRight className="ml-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-6 transition-all" size={32} strokeWidth={1} />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5 relative z-10">
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-[#c1af94] font-black">Concierge</p>
                <p className="text-gray-400 text-lg md:text-xl font-light hover:text-white transition-colors">concierge@aurelian.com</p>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[10px] uppercase tracking-widest text-[#c1af94] font-black">Reflections</p>
                <div className="flex space-x-12 text-gray-500 uppercase tracking-widest text-[10px] font-black">
                  <span className="hover:text-white transition-colors cursor-pointer">Instagram</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Twitter</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Fixed: Using React.FC to properly handle React internal props like 'key'
const NavLinkItem: React.FC<{ link: any; currentPath: string }> = ({ link, currentPath }) => (
  <Link 
    to={link.path}
    className={`text-[9px] uppercase tracking-[0.4em] font-black transition-all relative py-1 group ${
      currentPath === link.path ? 'text-[#c1af94]' : 'text-[#faf9f6]/50 hover:text-[#faf9f6]'
    }`}
  >
    {link.label}
    <motion.span 
      className="absolute bottom-0 left-0 h-[1px] bg-[#c1af94]"
      initial={false}
      animate={{ width: currentPath === link.path ? '100%' : '0%' }}
      whileHover={{ width: '100%' }}
      transition={{ duration: 0.4 }}
    />
  </Link>
);

export default Navbar;
