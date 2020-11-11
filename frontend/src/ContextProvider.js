import React from "react"
import AlertContextProvider from "./context/AlertContext"
import AuthContextProvider from "./context/AuthContext"
import LoadingContextProvider from "./context/LoadingContext"

const ContextProvider = ({ children }) => {
  return (
    <>
      <AlertContextProvider>
        <LoadingContextProvider>
          <AuthContextProvider>{children}</AuthContextProvider>
        </LoadingContextProvider>
      </AlertContextProvider>
    </>
  )
}

export default ContextProvider
