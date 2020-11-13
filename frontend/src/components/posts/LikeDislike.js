import React, { useContext } from "react"
import moment from "moment"
import { PostContext } from "../../context/PostContext"
import { AuthContext } from "../../context/AuthContext"

const LikeDislike = ({ post }) => {
  const { likePost, dislikePost } = useContext(PostContext)
  const { user } = useContext(AuthContext)

  let likeStatus = false
  let dislikeStatus = false
  if (user && post.likes) {
    likeStatus = post.likes.some((like) => like.user === user._id)
  }

  if (user && post.dislikes) {
    dislikeStatus = post.dislikes.some((dislike) => dislike.user === user._id)
  }

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
        {post.likes.length} {likeStatus && "- You liked :)"}
      </div>
      <div
        className="btn-small red waves-effect waves-light"
        onClick={() => dislikePost(post._id)}
      >
        <i className="material-icons left">thumb_down</i>
        {post.dislikes.length} {dislikeStatus && "- You disliked :("}
      </div>
    </div>
  )
}

export default LikeDislike
