import { useDispatch } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { fetchDataThunk } from './redux/contactsOps';
import { Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        {/* <Route path="/" element={<NotFound />} /> */}
      </Route>
    </div>
  );
}

export default App;
