import { useDispatch, useSelector } from "react-redux";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { apiRegister } from "../redux/auth/operations";
import { selectAuthError } from "../redux/auth/selectors";
import Background from "../assets/images/Background/Background";

const RegistrationPage = ({}) => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const handleSubmit = (values) => {
    dispatch(apiRegister(values));
  };
  return (
    <div>
      <Background />
      <RegistrationForm handleSubmit={handleSubmit} error={error} />
    </div>
  );
};

export default RegistrationPage;
