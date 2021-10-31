export const updateUser = (user) => (
  $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    data: { user }
  })
);
