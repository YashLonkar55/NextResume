import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen pt-20 px-4 flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              placeholder="Create a password"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold"
            type="submit"
          >
            Register
          </motion.button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="text-indigo-600 hover:text-indigo-800 font-semibold">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;