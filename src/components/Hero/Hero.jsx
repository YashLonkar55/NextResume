import { motion } from 'framer-motion';

const Hero = () => {
  const textVariants = {
    hover: {
      scale: 1.05,
      textShadow: "0 0 8px rgb(129 140 248 / 0.5)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <section className="text-center py-16 md:py-32 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 shadow-md text-sm md:text-base"
      >
        <motion.span 
          className="mr-2"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          🚀
        </motion.span>
        Try Manila Remote
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-8xl font-bold mb-6 md:mb-8 leading-tight"
      >
        <motion.span
          variants={textVariants}
          whileHover="hover"
          className="inline-block"
        >
          Transform 
        </motion.span>
        <br />
        <motion.span
          variants={textVariants}
          whileHover="hover"
          className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
        >
          Your Resume
        </motion.span>{' '}
        <br></br>
        <motion.span
          variants={textVariants}
          whileHover="hover"
          className="inline-block"
        >
          Ace Every Job Application!
        </motion.span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-12"
      >
        Stand out from the crowd with NextResume. Optimize your resume, fill skill gaps, and increase your chances of landing the job.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col md:flex-row justify-center gap-4 md:gap-6"
      >
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto relative overflow-hidden group"
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <span className="relative">Get Started</span>
        </motion.button>
        {/* <motion.button
          whileHover={{ 
            scale: 1.05,
            borderColor: "#6366F1",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-300 rounded-full font-semibold transition-all duration-300 w-full md:w-auto bg-white/50 backdrop-blur-sm"
        >
          Get Access
        </motion.button> */}
      </motion.div>
    </section>
  );
};

export default Hero;