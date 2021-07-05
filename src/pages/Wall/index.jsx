import { MessageBox } from "../../containers/MessageBox";
import Messages from "../../containers/Messages";
import styles from "./styles.module.css";

export const Wall = () => (
  <div className={styles.wallpage}>
    <MessageBox />
    <Messages />
  </div>
);
