import api from "../utils/api"
import { addData } from "./FirestoreActions"
import { timestamp } from "../../firebase/Config"

export const getPostsAction = (setPosts, setPostLoading, addAlert) => {
  setPostLoading(true)
  api
    .get("/posts")
    .then((res) => {
      setPosts(res.data)
      setPostLoading(false)
    })
    .catch((err) => {
      setPosts([])
      setPostLoading(false)
      addAlert(
        err.response.data
          ? err.response.data
          : "Error happened, please try again!",
        "danger"
      )
    })
}

export const addPostAction = (
  post,
  posts,
  setPosts,
  addAlert,
  success,
  setMainLoading
) => {
  setMainLoading(true)
  api
    .post("/posts", post)
    .then((resp) => {
      setPosts([resp.data, ...posts])
      setMainLoading(false)
      addAlert("Post added successfully!", "success")
      success && success()
      const firestoreData = {
        type: "POST",
        user: resp.data.author._id,
        fullname: resp.data.author.fullname,
        post: resp.data._id,
        createdAt: timestamp(),
      }
      addData("news", firestoreData)
    })
    .catch((err) => {
      setMainLoading(false)
      addAlert(
        err.response ? err.response.data : "Error happened, please try again!",
        "danger"
      )
    })
}

export const addLikeAction = (id, posts, setPosts, addAlert) => {
  api
    .post(`/posts/${id}/like`)
    .then((res) => {
      const newPost = res.data
      let allPosts = Array.from(posts)
      let index = allPosts.findIndex((item) => item._id === id)
      allPosts[index].likes = newPost.likes
      allPosts[index].dislikes = newPost.dislikes
      setPosts(allPosts)
      addAlert("You successfully liked the post!", "success", 1500)
    })
    .catch((err) => {
      addAlert(
        err.response.data
          ? err.response.data
          : "Error happened, please try again!",
        "danger",
        2500
      )
    })
}

export const adddisLikeAction = (id, posts, setPosts, addAlert) => {
  api
    .post(`/posts/${id}/dislike`)
    .then((res) => {
      const newPost = res.data
      let allPosts = Array.from(posts)
      let index = allPosts.findIndex((item) => item._id === id)

      allPosts[index].likes = newPost.likes
      allPosts[index].dislikes = newPost.dislikes
      setPosts(allPosts)
      addAlert("You sadly disliked the post!", "info", 1500)
    })
    .catch((err) => {
      addAlert(
        err.response.data
          ? err.response.data
          : "Error happened, please try again!",
        "danger",
        2500
      )
    })
}

export const addCommentAction = (id, comment, posts, setPosts, addAlert) => {
  api
    .post(`/posts/${id}/comment`, { text: comment })
    .then((res) => {
      const newPost = res.data
      let allPosts = Array.from(posts)
      let index = allPosts.findIndex((item) => item._id === id)

      allPosts[index].comments = newPost.comments
      setPosts(allPosts)
      addAlert("You successfully commented on post!", "success", 1500)
    })
    .catch((err) => {
      addAlert(
        err.response.data
          ? err.response.data
          : "Error happened, please try again!",
        "danger",
        2500
      )
    })
}

export const editPostAction = (
  id,
  post,
  posts,
  setPosts,
  addAlert,
  setMainLoading,
  callback
) => {
  setMainLoading(true)
  api
    .patch(`/posts/${id}`, post)
    .then((res) => {
      const newPost = res.data
      let allPosts = Array.from(posts)
      let index = allPosts.findIndex((item) => item._id === id)

      allPosts[index].title = newPost.title
      allPosts[index].body = newPost.body
      setPosts(allPosts)
      addAlert("You successfully updated your post!", "success", 3500)
      setMainLoading(false)
      callback && callback()
    })
    .catch((err) => {
      setMainLoading(false)
      addAlert(
        err.response.data
          ? err.response.data
          : "Error happened, please try again!",
        "danger",
        2500
      )
    })
}

export const deletePostAction = (
  id,
  posts,
  setPosts,
  addAlert,
  setMainLoading
) => {
  setMainLoading(true)
  api
    .delete(`/posts/${id}`)
    .then((res) => {
      setPosts(posts.filter((post) => post._id !== id))
      setMainLoading(false)
      addAlert("You sadly deleted your post.", "info", 2500)
    })
    .catch((err) => {
      setMainLoading(false)
      addAlert(
        err.response ? err.response.data : "Error happened, please try again!",
        "danger",
        2500
      )
    })
}
