import { connect } from "react-redux";
import * as actions from "../../redux/messages/actionCreators";
import { Message } from "./Message";

const Messages = ({ getMessages, messages, fetching, error }) => {
  return (
    <div>
      {fetching ? <div>Loading... </div> : null}
      {messages && messages.length > 0
        ? messages.map((m) => <Message {...m} />)
        : null}
      {error ? <div>Error</div> : null}
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
