import { useState } from 'react';

const MessageForm = ({ currentUserId, type, id, chat }) => {
  const [body, setBody] = useState("");

  const update = (e) => setBody(e.currentTarget.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    chat.send(
      {
        body: body,
        sender_id: currentUserId,
        messageable_type: type,
        messageable_id: id
      }
    );
    setBody("");
  }

  return (
    <div className="message-input-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={body}
          onChange={update}
          placeholder="Message"
        />
      </form>
    </div>
  )
}

import { connect } from 'react-redux';

const mSTP = (state) => ({
  currentUserId: state.session.id
})

export default connect(mSTP)(MessageForm);
