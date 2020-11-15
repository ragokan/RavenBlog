import api from "../utils/api"

const getUserAction = (token, setToken, setUser, addAlert, setLoading) => {
  setLoading(true)
  let config = {
    headers: {
      "auth-token": token,
    },
  }

  if (!token || token == null) {
    setLoading(false)
    return
  }
  api
    .get("/getuser", config)
    .then((res) => {
      setUser(res.data)
      api.defaults.headers.common["auth-token"] = token
      localStorage.setItem("authtoken", token)
      setLoading(false)
      addAlert("Logged in successfully!", "success", 2500)
    })
    .catch(() => {
      setToken(null)
      setUser(null)
      localStorage.removeItem("authtoken")
      addAlert(
        "Problem happened while trying to get user info, please try again!",
        "danger"
      )
      setLoading(false)
    })
}

const logoutAction = (setToken, setUser, addAlert, setLoading) => {
  setLoading(true)
  async function reset() {
    localStorage.removeItem("authtoken")
    setToken(null)
    setUser(null)
    setLoading(false)
  }

  api
    .post("/logout")
    .then(() => {
      reset().then(() => {
        addAlert("Logged out successfully!", "info", 3000)
      })
    })
    .catch((err) => {
      reset().then(() => {
        addAlert(err.response && err.response.data, "danger")
      })
    })
}

const loginAction = (user, setToken, addAlert, setLoading) => {
  setLoading(true)
  api
    .post("/login", user)
    .then((res) => {
      setToken(res.data)
      setLoading(false)
    })
    .catch((err) => {
      setToken(null)
      addAlert(err.response && err.response.data, "danger")
      setLoading(false)
    })
}

const registerAction = (user, setToken, addAlert, setLoading, setAllUsers) => {
  setLoading(true)
  api
    .post("/register", user)
    .then((res) => {
      setToken(res.data)
      addAlert("Registered successfully!", "success")
      setLoading(false)
      getAllUsersAction(setAllUsers, addAlert, setLoading)
    })
    .catch((err) => {
      setToken(null)
      addAlert(err.response && err.response.data, "danger")
      setLoading(false)
    })
}

const getAllUsersAction = (setAllUsers, addAlert, setMainLoading) => {
  setMainLoading(true)
  api
    .get("/users")
    .then((res) => {
      setAllUsers(res.data)
      setMainLoading(false)
    })
    .catch((err) => {
      addAlert(err.response && err.response.data, "danger")
      setMainLoading(false)
    })
}

export {
  registerAction,
  getUserAction,
  logoutAction,
  loginAction,
  getAllUsersAction,
}
