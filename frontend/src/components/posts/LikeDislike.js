import React, { useContext } from "react"
import moment from "moment"
import { PostContext } from "../../context/PostContext"

const LikeDislike = ({ post }) => {
  const { likePost } = useContext(PostContext)

  return (
    <div className="card-action white-text">
      <p>
        Posted {moment(post.createdAt).calendar()} by {post.author.fullname}
      </p>
      <div
        className="btn-small green waves-effect waves-light  mr-1"
        onClick={() => likePost(post._id)}
      >
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
