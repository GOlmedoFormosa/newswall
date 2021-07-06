import React, { useEffect, useCallback } from "react";
import { ReactComponent as DeleteIcon } from "../../assets/images/icons/delete.svg";
import styles from "./styles.module.css";

const Modal = ({ open, closeModal, children }) => {
  const handleCloseModal = () => {
    closeModal();
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && open) {
        closeModal();
      }
    },
    [closeModal, open]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return open ? (
    <div className={styles.background} onClick={closeModal}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>{children}</div>
        <DeleteIcon
          className={styles.close}
          onClick={(e) => handleCloseModal(e)}
        />
      </div>
    </div>
  ) : null;
};

export default Modal;
