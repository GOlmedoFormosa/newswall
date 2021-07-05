import { ReactComponent as ReplyIcon } from "../../../assets/images/icons/reply.svg";
import { ReactComponent as EditIcon } from "../../../assets/images/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/images/icons/delete.svg";
import { connect } from "react-redux";
import * as actions from "../../../redux/messages/actionCreators";
import styles from "./styles.module.css";

const Message = ({ id, message, author, deleteMessage }) => (
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
        <DeleteIcon onClick={(e) => deleteMessage({ id, message, author })} />
        <EditIcon />
        <p>1 Reply</p>
        <ReplyIcon />
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  deleteMessage: (data) => dispatch(actions.deleteMessageRequest(data)),
});

export default connect(null, mapDispatchToProps)(Message);
