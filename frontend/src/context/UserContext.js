import React, { createContext, useContext } from "react";
import { AlertContext } from "./AlertContext";
import { AuthContext } from "./AuthContext";
import { updateAboutAction, updateProfileAction } from "./actions/UserActions";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const { user, setUser, allUsers, setAllUsers } = useContext(AuthContext);
  const { addAlert } = useContext(AlertContext);

  function updateAbout(about) {
    updateAboutAction(
      about,
      user,
      setUser,

      addAlert,
      allUsers,
      setAllUsers
    );
  }

  function updateProfile(image) {
    updateProfileAction(
      image,
      user,
      setUser,

      addAlert,
      allUsers,
      setAllUsers
    );
  }

  return <UserContext.Provider value={{ updateAbout, user, updateProfile }}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;
