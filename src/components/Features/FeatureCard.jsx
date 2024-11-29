import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-12 h-12 mb-6 text-4xl">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
};

export default FeatureCard;