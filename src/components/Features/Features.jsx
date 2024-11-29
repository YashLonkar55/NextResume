import FeatureCard from './FeatureCard';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: 'Task Creation and Editing',
      description: 'Users can easily add, edit, and delete tasks, allowing for flexible task management.',
      icon: '📝'
    },
    {
      title: 'Progress Tracking',
      description: 'Users can track the progress of tasks, indicating whether they are incomplete, in progress, or complete.',
      icon: '📊'
    },
    {
      title: 'Task Dependencies',
      description: 'Users can establish relationships between tasks, where one task must be completed before another can begin.',
      icon: '🔄'
    },
    {
      title: 'Data Export/Integration',
      description: 'Users may have the option to export task data or integrate the dashboard with other productivity tools.',
      icon: '📤'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50 px-4">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
        >
          Get your <span className="text-purple-600">moneys</span> worth
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;