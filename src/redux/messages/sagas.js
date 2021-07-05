import { takeEvery, put, fork, call } from "redux-saga/effects";
import * as actions from "./actionCreators";
import * as types from "./actionTypes";
import { fetchMessagesApi, createMessageApi, deleteMessageApi } from "./api";

function* getMessages() {
  try {
    const { messages } = yield call(fetchMessagesApi);
    // TODO delete this once we update the GET api with desc parameters.
    messages.reverse();
    yield put(actions.getMessagesSuccess(messages));
  } catch (e) {
    yield put(actions.getMessagesError(e.message));
  }
}

function* watchGetMessagesRequest() {
  yield takeEvery(types.GET_MESSAGES_REQUEST, getMessages);
}

function* createMessage({ payload }) {
  try {
    const { author, message, parentId } = payload.data;
    const { message: messageResponse } = yield call(createMessageApi, {
      author,
      message,
      parentId,
    });
    if (parentId) {
      yield put(actions.createMessageReplySuccess(messageResponse));
    } else {
      yield put(actions.createMessageSuccess(messageResponse));
    }
  } catch (e) {
    yield put(actions.createMessageError(e.message));
  }
}

function* watchCreateMessageRequest() {
  yield takeEvery(types.CREATE_MESSAGE_REQUEST, createMessage);
}

function* deleteMessage({ payload }) {
  try {
    const { id } = payload.data;
    const { message: messageResponse } = yield call(deleteMessageApi, {
      id,
    });

    yield put(actions.deleteMessageSuccess(messageResponse));
  } catch (e) {
    yield put(actions.deleteMessageError(e.message));
  }
}

function* watchDeleteMessageRequest() {
  yield takeEvery(types.DELETE_MESSAGE_REQUEST, deleteMessage);
}

const messageSagas = [
  fork(watchGetMessagesRequest),
  fork(watchCreateMessageRequest),
  fork(watchDeleteMessageRequest),
];
export default messageSagas;
