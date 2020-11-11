import alertObject from "../utils/alertObject"
const newAlert = async (message, color, setAlerts, alerts) => {
  const alert = await alertObject(message, color)
  await setAlerts([...alerts, alert])

  setTimeout(() => {
    setAlerts([])
  }, 5000)
}

export { newAlert }
