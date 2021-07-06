import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/messages/actionCreators";
import Message from "./Message";
import { DeleteModal } from "../../containers/Modals/DeleteModal";

import styles from "./styles.module.css";

const Messages = ({
  getMessages,
  deleteMessage,
  messages,
  fetching,
  error,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState(null);
  const openModal = () => {
    setShowModal(!showModal);
    if (showModal) {
      setMessageToDelete(null);
    }
  };

  const handleDeleteMessage = (message) => {
    setMessageToDelete(message);
    openModal();
  };

  useEffect(() => {
    getMessages();
  }, [getMessages]);
  return (
    <div className={styles.messages}>
      {fetching ? <div>Loading... </div> : null}
      {messages && messages.length > 0
        ? messages.map((m, i) => (
            <Message
              key={m.id + m.message}
              {...m}
              deleteMessage={handleDeleteMessage}
            />
          ))
        : null}
      {error ? <div>Error</div> : null}
      <DeleteModal
        open={showModal}
        closeModal={openModal}
        message={messageToDelete}
        handleDelete={() => {
          deleteMessage(messageToDelete);
        }}
      />
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
  deleteMessage: (data) => dispatch(actions.deleteMessageRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
