import React from "react"
import moment from "moment"

const LikeDislike = ({ post }) => {
  return (
    <div className="card-action white-text">
      <p>
        Posted {moment(post.createdAt).calendar()} by {post.author.fullname}
      </p>
      <div className="btn-small green waves-effect waves-light  mr-1">
        <i className="material-icons left">thumb_up</i>
        {post.likes.length}
      </div>
      <div className="btn-small red waves-effect waves-light">
        <i className="material-icons left">thumb_down</i>
        {post.dislikes.length}
      </div>
    </div>
  )
}

export default LikeDislike
