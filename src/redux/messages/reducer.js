import * as types from "./actionTypes";

const INITIAL_STATE = {
  allMessages: {
    fetching: false,
    error: null,
    result: [],
  },
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
      return {
        ...state,
        allMessages: {
          ...INITIAL_STATE.allMessages,
          result: payload.data,
        },
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
    case types.CREATE_MESSAGE_ERROR:
      return {
        ...state,
        allMessages: {
          ...INITIAL_STATE.allMessages,
          error: payload.message,
        },
      };
    case types.DELETE_MESSAGE_SUCCESS:
      const messages = state.allMessages.result.filter(
        (m) => m.id !== payload.data.id
      );
      return {
        ...state,
        allMessages: {
          ...INITIAL_STATE.allMessages,
          result: messages,
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
