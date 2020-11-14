import React, { useContext, useState } from "react"
import { PostContext } from "../../context/PostContext"

const AddComment = ({ id }) => {
  const { addComment } = useContext(PostContext)
  const [comment, setComment] = useState("")

  const commentForm = (e) => {
    e.preventDefault()
    addComment(id, comment)
    setComment("")
  }

  return (
    <>
      <h5 className=" center">Add your comment!</h5>
      <div className="row">
        <form className="col-md" onSubmit={(e) => commentForm(e)}>
          <div className="row">
            <div className="input-field col s8 ">
              <input
                id="name"
                type="text"
                className="validate"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <label htmlFor="name" className="">
                Comment
              </label>
            </div>
            <div className="input-field col s4 ">
              <button
                className="btn waves-effect waves-light green "
                type="submit"
              >
                Add Comment!
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddComment
