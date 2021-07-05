import { NewsBox } from "../../containers/NewsBox";
import styles from "./styles.module.css";

export const Wall = () => (
  <div className={styles.wallpage}>
    <NewsBox />
    Wall
  </div>
);
