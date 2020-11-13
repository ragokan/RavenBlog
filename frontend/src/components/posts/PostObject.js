import React from "react"

import Comments from "./Comments"
import LikeDislike from "./LikeDislike"

const PostObject = ({ post, user }) => {
  return (
    <>
      <div className="card deep-orange hoverable">
        {user && post.author._id === user && (
          <>
            <button className="btn-floating halfway-fab waves-effect waves-light teal lighten-1">
              <i className="material-icons">edit</i>
            </button>
            <button className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">close</i>
            </button>
          </>
        )}
        <div className="card-content white-text">
          <span className="card-title">{post.title}</span>
          <p>{post.body}</p>
        </div>

        <LikeDislike post={post} />

        <div className="card-action">
          <Comments comments={post.comments} />
        </div>
      </div>
    </>
  )
}

export default PostObject
