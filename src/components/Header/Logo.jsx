import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="text-xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
    >
      NextResume.
    </motion.div>
  );
};