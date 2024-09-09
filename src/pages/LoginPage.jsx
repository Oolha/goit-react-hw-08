import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../components/LoginForm/LoginForm";
import { apiLogin } from "../redux/auth/operations";
import { selectAuthError } from "../redux/auth/selectors";

const LoginPage = ({}) => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const handleSubmit = (values) => {
    dispatch(apiLogin(values));
  };
  return (
    <div>
      <LoginForm handleSubmit={handleSubmit} error={error} />
    </div>
  );
};

export default LoginPage;
