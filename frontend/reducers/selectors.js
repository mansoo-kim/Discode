export const selectMembers = (state, type, id) => {
  const memberIds = state.entities[type][id]?.members;
  if (!memberIds) return [];

  const members = [];
  for (let memberId of memberIds) {
    members.push(state.entities.users[memberId]);
  }
  return members.sort((a,b) => a.username > b.username ? 1 : -1);
};

export const selectMembersByConversation = (state) => {
  const membersById = {}
  for (let conv of Object.values(state.entities.conversations)) {
    membersById[conv.id] = selectMembers(state, "conversations", conv.id)
  }
  return membersById;
}

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

export const selectStatus = (state, status) => {
  const friends = [];
  for (let user of Object.values(state.entities.users)) {
    if (user.status === status) friends.push(user);
  }
  return friends;
}
