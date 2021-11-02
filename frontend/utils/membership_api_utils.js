export const deleteMembership = (membership) => (
  $.ajax({
    url: `/api/memberships`,
    method: 'DELETE',
    data: { membership }
  })
);
