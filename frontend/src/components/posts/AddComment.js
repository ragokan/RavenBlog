import React from "react"

const AddComment = () => {
  return (
    <>
      <h5 className=" center">Add your comment!</h5>
      <div className="row">
        <form className="col-md">
          <div className="row">
            <div className="input-field col s8 ">
              <input id="name" type="text" className="validate " />
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
