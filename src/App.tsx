import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Bespoke from "./components/Bespoke";
import Footer from "./components/Footer";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  const galleryImages = [1, 2, 3, 4, 5, 6, 7, 8].map(i => `https://picsum.photos/seed/fashion-luxury-${i}/800/1200`);

  return (
    <main className="min-h-screen bg-charcoal relative">
      <div className="noise"></div>
      
      <AnimatePresence>
        {showSplash && (
          <Splash onEnter={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <div className="relative">
          <Navbar />
          <Hero />
          <Categories />
          <Bespoke />
          
          {/* Gallery Section - Irisi Style */}
          <section id="gallery" className="py-40 px-6 bg-charcoal">
            <div className="max-w-[1440px] mx-auto">
              <div className="text-center mb-32">
                <span className="text-[10px] uppercase tracking-[0.6em] text-gold mb-6 block">Visual Narrative</span>
                <h2 className="text-5xl md:text-8xl font-serif font-light tracking-tighter">
                  The <span className="italic">Atelier</span> Gallery
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {galleryImages.map((src, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 1 }}
                    onClick={() => setSelectedImage(src)}
                    className={`overflow-hidden rounded-sm group cursor-pointer ${
                      (i + 1) % 3 === 0 ? "md:row-span-2" : ""
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Gallery ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 grayscale group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <Footer />

          {/* Lightbox Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-sm"
                onClick={() => setSelectedImage(null)}
              >
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-8 right-8 p-4 text-white/50 hover:text-gold transition-colors z-[210]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                >
                  <X size={32} strokeWidth={1} />
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="relative max-w-full max-h-full overflow-hidden rounded-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedImage}
                    alt="Gallery Preview"
                    className="max-w-full max-h-[85vh] object-contain shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="mt-6 text-center">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-gold">bmvogue_ Atelier Archive</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </main>
  );
}
