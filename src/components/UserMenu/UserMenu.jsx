import { selectAuthUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
const UserMenu = ({}) => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button>Log out</button>
    </div>
  );
};

export default UserMenu;
