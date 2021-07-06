import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/messages/actionCreators";
import Message from "./Message";
import { DeleteModal } from "../../containers/Modals/DeleteModal";
import { EditModal } from "../../containers/Modals/EditModal";

import styles from "./styles.module.css";

const Messages = ({
  getMessages,
  deleteMessage,
  messages,
  fetching,
  error,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState(null);
  const [messageToEdit, setMessageToEdit] = useState(null);
  const handleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
    if (showDeleteModal) {
      setMessageToDelete(null);
    }
  };
  const handleEditModal = () => {
    setShowEditModal(!showEditModal);
    if (showEditModal) {
      setMessageToEdit(null);
    }
  };
  const handleDeleteMessage = (message) => {
    setMessageToDelete(message);
    handleDeleteModal();
  };

  const handleEditMessage = (message) => {
    setMessageToEdit(message);
    handleEditModal();
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
              editMessage={handleEditMessage}
            />
          ))
        : null}
      {error ? <div>Error</div> : null}
      <DeleteModal
        open={showDeleteModal}
        closeModal={handleDeleteModal}
        message={messageToDelete}
        handleDelete={() => {
          deleteMessage(messageToDelete);
          handleDeleteModal();
        }}
      />
      <EditModal
        open={showEditModal}
        closeModal={handleEditModal}
        messageToEdit={messageToEdit}
        handleEdit={() => {
          // deleteMessage(messageToDelete);
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
