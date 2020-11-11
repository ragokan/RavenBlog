import React, { useContext } from "react"
import { AlertContext } from "../../context/AlertContext"
import Alert from "./Alert"

const AlertHolder = () => {
  const { alerts } = useContext(AlertContext)

  return (
    <div>
      <div className="mynotify">
        <div className="row">
          <div className="col">
            {alerts &&
              alerts.map((alert) => (
                <Alert
                  key={alert.id}
                  color={alert.color}
                  message={alert.message}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlertHolder
