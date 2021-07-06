import React, { useRef, useEffect, useCallback } from "react";
import { ReactComponent as DeleteIcon } from "../../assets/images/icons/delete.svg";
import styles from "./styles.module.css";

const Modal = ({ show, setShow, children }) => {
  const modalRef = useRef(null);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShow(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && show) {
        setShow(false);
      }
    },
    [setShow, show]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return show ? (
    <div className={styles.background} ref={modalRef} onClick={closeModal}>
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
        <DeleteIcon className={styles.close} onClick={() => setShow(!show)} />
      </div>
    </div>
  ) : null;
};

export default Modal;
