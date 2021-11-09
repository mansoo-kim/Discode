import FriendIndexItem from "./FriendIndexItem";

const PendingIndex = ({ incomings, outgoings }) => {

  const acceptIncoming = <button>Accept</button>;
  const rejectIncoming = <button>Reject</button>;
  const cancelOutgoing = <button>Cancel</button>;

  return (
    <div>
      { incomings.map(friend => {
        if (friend) return <FriendIndexItem key={friend.id} friend={friend} buttons={[acceptIncoming, rejectIncoming]} />;
      })}
      { outgoings.map(friend => {
        if (friend) return <FriendIndexItem key={friend.id} friend={friend} buttons={[cancelOutgoing]} />;
      })}
    </div>
  )
}

export default PendingIndex
