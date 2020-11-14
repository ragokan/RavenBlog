import React, { useContext } from "react"
import moment from "moment"
import { PostContext } from "../../context/PostContext"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

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
    <motion.div
      className="card-action"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.p layout>
        Posted {moment(post.createdAt).calendar()} by{" "}
        <Link className="tealLink" to={`/profiles/${post.author._id}`}>
          {post.author.fullname}
        </Link>
      </motion.p>

      <motion.div
        layout
        className="btn-small green waves-effect waves-light  mr-1"
        onClick={() => likePost(post._id)}
      >
        <motion.i className="material-icons left">thumb_up</motion.i>
        {post.likes.length} {likeStatus && "- You liked :)"}
      </motion.div>
      <motion.div
        layout
        className="btn-small red waves-effect waves-light"
        onClick={() => dislikePost(post._id)}
      >
        <motion.i className="material-icons left">thumb_down</motion.i>
        {post.dislikes.length} {dislikeStatus && "- You disliked :("}
      </motion.div>
    </motion.div>
  )
}

export default LikeDislike
