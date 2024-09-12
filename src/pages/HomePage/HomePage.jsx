import css from "./HomePage.module.css";
const HomePage = ({}) => {
  return (
    <div className={css.box}>
      <h2>Contact Management App</h2>
      <p className={css.text}>
        A user-friendly application for managing contacts. The app allows users
        to add new contacts and remove existing ones. With a clean interface,
        users can easily keep their contact list organized and up-to-date.
        Features include form validation for adding contacts, a searchable
        contact list, and visual feedback on successful actions or errors.
      </p>
    </div>
  );
};

export default HomePage;
