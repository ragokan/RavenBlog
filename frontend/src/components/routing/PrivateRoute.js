import React, { useContext } from "react"
import { Link, Route } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { LoadingContext } from "../../context/LoadingContext"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext)
  const { mainLoading } = useContext(LoadingContext)
  if (mainLoading) return null

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
