import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { fetchContacts, deleteContact, addContact } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContactForm = (contact) => {
    dispatch(addContact(contact));
  };

  const DeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={addContactForm} />
      <SearchBox />
      <ContactList onDeleteContact={DeleteContact} />
    </div>
  );
}

export default App;
