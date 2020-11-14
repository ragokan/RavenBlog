import api from "../utils/api"

export const updateAboutAction = (
  about,
  user,
  setUser,
  setMainLoading,
  addAlert
) => {
  api
    .patch("/profile/about", about)
    .then((res) => {
      setUser({ ...user, about: res.data })

      addAlert("About me updated successfully!", "success", 2500)
      setMainLoading(false)
    })
    .catch((err) => {
      localStorage.removeItem("authtoken")
      addAlert(
        err.response ? err.response.data : "Error happened, please try again!",
        "danger",
        2500
      )
      setMainLoading(false)
    })
}
