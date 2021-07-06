import {
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  CREATE_MESSAGE_REQUEST,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_REPLY_SUCCESS,
  CREATE_MESSAGE_ERROR,
  DELETE_MESSAGE_REQUEST,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_ERROR,
  EDIT_MESSAGE_REQUEST,
  EDIT_MESSAGE_SUCCESS,
  EDIT_MESSAGE_REPLY_SUCCESS,
  EDIT_MESSAGE_ERROR,
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

export const createMessageReplySuccess = (data = {}) => ({
  type: CREATE_MESSAGE_REPLY_SUCCESS,
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

export const deleteMessageRequest = (data) => ({
  type: DELETE_MESSAGE_REQUEST,
  payload: {
    data,
  },
});

export const deleteMessageSuccess = (data = {}) => ({
  type: DELETE_MESSAGE_SUCCESS,
  payload: {
    data,
  },
});

export const deleteMessageError = (message) => ({
  type: DELETE_MESSAGE_ERROR,
  payload: {
    message,
  },
});

export const editMessageRequest = (data) => ({
  type: EDIT_MESSAGE_REQUEST,
  payload: {
    data,
  },
});

export const editMessageSuccess = (data = {}) => ({
  type: EDIT_MESSAGE_SUCCESS,
  payload: {
    data,
  },
});

export const editMessageReplySuccess = (data = {}) => ({
  type: EDIT_MESSAGE_REPLY_SUCCESS,
  payload: {
    data,
  },
});

export const editMessageError = (message) => ({
  type: EDIT_MESSAGE_ERROR,
  payload: {
    message,
  },
});
