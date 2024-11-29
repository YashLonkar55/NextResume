import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth0 } from "@auth0/auth0-react";



export const HeaderButtons = () => {

  const { loginWithRedirect, } = useAuth0();

  return (

    <div className="hidden md:flex gap-4">
      {/* <motion.button

        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 text-gray-600 hover:text-gray-900"
      >
        Sign In
      </motion.button> */}
        <motion.button
          onClick={() => loginWithRedirect()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full"
        >
          Sign In
        </motion.button>
    </div>
  );
};