import alertObject from "../utils/alertObject"
const newAlert = async (message, color, dispatch) => {
  const alert = await alertObject(message, color)
  dispatch({
    type: "ADD_ALERT",
    alert,
  })

  setTimeout(() => {
    dispatch({
      type: "REMOVE_ALERT",
      alert: alert.id,
    })
  }, 5000)
}

export { newAlert }
