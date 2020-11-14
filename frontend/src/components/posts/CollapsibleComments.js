import { motion } from "framer-motion"
import React from "react"
import { Collapsible, CollapsibleItem, Icon } from "react-materialize"
import { Link } from "react-router-dom"
import AddComment from "./AddComment"

const CollapsibleComments = ({ comments, id, user }) => {
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
              <motion.h6
                key={comment._id}
                className=""
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Link
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mr-n1 tealLink"
                  to={`/profiles/${comment.user}`}
                >
                  {comment.fullname}
                </Link>
                : {comment.text}
              </motion.h6>
            ))
          ) : (
            <div>There are no comment yet, why don't you add one ?</div>
          )}
          <hr />
          {user ? (
            <AddComment id={id} />
          ) : (
            <div>
              <h6>
                You have to{" "}
                <Link className="tealLink mr-n1" to="/login">
                  Login
                </Link>{" "}
                to add comment.
              </h6>
            </div>
          )}
        </CollapsibleItem>
      </Collapsible>
    </div>
  )
}

export default CollapsibleComments
