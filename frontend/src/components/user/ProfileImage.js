import React, { useContext, useRef, useState } from "react"
import { AlertContext } from "../../context/AlertContext"
import { AuthContext } from "../../context/AuthContext"

let defaultimg =
  "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png"

const ProfileImage = () => {
  const { user } = useContext(AuthContext)
  const { addAlert } = useContext(AlertContext)
  const imageInputRef = useRef()
  const [file, setFile] = useState(null)
  const types = ["image/png", "image/jpeg", "image/jpg"]

  const updateImage = (e) => {
    e.preventDefault()
    let selectedImage = imageInputRef.current.files[0]
    if (selectedImage && types.includes(selectedImage.type)) {
      setFile(imageInputRef.current.files[0])
    } else {
      setFile(null)
      addAlert("You can only upload images! - (png/jpg)", "danger", 3000)
    }
  }

  return (
    <div>
      <div className="dashboardProfile">
        <h5>Your current profile image :</h5>
        <img
          src={user.picture ? user.picture : defaultimg}
          alt="Profile img is not found"
          className="circle responsive-img"
        />
        <form onSubmit={(e) => updateImage(e)} className="container">
          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input type="file" ref={imageInputRef} />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>
          <button className="btn-large">Update!</button>
        </form>
        <br />
      </div>
    </div>
  )
}

export default ProfileImage
