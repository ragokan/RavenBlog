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
