import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

const RegistrationPage = ({}) => {
  const handleSubmit = (values) => {
    dispatch(apiRegister(values));
  };
  return (
    <div>
      <RegistrationForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default RegistrationPage;
