import { useDispatch } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { fetchDataThunk } from './redux/contactsOps';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegistrationPage';
import ContactPage from './pages/ContactsPage';

import HomePage from './pages/HomePage';
import Layout from './Layout';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);
  return (
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
