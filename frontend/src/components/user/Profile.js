import React, { useContext } from "react"
import { Card, Col, Icon, Row } from "react-materialize"
import { AuthContext } from "../../context/AuthContext"
import { PostContext } from "../../context/PostContext"
import PostObject from "../posts/PostObject"

const Profile = ({
  match: {
    params: { id },
  },
}) => {
  const { allUsers, user: currentUser } = useContext(AuthContext)
  const { posts } = useContext(PostContext)

  let user = allUsers.find((aUser) => aUser._id === id)

  if (!user) {
    return (
      <div>
        <h3 className="center">There are no user with this id!</h3>
      </div>
    )
  }

  const userPosts = posts.filter((post) => post.author._id === id)

  const UserHavePosts = () => (
    <>
      <h4 className="center">User's Posts</h4>
      {userPosts.map((post) => (
        <PostObject
          key={post._id}
          post={post}
          user={currentUser && currentUser._id}
        />
      ))}
    </>
  )

  const UserDoesntHavePosts = () => (
    <>
      <h4 className="center">User Doesn't have any posts yet.</h4>
      {}
    </>
  )

  return (
    <>
      <Row>
        <Col s={12}>
          <Card
            key={1}
            className="white profileCard"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            title={user.fullname}
          >
            <div className="col s2 profileimg">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="ProfileImage"
                className="circle responsive-img"
              />
            </div>
            {user.about ? (
              <p>{user.about}</p>
            ) : (
              <p>
                User doesn't have any information about himself/herself yet.
              </p>
            )}
            <div className="godown"></div>
            <hr />
            {userPosts.length > 0 ? <UserHavePosts /> : <UserDoesntHavePosts />}
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Profile
