const FriendIndexItem = ({ friend, type, action1, action2 }) => {

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
