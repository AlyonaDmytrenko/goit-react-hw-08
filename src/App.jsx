import { useDispatch } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { fetchDataThunk } from './redux/contactsOps';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Contacts from './pages/contacts';

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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<NotFound />} />
      </Route>
    </div>
  );
}

export default App;
