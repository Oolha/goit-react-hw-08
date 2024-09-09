import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";

import css from "./RegistrationForm.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = ({ handleSubmit, error }) => {
  const validate = Yup.object({
    name: Yup.string().required("Name is required!"),
    email: Yup.string()
      .email("Email is invalid!")
      .required("Email is required!"),
    password: Yup.string()
      .min(8, "Password must be minimum 8 digits!")
      .required("Password is required!"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        <div>
          <h1 className="">Sign Up</h1>
          <Form className={css.form}>
            <label className={css.label}>
              <span>Name: </span>
              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage
                className={css.errorText}
                name="name"
                component="span"
              />
            </label>
            <label className={css.label}>
              <span>Email: </span>
              <Field type="text" name="email" placeholder="email" />
              <ErrorMessage
                className={css.errorText}
                name="email"
                component="span"
              />
            </label>
            <label className={css.label}>
              <span>Password: </span>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage
                className={css.errorText}
                name="password"
                component="span"
              />
            </label>
            <button className={css.submitBtn} type="submit">
              Sign Up
            </button>
            {error && (
              <p className={css.errorText}>
                Oops, some error occured... {error}
              </p>
            )}
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
