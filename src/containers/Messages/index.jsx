import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/messages/actionCreators";
import Message from "./Message";
import Modal from "../../components/Modal";

import styles from "./styles.module.css";

const Messages = ({ getMessages, messages, fetching, error }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    getMessages();
  }, [getMessages]);
  return (
    <div className={styles.messages}>
      {fetching ? <div>Loading... </div> : null}
      {messages && messages.length > 0
        ? messages.map((m, i) => (
            <Message key={m.id + m.message} {...m} openModal={openModal} />
          ))
        : null}
      {error ? <div>Error</div> : null}
      <Modal show={showModal} setShow={setShowModal}>
        <div>test</div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  messages: state.messages.allMessages.result,
  fetching: state.messages.allMessages.fetching,
  error: state.messages.allMessages.error,
});

const mapDispatchToProps = (dispatch) => ({
  getMessages: () => dispatch(actions.getMessagesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
