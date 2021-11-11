import * as ConversationApiUtil from "../utils/conversation_api_utils";

export const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS';
export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION';

export const receiveConversations = (res) => ({
  type: RECEIVE_CONVERSATIONS,
  res
});

export const receiveConversation = (res) => ({
  type: RECEIVE_CONVERSATION,
  res
});

export const requestConversations = () => (dispatch) => (
  ConversationApiUtil.requestConversations()
    .then(
      (res) => dispatch(receiveConversations(res))
    )
);

export const requestConversation = (conversationId) => (dispatch) => (
  ConversationApiUtil.requestConversation(conversationId)
    .then(
      (res) => dispatch(receiveConversation(res))
    )
);

export const createConversation = (conversation) => (dispatch) => (
  ConversationApiUtil.createConversation(conversation)
    .then(
      (res) => dispatch(receiveConversation(res))
    )
);

export const updateConversation = (conversation) => (dispatch) => (
  ConversationApiUtil.updateConversation(conversation)
    .then(
      (res) => dispatch(receiveConversation(res))
    )
);
