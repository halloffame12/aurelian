
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';
import { BRAND_NAME, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0c0c] border-t border-white/5 pt-32 pb-16">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
          <div className="md:col-span-2 space-y-12">
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter leading-none">{BRAND_NAME}</h2>
            <p className="text-gray-500 max-w-md text-lg leading-relaxed font-light">
              A commitment to slow fashion, enduring quality, and the pursuit of aesthetic perfection. Every garment is a response to the geometry of the human form.
            </p>
            <div className="flex space-x-12">
              <Instagram size={24} className="text-gray-600 hover:text-[#c1af94] cursor-pointer transition-all" />
              <Twitter size={24} className="text-gray-600 hover:text-[#c1af94] cursor-pointer transition-all" />
              <Facebook size={24} className="text-gray-600 hover:text-[#c1af94] cursor-pointer transition-all" />
            </div>
          </div>
          
          <div className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#faf9f6] font-black">Archive Navigation</h4>
            <ul className="space-y-6">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-500 hover:text-[#c1af94] transition-colors text-sm font-bold tracking-widest uppercase">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#faf9f6] font-black">Global Inquiries</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-center group cursor-pointer text-gray-500 hover:text-white transition-colors">
                <span className="font-bold tracking-widest uppercase">Press Relations</span>
                <ArrowUpRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-all text-[#c1af94]" />
              </li>
              <li className="flex items-center group cursor-pointer text-gray-500 hover:text-white transition-colors">
                <span className="font-bold tracking-widest uppercase">Artisanal Careers</span>
                <ArrowUpRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-all text-[#c1af94]" />
              </li>
              <li className="flex items-center group cursor-pointer text-gray-500 hover:text-white transition-colors">
                <span className="font-bold tracking-widest uppercase">Private Showings</span>
                <ArrowUpRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-all text-[#c1af94]" />
              </li>
              <li className="text-[#c1af94] font-black tracking-widest uppercase pt-4">concierge@aurelian.com</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-16 text-[9px] uppercase tracking-[0.4em] text-gray-600 font-bold">
          <p>© 2024 {BRAND_NAME} HAUTE COUTURE. CRAFTED IN MILANO.</p>
          <div className="flex space-x-12 mt-8 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Lexicon</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
