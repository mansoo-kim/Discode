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
