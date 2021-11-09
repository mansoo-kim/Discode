import FriendIndexItem from "./FriendIndexItem";

const PendingIndex = ({ incomings, outgoings }) => {
  return (
    <div>
      { incomings.map(friend => {
        if (friend) return <FriendIndexItem key={friend.id} friend={friend} />;
      })}
      { outgoings.map(friend => {
        if (friend) return <FriendIndexItem key={friend.id} friend={friend} />;
      })}
    </div>
  )
}

export default PendingIndex
