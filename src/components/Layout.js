import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-sand/80 backdrop-blur-md py-4 border-b border-stone/5' : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center text-stone">
          <Link to="/" className="z-50 relative group">
            <h1 className="font-serif text-2xl tracking-widest font-bold">GRAMEAL</h1>
            <span className="text-[10px] uppercase tracking-[0.4em] block text-clay group-hover:translate-x-1 transition-transform">Thath</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-12 text-xs font-bold uppercase tracking-[0.2em]">
            <Link to="/shop" className="hover:text-clay transition-colors">Collection</Link>
            <Link to="/story" className="hover:text-clay transition-colors">Story</Link>
            <Link to="/shop" className="hover:text-clay transition-colors flex items-center gap-2">
              Cart (0) <ShoppingBag size={14} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 relative">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-sand z-40 flex flex-col justify-center items-center gap-8"
          >
            {['Home', 'Shop', 'Story'].map((item) => (
              <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-4xl font-serif text-stone hover:text-clay italic">
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => (
  <footer className="bg-stone text-sand py-20 border-t border-white/10 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-end">
      <div>
        <h2 className="text-6xl md:text-8xl font-serif opacity-20 mb-6">Grameal</h2>
        <div className="flex gap-8 text-xs uppercase tracking-widest opacity-60">
          <Link to="/shop">Shop</Link>
          <Link to="/story">About</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
      <div className="md:text-right">
        <p className="font-serif italic text-2xl mb-4 text-clay">"Return to your roots."</p>
        <p className="text-xs opacity-40 uppercase tracking-widest">&copy; 2024 Grameal Thath. Made in India.</p>
      </div>
    </div>
  </footer>
);

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-sand text-stone selection:bg-clay selection:text-white relative">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.4] bg-grain z-0 mix-blend-multiply"></div>
      
      <Navbar />
      <main className="relative z-10 pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;