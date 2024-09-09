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
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        <div>
          <h1 className="">Sign In</h1>
          <Form className={css.form}>
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
