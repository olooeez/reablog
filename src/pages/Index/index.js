import styles from "./Index.module.css";
import posts from "../../json/posts.json";
import Post from "../../components/Post";

const Index = () => {
  return (
    <main>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Index;
