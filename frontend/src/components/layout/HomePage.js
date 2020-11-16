import React from "react"
import PostHolder from "../posts/PostHolder"
import News from "./News"

const HomePage = () => {
  return (
    <div>
      <div className="row">
        <div className="col m8 s12">
          <PostHolder />
        </div>
        <div className="col m4">
          <News />
        </div>
      </div>
    </div>
  )
}

export default HomePage
