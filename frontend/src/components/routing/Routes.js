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
import ChatHolder from "../chat/ChatHolder"
import AboutRaven from "../layout/AboutRaven"
import Search from "../search/Search"

const Routes = () => {
  const { user } = useContext(AuthContext)
  return (
    <>
      <Router>
        <Navbar user={user} />
        <Spinner />
        <AlertHolder />
        <ChatHolder />
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
            <Route exact path="/profiles/:id" component={Profile} />
            <PrivateRoute exact path="/createPost" component={CreatePost} />
            <PrivateRoute exact path="/editPost/:id" component={EditPost} />
            <Route exact path="/postDetails/:id" component={PostDetails} />
            <Route exact path="/aboutRaven" component={AboutRaven} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default Routes
