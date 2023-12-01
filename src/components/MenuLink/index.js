import styles from "./MenuLink.module.css";
import { NavLink } from "react-router-dom";

const MenuLink = ({ children, to }) => {
  return (
    <NavLink
      className={({ isActive }) => `
        ${styles.link}
        ${isActive ? styles.current : ""}
      `}
      to={to}
      end
    >
      {children}
    </NavLink>
  );
};

export default MenuLink;
