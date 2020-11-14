import React, { useContext } from "react"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import Register from "../auth/Register"
import Login from "../auth/Login"
import Dashboard from "../layout/Dashboard"
import Navbar from "../layout/Navbar"
import Profile from "../user/Profile"
import AlertHolder from "../utils/AlertHolder"
import Spinner from "../utils/Spinner"
import { AuthContext } from "../../context/AuthContext"
import HomePage from "../layout/HomePage"
import CreatePost from "../posts/CreatePost"
import EditPost from "../posts/EditPost"
import PostDetails from "../posts/PostDetails"

const Routes = () => {
  const { user } = useContext(AuthContext)
  return (
    <>
      <Router>
        <Navbar user={user} />
        <Spinner />
        <AlertHolder />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login}>
              {user && <Redirect to="/" />}
            </Route>
            <Route exact path="/register" component={Register}>
              {user && <Redirect to="/" />}
            </Route>
            <PrivateRoute exact path="/profile/:id" component={Profile} />
            <PrivateRoute exact path="/createPost" component={CreatePost} />
            <PrivateRoute exact path="/editPost/:id" component={EditPost} />
            <Route exact path="/postDetails/:id" component={PostDetails} />
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default Routes
