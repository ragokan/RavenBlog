import React, { useContext } from "react"
import { Card, Col, Icon, Row } from "react-materialize"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { PostContext } from "../../context/PostContext"
import PostObject from "../posts/PostObject"

let defaultimg =
  "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png"

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
      {user && currentUser && user._id === currentUser._id ? (
        <div className="center">
          <h4>You don't have any posts yet.</h4>
          <h5>
            {" "}
            Click <Link to="/createPost">here</Link> to add a post!
          </h5>
        </div>
      ) : (
        <h4 className="center">User doesn't have any posts yet.</h4>
      )}
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
                src={user.picture ? user.picture : defaultimg}
                alt="Profile img is not found"
                className="circle responsive-img"
              />
            </div>
            {user.about ? (
              <p>{user.about}</p>
            ) : (
              <p>
                {user && currentUser && user._id === currentUser._id ? (
                  <div>
                    You doesn't have any information about yourself yet. Click
                    <Link to="/dashboard"> here</Link> to add your information.
                  </div>
                ) : (
                  <div>
                    User doesn't have any information about himself/herself yet.
                  </div>
                )}
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
