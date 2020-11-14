import React from "react"
import { Link } from "react-router-dom"

import Comments from "./Comments"
import DeletePost from "./DeletePost"
import LikeDislike from "./LikeDislike"

const PostObject = ({ post, user }) => {
  return (
    <>
      <div className="card grey lighten-5 z-depth-3">
        {user && post.author._id === user && (
          <>
            <button className="btn-floating halfway-fab waves-effect waves-light teal lighten-1">
              <i className="material-icons">edit</i>
            </button>
            <DeletePost postid={post._id} />
          </>
        )}
        <div className="card-content ">
          <span className="card-title">
            <Link className="tealLink" to="">
              {post.title}
            </Link>
          </span>
          <p>{post.body}</p>
        </div>

        <LikeDislike post={post} />

        <div className="card-action">
          <Comments comments={post.comments} id={post._id} />
        </div>
      </div>
    </>
  )
}

export default PostObject
