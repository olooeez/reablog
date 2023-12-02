import styles from "./PostModel.module.css";

const PostModel = ({ children, banner, title }) => {
  return (
    <article className={styles.postModelContainer}>
      <div
        className={styles.postModelBanner}
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <h2 className={styles.postModelTitle}>{title}</h2>
      <div className={styles.postContentContainer}>{children}</div>
    </article>
  );
};

export default PostModel;
