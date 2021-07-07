import { useState, useCallback } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../redux/messages/actionCreators";
import Replies from "./Replies";
import styles from "./styles.module.css";

const Reply = ({ parentId, createMessage, editMessage, deleteMessage }) => {
  const [message, setMessage] = useState("");
  const handleReply = useCallback(() => {
    if (message.length > 0) {
      setMessage("");
      createMessage({ message, parentId });
    }
  }, [createMessage, message, parentId]);
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleReply();
      }
    },
    [handleReply]
  );
  return (
    <div className={styles.container}>
      <Replies
        parentId={parentId}
        deleteMessage={deleteMessage}
        editMessage={editMessage}
      />
      <div className={styles.reply_input_container}>
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Reply..."
          type="text"
          onKeyPress={keyPress}
        />
        <button onClick={handleReply}>Reply</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createMessage: (data) => dispatch(actions.createMessageRequest(data)),
});

export default connect(null, mapDispatchToProps)(Reply);
