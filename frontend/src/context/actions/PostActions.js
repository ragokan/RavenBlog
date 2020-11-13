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
  setPostLoading,
  success
) => {
  setPostLoading(true)
  api
    .post("/posts", post)
    .then((resp) => {
      setPosts([resp.data, ...posts])
      setPostLoading(false)
      addAlert("Post added successfully!", "success")
      success && success()
    })
    .catch((err) => {
      setPostLoading(false)
      addAlert(err.response.data, "danger")
    })
}
