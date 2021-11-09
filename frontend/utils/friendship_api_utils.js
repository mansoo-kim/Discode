export const requestFriendships = () => (
  $.ajax({
    url: `/api/friendships`,
    method: 'GET'
  })
);

export const createFriendship = (ids) => (
  $.ajax({
    url: `/api/friendships`,
    method: 'POST',
    data: { friendship: ids }
  })
);

export const updateFriendship = (ids) => (
  $.ajax({
    url: `/api/friendships`,
    method: 'PATCH',
    data: { friendship: ids }
  })
);

export const deleteFriendship = (ids) => (
  $.ajax({
    url: `/api/friendships`,
    method: 'DELETE',
    data: { friendship: ids }
  })
);
