import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchDataThunk } from '../redux/contacts/operations';
import ContactForm from '../components/ContactForm/ContactForm';
import NameFilter from '../components/Filter/NameFilter';
import ContactList from '../components/ContactList/ContactList';


const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);
  return (
    <div>
       <h1>Phonebook</h1>
      <ContactForm />
       <ContactList />
          
    </div>
  );
};

export default ContactsPage;
