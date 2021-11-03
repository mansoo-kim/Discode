export const requestUser = (userId) => (
  $.ajax({
    url: `/api/users/${userId}`,
    method: 'GET'
  })
);

export const updateUser = (userId, user) => (
  $.ajax({
    url: `/api/users/${userId}`,
    method: 'PATCH',
    data: user,
    contentType: false,
    processData: false
  })
);
