import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const UserLinks = ({ id }) => {
  const { logoutUser } = useContext(AuthContext)

  return (
    <>
      <li>
        <Link to="/createPost">Create Post</Link>
      </li>
      <li>
        <Link to={`/profiles/${id}`}>Profile</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="#" onClick={() => logoutUser()}>
          Logout
        </Link>
      </li>
    </>
  )
}

export default UserLinks
