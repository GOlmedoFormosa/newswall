import { useState } from "react";
import { connect } from "react-redux";
import { ReactComponent as ReplyIcon } from "../../../assets/images/icons/reply.svg";
import { ReactComponent as EditIcon } from "../../../assets/images/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/images/icons/delete.svg";
import Reply from "./Reply";
import styles from "./styles.module.css";

const Message = ({
  id,
  message,
  author,
  parentId,
  deleteMessage,
  editMessage,
  threads,
}) => {
  const [showReply, setShowDisplay] = useState(false);
  return (
    <>
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
            <DeleteIcon
              onClick={() => deleteMessage({ id, message, author, parentId })}
            />
            <EditIcon
              onClick={() => editMessage({ id, message, author, parentId })}
            />

            {threads[id] && (
              <p onClick={() => setShowDisplay(true)}>
                {`${threads[id].length}`} Reply
              </p>
            )}
            <ReplyIcon onClick={() => setShowDisplay(true)} />
          </div>
        </div>
      </div>
      {showReply ? <Reply parentId={id} /> : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  threads: state.messages.threads,
});

export default connect(mapStateToProps, null)(Message);
