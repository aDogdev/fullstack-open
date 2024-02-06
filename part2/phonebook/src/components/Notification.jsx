function Notification({ message }) {
  return message && <div className="message">{message}</div>;
}

function Error({ message }) {
  return message && <div className="error">{message}</div>;
}

export { Notification, Error };
