import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import css from "./ContactsPage.module.css";

import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

import { useEffect } from "react";

const ContactsPage = ({}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch(() => {
        toast.error("Failed to load contacts. Please, try again later.");
      });
  }, [dispatch]);

  const onAddContact = (contact) => {
    dispatch(addContact(contact))
      .unwrap()
      .then(() => {
        toast.success("Contact added successfully");
      });
  };

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted successfully");
      });
  };

  return (
    <div className={css.container}>
      <ToastContainer />
      <div className={css.box}>
        <h1 className="title">Phonebook</h1>
        <ContactForm onAddContact={onAddContact} />
        <SearchBox />
      </div>

      <div>
        <ContactList onDeleteContact={onDeleteContact} />
        {isLoading && <Loader />}
        {error !== null && (
          <p style={{ color: "red" }}>{error}. Please, try again later.</p>
        )}
      </div>
    </div>
  );
};
export default ContactsPage;
