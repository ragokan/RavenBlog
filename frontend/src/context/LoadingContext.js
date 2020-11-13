import React, { createContext, useState } from "react"

export const LoadingContext = createContext()

const LoadingContextProvider = (props) => {
  const [userLoading, setUserLoading] = useState(false)
  const [postsLoading, setPostsLoading] = useState(false)

  return (
    <LoadingContext.Provider
      value={{ userLoading, setUserLoading, postsLoading, setPostsLoading }}
    >
      {props.children}
    </LoadingContext.Provider>
  )
}

export default LoadingContextProvider
