const FriendIndexItem = ({ friend, buttons }) => {
  return (
    <div>
      { friend.username }

      { buttons.map(button => button)}
    </div>
  )
}

export default FriendIndexItem
