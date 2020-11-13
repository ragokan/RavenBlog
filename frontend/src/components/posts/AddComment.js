import React from "react"

const AddComment = () => {
  return (
    <>
      <h5 className="white-text">Add your comment!</h5>
      <div className="row">
        <form className="col-md">
          <div className="row">
            <div className="input-field col s8 white-text">
              <input id="name" type="text" className="validate white-text" />
              <label htmlFor="name" className="white-text">
                Comment
              </label>
            </div>
            <div className="input-field col s4 white-text">
              <button
                className="btn waves-effect waves-light green white-text"
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
