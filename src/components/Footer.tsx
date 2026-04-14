import { Instagram, Twitter, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <a href="/" className="text-3xl font-serif font-bold tracking-tighter text-gold mb-8 block">
              bmvogue_
            </a>
            <p className="max-w-sm text-white/40 text-sm leading-relaxed mb-8">
              Redefining luxury through the lens of African heritage and contemporary design. Our atelier is dedicated to the art of bespoke tailoring and high-end ready-to-wear.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-white/80 mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/40 hover:text-gold text-sm transition-colors">Home</a></li>
              <li><a href="#shop" className="text-white/40 hover:text-gold text-sm transition-colors">Shop</a></li>
              <li><a href="#bespoke" className="text-white/40 hover:text-gold text-sm transition-colors">Bespoke</a></li>
              <li><a href="#gallery" className="text-white/40 hover:text-gold text-sm transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-white/80 mb-8">Contact</h4>
            <ul className="space-y-4">
              <li className="text-white/40 text-sm">ibadan, Nigeria</li>
              <li className="text-white/40 text-sm">atelier@bmvogue.com</li>
              <li className="text-white/40 text-sm">+234 806 970 2926</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <p className="text-[10px] uppercase tracking-widest text-white/20">
            © 2026 bmvogue_ Atelier. All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/40 hover:text-gold transition-colors"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-all duration-500">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
