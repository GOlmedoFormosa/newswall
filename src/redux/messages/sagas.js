import { takeEvery, put, fork, call } from "redux-saga/effects";
import * as actions from "./actionCreators";
import * as types from "./actionTypes";
import { fetchMessagesApi } from "./api";

function* getMessages() {
  try {
    const messages = yield call(fetchMessagesApi);
    yield put(actions.getMessageSuccess(messages));
  } catch (e) {
    yield put(actions.getMessageError(e.message));
  }
}

function* watchGetMessageRequest() {
  yield takeEvery(types.GET_MESSAGES_REQUEST, getMessages);
}

const messageSagas = [fork(watchGetMessageRequest)];
export default messageSagas;
