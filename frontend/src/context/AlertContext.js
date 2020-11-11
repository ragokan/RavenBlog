import React, { createContext, useState } from "react"
import { newAlert } from "./actions/AlertActions"

export const AlertContext = createContext()

const AlertContextProvider = (props) => {
  const [alerts, setAlerts] = useState([])

  function addAlert(message, color) {
    newAlert(message, color, setAlerts, alerts)
  }

  return (
    <AlertContext.Provider value={{ alerts, addAlert }}>
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertContextProvider
