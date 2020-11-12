import React, { useContext } from "react"
import { AlertContext } from "../../context/AlertContext"
import Alert from "./Alert"
import { motion } from "framer-motion"

const AlertHolder = () => {
  const { alerts } = useContext(AlertContext)

  return (
    <div>
      <motion.div layout className="mynotify">
        <motion.div layout className="row">
          <motion.div layout className="col">
            {alerts &&
              alerts.map((alert) => (
                <Alert
                  key={alert.id}
                  color={alert.color}
                  message={alert.message}
                />
              ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AlertHolder
