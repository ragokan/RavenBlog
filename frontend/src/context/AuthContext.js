import React, { createContext, useContext, useEffect, useState } from "react";
import { registerAction, getUserAction, logoutAction, loginAction, getAllUsersAction } from "./actions/AuthActions";
import { AlertContext } from "./AlertContext";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const { addAlert } = useContext(AlertContext);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [allUsers, setAllUsers] = useState([]);

  function registerUser(user) {
    registerAction(user, setToken, addAlert, setAllUsers);
  }
  function loginUser(user) {
    loginAction(user, setToken, addAlert);
  }
  function fetchUser() {
    getUserAction(token, setUser, addAlert);
  }
  function logoutUser() {
    logoutAction(setToken, setUser, addAlert);
  }

  function getAllUsers() {
    getAllUsersAction(setAllUsers);
  }

  useEffect(
    () => {
      token && fetchUser();
    },
    /*eslint-disable*/ [token]
  );
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        loginUser,
        logoutUser,
        registerUser,
        allUsers,
        getAllUsers,
        fetchUser,
        setAllUsers,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
