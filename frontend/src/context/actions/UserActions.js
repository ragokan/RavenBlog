import api from "../utils/api";

export const updateAboutAction = (about, user, setUser, setMainLoading, addAlert, allUsers, setAllUsers) => {
  api
    .patch("/profile/about", { about })
    .then((res) => {
      let newUser = { ...user };
      newUser.about = res.data;
      setUser(newUser);

      let ourUsers = Array.from(allUsers);
      let currentUser = ourUsers.findIndex((aUser) => aUser._id === user._id);
      ourUsers[currentUser] = newUser;
      setAllUsers(ourUsers);

      addAlert("About me updated successfully!", "success", 2500);
    })
    .catch((err) => {
      addAlert(err.response ? err.response.data : "Error happened, please try again!", "danger", 2500);
    });
};

export const updateProfileAction = (picture, user, setUser, setMainLoading, addAlert, allUsers, setAllUsers) => {
  api
    .patch("/profile/picture", { picture })
    .then((res) => {
      let newUser = { ...user };
      newUser.picture = res.data;
      setUser(newUser);

      let ourUsers = Array.from(allUsers);
      let currentUser = ourUsers.findIndex((aUser) => aUser._id === user._id);
      ourUsers[currentUser] = newUser;
      setAllUsers(ourUsers);

      addAlert("Profile picture updated successfully!", "success", 3500);
    })
    .catch((err) => {
      addAlert(err.response ? err.response.data : "Error happened, please try again!", "danger", 2500);
    });
};
