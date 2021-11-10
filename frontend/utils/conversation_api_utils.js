export const requestConversations = () => (
  $.ajax({
    url: `/api/conversations`,
    method: 'GET'
  })
);

export const requestConversation = (conversationId) => (
  $.ajax({
    url: `/api/conversations/${conversationId}`,
    method: 'GET'
  })
);

export const createConversation = (conversation) => (
  $.ajax({
    url: `/api/conversations`,
    method: 'POST',
    data: { conversation }
  })
)
