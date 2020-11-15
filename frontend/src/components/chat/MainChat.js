import React, { useEffect, useRef } from "react"

import ChatMessage from "./ChatMessage"
import FirestoreContext from "../../context/FirestoreContext"
import AddMessage from "./AddMessage"
import { motion } from "framer-motion"

const MainChat = ({ showing }) => {
  const { docs } = FirestoreContext("messages")
  var array = docs.slice(Math.max(docs.length - 20, 1))
  const bottomText = useRef()
  const scrollToBot = () =>
    bottomText.current.scrollIntoView({ behavior: "smooth" })

  useEffect(() => {
    scrollToBot()
  }, [array, showing])

  useEffect(() => {
    scrollToBot()
  }, [])

  return (
    <div className="chatHolder">
      <motion.div
        className="messages z-depth-5"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div>
          <motion.div
            className="row chat"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default MainChat
