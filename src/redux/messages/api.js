const fetchMessagesApi = () => {
  // return fetch("url").then((res) => {
  //   return res.json();
  // });
  return {
    messages: [
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
  };
};

const createMessageApi = ({ author, message, parentId }) => {
  // return fetch("url").then((res) => {
  //   return res.json();
  // });
  return {
    message: {
      id: 1,
      author,
      message,
      parentId,
    },
  };
};

export { fetchMessagesApi, createMessageApi };
