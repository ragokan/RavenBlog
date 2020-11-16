import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"

const About = () => {
  const { user, updateAbout } = useContext(UserContext)
  const [aboutText, setAboutText] = useState("")

  useEffect(() => {
    user && user.about && setAboutText(user.about)
  }, [user])

  const submitUpdate = () => updateAbout(aboutText)

  return (
    <>
      <div className="row container">
        <h5 className="">Tell us something about yourself!</h5>
        <div className="col s12">
          <div className="input-field col s8">
            <textarea
              id="textarea1"
              className="materialize-textarea"
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
            ></textarea>
            {!aboutText && <label htmlFor="textarea1">About You</label>}
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
