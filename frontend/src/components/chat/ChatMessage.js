import React, { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const ChatMessage = ({ message }) => {
  const { user } = useContext(AuthContext)
  let status = message.userId === user._id
  return (
    <>
      <div
        className={`card teal col s7 white-text oneMessage ${
          status ? "right" : "left"
        }`}
      >
        <div>
          <p className="chatmessage">
            <img
              src={message.picture}
              alt="avatarofpublisher"
              className="chatimg"
            />{" "}
            {message.fullname} : {message.text}
          </p>
        </div>
      </div>
    </>
  )
}

export default ChatMessage
