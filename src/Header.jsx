import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const setActiveClass = ({ isActive }) => {
  return clsx(isActive && 'text-red-500');
};

const Header = () => {
  return (
    <div>
      <h2>Auth</h2>
      <nav>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/contacts">
          Contacts
        </NavLink>
        <NavLink className={setActiveClass} to="/login">
          Login
        </NavLink>
        <NavLink className={setActiveClass} to="/register">
          Register
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
