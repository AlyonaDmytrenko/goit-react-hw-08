import { useSelector } from 'react-redux';
import LoginForm from '../LoginForm';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
