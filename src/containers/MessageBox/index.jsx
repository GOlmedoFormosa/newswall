import { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/messages/actionCreators";
import styles from "./styles.module.css";

const MessageBox = ({ createMessage }) => {
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    createMessage({
      message,
      author: 1,
    });
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

const mapDispatchToProps = (dispatch) => ({
  createMessage: ({ author, message, parentId = null }) =>
    dispatch(actions.createMessageRequest({ author, message, parentId })),
});

export default connect(null, mapDispatchToProps)(MessageBox);
