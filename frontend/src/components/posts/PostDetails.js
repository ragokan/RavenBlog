import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { PostContext } from "../../context/PostContext"

import Comments from "./Comments"
import DeletePost from "./DeletePost"
import LikeDislike from "./LikeDislike"

let defaultimg =
  "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png"

const PostDetails = ({
  match: {
    params: { id },
  },
}) => {
  const { posts } = useContext(PostContext)
  const { user, allUsers } = useContext(AuthContext)
  let post

  if (posts) {
    let foundPost = posts.find((post) => post._id === id)
    post = foundPost

    if (!foundPost)
      return (
        <div className="center">
          <h1>There are no post with this id, it may also be deleted!</h1>
          <Link to="/" className="btn-large">
            Click here if you want to go main page!
          </Link>
        </div>
      )
  }
  let currentUser =
    allUsers &&
    user &&
    allUsers.find((foundUser) => foundUser._id === post.author._id)

  return post ? (
    <>
      <div className="card grey lighten-5 z-depth-3">
        {user && post.author._id === user._id && (
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
            <Link className="tealLink" to="">
              {post.title}
            </Link>
          </span>
          <p>{post.body}</p>
        </div>

        <LikeDislike post={post} />

        <div className="card-action">
          <Comments comments={post.comments} id={post._id} details={true} />
        </div>
      </div>
    </>
  ) : null
}

export default PostDetails
