import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { loginUser } = useContext(AuthContext)

  const loginForm = (e) => {
    e.preventDefault()
    loginUser({ email, password })
  }

  return (
    <div>
      <h4 className="center">Login</h4>
      <div className="row">
        <form className="col s12 center" onSubmit={loginForm}>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                id="email"
                type="email"
                className="validate"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <input
                id="password"
                type="password"
                className="validate"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <button className="waves-effect waves-light btn">
            <i className="material-icons right">login</i>Login
          </button>
        </form>
      </div>
      <div className="center">
        Don't have an account ? <Link to="/register">Register</Link>
      </div>
    </div>
  )
}

export default Login
