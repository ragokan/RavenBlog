import { motion } from "framer-motion"
import moment from "moment"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import Comments from "../posts/Comments"
import LikeDislike from "../posts/LikeDislike"

let defaultimg =
  "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png"

const FilteredPosts = ({ post }) => {
  const { allUsers } = useContext(AuthContext)

  let currentUser =
    allUsers && allUsers.find((foundUser) => foundUser._id === post.author._id)

  return (
    <>
      <motion.div
        className="card grey lighten-5 z-depth-3"
        layout="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
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
}

export default FilteredPosts
