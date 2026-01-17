import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { products } from '../lib/data';

// Animation variants
const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const stagger = { visible: { transition: { staggerChildren: 0.2 } } };

const Home = () => {
  return (
    <div className="overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6">
        <motion.div 
          initial="hidden" animate="visible" variants={stagger}
          className="text-center max-w-4xl mx-auto z-10"
        >
          <motion.p variants={fadeInUp} className="text-clay text-xs font-bold uppercase tracking-[0.4em] mb-6">
            Est. 2024 • India
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-serif leading-none mb-8 text-stone">
            Culture in <span className="italic font-light text-clay">Every</span> <br/> Detail
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-stone/70 mb-12 font-light max-w-lg mx-auto">
            Rediscovering Indian craftsmanship for the modern home.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link to="/shop" className="inline-flex items-center gap-3 bg-stone text-sand px-10 py-4 uppercase tracking-widest text-xs hover:bg-clay transition-colors duration-300">
              Explore Collection <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-clay/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* --- FEATURED SHOWCASE --- */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#e5e2dd] mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View
                  </div>
                </div>
                <h3 className="font-serif text-xl mb-1 group-hover:text-clay transition-colors">{product.name}</h3>
                <p className="text-xs text-stone/50 uppercase tracking-wider">{product.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATEMENT SECTION --- */}
      <section className="py-32 bg-stone text-sand relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <Sparkles className="mb-8 text-clay" size={32} strokeWidth={1} />
          <h2 className="text-3xl md:text-5xl font-serif italic leading-snug max-w-2xl mb-12">
            "We curate the Indian cultural experience."
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl border-t border-white/10 pt-12">
            <div>
              <h4 className="text-clay uppercase tracking-widest text-xs font-bold mb-2">Purity</h4>
              <p className="text-sm opacity-60 font-light">100% natural materials sourced from origin.</p>
            </div>
            <div>
              <h4 className="text-clay uppercase tracking-widest text-xs font-bold mb-2">Heritage</h4>
              <p className="text-sm opacity-60 font-light">Crafted by 4th generation artisans.</p>
            </div>
            <div>
              <h4 className="text-clay uppercase tracking-widest text-xs font-bold mb-2">Impact</h4>
              <p className="text-sm opacity-60 font-light">Supporting rural Indian economies.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;