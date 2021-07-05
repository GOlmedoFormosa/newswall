import { useState } from "react";
import styles from "./styles.module.css";

export const NewsBox = () => {
  const [news, setNews] = useState("");
  const postNews = (e) => {
    e.preventDefault();
    setNews("");
  };

  return (
    <div className={styles.newsBox}>
      <form>
        <div className={styles.newsBox__input}>
          <input
            onChange={(e) => setNews(e.target.value)}
            value={news}
            placeholder="What's new?"
            type="text"
          />
        </div>
        <button
          onClick={postNews}
          type="submit"
          className={styles.newsBox__postNews}
        >
          Post News
        </button>
      </form>
    </div>
  );
};
