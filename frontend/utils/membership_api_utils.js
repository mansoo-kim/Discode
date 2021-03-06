export const deleteMembership = (membership) => (
  $.ajax({
    url: `/api/memberships`,
    method: 'DELETE',
    data: { membership }
  })
);

export const createMembership = (membership) => (
  $.ajax({
    url: `/api/memberships`,
    method: 'POST',
    data: { membership }
  })
);
