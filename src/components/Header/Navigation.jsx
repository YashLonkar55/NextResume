import PropTypes from 'prop-types';
import { NavLink } from './NavLink';
import { useNavItems } from '../../hooks/useNavItems';

const Navigation = ({ isMobile = false }) => {
  const navItems = useNavItems();
  
  return (
    <nav className={isMobile ? 'p-4' : ''}>
      <ul className={`${isMobile ? 'flex flex-col space-y-4' : 'flex gap-8'}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink 
              href={item.href}
              label={item.label}
              isMobile={isMobile}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  isMobile: PropTypes.bool
};

export default Navigation;