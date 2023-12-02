import styles from "./Post.module.css";

const Post = ({ post }) => {
  return (
    <div className={styles.post}>
      <img
        className={styles.banner}
        src={`/assets/posts/${post.id}/banner.png`}
        alt="Post Banner"
      />
      <h2 className={styles.title}>{post.title}</h2>
      <button className={styles.read}>Ler</button>
    </div>
  );
};

export default Post;
