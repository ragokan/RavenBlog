import { motion } from "framer-motion"
import moment from "moment"
import React, { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import ReactEmoji from "react-emoji"

const ChatMessage = ({ message }) => {
  const { user } = useContext(AuthContext)
  let status = message.userId === user._id
  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`card teal col s7 white-text oneMessage ${
          status ? "right" : "left"
        }`}
      >
        <motion.div>
          <motion.p className="chatmessage">
            <motion.img
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={message.picture}
              alt="avatarofpublisher"
              className="chatimg"
            />{" "}
            {message.fullname} : {ReactEmoji.emojify(message.text)}
          </motion.p>
        </motion.div>
        <div className={`gray-text timestamp  ${!status ? "right" : "left"}`}>
          {message &&
            message.createdAt &&
            moment(message.createdAt.toDate()).calendar()}
        </div>
      </motion.div>
    </>
  )
}

export default ChatMessage
