function Notification({ message }) {
  return message && <div className="error">{message}</div>;
}

export { Notification };
