import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
      />
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-indigo-300/20 to-purple-300/20 blur-3xl"
          initial={{
            width: Math.random() * 400 + 200,
            height: Math.random() * 400 + 200,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;