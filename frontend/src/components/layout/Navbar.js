import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import GuestLinks from "./GuestLinks"
import UserLinks from "./UserLinks"
import { AuthContext } from "../../context/AuthContext"

const Navbar = ({ user }) => {
  const { token, setToken } = useContext(AuthContext)

  useEffect(() => {
    if (token) return
    const storageToken = localStorage.getItem("authtoken")

    setToken(storageToken)
  }, [token, setToken])

  return (
    <>
      <nav className="deep-orange">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            Auth App
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {user ? <UserLinks /> : <GuestLinks />}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
