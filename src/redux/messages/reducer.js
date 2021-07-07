import * as types from "./actionTypes";

const INITIAL_STATE = {
  allMessages: {
    fetching: false,
    error: null,
    result: [],
  },
  threads: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.GET_MESSAGES_REQUEST:
      return {
        ...state,
        allMessages: {
          ...INITIAL_STATE.allMessages,
          fetching: true,
        },
      };
    case types.GET_MESSAGES_SUCCESS:
      const messages = [];
      const threads = { ...state.threads };
      payload.data.forEach((message) => {
        if (message.parentId) {
          if (!threads[message.parentId]) threads[message.parentId] = [];
          threads[message.parentId].unshift(message);
        } else {
          messages.push(message);
        }
      });
      return {
        ...state,
        allMessages: {
          ...INITIAL_STATE.allMessages,
          result: messages,
        },
        threads,
      };
    case types.GET_MESSAGES_ERROR:
      return {
        ...state,
        allMessages: {
          ...INITIAL_STATE.allMessages,
          error: payload.message,
        },
      };
    case types.CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        allMessages: {
          ...INITIAL_STATE.allMessages,
          result: [payload.data, ...state.allMessages.result],
        },
      };
    case types.CREATE_MESSAGE_REPLY_SUCCESS:
      const newThreads = { ...state.threads };
      if (!newThreads[payload.data.parentId])
        newThreads[payload.data.parentId] = [];
      newThreads[payload.data.parentId].push(payload.data);
      return {
        ...state,
        threads: newThreads,
      };
    case types.CREATE_MESSAGE_ERROR:
      return {
        ...state,
        allMessages: {
          ...INITIAL_STATE.allMessages,
          error: payload.message,
        },
      };
    case types.EDIT_MESSAGE_SUCCESS:
      const editedMessages = state.allMessages.result.map((mj) => {
        if (mj.id === payload.data.id) {
          mj = { ...mj, ...payload.data };
        }
        return mj;
      });
      return {
        ...state,
        allMessages: {
          ...INITIAL_STATE.allMessages,
          result: editedMessages,
        },
      };
    case types.EDIT_MESSAGE_REPLY_SUCCESS:
      let editedThreads = { ...state.threads };
      editedThreads[payload.data.parentId] = editedThreads[
        payload.data.parentId
      ].map((mj) => {
        if (mj.id === payload.data.id) {
          mj = { ...mj, ...payload.data };
        }
        return mj;
      });
      return {
        ...state,
        threads: editedThreads,
      };
    case types.EDIT_MESSAGE_ERROR:
      return {
        ...state,
        allMessages: {
          ...INITIAL_STATE.allMessages,
          error: payload.message,
        },
      };
    case types.DELETE_MESSAGE_SUCCESS:
      const messagesDel = state.allMessages.result.filter(
        (m) => m.id !== payload.data.id
      );
      return {
        ...state,
        allMessages: {
          ...INITIAL_STATE.allMessages,
          result: messagesDel,
        },
      };
    case types.DELETE_MESSAGE_ERROR:
      return {
        ...state,
        allMessages: {
          ...INITIAL_STATE.allMessages,
          error: payload.message,
        },
      };
    default:
      return state;
  }
};
