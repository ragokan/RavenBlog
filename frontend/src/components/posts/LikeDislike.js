import React, { useContext } from "react"
import moment from "moment"
import { PostContext } from "../../context/PostContext"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"

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
    <div className="card-action ">
      <p>
        Posted {moment(post.createdAt).calendar()} by{" "}
        <Link className="tealLink" to={`/profiles/${post.author._id}`}>
          {post.author.fullname}
        </Link>
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
