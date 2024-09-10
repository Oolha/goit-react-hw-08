import { NavLink } from "react-router-dom";
const AuthNav = ({}) => {
  return (
    <div>
      <NavLink
        // className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        // className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
