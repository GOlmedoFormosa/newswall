import { ReactComponent as ReplyIcon } from "../../../assets/images/icons/reply.svg";
import styles from "./styles.module.css";

export const Message = ({ id, message, author }) => (
  <div className={styles.message}>
    <div className={styles.message__number}>#{id}</div>
    <div className={styles.message__body}>
      <div>
        <div className={styles.message__headerText}>
          <h3>Author: {`${author}`}</h3>
        </div>
        <div className={styles.message__description}>
          <p>{message}</p>
        </div>
      </div>
      <div className={styles.message__footer}>
        <p>1 Reply</p>
        <ReplyIcon />
      </div>
    </div>
  </div>
);
