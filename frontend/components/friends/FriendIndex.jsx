import FriendIndexItem from "./FriendIndexItem"

const FriendIndex = ({ friends }) => {

  const messageFriend = <button>Message</button>;
  const removeFriend = <button>Remove</button>;

  return (
    <div>
      { friends.map(friend => {
        if (friend) return <FriendIndexItem key={friend.id} friend={friend} buttons={[messageFriend, removeFriend]} />;
      })}
    </div>
  )
}

export default FriendIndex
