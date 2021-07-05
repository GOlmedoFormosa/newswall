export const Message = ({ id, message, author }) => (
  <div key={id}>
    <h3>{author}</h3>
    <p>{message}</p>
  </div>
);
