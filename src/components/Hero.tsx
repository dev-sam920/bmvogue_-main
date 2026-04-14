import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-charcoal">
      <div className="absolute inset-0 flex flex-col md:flex-row">
        {/* Left Pane: Bridals & Luxury */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative flex-1 group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/5"
        >
          <img
            src="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=1920&auto=format&fit=crop"
            alt="Bridals & Luxury"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="text-xs md:text-sm uppercase tracking-[0.5em] text-gold font-medium mb-6 block">The Atelier</span>
              <h2 className="text-5xl md:text-8xl font-serif font-light mb-10 leading-[0.9] tracking-tighter">
                Bridals & <br /> <span className="italic">Luxury</span>
              </h2>
              <div className="flex justify-center">
                <button className="group/btn relative px-10 py-4 overflow-hidden rounded-full transition-all duration-500">
                  <div className="absolute inset-0 glass group-hover/btn:bg-white transition-colors duration-500"></div>
                  <span className="relative text-[10px] uppercase tracking-[0.3em] text-white group-hover/btn:text-charcoal transition-colors duration-500 flex items-center gap-3">
                    Discover <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Pane: Unisex Ready-to-Wear */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="relative flex-1 group cursor-pointer overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1920&auto=format&fit=crop"
            alt="Unisex Ready-to-Wear"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <span className="text-xs md:text-sm uppercase tracking-[0.5em] text-gold font-medium mb-6 block">New Season</span>
              <h2 className="text-5xl md:text-8xl font-serif font-light mb-10 leading-[0.9] tracking-tighter">
                Ready to <br /> <span className="italic">Wear</span>
              </h2>
              <div className="flex justify-center">
                <button className="group/btn relative px-10 py-4 overflow-hidden rounded-full transition-all duration-500">
                  <div className="absolute inset-0 glass group-hover/btn:bg-white transition-colors duration-500"></div>
                  <span className="relative text-[10px] uppercase tracking-[0.3em] text-white group-hover/btn:text-charcoal transition-colors duration-500 flex items-center gap-3">
                    Shop Now <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
