const FriendIndexItem = ({ friend, type, action1, action2 }) => {

  // const acceptIncoming = <button>Accept</button>;
  // const rejectIncoming = <button>Reject</button>;
  // const cancelOutgoing = <button>Cancel</button>;
  // const messageFriend = <button>Message</button>;
  // const removeFriend = <button>Remove</button>;
  const label1 = type === "friend" ? "Message" : type === "incoming" ? "Accept" : "Cancel";
  const label2 = type === "friend" ? "Remove Friend" : type === "incoming" ? "Reject" : "";

  return (
    <div>
      { friend.username }

      <button onClick={() => action1(friend.id)}>{ label1 }</button>
      { type !== "outgoing" && <button onClick={() => action2(friend.id)}>{ label2 }</button> }
    </div>
  )
}

export default FriendIndexItem
