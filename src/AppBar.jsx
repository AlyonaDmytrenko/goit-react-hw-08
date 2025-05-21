import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/auth/selectors';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import Navigation from './Navigation';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
