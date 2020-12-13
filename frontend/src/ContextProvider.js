import React from "react";
import AlertContextProvider from "./context/AlertContext";
import ApiContextProvider from "./context/ApiContext";
import AuthContextProvider from "./context/AuthContext";
import LoadingContextProvider from "./context/LoadingContext";
import PostContextProvider from "./context/PostContext";
import UserContextProvider from "./context/UserContext";

const ContextProvider = ({ children }) => {
  return (
    <>
      <AlertContextProvider>
        <LoadingContextProvider>
          <AuthContextProvider>
            <PostContextProvider>
              <UserContextProvider>
                <ApiContextProvider>{children}</ApiContextProvider>
              </UserContextProvider>
            </PostContextProvider>
          </AuthContextProvider>
        </LoadingContextProvider>
      </AlertContextProvider>
    </>
  );
};

export default ContextProvider;
