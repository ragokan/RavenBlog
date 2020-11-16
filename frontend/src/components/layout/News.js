import React from "react"
import { Link } from "react-router-dom"
import FirestoreContext from "../../context/FirestoreContext"

const News = () => {
  const { docs } = FirestoreContext("news")
  return (
    <div>
      <ul className="collection">
        <li className="collection-header center">
          <h4>Last Activities</h4>
        </li>
        <li className="collection-item"></li>

        {docs
          .slice(0)
          .reverse()
          .map((doc) => (
            <li key={doc.id} className="collection-item">
              <Link to={`/profiles/${doc.user}`}>{doc.fullname}</Link> has just{" "}
              {doc.type === "POST" ? `published a new` : "registered!"}
              {doc.type === "POST" && (
                <Link to={`postDetails/${doc.post}`}> Post</Link>
              )}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default News
