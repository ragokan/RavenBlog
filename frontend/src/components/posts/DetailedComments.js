import { motion } from "framer-motion"
import React from "react"
import { Link } from "react-router-dom"
import AddComment from "./AddComment"

const DetailedComments = ({ comments, id, user }) => {
  return (
    <div>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <motion.h6
            key={comment._id}
            className=""
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link className="mr-n1 tealLink" to={`/profiles/${comment.user}`}>
              {comment.fullname}
            </Link>
            : {comment.text}
          </motion.h6>
        ))
      ) : (
        <div>There are no comment yet, why don't you add one ?</div>
      )}
      <hr />
      {user ? (
        <AddComment id={id} />
      ) : (
        <div>
          <h6>
            You have to{" "}
            <Link className="tealLink mr-n1" to="/login">
              Login
            </Link>{" "}
            to add comment.
          </h6>
        </div>
      )}
    </div>
  )
}

export default DetailedComments
