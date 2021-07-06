import Modal from "../../../components/Modal";
import styles from "./styles.module.css";

export const DeleteModal = ({ open, closeModal, handleDelete }) => (
  <Modal open={open} closeModal={closeModal}>
    <div>Are you sure you want to delete the message?</div>
    <div className={styles.messages_footer}>
      <button
        type="button"
        className={styles.messages__delete}
        onClick={handleDelete}
      >
        Delete
      </button>
      <button
        type="button"
        className={styles.messages__cancel}
        onClick={closeModal}
      >
        Cancel
      </button>
    </div>
  </Modal>
);
