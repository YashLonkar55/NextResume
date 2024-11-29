import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Logo } from './Logo';
import { HeaderButtons } from './HeaderButtons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleCloseMenu = () => setIsMenuOpen(false);
    window.addEventListener('closeMobileMenu', handleCloseMenu);
    return () => window.removeEventListener('closeMobileMenu', handleCloseMenu);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="flex justify-between items-center rounded-full p-4 md:p-6 bg-white/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-50"
    >
      <Link to="/">
        <Logo />
      </Link>

      <button 
        className="md:hidden text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      <div className="hidden md:block">
        <Navigation />
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden"
        >
          <Navigation isMobile={true} />
        </motion.div>
      )}

      <HeaderButtons />
    </motion.header>
  );
};

export default Header;