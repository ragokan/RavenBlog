import React from "react"
import { Link } from "react-router-dom"

import moment from "moment"
import Comments from "./Comments"

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

        <div className="card-action">
          <Comments comments={post.comments} />
        </div>
      </div>
    </>
  )
}

export default PostObject
