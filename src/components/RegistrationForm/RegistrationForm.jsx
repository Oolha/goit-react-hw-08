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
    <div className={css.pageContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        <div>
          <Form className={css.form}>
            <p className={css.title}>Create An Account</p>
            <label className={css.label}>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className={css.input}
              />
              <ErrorMessage
                className={css.errorText}
                name="name"
                component="span"
              />
            </label>
            <label className={css.label}>
              <Field
                type="text"
                name="email"
                placeholder="Email"
                className={css.input}
              />
              <ErrorMessage
                className={css.errorText}
                name="email"
                component="span"
              />
            </label>
            <label className={css.label}>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={css.input}
              />
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
                Invalid email or password! {error}
              </p>
            )}
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
