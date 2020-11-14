import React, { useContext } from "react"
import CollapsibleComments from "./CollapsibleComments"
import DetailedComments from "./DetailedComments"
import { AuthContext } from "../../context/AuthContext"

const Comments = ({ comments, id, details }) => {
  const { user } = useContext(AuthContext)
  return !details ? (
    <div>
      <CollapsibleComments comments={comments} id={id} user={user} />
    </div>
  ) : (
    <div>
      <DetailedComments comments={comments} id={id} user={user} />
    </div>
  )
}

export default Comments
