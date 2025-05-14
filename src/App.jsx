import { useDispatch } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { fetchDataThunk } from './redux/contactsOps';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegistrationPage';
import ContactPage from './pages/ContactsPage';
import Header from './Header';
import HomePage from './pages/HomePage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <Header />
      <ContactForm />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        {/* <Route path="/" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
