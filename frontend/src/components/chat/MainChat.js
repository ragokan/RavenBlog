import React, { useEffect, useRef } from "react"

import ChatMessage from "./ChatMessage"
import FirestoreContext from "../../context/FirestoreContext"
import AddMessage from "./AddMessage"

const MainChat = () => {
  const { docs } = FirestoreContext("messages")
  var array = docs.slice(Math.max(docs.length - 20, 1))
  const bottomText = useRef()
  const scrollToBot = () =>
    bottomText.current.scrollIntoView({ behavior: "smooth" })

  useEffect(() => {
    scrollToBot()
  }, [array])

  return (
    <>
      <div className="messages">
        <div>
          <div className="row chat">
            <div>
              {array &&
                array.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
              <p
                ref={bottomText}
                className="chatmessage oneMessage card teal col s12 evenBelow"
              ></p>
            </div>

            <div className="messageInput">
              <AddMessage scroll={scrollToBot} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainChat
