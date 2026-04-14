import { motion } from "motion/react";
import GlassCard from "./GlassCard";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Unisex Ready-to-Wear",
    description: "Contemporary silhouettes for the modern individual.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    size: "large"
  },
  {
    title: "Bridals & Luxury",
    description: "Timeless elegance for your most precious moments.",
    image: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=800&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Agbada & Owanbe",
    description: "Traditional heritage reimagined with luxury finishes.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Vintage & Pants",
    description: "Curated classics and precision-tailored trousers.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    size: "large"
  }
];

export default function Categories() {
  return (
    <section id="shop" className="py-40 px-6 bg-charcoal relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.6em] text-gold mb-6 block">Collections</span>
            <h2 className="text-5xl md:text-8xl font-serif font-light leading-[0.9] tracking-tighter">
              The <span className="italic">Curated</span> <br /> Selection
            </h2>
          </div>
          <p className="max-w-sm text-white/40 text-xs leading-relaxed tracking-wide uppercase">
            A dialogue between tradition and modernity. Each collection is a chapter in our story of sartorial excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-x-12">
          {/* Category 1: Large Left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-7"
          >
            <div className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden rounded-sm mb-8">
                <img
                  src={categories[0].image}
                  alt={categories[0].title}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 grayscale-[0.3] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-2 block">01</span>
                  <h3 className="text-3xl font-serif mb-2">{categories[0].title}</h3>
                  <p className="text-white/40 text-xs uppercase tracking-widest">{categories[0].description}</p>
                </div>
                <ArrowUpRight size={20} className="text-white/20 group-hover:text-gold transition-colors" />
              </div>
            </div>
          </motion.div>

          {/* Category 2: Small Right, Offset */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-4 md:col-start-9 md:mt-40"
          >
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-8">
                <img
                  src={categories[1].image}
                  alt={categories[1].title}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 grayscale-[0.3] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-2 block">02</span>
                <h3 className="text-3xl font-serif mb-2">{categories[1].title}</h3>
                <p className="text-white/40 text-xs uppercase tracking-widest">{categories[1].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Category 3: Small Left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-4 md:mt-[-100px]"
          >
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-8">
                <img
                  src={categories[2].image}
                  alt={categories[2].title}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 grayscale-[0.3] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-2 block">03</span>
                <h3 className="text-3xl font-serif mb-2">{categories[2].title}</h3>
                <p className="text-white/40 text-xs uppercase tracking-widest">{categories[2].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Category 4: Large Right */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-7 md:col-start-6"
          >
            <div className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden rounded-sm mb-8">
                <img
                  src={categories[3].image}
                  alt={categories[3].title}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 grayscale-[0.3] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-2 block">04</span>
                  <h3 className="text-3xl font-serif mb-2">{categories[3].title}</h3>
                  <p className="text-white/40 text-xs uppercase tracking-widest">{categories[3].description}</p>
                </div>
                <ArrowUpRight size={20} className="text-white/20 group-hover:text-gold transition-colors" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
