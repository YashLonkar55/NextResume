import PropTypes from 'prop-types';

export const NavLink = ({ href, label, isMobile = false }) => {
  return (
    <a 
      href={href}
      className="text-gray-600 hover:text-black block transition-colors duration-200"
      onClick={(e) => {
        if (isMobile) {
          // Close mobile menu when link is clicked
          const event = new CustomEvent('closeMobileMenu');
          window.dispatchEvent(event);
        }
      }}
    >
      {label}
    </a>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isMobile: PropTypes.bool
};