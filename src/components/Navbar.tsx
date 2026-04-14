import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Menu, X, Instagram, Twitter, Facebook } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Shop", href: "#shop" },
    { name: "Bespoke", href: "#bespoke" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled ? "py-4" : "py-8"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className={`relative flex items-center justify-between px-8 py-4 rounded-full transition-all duration-700 ${
            isScrolled ? "glass-dark shadow-2xl shadow-black/40" : "bg-transparent"
          }`}>
            {/* Left: Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.4em] text-white/50 hover:text-gold transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Center: Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <a href="/" className="text-2xl font-serif font-bold tracking-[-0.05em] text-white hover:text-gold transition-colors duration-500">
                bmvogue<span className="text-gold">_</span>
              </a>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-8">
              <div className="hidden md:flex items-center gap-10">
                {navLinks.slice(2).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[10px] uppercase tracking-[0.4em] text-white/50 hover:text-gold transition-all duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <button className="relative p-2 text-white/50 hover:text-gold transition-colors">
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-gold rounded-full"></span>
              </button>
              
              <button 
                className="md:hidden p-2 text-white/50 hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[400px] z-[70] glass-dark border-l border-white/10 p-12 flex flex-col md:hidden"
            >
              <div className="flex justify-between items-center mb-20">
                <span className="text-xl font-serif font-bold tracking-tighter">bmvogue_</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white/50 hover:text-gold transition-colors"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    key={link.name}
                    href={link.href}
                    className="group flex items-baseline gap-6 py-4 border-b border-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-medium">0{index + 1}</span>
                    <span className="text-5xl md:text-6xl font-serif font-light tracking-tighter group-hover:text-gold transition-colors duration-500">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-12 border-t border-white/5">
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  href="https://instagram.com/bmvogue_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-gold text-charcoal font-bold uppercase tracking-[0.3em] text-[10px] rounded-full mb-4 flex items-center justify-center"
                >
                  Book via Instagram
                </motion.a>
                
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  href="mailto:atelier@bmvogue.com"
                  className="w-full py-5 border border-gold/30 text-gold font-bold uppercase tracking-[0.3em] text-[10px] rounded-full mb-12 flex items-center justify-center"
                >
                  Book via Email
                </motion.a>

                <div className="flex gap-6">
                  <Instagram size={18} className="text-white/30 hover:text-gold transition-colors cursor-pointer" />
                  <Twitter size={18} className="text-white/30 hover:text-gold transition-colors cursor-pointer" />
                  <Facebook size={18} className="text-white/30 hover:text-gold transition-colors cursor-pointer" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
