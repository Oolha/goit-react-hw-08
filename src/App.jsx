import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

import { Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
import clsx from "clsx";
import "./App.css";
import css from "./App.module.css";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { fetchContacts, deleteContact, addContact } from "./redux/contactsOps";
import { selectAuthIsLoggedIn, selectAuthUser } from "./redux/auth/selectors";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));

function App() {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const user = useSelector(selectAuthUser);
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
      <header>
        <nav className={css.nav}>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/"
          >
            Home
          </NavLink>
          {isLoggedIn ? (
            <NavLink
              className={({ isActive }) =>
                clsx(css.link, isActive && css.active)
              }
              to="/contacts"
            >
              Contacts
            </NavLink>
          ) : (
            <></>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Suspense>
      </main>
      <footer></footer>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={addContactForm} />
      <SearchBox />
      <ContactList onDeleteContact={DeleteContact} />
    </div>
  );
}

export default App;
