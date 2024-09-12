import { selectAuthUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
const UserMenu = ({}) => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  return (
    <div className={css.menu}>
      <p>Welcome, {user.name}!</p>
      <button onClick={() => dispatch(apiLogout())} className={css.btn}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
