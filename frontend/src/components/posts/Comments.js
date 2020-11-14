import React from "react"
import { Collapsible, CollapsibleItem, Icon } from "react-materialize"
import { Link } from "react-router-dom"
import AddComment from "./AddComment"

const Comments = ({ comments, id }) => {
  return (
    <div>
      <Collapsible accordion>
        <CollapsibleItem
          expanded={false}
          header={`Comments (${comments.length})`}
          icon={<Icon>comment</Icon>}
          node="div"
        >
          {comments.length > 0 ? (
            comments.map((comment) => (
              <h6 key={comment._id} className="">
                <Link className="mr-n1 tealLink" to="/">
                  {comment.fullname}
                </Link>
                : {comment.text}
              </h6>
            ))
          ) : (
            <div className=" center">
              There are no comment yet, why don't you add one ?
            </div>
          )}
          <hr />
          <AddComment id={id} />
        </CollapsibleItem>
      </Collapsible>
    </div>
  )
}

export default Comments
