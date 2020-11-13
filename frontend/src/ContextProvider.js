import React from "react"
import AlertContextProvider from "./context/AlertContext"
import AuthContextProvider from "./context/AuthContext"
import LoadingContextProvider from "./context/LoadingContext"
import PostContextProvider from "./context/PostContext"

const ContextProvider = ({ children }) => {
  return (
    <>
      <AlertContextProvider>
        <LoadingContextProvider>
          <AuthContextProvider>
            <PostContextProvider>
              <>{children}</>
            </PostContextProvider>
          </AuthContextProvider>
        </LoadingContextProvider>
      </AlertContextProvider>
    </>
  )
}

export default ContextProvider
