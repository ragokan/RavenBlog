import React, { createContext, useState } from "react"

export const LoadingContext = createContext()

const LoadingContextProvider = (props) => {
  const [userLoading, setUserLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ userLoading, setUserLoading }}>
      {props.children}
    </LoadingContext.Provider>
  )
}

export default LoadingContextProvider
