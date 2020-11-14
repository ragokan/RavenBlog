import React, { createContext, useContext, useState } from "react"
import { LoadingContext } from "./LoadingContext"
import { AlertContext } from "./AlertContext"
import {
  getPostsAction,
  addPostAction,
  addLikeAction,
  adddisLikeAction,
  deletePostAction,
  addCommentAction,
  editPostAction,
} from "./actions/PostActions"

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

  function likePost(id) {
    addLikeAction(id, posts, setPosts, addAlert)
  }

  function dislikePost(id) {
    adddisLikeAction(id, posts, setPosts, addAlert)
  }

  function deletePost(id) {
    deletePostAction(id, posts, setPosts, addAlert, setMainLoading)
  }

  function addComment(id, comment) {
    addCommentAction(id, comment, posts, setPosts, addAlert)
  }

  function editPost(id, post, callback) {
    editPostAction(
      id,
      post,
      posts,
      setPosts,
      addAlert,
      setMainLoading,
      callback
    )
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        getPosts,
        addPost,
        likePost,
        dislikePost,
        deletePost,
        addComment,
        editPost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  )
}

export default PostContextProvider
