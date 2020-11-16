import React, { createContext, useState } from "react"

export const LoadingContext = createContext()

const LoadingContextProvider = (props) => {
  const [mainLoading, setMainLoading] = useState(false)
  const [postsLoading, setPostsLoading] = useState(false)

  return (
    <LoadingContext.Provider
      value={{
        mainLoading,
        setMainLoading,
        postsLoading,
        setPostsLoading,
      }}
    >
      {props.children}
    </LoadingContext.Provider>
  )
}

export default LoadingContextProvider
