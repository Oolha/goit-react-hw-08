import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";

import css from "./LoginForm.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const LoginForm = ({ handleSubmit, error }) => {
  const validate = Yup.object({
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
            <h1 className={css.title}>Sign In</h1>
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
              Sign In
            </button>
            {error && (
              <p className={css.errorText}>
                Incorrectly entered login or password!
              </p>
            )}
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default LoginForm;
