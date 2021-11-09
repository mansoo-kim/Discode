export const selectMembers = (state, type, id) => {
  const memberIds = state.entities[type][id]?.members;
  if (!memberIds) return [];

  const members = [];
  for (let memberId of memberIds) {
    members.push(state.entities.users[memberId]);
  }
  return members;
};

export const selectChannels = (state, serverId) => {
  const channelIds = state.entities.servers[serverId]?.channels;
  if (!channelIds) return [];

  const channels = [];
  for (let id of channelIds) {
    if (state.entities.channels[id]) channels.push(state.entities.channels[id]);
  }
  return channels;
}

export const selectChannel = (state, serverId, ccId) => {
  const channelIds = state.entities.servers[serverId]?.channels;

  if (channelIds.includes(parseInt(ccId))) {
    return state.entities.channels[ccId];
  } else {
    return state.entities.channels[channelIds[0]];
  }
}

export const selectMessages = (state, type, ccId) => {
  let messageIds;
  if (type === "Channel") {
    messageIds = state.entities.channels[ccId].messages
  } else {
    messageIds = state.entities.conversations[ccId].messages
  }
  if (!messageIds) return [];

  const messages = [];
  for (let messageId of messageIds) {
    messages.push(state.entities.messages[messageId]);
  }
  return messages;
}

export const selectFriends = (state) => {
  const friendIds = state.session.friends;
  if (!friendIds) return [];

  const friends = [];
  for (let friendId of friendIds) {
    friends.push(state.entities.users[friendId]);
  }
  return friends;
}

export const selectOutgoings = (state) => {
  const outgoingIds = state.session.outgoings;
  if (!outgoingIds) return [];

  const outgoings = [];
  for (let outgoingId of outgoingIds) {
    outgoings.push(state.entities.users[outgoingId]);
  }
  return outgoings;
}

export const selectIncomings = (state) => {
  const incomingIds = state.session.incomings;
  if (!incomingIds) return [];

  const incomings = [];
  for (let incomingId of incomingIds) {
    incomings.push(state.entities.users[incomingId]);
  }
  return incomings;
}
