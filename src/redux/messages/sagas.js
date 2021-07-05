import { takeEvery, put, fork, call } from "redux-saga/effects";
import * as actions from "./actionCreators";
import * as types from "./actionTypes";
import { fetchMessagesApi, createMessageApi } from "./api";

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

    yield put(actions.createMessageSuccess(messageResponse));
  } catch (e) {
    yield put(actions.createMessageError(e.message));
  }
}

function* watchCreateMessageRequest() {
  yield takeEvery(types.CREATE_MESSAGE_REQUEST, createMessage);
}

const messageSagas = [
  fork(watchGetMessagesRequest),
  fork(watchCreateMessageRequest),
];
export default messageSagas;
