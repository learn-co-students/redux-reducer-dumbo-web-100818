export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      return {friends: removeFriend(state, action)}
    default:
      return state
  }
}

function removeFriend(state, action) {
  return state.friends.filter(friend => friend.id !== action.id)
}
