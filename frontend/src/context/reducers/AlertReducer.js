export const AlertReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ALERT":
      return [...state, action.alert]

    case "REMOVE_ALERT":
      return state.filter((alert) => alert.id !== action.alert)

    default:
      return state
  }
}
