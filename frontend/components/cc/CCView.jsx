import { useState, useEffect, useRef } from 'react';
import MemberIndex from '../member/MemberIndex';
import ChatRoom from '../messages/ChatRoom';
import { closeOnOutsideClick } from '../../utils/close_utils';
import { FaHashtag } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';

const CCView = ({ cc, type, members, currentUser, requestCC, updateCC }) => {
  if (!cc) return null;

  let displayName;
  if (type === "Channel" || cc.name) {
    displayName = cc.name;
  } else {
    displayName = members.filter(member => member.id !== currentUser.id).map(member => member.username).join(", ")
  }

  const [showEdit, setShowEdit] = useState(false);
  const [newName, setNewName] = useState(displayName);

  useEffect(() => {
    if (cc?.id) requestCC(cc.id);
    setNewName(displayName);
  }, [cc?.id]);

  const handleEdit = (e) => {
    e.preventDefault();
    if (newName !== displayName) {
      updateCC({ ...cc, name: newName });
    }
    setShowEdit(false);
  };

  const inputRef = useRef();
  useEffect(() => {
    if (showEdit) {
      inputRef.current.focus();
    }
  });

  const containerRef = useRef();
  closeOnOutsideClick(containerRef, setShowEdit)

  const editName = (
    <form onSubmit={handleEdit} className="message-form edit">
      <input type="text" ref={inputRef} value={newName} onChange={(e) => setNewName(e.currentTarget.value)} />
    </form>
  )

  const displayNameDiv = (type === "Channel" || members.length < 3) ? (
    <div className="cc-name">{ displayName }</div>
  ) : (
    <div className="cc-name" ref={containerRef} onClick={() => setShowEdit(true)}>{ showEdit ? editName : displayName }</div>
  )

  return (
    <div className="cc-view">
      <div className="cc-header">
        <div>
          <div className="cc-hash">{ type === "Channel" ? <FaHashtag size={20} /> : <MdPeopleAlt size={22} /> }</div>
          { displayNameDiv }
        </div>
      </div>

      <div className="cc-main">
        <ChatRoom cc={cc} type={type} displayName={displayName} />

        <MemberIndex members={members} />
      </div>

    </div>
  )
}

export default CCView
