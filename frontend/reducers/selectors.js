export const selectMembers = (state, type, id) => {
  const memberIds = state.entities[type][id]?.members;
  if (memberIds) {
    const members = [];
    for (let memberId of memberIds) {
      members.push(state.entities.users[memberId]);
    }
    return members;
  }
  return [];
};

export const selectChannels = (state, serverId) => {
  const channelIds = state.entities.servers[serverId]?.channels;
  if (channelIds) {
    const channels = [];
    for (let id of channelIds) {
      if (state.entities.channels[id]) channels.push(state.entities.channels[id]);
    }
    return channels;
  }
  return [];
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

  if (messageIds) {
    const messages = [];
    for (let messageId of messageIds) {
      messages.push(state.entities.messages[messageId]);
    }
    return messages;
  }
  return [];
}
