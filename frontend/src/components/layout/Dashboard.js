import React, { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import About from "../user/About"
import ProfileImage from "../user/ProfileImage"

const Dashboard = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      {user ? (
        <div className="card grey lighten-5 z-depth-3 center ">
          <br />
          <h3>Your Account</h3>
          <div className="card-content">
            <span className="card-title">{user.fullname}</span>
            <p>{user.email}</p>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <ProfileImage />
            </div>
            <div className="col s12 m6">
              <About />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="card grey lighten-5 hoverable  center">
            <br />
            <div className="card-content">
              <span className="card-title">
                If you log in, you will see your profile here!
              </span>
            </div>
            <br />
          </div>
        </div>
      )}
    </>
  )
}

export default Dashboard
