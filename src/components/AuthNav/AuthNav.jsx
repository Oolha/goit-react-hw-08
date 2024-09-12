import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const AuthNav = ({}) => {
  return (
    <div className={css.authNav}>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/login"
      >
        Sign in
      </NavLink>
    </div>
  );
};

export default AuthNav;
