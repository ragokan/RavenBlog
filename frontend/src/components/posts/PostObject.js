import { motion } from "framer-motion"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { LoadingContext } from "../../context/LoadingContext"
import Comments from "./Comments"
import DeletePost from "./DeletePost"
import LikeDislike from "./LikeDislike"
import moment from "moment"

let defaultimg =
  "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png"

const PostObject = ({ post, user }) => {
  const { postsLoading } = useContext(LoadingContext)
  const { allUsers } = useContext(AuthContext)

  let currentUser =
    allUsers &&
    user &&
    allUsers.find((foundUser) => foundUser._id === post.author._id)

  const PostLoadedItems = (
    <>
      <motion.div
        className="card grey lighten-5 z-depth-3"
        layout="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {user && post.author._id === user && (
          <>
            <Link
              to={`/editPost/${post._id}`}
              className="btn-floating halfway-fab waves-effect waves-light teal lighten-1"
            >
              <i className="material-icons">edit</i>
            </Link>
            <DeletePost postid={post._id} />
          </>
        )}
        <div className="card-content ">
          <span className="card-title">
            <div className="postprofileimg left">
              <img
                src={
                  currentUser && currentUser.picture
                    ? currentUser.picture
                    : defaultimg
                }
                alt="Profile img is not found"
                className="circle responsive-img"
              />
            </div>
            <Link className="tealLink" to={`/postDetails/${post._id}`}>
              {post.title}
            </Link>
          </span>
          <motion.p layout>
            By{" "}
            <Link className="tealLink" to={`/profiles/${post.author._id}`}>
              {post.author.fullname}
            </Link>{" "}
            Posted at {moment(post.createdAt).calendar()} by{" "}
          </motion.p>
        </div>

        <LikeDislike post={post} />

        <div className="card-action">
          <Comments comments={post.comments} id={post._id} />
        </div>
      </motion.div>
    </>
  )

  const PostNotLoadedItems = (
    <>
      <motion.div
        className="card grey lighten-5 z-depth-3"
        layout="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="card-content ">
          <span className="card-title">
            <div className="tealLink">
              <h4>Posts loading</h4>
              <div className="progress">
                <div className="indeterminate"></div>
              </div>
            </div>
          </span>
          <p>
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          </p>
        </div>
        <div className="card-action">
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        </div>
      </motion.div>
    </>
  )

  return (
    <div>{String(postsLoading) ? PostLoadedItems : PostNotLoadedItems}</div>
  )
}

export default PostObject
