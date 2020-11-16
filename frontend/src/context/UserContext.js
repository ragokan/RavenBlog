import React, { createContext, useContext } from "react"
import { AlertContext } from "./AlertContext"
import { AuthContext } from "./AuthContext"
import { LoadingContext } from "./LoadingContext"
import { updateAboutAction, updateProfileAction } from "./actions/UserActions"

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const { user, setUser, allUsers, setAllUsers } = useContext(AuthContext)
  const { addAlert } = useContext(AlertContext)
  const { setMainLoading } = useContext(LoadingContext)

  function updateAbout(about) {
    updateAboutAction(
      about,
      user,
      setUser,
      setMainLoading,
      addAlert,
      allUsers,
      setAllUsers
    )
  }

  function updateProfile(image) {
    updateProfileAction(
      image,
      user,
      setUser,
      setMainLoading,
      addAlert,
      allUsers,
      setAllUsers
    )
  }

  return (
    <UserContext.Provider value={{ updateAbout, user, updateProfile }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
