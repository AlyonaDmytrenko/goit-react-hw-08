import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const setActiveClass = ({ isActive }) => clsx(isActive && 'text-red-500');

const AuthNav = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <NavLink to="/login" className={setActiveClass}>
        Login
      </NavLink>
      <NavLink to="/register" className={setActiveClass}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
