export const requestFriendships = () => (
  $.ajax({
    url: `/api/friendships`,
    method: 'GET'
  })
);
