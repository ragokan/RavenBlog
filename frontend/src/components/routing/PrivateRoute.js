import React, { useContext } from "react"
import { Link, Route } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <>
            <h3 className="center">
              To see this page, you have to <Link to="/login">Login!</Link>
            </h3>
          </>
        )
      }
    ></Route>
  )
}

export default PrivateRoute
