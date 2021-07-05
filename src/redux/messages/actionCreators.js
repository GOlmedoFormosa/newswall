import {
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  CREATE_MESSAGE_REQUEST,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_ERROR,
} from "./actionTypes";

export const getMessagesRequest = () => ({
  type: GET_MESSAGES_REQUEST,
});

export const getMessagesSuccess = (data = {}) => ({
  type: GET_MESSAGES_SUCCESS,
  payload: {
    data,
  },
});

export const getMessagesError = (message) => ({
  type: GET_MESSAGES_ERROR,
  payload: {
    message,
  },
});

export const createMessageRequest = (data) => ({
  type: CREATE_MESSAGE_REQUEST,
  payload: {
    data,
  },
});

export const createMessageSuccess = (data = {}) => ({
  type: CREATE_MESSAGE_SUCCESS,
  payload: {
    data,
  },
});

export const createMessageError = (message) => ({
  type: CREATE_MESSAGE_ERROR,
  payload: {
    message,
  },
});
