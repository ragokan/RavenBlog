import React from "react"
import { Link } from "react-router-dom"
import GuestLinks from "./GuestLinks"
import UserLinks from "./UserLinks"

const Navbar = ({ user }) => {
  return (
    <>
      <nav className="teal lighten-1">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            Raven
          </Link>
          <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {user ? <UserLinks id={user._id} /> : <GuestLinks />}
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        {user ? <UserLinks id={user._id} /> : <GuestLinks />}
      </ul>
    </>
  )
}

export default Navbar
