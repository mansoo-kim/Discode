import { useState } from 'react';

const MessageForm = () => {
  const [body, setBody] = useState("");

  const update = (e) => setBody(e.currentTarget.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({ message: body });
    setBody("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={body}
          onChange={update}
          placeholder="Type message here"
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default MessageForm
