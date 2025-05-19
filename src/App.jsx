import ContactForm from './components/ContactForm/ContactForm';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegistrationPage';
import ContactPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/contacts" element={<ContactPage />} />
          {/* <Route path="/" element={<NotFound />} /> */}
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
