import { useState } from 'react';

const MessageForm = ({ currentUser }) => {
  const [body, setBody] = useState("");

  const update = (e) => setBody(e.currentTarget.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak(
      { message : {
        body: body,
        sender_id: currentUser.id,
        messageable_type: "Conversation",
        messageable_id: 1 }
      }
    );
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

import { connect } from 'react-redux';

const mSTP = (state) => ({
  currentUser: state.session
})

export default connect(mSTP)(MessageForm);
