import React, { useContext } from "react"
import { Button, Icon, Modal } from "react-materialize"
import { PostContext } from "../../context/PostContext"

const DeletePost = ({ postid }) => {
  const { deletePost } = useContext(PostContext)
  const postAction = () => deletePost(postid)

  return (
    <div>
      <Modal
        actions={[
          <Button
            flat
            modal="close"
            node="button"
            waves="green"
            onClick={() => postAction()}
            className="red"
          >
            Yes, delete it!
          </Button>,
          <Button flat modal="close" node="button" waves="green">
            No, don't delete.
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header="Delete Post"
        id="Modal-0"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button
            className="red closeButton"
            floating
            icon={<Icon>close</Icon>}
            node="button"
            waves="light"
          />
        }
      >
        <p>
          You can't undo this operation in future. Are you really sure to delete
          this post ?
        </p>
      </Modal>
    </div>
  )
}

export default DeletePost
