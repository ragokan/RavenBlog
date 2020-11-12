import React from "react"
import { motion } from "framer-motion"

const Alert = ({ color, message }) => {
  return (
    <motion.div
      layout
      className={`card ${color === "success" ? "green " : "red darken-1"} `}
    >
      <div className="card-content white-text">
        <p>{message || "This is an empty green alert."}</p>
      </div>
    </motion.div>
  )
}

export default Alert
