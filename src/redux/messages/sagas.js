import { takeEvery, put, fork, call } from "redux-saga/effects";
import * as actions from "./actionCreators";
import * as types from "./actionTypes";
import {
  fetchMessagesApi,
  createMessageApi,
  deleteMessageApi,
  editMessageApi,
} from "./api";

function* getMessages() {
  try {
    const { messages } = yield call(fetchMessagesApi);
    // TODO add date for the creation of messages so we can get it based on that.
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
    let { message: messageResponse } = yield call(createMessageApi, {
      author,
      message,
      parentId,
    });
    // TODO delete this once we update the API, I believe the api should return the new
    // message with its generated id.
    messageResponse = {
      ...messageResponse,
      id: messageResponse.id || Math.floor(Math.random() * 10000),
      author: author || 1,
      message,
      parentId,
    };
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
    const { id, parentId } = payload.data;
    const { message: messageResponse } = yield call(deleteMessageApi, {
      id,
      parentId,
    });

    if (parentId) {
      yield put(actions.deleteMessageReplySuccess(messageResponse));
    } else {
      yield put(actions.deleteMessageSuccess(messageResponse));
    }
  } catch (e) {
    yield put(actions.deleteMessageError(e.message));
  }
}

function* watchDeleteMessageRequest() {
  yield takeEvery(types.DELETE_MESSAGE_REQUEST, deleteMessage);
}

function* editMessage({ payload }) {
  try {
    const { id, author, message, parentId } = payload.data;
    let { message: messageResponse } = yield call(editMessageApi, {
      id,
      author,
      message,
      parentId,
    });

    // TODO delete this once we update the API, I believe the api should return the edited
    // message.
    messageResponse = {
      ...messageResponse,
      id,
      author,
      message,
      parentId,
    };
    if (parentId) {
      yield put(actions.editMessageReplySuccess(messageResponse));
    } else {
      yield put(actions.editMessageSuccess(messageResponse));
    }
  } catch (e) {
    yield put(actions.editMessageError(e.message));
  }
}

function* watchEditMessageRequest() {
  yield takeEvery(types.EDIT_MESSAGE_REQUEST, editMessage);
}
const messageSagas = [
  fork(watchGetMessagesRequest),
  fork(watchCreateMessageRequest),
  fork(watchEditMessageRequest),
  fork(watchDeleteMessageRequest),
];
export default messageSagas;
