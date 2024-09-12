import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectAuthIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import { Layout } from "./components/Loyaut/Loyaut";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // const addContactForm = (contact) => {
  //   dispatch(addContact(contact));
  // };

  // const DeleteContact = (contactId) => {
  //   dispatch(deleteContact(contactId));
  // };

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
