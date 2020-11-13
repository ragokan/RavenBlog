import api from "../utils/api"

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
      addAlert(`Some network problem happened, please try again! `, "danger")
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
    })
    .catch((err) => {
      setMainLoading(false)
      addAlert(
        err.response.data
          ? err.response.data
          : "Error happened, please try again!",
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
      allPosts[index] = newPost
      setPosts(allPosts)
      addAlert("You successfully liked the post!", "success", 2000)
    })
    .catch((err) => {
      addAlert(
        err.response.data
          ? err.response.data
          : "Error happened, please try again!",
        "danger"
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
      allPosts[index] = newPost
      setPosts(allPosts)
      addAlert("You sadly disliked the post!", "info", 2000)
    })
    .catch((err) => {
      addAlert(
        err.response.data
          ? err.response.data
          : "Error happened, please try again!",
        "danger"
      )
    })
}
