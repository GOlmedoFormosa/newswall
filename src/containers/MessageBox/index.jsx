import { useState } from "react";
import styles from "./styles.module.css";

export const MessageBox = () => {
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    setMessage("");
  };

  return (
    <div className={styles.messageBox}>
      <form>
        <div className={styles.messageBox__input}>
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Leave new message..."
            type="text"
          />
        </div>
        <button
          onClick={sendMessage}
          type="submit"
          className={styles.messageBox__new}
        >
          Send
        </button>
      </form>
    </div>
  );
};
