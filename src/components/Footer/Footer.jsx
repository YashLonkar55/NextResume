import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: '#', label: 'GitHub' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
    { icon: <FaDiscord />, url: '#', label: 'Discord' }
  ];

  const footerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerAnimation}
      className="bg-gray-900 text-white py-12 md:py-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Manila.</h3>
            <p className="text-gray-400">
              Real-time performance management for modern teams.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="text-gray-400 hover:text-white transition-colors text-xl"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Manila. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;