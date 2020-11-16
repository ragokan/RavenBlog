import React, { useContext, useEffect } from "react"
import FirebaseContext from "../../context/FirebaseContext"
import { AlertContext } from "../../context/AlertContext"
import { LoadingContext } from "../../context/LoadingContext"
import { UserContext } from "../../context/UserContext"

const UploadImage = ({ file, setFile }) => {
  const { addAlert } = useContext(AlertContext)
  const { updateProfile } = useContext(UserContext)
  const { setMainLoading } = useContext(LoadingContext)
  const { url, progress, error } = FirebaseContext(file)

  console.log(error)

  useEffect(
    () => {
      error && addAlert(error, "danger", 4000)
      progress < 99 ? setMainLoading(true) : setMainLoading(false)
      url && updateProfile(url)
      url && setFile(null)
    },
    /*eslint-disable*/ [url]
  )
  return <div>Uploading</div>
}

export default UploadImage
