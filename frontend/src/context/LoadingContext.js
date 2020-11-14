import React, { createContext, useState } from "react"

export const LoadingContext = createContext()

const LoadingContextProvider = (props) => {
  const [mainLoading, setMainLoading] = useState(false)
  const [postsLoading, setPostsLoading] = useState(false)
  const [fetchLoading, setFetchLoading] = useState(false)

  return (
    <LoadingContext.Provider
      value={{
        mainLoading,
        setMainLoading,
        postsLoading,
        setPostsLoading,
        fetchLoading,
        setFetchLoading,
      }}
    >
      {props.children}
    </LoadingContext.Provider>
  )
}

export default LoadingContextProvider
