import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
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

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-sand/80 backdrop-blur-md py-2 border-b border-stone/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center text-stone">
          
          {/* LOGO SECTION */}
          <Link to="/" className="z-50 relative group block">
            {/* PLACEHOLDER FOR LOGO: Replace 'src' or div below with your actual logo */}
            <div className="w-20 h-20 rounded-full overflow-hidden border border-stone/10 bg-white flex items-center justify-center">
                <img 
                  src={process.env.PUBLIC_URL + "/Images/logo.png"} 
                  alt="Logo" 
                  className="w-full h-full object-cover" 
                />
            </div>
          </Link>

          {/* Desktop Nav - Contact removed from here */}
          <div className="hidden md:flex gap-12 text-xs font-bold uppercase tracking-[0.2em] items-center">
            <Link to="/" className="hover:text-clay transition-colors">Home</Link>
            <Link to="/shop" className="hover:text-clay transition-colors">Collection</Link>
            <Link to="/story" className="hover:text-clay transition-colors">Story</Link>
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
    <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
      
      {/* LEFT SIDE: Socials & Contact */}
      <div className="flex flex-col gap-8">
        {/* Social Icons */}
        <div className="flex gap-6">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-clay transition-colors duration-300">
            <Instagram size={28} strokeWidth={1.5} />
          </a>
          
        </div>

        {/* Contact Us Text Area */}
        <div>
          <h4 className="text-clay text-xs uppercase tracking-widest font-bold mb-2">Contact Us</h4>
          <a href="mailto:hello@yoursite.com" className="text-lg font-serif italic opacity-80 hover:opacity-100 hover:text-white transition-opacity">
            Grameal@zohomail.in
          </a>
          <p className="text-xs opacity-50 font-light mt-1"></p>
        </div>
      </div>

      {/* RIGHT SIDE: Quote & Copyright */}
      <div className="text-left md:text-right">
        
        <p className="text-xs opacity-40 uppercase tracking-widest">&copy; 2024. Made in India.</p>
      </div>
    </div>
  </footer>
);

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-sand text-stone selection:bg-clay selection:text-white relative">
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