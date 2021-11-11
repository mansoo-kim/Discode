import { useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';

const MessageForm = ({ currentUserId, type, cc, chat, displayName }) => {
  const [body, setBody] = useState("");

  const update = (e) => setBody(e.currentTarget.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (body) {
      chat.send(
        {
          body: body,
          sender_id: currentUserId,
          messageable_type: type,
          messageable_id: cc.id
        }
      );
      setBody("");
    }
  }

  return (
    <div className="message-input-container">
      <form className="message-form" onSubmit={handleSubmit}>
        <BsPlusCircleFill size={20} />

        <input
          type="text"
          value={body}
          onChange={update}
          placeholder={`Message ${displayName}`}
        />
      </form>
    </div>
  )
}

export default MessageForm;
