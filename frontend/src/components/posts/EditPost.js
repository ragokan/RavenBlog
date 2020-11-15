import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "../../context/PostContext"

const EditPost = ({
  history,
  match: {
    params: { id },
  },
}) => {
  const { editPost, posts } = useContext(PostContext)
  useEffect(() => {
    if (posts) {
      let foundPost = posts.find((post) => post._id === id)
      if (!foundPost) return history.push("/")
      setTitle(foundPost.title)
      setBody(foundPost.body)
    }
  }, [posts, id, history])

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    let post = {
      title,
      body,
    }

    editPost(id, post, () => history.push(`/postDetails/${id}`))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="col s12 center mt-1">
        <div className="row">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="text"
                type="text"
                className="validate"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              {!title && <label htmlFor="text">Title</label>}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="textarea1"
                className="materialize-textarea"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              ></textarea>
              {!body && <label htmlFor="textarea1">Body</label>}
            </div>
          </div>
        </div>
        <button className="btn-large teal waves-effect waves-light">
          Edit Post!
        </button>
      </div>
    </form>
  )
}

export default EditPost
