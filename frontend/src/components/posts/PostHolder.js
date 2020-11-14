import React, { useContext } from "react"
import PostObject from "./PostObject"
import { PostContext } from "../../context/PostContext"
import { AuthContext } from "../../context/AuthContext"

const PostHolder = () => {
  const { posts } = useContext(PostContext)
  const { user } = useContext(AuthContext)
  return (
    <div>
      <div className="row">
        <div className="col s12 m8">
          {posts.map((post) => (
            <PostObject key={post._id} post={post} user={user && user._id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostHolder
