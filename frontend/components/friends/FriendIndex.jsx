import FriendIndexItem from "./FriendIndexItem"

const FriendIndex = ({ friends }) => {
  return (
    <div>
      { friends.map(friend => {
        if (friend) return <FriendIndexItem key={friend.id} friend={friend} />;
      })}
    </div>
  )
}

export default FriendIndex
