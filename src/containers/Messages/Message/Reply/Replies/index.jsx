import { connect } from "react-redux";
import { ReactComponent as EditIcon } from "../../../../../assets/images/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../../../../assets/images/icons/delete.svg";
import styles from "./styles.module.css";

const Replies = ({ threads, parentId, editMessage, deleteMessage }) => {
  return (
    <div className={styles.container}>
      {threads[parentId] &&
        threads[parentId].map((msg) => {
          return (
            <div className={styles.message_container}>
              <div className={styles.message}>
                {msg && `-AuthorId(${msg.author}): ${msg.message}`}
              </div>
              <div className={styles.actions}>
                <EditIcon onClick={() => editMessage(msg)} />
                <DeleteIcon onClick={() => deleteMessage(msg)} />
              </div>
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
