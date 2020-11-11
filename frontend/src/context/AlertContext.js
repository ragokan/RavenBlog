import React, { createContext, useReducer } from "react"
import { newAlert } from "./actions/AlertActions"
import { AlertReducer } from "./reducers/AlertReducer"

export const AlertContext = createContext()

const AlertContextProvider = (props) => {
  const [alerts, dispatch] = useReducer(AlertReducer, [])

  const addAlert = (message, color) => {
    newAlert(message, color, dispatch)
  }

  return (
    <AlertContext.Provider value={{ alerts, dispatch, addAlert }}>
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertContextProvider
