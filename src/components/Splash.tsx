import { motion } from "motion/react";

interface SplashProps {
  onEnter: () => void;
}

export default function Splash({ onEnter }: SplashProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-6xl md:text-8xl font-serif font-bold tracking-tighter mb-12 text-white"
        >
          bmvogue<span className="text-gold">_</span>
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={onEnter}
          className="group relative px-12 py-5 glass rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]"
        >
          <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500"></div>
          <span className="relative text-sm uppercase tracking-[0.3em] font-medium text-white/80 group-hover:text-gold transition-colors duration-500">
            Enter The Atelier
          </span>
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.5em] text-white/30"
      >
        Luxury Fashion & Bespoke Tailoring
      </motion.div>
    </motion.div>
  );
}
