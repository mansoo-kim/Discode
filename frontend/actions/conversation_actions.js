import * as ConversationApiUtil from "../utils/conversation_api_utils";

export const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS';
export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION';

export const receiveConversations = (conversations) => ({
  type: RECEIVE_CONVERSATIONS,
  conversations
});

export const receiveConversation = (res) => ({
  type: RECEIVE_CONVERSATION,
  res
});

export const requestConversations = () => (dispatch) => (
  ConversationApiUtil.requestConversations()
    .then(
      (conversations) => dispatch(receiveConversations(conversations))
    )
)

export const requestConversation = (conversationId) => (dispatch) => (
  ConversationApiUtil.requestConversation(conversationId)
    .then(
      (res) => dispatch(receiveConversation(res))
    )
)
