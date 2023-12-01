import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

const Menu = () => {
  return (
    <header>
      <nav className={styles.navegation}>
        <MenuLink to="/">Início</MenuLink>
        <MenuLink to="/about">Sobre mim</MenuLink>
      </nav>
    </header>
  );
};

export default Menu;
