import * as types from "./actionTypes";

const INITIAL_STATE = {
  allMessages: {
    fetching: false,
    error: null,
    result: [
      {
        id: 1,
        message:
          "A Thread lalalla allala alla la lala a lala al a llallalalalallalalallalala la lala a lala al a llallalalalallalalallalala la lala a lala al a llallalalalallalalallalalala lala a lala al a llallalalalallalalallalala",
        parentId: null,
        author: 1,
      },
      {
        id: 2,
        message: "A Reply",
        parentId: 1,
        author: 1,
      },
      {
        id: 3,
        message:
          "A Thread lalalla allala alla la lala a lala al a llallalalalallalalallalala la lala a lala al a llallalalalallalalallalala la lala a lala al a llallalalalallalalallalalala lala a lala al a llallalalalallalalallalala",
        parentId: null,
        author: 1,
      },
      {
        id: 4,
        message: "A Thread",
        parentId: null,
        author: 1,
      },
      {
        id: 5,
        message:
          "A Thread lalalla allala alla la lala a lala al a llallalalalallalalallalala la lala a lala al a llallalalalallalalallalala la lala a lala al a llallalalalallalalallalalala lala a lala al a llallalalalallalalallalala",
        parentId: null,
        author: 1,
      },
    ],
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
    default:
      return state;
  }
};
