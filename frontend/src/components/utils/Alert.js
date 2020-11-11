import React from "react"

const Alert = ({ color, message }) => {
  return (
    <div className={`card ${color === "success" ? "green " : "red darken-1"} `}>
      <div className="card-content white-text">
        <p>{message || "This is an empty green alert."}</p>
      </div>
    </div>
  )
}

export default Alert
