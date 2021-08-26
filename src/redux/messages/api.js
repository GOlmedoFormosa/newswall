import { API_URL } from "../../utils/config";

const fetchMessagesApi = () => {
  return fetch(`${API_URL}/messages`).then((res) => {
    return res.json();
  });
};

const createMessageApi = ({ author, message, parentId }) => {
  return fetch(`${API_URL}/messages`, {
    method: "POST",
    body: JSON.stringify({
      author: author || 1,
      message,
      parentId,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });
};

const deleteMessageApi = ({ id }) => {
  return fetch(`${API_URL}/messages/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });
};

const editMessageApi = ({ id, author, message, parentId }) => {
  return fetch(`${API_URL}/messages/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id,
      author: author || 1,
      message,
      parentId,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });
};

export { fetchMessagesApi, createMessageApi, deleteMessageApi, editMessageApi };
