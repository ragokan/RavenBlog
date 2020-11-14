import React, { createContext, useContext } from "react"
import { AlertContext } from "./AlertContext"
import { AuthContext } from "./AuthContext"
import { LoadingContext } from "./LoadingContext"
import { updateAboutAction } from "./actions/UserActions"

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const { user, setUser } = useContext(AuthContext)
  const { addAlert } = useContext(AlertContext)
  const { setMainLoading } = useContext(LoadingContext)

  function updateAbout(about) {
    updateAboutAction(about, user, setUser, setMainLoading, addAlert)
  }

  return (
    <UserContext.Provider value={{ updateAbout }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
