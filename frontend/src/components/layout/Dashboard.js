import React, { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

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
          <br />
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
