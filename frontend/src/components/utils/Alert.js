import React from "react"
import { motion } from "framer-motion"

const Alert = ({ color, message }) => {
  let alertColor = "green"
  let alertIcon = "check"
  if (color === "success") {
    alertColor = "green"
    alertIcon = "check"
  } else if (color === "danger") {
    alertColor = "red darken-1"
    alertIcon = "do_not_disturb"
  } else if (color === "info") {
    alertColor = "blue"
    alertIcon = "info"
  }

  return (
    <motion.div layout className={`card ${alertColor} `}>
      <div className="card-content ">
        <p>
          {message || "This is an empty green alert."}
          <i className="material-icons left">{alertIcon}</i>
        </p>
      </div>
    </motion.div>
  )
}

export default Alert
