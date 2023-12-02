import coloredCircle from "../../assets/colored_circle.png";
import myPhoto from "../../assets/my_photo.png";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.presentation}>
        <h1 className={styles.title}>Olá, Mundo!</h1>
        <p className={styles.paragraph}>
          Boas vindas ao meu espaço pessoal! Eu sou Luiz Felipe, desenvolvedor
          Front-end. Aqui compartilho vários conhecimentos, espero que aprenda
          algo novo :)
        </p>
      </div>
      <div className={styles.images}>
        <img
          className={styles.circle}
          src={coloredCircle}
          aria-hidden={true}
          alt="Colored Circle"
        />
        <img className={styles.photo} src={myPhoto} alt="Luiz Felipe" />
      </div>
    </div>
  );
};

export default Banner;
