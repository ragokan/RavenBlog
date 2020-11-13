import React, { createContext, useContext, useState } from "react"
import { LoadingContext } from "./LoadingContext"
import { AlertContext } from "./AlertContext"
import { getPostsAction, addPostAction } from "./actions/PostActions"

export const PostContext = createContext()

const PostContextProvider = (props) => {
  const { addAlert } = useContext(AlertContext)
  const { setPostsLoading, setMainLoading } = useContext(LoadingContext)
  const [posts, setPosts] = useState([])

  function getPosts() {
    getPostsAction(setPosts, setPostsLoading, addAlert)
  }

  function addPost(post, success) {
    addPostAction(post, posts, setPosts, addAlert, success, setMainLoading)
  }

  return (
    <PostContext.Provider value={{ posts, setPosts, getPosts, addPost }}>
      {props.children}
    </PostContext.Provider>
  )
}

export default PostContextProvider
