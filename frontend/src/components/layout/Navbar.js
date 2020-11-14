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
      <nav className="teal">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            Raven
          </Link>
          <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {user ? <UserLinks /> : <GuestLinks />}
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        {user ? <UserLinks /> : <GuestLinks />}
      </ul>
    </>
  )
}

export default Navbar
