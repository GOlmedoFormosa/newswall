const fetchMessagesApi = () => {
  return fetch("url").then((res) => {
    return res.json();
  });
};

export { fetchMessagesApi };
