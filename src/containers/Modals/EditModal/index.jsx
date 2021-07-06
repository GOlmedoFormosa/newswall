import { useState, useEffect } from "react";
import Modal from "../../../components/Modal";
import styles from "./styles.module.css";

export const EditModal = ({ open, closeModal, handleEdit, messageToEdit }) => {
  const [message, setMessage] = useState();
  const editMessage = (e) => {
    e.preventDefault();
    setMessage("");
    handleEdit({ ...messageToEdit, message });
  };
  useEffect(() => {
    setMessage(messageToEdit ? messageToEdit.message : "");
  }, [messageToEdit]);
  return (
    <Modal open={open} closeModal={closeModal}>
      <div className={styles.messages__edit}>
        <label htmlFor="edit-meesage">Edit message:</label>
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Edit message..."
          type="text"
          name="edit-meesage"
        />
      </div>
      <div className={styles.messages_footer}>
        <button
          type="button"
          className={styles.messages__delete}
          onClick={editMessage}
        >
          Edit
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
};
