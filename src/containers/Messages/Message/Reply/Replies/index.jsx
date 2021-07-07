import { connect } from "react-redux";
import { ReactComponent as EditIcon } from "../../../../../assets/images/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../../../../assets/images/icons/delete.svg";
import { getUser } from "../../../../../utils/auth";
import styles from "./styles.module.css";

const Replies = ({ threads, parentId, editMessage, deleteMessage }) => {
  const user = getUser();
  return (
    <div className={styles.container}>
      {threads[parentId] &&
        threads[parentId].map((msg) => {
          return (
            <div
              key={msg.id + msg.message}
              className={styles.message_container}
            >
              <div className={styles.message}>
                {msg && `-AuthorId(${msg.author}): ${msg.message}`}
              </div>
              {String(user.id) === String(msg.author) ? (
                <div className={styles.actions}>
                  <EditIcon onClick={() => editMessage(msg)} />
                  <DeleteIcon onClick={() => deleteMessage(msg)} />
                </div>
              ) : null}
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  threads: state.messages.threads,
});

export default connect(mapStateToProps, null)(Replies);
