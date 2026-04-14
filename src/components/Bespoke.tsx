import { motion } from "motion/react";
import { Scissors, Ruler, Calendar } from "lucide-react";

export default function Bespoke() {
  const steps = [
    {
      icon: <Ruler size={20} strokeWidth={1} />,
      title: "The Measurement",
      desc: "A meticulous process capturing over 30 unique anatomical points."
    },
    {
      icon: <Scissors size={20} strokeWidth={1} />,
      title: "The Craft",
      desc: "Hand-drafted patterns and artisanal construction from the finest textiles."
    },
    {
      icon: <Calendar size={20} strokeWidth={1} />,
      title: "The Fitting",
      desc: "Iterative refinements ensuring a silhouette that is unmistakably yours."
    }
  ];

  return (
    <section id="bespoke" className="py-40 px-6 relative overflow-hidden bg-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5"
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-gold mb-8 block">The Atelier</span>
            <h2 className="text-5xl md:text-8xl font-serif font-light mb-12 leading-[0.9] tracking-tighter">
              Bespoke <br /> <span className="italic">Tailoring</span>
            </h2>
            <p className="text-white/40 text-sm mb-16 leading-relaxed tracking-wide uppercase max-w-md">
              Where your vision meets our heritage. A journey of collaboration resulting in a garment that transcends fashion.
            </p>

            <div className="space-y-12 mb-16">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-8"
                >
                  <div className="text-gold shrink-0 mt-1">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-2 tracking-wide">{step.title}</h4>
                    <p className="text-white/30 text-[10px] uppercase tracking-widest leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://instagram.com/bmvogue_"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-5 overflow-hidden rounded-full transition-all duration-500 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gold group-hover:bg-white transition-colors duration-500"></div>
                <span className="relative text-[10px] uppercase tracking-[0.3em] text-charcoal font-bold">
                  Book via Instagram
                </span>
              </a>
              
              <a 
                href="mailto:atelier@bmvogue.com"
                className="group relative px-10 py-5 overflow-hidden rounded-full border border-gold/30 transition-all duration-500 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-transparent group-hover:bg-white/5 transition-colors duration-500"></div>
                <span className="relative text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                  Book via Email
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="lg:col-span-6 lg:col-start-7 relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
                alt="Bespoke Tailoring"
                className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-[2000ms]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-12 -left-12 glass-dark p-10 rounded-sm hidden md:block">
              <span className="text-5xl font-serif font-light text-gold block mb-4">15+</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 leading-relaxed block">Years of <br /> Excellence</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
