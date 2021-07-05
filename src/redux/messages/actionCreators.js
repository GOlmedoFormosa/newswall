import {
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
} from "./actionTypes";

export const getMessagesRequest = () => ({
  type: GET_MESSAGES_REQUEST,
});

export const getMessageSuccess = (data = {}) => ({
  type: GET_MESSAGES_SUCCESS,
  payload: {
    data,
  },
});

export const getMessageError = (message) => ({
  type: GET_MESSAGES_ERROR,
  payload: {
    message,
  },
});
