import { selectAuthUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
const UserMenu = ({}) => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button onClick={() => dispatch(apiLogout())}>Log out</button>
    </div>
  );
};

export default UserMenu;
