import React, { useContext, useState } from "react"
import { PostContext } from "../../context/PostContext"

const CreatePost = ({ history }) => {
  const { addPost } = useContext(PostContext)

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    let post = {
      title,
      body,
    }

    addPost(post, () => history.push("/"))
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
              <label htmlFor="text">Title</label>
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
              <label htmlFor="textarea1">Body</label>
            </div>
          </div>
        </div>
        <button className="btn-large deep-orange waves-effect waves-light">
          Add Post!
        </button>
      </div>
    </form>
  )
}

export default CreatePost
