export const selectMembers = (state, type, id) => {
  if (state.entities[type][id]) {
    const memberIds = state.entities[type][id].members;
    if (memberIds) {
      const members = [];
      for (let memberId of memberIds) {
        members.push(state.entities.users[memberId]);
      }
      return members;
    }
  }
  return [];
}
