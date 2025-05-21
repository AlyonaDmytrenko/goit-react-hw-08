import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import { NavLink } from "react-router-dom";


const setActiveClass = ({ isActive }) => clsx(isActive && 'text-red-500');

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav style={{ display: 'flex', gap: '10px' }}>
      <NavLink to="/" className={setActiveClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={setActiveClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;