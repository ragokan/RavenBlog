import api from "../utils/api";
import { addData } from "./FirestoreActions";
import { timestamp } from "../../firebase/Config";

const getUserAction = (token, setUser, addAlert) => {
  let config = {
    headers: {
      "auth-token": token,
    },
  };

  if (!token || token == null) return;

  api.get("/getuser", config).then((res) => {
    setUser(res.data);
    api.defaults.headers.common["auth-token"] = token;
    localStorage.setItem("authtoken", token);
    addAlert("Logged in successfully!", "success", 2500);
  });
};

const logoutAction = (setToken, setUser, addAlert) => {
  async function reset() {
    localStorage.removeItem("authtoken");
    setToken(null);
    setUser(null);
  }

  api.post("/logout").then(() => {
    reset().then(() => {
      addAlert("Logged out successfully!", "info", 3000);
    });
  });
};

const loginAction = (user, setToken) => {
  api.post("/login", user).then((res) => {
    setToken(res.data);
  });
};

const registerAction = (user, setToken, addAlert, setAllUsers) => {
  api.post("/register", user).then((res) => {
    setToken(res.data);
    addAlert("Registered successfully!", "success");

    getAllUsersAction(setAllUsers, addAlert);

    let config = {
      headers: {
        "auth-token": res.data,
      },
    };
    api.get("/getuser", config).then((res) => {
      const firestoreData = {
        type: "USER",
        user: res.data._id,
        fullname: res.data.fullname,
        post: "",
        createdAt: timestamp(),
      };
      addData("news", firestoreData);
    });
  });
};

const getAllUsersAction = (setAllUsers) => {
  api.get("/users").then((res) => {
    setAllUsers(res.data);
  });
};

export { registerAction, getUserAction, logoutAction, loginAction, getAllUsersAction };
