import React, { createContext, useContext, useState } from "react"
import { LoadingContext } from "./LoadingContext"
import { AlertContext } from "./AlertContext"
import { getPostsAction } from "./actions/PostActions"

export const PostContext = createContext()

const PostContextProvider = (props) => {
  const { addAlert } = useContext(AlertContext)
  const { setPostsLoading } = useContext(LoadingContext)
  const [posts, setPosts] = useState([])

  function getPosts() {
    getPostsAction(setPosts, setPostsLoading, addAlert)
  }

  return (
    <PostContext.Provider value={{ posts, setPosts, getPosts }}>
      {props.children}
    </PostContext.Provider>
  )
}

export default PostContextProvider
