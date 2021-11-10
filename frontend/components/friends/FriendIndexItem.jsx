const FriendIndexItem = ({ friend, action1, action2 }) => {

  const label1 = friend.status === 3 ? "Message" : friend.status === 2 ? "Accept" : "Cancel";
  const label2 = friend.status === 3 ? "Remove Friend" : friend.status === 2 ? "Reject" : "";

  return (
    <div>
      { friend.username }

      <button onClick={() => action1(friend.id)}>{ label1 }</button>
      { friend.status !== 1 && <button onClick={() => action2(friend.id)}>{ label2 }</button> }
    </div>
  )
}

export default FriendIndexItem
