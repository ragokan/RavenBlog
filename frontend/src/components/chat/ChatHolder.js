import React, { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import MainChat from "./MainChat"

const ChatHolder = () => {
  const { user } = useContext(AuthContext)
  const [showing, setShowing] = useState(false)

  if (!user) return null

  return (
    <div>
      <div className="fixed-action-btn">
        <button
          className="btn-floating btn-large teal lighten-1 waves-effect waves-light pulse"
          onClick={() => setShowing(!showing)}
        >
          <i className="large material-icons">chat_bubble</i>
        </button>
      </div>
      {showing && <MainChat showing={showing} />}
    </div>
  )
}

export default ChatHolder
