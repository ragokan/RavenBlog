import React, { useContext, useState } from "react"
import { timestamp } from "../../firebase/Config"
import { addData } from "../../context/actions/FirestoreActions"
import { AuthContext } from "../../context/AuthContext"

let defaultimg =
  "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png"

const AddMessage = ({ scroll }) => {
  const { user } = useContext(AuthContext)
  const [formData, setFormData] = useState("")

  let picture = user.picture ? user.picture : defaultimg

  let sendMessage = async (e) => {
    e.preventDefault()
    let createdAt = timestamp()
    addData("messages", {
      text: formData,
      createdAt,
      fullname: user.fullname,
      picture,
      userId: user._id,
    })
    setFormData("")
  }

  return (
    <div>
      <form onSubmit={(e) => sendMessage(e)} clasName="reduceBot">
        <div className="row s12">
          <div className="input-field col s9">
            <input
              type="text"
              value={formData}
              onChange={(e) => setFormData(e.target.value)}
              placeholder="Type your message here!"
              required
            />
          </div>
          <div className="input-field col s2">
            <button className="btn waves-effect waves-light" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddMessage
