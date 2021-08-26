console.log(
  "process.env.REACT_APP_API_MOCKING",
  process.env.REACT_APP_API_MOCKING
);
export const API_URL =
  process.env.REACT_APP_API_MOCKING === "enabled"
    ? process.env.REACT_APP_API_URL_MOCK
    : process.env.REACT_APP_API_URL;
