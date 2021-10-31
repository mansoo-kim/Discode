export const updateUser = (userId, user) => (
  $.ajax({
    url: `/api/users/${userId}`,
    method: 'PATCH',
    data: { user }
  })
);
