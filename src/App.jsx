import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/selectors";
import { useEffect } from "react";
import { refreshThunk } from "./redux/auth/operations";
import { Route, Routes } from "react-router-dom";
import Layout from './Layout';
import HomePage from './pages/HomePage';
import ContactsForm from './components/ContactForm/ContactForm';
import PrivateRoute from './PrivateRoute';
import ContactsPage from './pages/ContactsPage';
import RestrictedRoute from './RestrictedRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegistrationPage';





function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
 

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="/contacts"
          element={
                <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
                  }
        />
          
      </Route>
       
      {/* Публічні маршрути */}
      <Route
        path="/login"
        element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />}
      />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
