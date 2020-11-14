import React, { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"

const About = ({ user }) => {
  const { updateAbout } = useContext(UserContext)
  const [aboutText, setAboutText] = useState("")

  user && user.about && setAboutText(user.about)

  const submitUpdate = () => updateAbout(aboutText)

  return (
    <>
      <h5>Tell us something about yourself!</h5>
      <div className="row container">
        <div className="col s12">
          <div className="input-field col s8">
            <textarea
              id="textarea1"
              className="materialize-textarea"
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
            ></textarea>
            <label htmlFor="textarea1">About You</label>
          </div>
          <div className="col s4">
            <button className="btn updateButton" onClick={() => submitUpdate()}>
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
