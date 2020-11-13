import React, { createContext, useReducer } from "react"
import { newAlert } from "./actions/AlertActions"
import { AlertReducer } from "./reducers/AlertReducer"

export const AlertContext = createContext()

const AlertContextProvider = (props) => {
  const [alerts, dispatch] = useReducer(AlertReducer, [])

  const addAlert = (message, color, timeout) => {
    newAlert(message, color, dispatch, timeout)
  }

  return (
    <AlertContext.Provider value={{ alerts, dispatch, addAlert }}>
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertContextProvider
